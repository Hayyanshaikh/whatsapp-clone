"use client";
import React from "react";
import { useParams } from "next/navigation";
import ChatHeader from "@/app/components/ChatScreen/ChatHeader";
import ChatBody from "@/app/components/ChatScreen/ChatBody";
import ChatFooter from "@/app/components/ChatScreen/ChatFooter";

const ChatScreen = () => {
  const { slug }: { slug: string } = useParams();

  return (
    <div className="flex flex-col h-full">
      <ChatHeader
        isOnline={true}
        name={slug?.replace("-", " ") || ""}
        profileSrc="https://randomuser.me/api/portraits/men/21.jpg"
      />
      <ChatBody />
      <ChatFooter />
    </div>
  );
};

export default ChatScreen;
