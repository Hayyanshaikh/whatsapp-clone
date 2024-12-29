import React from "react";
import Button from "../common/button";
import Profile from "../common/profile";
import { useRouter } from "next/navigation";
import Dropdown from "../common/dropdown";
import { ChatMenu } from "@/app/utils/constant";
import { ArrowLeft } from "@phosphor-icons/react";

// Define Props Type for ChatHeader
interface ChatHeaderProps {
  name: string;
  profileSrc: string;
  isOnline: boolean;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({
  name,
  profileSrc,
  isOnline,
}) => {
  const router = useRouter();

  const handleOptionSelect = (value: string) => {
    console.log("Selected Option:", value);
  };

  return (
    <div className="bg-light p-4 flex items-center justify-between gap-3">
      <div className="flex items-center gap-2">
        <Button
          onClick={() => router.back()}
          className="!p-0 hover:!bg-transparent md:!hidden !block"
        >
          <ArrowLeft className="text-lg" weight="bold" />
        </Button>
        <Profile
          size={36}
          isOnline={isOnline}
          name={name}
          isOnlineSize={10}
          alt="Profile Photo"
          src={profileSrc}
        />
      </div>

      {/* Dropdown */}
      <Dropdown
        optionType="link"
        options={ChatMenu}
        onSelect={handleOptionSelect}
      />
    </div>
  );
};

export default ChatHeader;
