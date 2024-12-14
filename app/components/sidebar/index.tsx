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
import Tabs from "../common/tabs";
import ChatList from "../chatComponent/ChatList";
import { chats, tabs } from "../../utils/constant";

const Sidebar: React.FC = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (newValue: string) => {
    setInputValue(newValue);
  };

  const items = tabs.map((tab: string, index: number) => ({
    title: tab,
    key: index,
    children: <ChatList chats={chats} />,
  }));

  return (
    <aside className=" h-full">
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
      <div className="flex items-center gpa-2 mt-2 w-full">
        <Tabs tabsClassName="px-5" items={items} />
      </div>
    </aside>
  );
};

export default Sidebar;
