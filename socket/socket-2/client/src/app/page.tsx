"use client";

import { Chat, Input, SignUp } from "@/components";
import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:3001");

export default function Home() {
  const user = useRef("qe");

  const [chat, setChat] = useState([]);

  console.log(chat);

  useEffect(() => {
    socket.on("recieve_msg", (msg) => {
      console.log(msg);
      setChat((prev) => [...prev, msg]);
    });

    return () => {
      socket.off("recieve_msg");
    };
  });
  return (
    <div className="h-screen max-h-screen max-w-screen mx-auto md:container md:p-20 md:pt-4">
      {user.current ? (
        <>
          <Chat chat={chat} user={user.current} />
          <Input setChat={setChat} user={user.current} socket={socket} />
        </>
      ) : (
        <SignUp />
      )}
    </div>
  );
}
