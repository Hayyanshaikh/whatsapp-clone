"use client";
import React, { useState } from "react";
import Heading from "../common/heading";
import {
  Chats,
  DotsThreeVertical,
  MagnifyingGlass,
} from "@phosphor-icons/react";
import Button from "../common/button";
import Input from "../common/input";
import ChatList from "../chatComponent/ChatList";
import { chats } from "../../utils/constant";

const Sidebar: React.FC = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (newValue: string) => {
    setInputValue(newValue);
  };

  return (
    <aside className="h-full flex flex-col bg-dark md:bg-transparent">
      <div className="px-5">
        <div className="flex items-center justify-between gap-2 py-4">
          <Heading text="Chats" />
          <div className="flex items-center gap-1">
            <Button className="!p-2 rounded-full">
              <Chats size={26} className="text-icon" />
            </Button>
            <Button className="!p-2 rounded-full">
              <DotsThreeVertical size={24} weight="bold" />
            </Button>
          </div>
        </div>
        <Input
          placeholder="Search"
          icon={
            <MagnifyingGlass size={16} className="text-icon" weight="bold" />
          }
          showIcon={true}
          showClose={true}
          onValueChange={handleInputChange}
        />
      </div>
      <ChatList chats={chats} />
    </aside>
  );
};

export default Sidebar;
