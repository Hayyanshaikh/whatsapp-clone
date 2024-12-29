import React, { useState } from "react";
import Chat from "./Chat";
import { ChatTypes } from "../../types/ChatTypes";

const ChatList: React.FC<{ chats: ChatTypes[] }> = ({ chats }) => {
  return (
    <div className="overflow-auto scrollbar h-full mt-2">
      {chats.map((chat, index) => (
        <Chat
          key={index}
          avatar={chat.avatar}
          name={chat.name}
          message={chat.lastMessage}
          time={chat.lastMessageTime}
          isOnline={chat.isOnline}
        />
      ))}
    </div>
  );
};

export default ChatList;
