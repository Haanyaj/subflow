import { memo } from "react";

const Footer = memo(() => {
  return (
    <footer className="p-2 sm:p-3 text-center text-zinc-500 text-xs">
      <p>© {new Date().getFullYear()} SubFlow - Application de suivi des abonnements et dépenses</p>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer; 