"use client";
import { Checks } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  avatar: string;
  name: string;
  message: string;
  time: string;
  isOnline?: boolean;
}

const Chat: React.FC<Props> = ({ avatar, name, message, time, isOnline }) => {
  return (
    <Link href={`/chat/${name?.replace(" ", "-")?.toLocaleLowerCase()}`}>
      <div className="flex items-start gap-4 pt-3 w-full px-5">
        <div className="relative h-[45px] aspect-square">
          <Image
            className="rounded-full overflow-hidden"
            src={avatar}
            alt="Avatar"
            height={50}
            width={50}
          />
          {isOnline && (
            <span className="absolute h-2.5 aspect-square bg-primary rounded-full bottom-0 right-0"></span>
          )}
        </div>
        <div className="flex flex-col border-b border-outline flex-1 pb-3">
          <div className="flex items-center justify-between gap-2">
            <h4 className="capitalize text-ellipsis line-clamp-1">{name}</h4>
            <span className="text-xs text-color">{time}</span>
          </div>
          <p className="flex items-center gap-1 text-sm text-color ">
            <Checks
              size={16}
              weight="bold"
              className="text-seen flex-[0_0_auto]"
            />
            <span className="text-ellipsis line-clamp-1">{message}</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Chat;
