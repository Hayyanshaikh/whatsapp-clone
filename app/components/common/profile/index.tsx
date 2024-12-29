import Image from "next/image";
import React from "react";

// Props Type
interface Props {
  src: string;
  alt: string;
  name?: string;
  size?: number;
  isOnline: boolean;
  isOnlineSize?: number;
}

const Profile: React.FC<Props> = ({
  src,
  name,
  size = 50,
  isOnlineSize,
  alt = "Avatar",
  isOnline = false,
}) => {
  return (
    <div className="flex gap-4 items-center">
      <div className="relative" style={{ height: size, width: size }}>
        <Image
          className="rounded-full overflow-hidden"
          src={src}
          alt={alt}
          width={size}
          height={size}
        />

        {isOnline && (
          <span
            style={{
              height: isOnlineSize || `calc(${size}px - 75%)`,
            }}
            className={`absolute border-2 border-dark aspect-square bg-primary rounded-full bottom-0 right-0`}
          ></span>
        )}
      </div>
      {name && <span className="text-base">{name}</span>}
    </div>
  );
};

export default Profile;
