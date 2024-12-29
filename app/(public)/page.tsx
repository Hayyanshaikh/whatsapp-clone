"use client";
import Image from "next/image";
import React from "react";
import Sidebar from "../components/sidebar";
import HomeImageSvg from "../images/HomeImage.png";

const Home: React.FC = () => {
  return (
    <>
      <div className="block md:hidden">
        <Sidebar />
      </div>
      <div className="hidden md:flex flex-col items-center justify-center gap-4 h-screen p-10">
        <Image
          src={HomeImageSvg}
          alt="Home logo"
          objectFit="contain"
          height={220}
          className="mb-5"
        />
        <h2 className="text-4xl font-light text-white font-helvetica">
          WhatsApp Web
        </h2>
        <p className="text-sm text-color text-center">
          Send and receive messages without keeping your phone online. <br />
          Use WhatsApp on up to 4 linked devices and 1 phone at the same time.
        </p>
      </div>
    </>
  );
};

export default Home;
