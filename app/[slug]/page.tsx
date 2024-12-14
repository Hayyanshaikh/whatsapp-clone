"use client";
import React from "react";
import { useParams } from "next/navigation";

const Messages = () => {
  const { slug } = useParams();

  return <div>Messages: {slug}</div>;
};

export default Messages;
