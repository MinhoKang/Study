"use client";

import Image from "next/image";
import { send, upload } from "@/assets";
import { ChangeEvent, useRef, useState } from "react";

export const Input = ({ setChat, user, socket }) => {
  const [input, setInput] = useState("");

  const uploadInput = useRef(null);

  const sendMessage = () => {
    if (input) {
      const msg = { content: input, type: "text", user };
      socket.emit("send_msg", msg);
      socket.emit("user_typing", { user: user.name, typing: false });
      setChat((prev) => [...prev, msg]);
      setInput("");
    } else {
      uploadInput.current?.click();
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file.type === "image/jpeg" || file.type === "image/png") {
      const img = URL.createObjectURL(file);
      const msg = { content: img, type: "image", user };
      setChat((prev) => [...prev, msg]);
      socket.emit("send_msg", msg);
    }
  };

  const userTyping = (e) => {
    setInput(e.target.value);
    socket.emit("user_typing", {
      user: user.name,
      typing: e.target.value ? true : false,
    });
  };

  return (
    <div className="w-full absolute bottom-0 text-xl grid grid-cols-5 gradient md:bg-none md:text-3xl md:flex md:justify-center md:relative">
      <input
        className="focus:outline-none rounded-2xl p-3 text-white placeholder-slate-200 col-span-4 gradient md:w-6/12 md:mr-3"
        type="text"
        placeholder="Enter your message"
        value={input}
        onChange={(e) => userTyping(e)}
        onKeyDown={(e) => e.key === "Enter" && sendMessage()}
      />
      <input
        type="file"
        className="hidden"
        ref={uploadInput}
        onChange={(e) => handleImageUpload(e)}
      />
      <button
        onClick={sendMessage}
        className="w-full py-2 px-3 bg-sky-400 text-white font-fold rounded-md text-xl gradient md:w-1/12 md:text-2xl"
      >
        <Image
          src={input ? send : upload}
          className="w-6 md:w-12 mx-auto"
          alt="send"
          height={20}
          width={20}
        />
      </button>
    </div>
  );
};
