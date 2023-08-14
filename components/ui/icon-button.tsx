import { cn } from "@/lib/utils";
import { MouseEventHandler } from "react";

interface IconButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  icon: React.ReactElement;
  className?: string;
}

const IconButton: React.FC<IconButtonProps> = ({
  onClick,
  className,
  icon,
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center justify-center bg-white rounded-full border shadow-md p-2 text-black hover:scale-110 transition",
        className,
      )}
    >
      {icon}
    </button>
  );
};

export default IconButton;
