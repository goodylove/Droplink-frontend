import React from "react";

function Footer() {
  return (
    <footer className="w-full text-center text-sm  font-serif py-8 bg-background text-text  mt-12 border-t border-[#333]">
      <p>&copy; {new Date().getFullYear()} DropLink. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
