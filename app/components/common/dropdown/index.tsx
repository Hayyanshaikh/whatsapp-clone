import Link from "next/link";
import Button from "../button";
import { Option } from "@/app/types/Option";
import { useState, useEffect, useRef } from "react";
import { DotsThreeVertical } from "@phosphor-icons/react";

interface Props {
  options: Option[];
  buttonClassName?: string;
  onSelect?: (value?: string | number, option?: Option) => void;
  optionType?: "button" | "link";
}

const Dropdown: React.FC<Props> = ({
  options = [],
  onSelect,
  buttonClassName = "",
  optionType = "button",
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const optionClass =
    "w-full block text-sm sm:text-base transition text-white/70 text-left px-5 py-2 hover:bg-menuHover";

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const handleOptionClick = (option: Option) => {
    setIsOpen(false);
    if (onSelect) {
      onSelect(option.value, option);
    }
  };

  // Close the dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative flex text-left" ref={menuRef}>
      {/* Trigger Button */}
      <Button
        onClick={toggleMenu}
        className={`!p-2 rounded-full ${buttonClassName}`}
      >
        <DotsThreeVertical className="text-xl" weight="bold" />
      </Button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-40 bg-menu rounded-sm shadow-sm z-20">
          <ul className="py-2">
            {options.map((option, index) => (
              <li key={index}>
                {optionType === "button" ? (
                  <button
                    className={optionClass}
                    onClick={() => handleOptionClick(option)}
                  >
                    {option.label}
                  </button>
                ) : (
                  <Link href={option.value as string} className={optionClass}>
                    {option.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
