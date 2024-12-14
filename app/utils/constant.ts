import { ChatTypes } from "../types/ChatTypes";

export const chats: ChatTypes[] = [
  {
    id: "1",
    name: "Ali Ahmed",
    lastMessage:
      "Hey Ali! Tumse ek important baat karni thi. Kya kal dinner ke baad time milega?",
    lastMessageTime: "9:15 PM",
    isOnline: true,
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    type: ["friends", "work"],
  },
  {
    id: "2",
    name: "Sara Khan",
    lastMessage:
      "Good evening Sara! Kal ki meeting ke agenda ke baare mein baat karni thi. Time ho toh bata dena.",
    lastMessageTime: "8:45 PM",
    isOnline: false,
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    type: ["Work"],
  },
  {
    id: "3",
    name: "Omer Javed",
    lastMessage:
      "Omer, kal raat ko movie plan karte hain. Mujhe ek nayi movie dekhni hai jo recently release hui hai.",
    lastMessageTime: "7:30 PM",
    isOnline: true,
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    type: ["Work", "Favorite"],
  },
  {
    id: "4",
    name: "Hina Malik",
    lastMessage:
      "Hey Hina! Woh project jo tumhare help se complete hua tha, uska final presentation approve ho gaya hai. Thanks a lot!",
    lastMessageTime: "6:15 PM",
    isOnline: false,
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    type: ["Friends"],
  },
];

export const tabs = ["Friends", "Work", "Favorite"];
