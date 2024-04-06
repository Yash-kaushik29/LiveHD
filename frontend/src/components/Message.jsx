import React from "react";

const Message = ({ messages }) => {
  return (
    <div>
      <div className="text-lg mb-3 px-1">In call messages:</div>
      {messages &&
        messages.map((message, index) => (
          <div key={index} className="my-1 px-1">
            {/* Added marginBottom for spacing */}
            <span className="w-[300px] h-auto text-lg font-semibold">{message.user.name}: </span>
            <span className="w-[300px] h-auto ">{message.msg}</span>
          </div>
        ))}
    </div>
  );
};

export default Message;
