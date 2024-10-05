export const Chat = ({ chat, user }) => {
  return (
    <div className="h-full pb-12 md:p-4">
      <div className="w-full h-full max-h-screen rounded-md overflow-y-auto gradient pt-2 md:pt-6">
        {chat.map((msg, index) => {
          const message = { ...msg, own: msg.user === user };
          return <Message key={index} content={msg} {...message} />;
        })}
      </div>
    </div>
  );
};

const Message = ({ content, own }) => {
  return (
    <p className={`px-6 py-1 flex ${own && "justify-end"}`}>
      <span
        className={`text-3xl px-6 py-1 rounded-xl ${
          own ? "bg-sky-400 text-white" : "bg-slate-300"
        }`}
      >
        {content}
      </span>
    </p>
  );
};
