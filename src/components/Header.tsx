import { memo } from "react";

interface HeaderProps {
  isVisible: boolean;
}

const Header = memo(({ isVisible }: HeaderProps) => {
  return (
    <header className="w-full px-6 sm:px-8 lg:px-16 py-4 sm:py-6 lg:py-8">
      <div
        className={`flex items-center transition-all duration-300 transform-gpu ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "-translate-y-8 opacity-0"
        }`}
      >
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tighter text-white">
          SubFlow
          <span className="text-blue-500 ml-0.5 animate-blink">.</span>
        </h1>
      </div>
    </header>
  );
});

Header.displayName = "Header";

export default Header; 