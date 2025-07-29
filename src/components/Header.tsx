import { memo } from "react";

interface HeaderProps {
  isVisible: boolean;
}

const Header = memo(({ isVisible }: HeaderProps) => {
  return (
    <header className="absolute top-2 left-2 sm:top-6 sm:left-6 lg:top-8 lg:left-8 z-10">
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