"use client";

import { new_user } from "@/assets";
import Image from "next/image";
import { useEffect, useRef } from "react";

export const Chat = ({ chat, user, typing }) => {
  const scroller = useRef(null);

  useEffect(() => {
    if (!scroller.current) return;

    scroller.current.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  }, [chat]);

  return (
    <div className="h-full pb-12 md:p-4">
      <div className="w-full h-full max-h-screen rounded-md overflow-y-auto gradient pt-2 md:pt-6">
        {chat.map((msg, index) => {
          const message = { ...msg, own: msg.user?.id === user.id };
          return message.type === "server" ? (
            <ServerMessage key={index} {...message} />
          ) : (
            <Message key={index} content={msg} {...message} type={msg.type} />
          );
        })}
        {typing[0] && <Typing user={typing[0]} />}
        <div ref={scroller} className="pb-2 md:pb-6" />
      </div>
    </div>
  );
};

const Typing = ({ user }) => {
  return (
    <div className="px-1 md:px-6 py-1 flex">
      <span className="logo text-2xl bg-blue-600 text-white rounded-full py-2 my-auto text-center px-4 mr-2 flex items-center">
        {user?.charAt(0).toUpperCase()}
      </span>
      <div className="loader bg-slate-300 rounded-2xl p-5">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

const Message = ({ content, own, type, user }) => {
  console.log(user);
  return (
    <p className={`message px-6 py-1 flex ${own && "justify-end"}`}>
      {!own && (
        <span className="logo text-2xl bg-blue-600 text-white rounded-full py-2 my-auto text-center px-4 mr-2 flex items-center">
          {user?.name.charAt(0).toUpperCase()}
        </span>
      )}
      <span
        className={`text-3xl px-6 py-1 rounded-xl ${
          own ? "bg-sky-400 text-white" : "bg-slate-300"
        } ${type === "text" ? "px-6" : "px-2"}`}
      >
        {type === "text" ? (
          content
        ) : (
          <Image
            src={content}
            className="rounded-md"
            alt="image"
            width={100}
            height={100}
          />
        )}
      </span>
    </p>
  );
};

const ServerMessage = ({ content, own, type }) => {
  return (
    <p className="px-1 md:px-6 py-1 flex">
      <span className="text-xl md:text-3xl text-white flex bg-transparent">
        <Image src={new_user} className="max-w-8 md:w-8 mx-2" alt="new user" />
        {content}
      </span>
    </p>
  );
};
