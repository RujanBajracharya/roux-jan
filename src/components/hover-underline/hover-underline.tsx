import React from "react";

interface UnderlineHoverProps {
  children: React.ReactNode;
  className?: string;
}

const UnderlineHover: React.FC<UnderlineHoverProps> = ({ children, className = "" }) => {
  return (
    <span className={`relative inline-block cursor-pointer group ${className}`}>
      {children}
      {/* Underline effect */}
      <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-light-primary transition-all duration-300 ease-out group-hover:w-full rounded-2xl"></span>
    </span>
  );
};

export default UnderlineHover;
