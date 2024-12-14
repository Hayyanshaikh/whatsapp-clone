import React, { act, useState } from "react";
import { TabItemType } from "../../../types/TabItemTypes";

// Props Types
interface Props {
  className?: string;
  tabsClassName?: string;
  childrenClassName?: string;
  items: TabItemType[];
}

const Tabs: React.FC<Props> = ({
  items,
  className,
  tabsClassName,
  childrenClassName,
}) => {
  // active tab state
  const [activeTab, setActiveTab] = useState<string | number>(items[0]?.key);

  // Tab active function
  const handleTabClick = (key: string | number) => {
    setActiveTab(key);
  };

  console.log({ activeTab });
  return (
    <div className={`${className ? className : ""} flex flex-col gap-1 w-full`}>
      <div
        className={`${
          tabsClassName ? tabsClassName : ""
        } flex items-center gap-2 flex-wrap`}
      >
        {items.map((item: TabItemType, index: number) => (
          <button
            onClick={() => handleTabClick(item?.key)}
            key={index}
            className={`text-sm py-1 px-3 rounded-full ${
              item.key === activeTab
                ? "bg-primarylight text-primary"
                : "bg-light text-color"
            }`}
          >
            <h2>{item.title}</h2>
          </button>
        ))}
      </div>
      {items?.map(
        (item, index) =>
          item.key === activeTab && (
            <div
              className={`${childrenClassName ? childrenClassName : ""}`}
              key={index}
            >
              {item.children}
            </div>
          )
      )}
    </div>
  );
};

export default Tabs;
