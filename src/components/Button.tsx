import React, { useState } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ElementType;
  size?: "sm" | "md" | "lg";
  text: string;
  minWidth?: string;
  showCheckbox?: boolean;
  color?: string;
  onStateChange?: (state: { checked: boolean }) => void; // NOVA PROP
}

const Button = ({
  size = "md",
  color = "#9A238B",
  type = "button",
  showCheckbox = false,
  onClick,
  onStateChange,
  ...props
}: ButtonProps) => {
  const [checked, setChecked] = useState(false);
  
  const sizeStyles = {
    sm: "px-3 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const toggleChecked = () => {
    setChecked((prev) => {
      const newValue = !prev;
      if (onStateChange) {
        onStateChange({ checked: newValue });
      }
      return newValue;
    });
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if ((e.target as HTMLElement).tagName.toLowerCase() === "input") {
      if (onClick) onClick(e);
      return;
    }
    
    if (showCheckbox) {
      toggleChecked();
    }
    
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <button
      type={type}
      onClick={handleClick}
      className={`
        ${props.className || ""}
        ${props.disabled ? "opacity-60 cursor-not-allowed" : "hover:scale-102 active:scale-98"}
        flex items-center justify-center gap-2 text-white ${sizeStyles[size]} 
        font-semibold rounded-lg 
        shadow-md transition-transform transform 
        cursor-pointer min-w-max w-full
        disabled:cursor-default
      `}
      style={{
        backgroundColor: color,
        minWidth: props.minWidth || "auto",
      }}
      disabled={props.disabled}
    >
      {props.icon && <span className="icon">{React.createElement(props.icon)}</span>}
      {props.text}
      {showCheckbox && (
        <label className="relative flex items-center cursor-pointer ml-2 pointer-events-none">
          <input
            type="checkbox"
            checked={checked}
            onChange={toggleChecked}
            className="absolute opacity-0 w-5 h-5 cursor-pointer pointer-events-none"
          />
          <span
            className={`
              w-5 h-5 border border-white rounded-sm
              flex items-center justify-center
              bg-[#9A238B]
              transition-colors
              pointer-events-none
            `}
          >
            {checked && (
              <svg
                className="w-4 h-4 text-white pointer-events-none"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="M5 13l4 4L19 7"
                  className="pointer-events-none"
                />
              </svg>
            )}
          </span>
        </label>
      )}
    </button>
  );
};

export default Button;
