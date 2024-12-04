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

const Sidebar = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (newValue) => {
    setInputValue(newValue);
  };
  return (
    <aside className=" h-full">
      <div className="flex items-center justify-between gap-2 px-5 py-4">
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
      <div className="px-5">
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
    </aside>
  );
};

export default Sidebar;
