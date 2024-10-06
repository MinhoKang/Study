"use client";

import { Chat, Input, SignUp } from "@/components";
import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:3001");

interface ChatMessage {
  content: string;
  type: string;
}

export default function Home() {
  const user = useRef(null);

  const [input, setInput] = useState("");
  const [typing, setTyping] = useState([]);
  const [chat, setChat] = useState<ChatMessage[]>([]);

  useEffect(() => {
    socket.on("recieve_msg", (msg) => {
      setChat((prev) => [...prev, msg]);
    });

    socket.on("user_typing", (data) => {
      if (!user.current) return;
      setTyping((prev) => {
        if (typing.includes(data.user) && data.typing === true) return prev;

        if (data.typing === false) {
          return prev.filter((user) => user !== data.user);
        } else {
          return [...prev, data.user];
        }
      });
    });

    socket.on("new_user", (newUser) => {
      if (!user.current) return;
      setChat((prev) => [
        ...prev,
        { content: `${newUser} joined`, type: "server" },
      ]);
    });

    return () => {
      socket.off("recieve_msg");
      socket.off("new_user");
      socket.off("user_typing");
    };
  });

  console.log(typing);

  return (
    <div className="h-screen max-h-screen max-w-screen mx-auto md:container md:p-20 md:pt-4">
      {user.current ? (
        <>
          <Chat chat={chat} user={user.current} typing={typing} />
          <Input setChat={setChat} user={user.current} socket={socket} />
        </>
      ) : (
        <SignUp user={user} socket={socket} input={input} setInput={setInput} />
      )}
    </div>
  );
}
