import React from "react";

const ChatBody = () => {
  const wallpaper =
    "before:content-[''] before:bg-[url('https://static.whatsapp.net/rsrc.php/v4/yl/r/gi_DckOUM5a.png')] before:bg-[length:400px] before:bg-[center_center] before:w-full before:h-full before:absolute before:opacity-10";

  return <div className={`${wallpaper} flex-1 bg-chat relative`}></div>;
};

export default ChatBody;
