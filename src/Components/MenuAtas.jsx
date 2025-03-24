import { useState } from "react";

const Navbar = () => {

  return (
    <div className="relative">
      <nav className="hidden md:flex space-x-8 font-medium dark:text-[#d4d4d4]">
        <a href="https://fatkhurrhn.vercel.app/">Home</a>
        <a href="/">Project</a>
        <a href="https://fatkhurrhn.vercel.app/certificate">Certificate</a>
        <a href="https://fatkhurrhn.vercel.app/guestbook">Guestbook</a>
        
        <a href="https://fatkhurrhn.vercel.app/creator">Creator</a>
        <a href="https://fatkhurrhn.vercel.app/store">Store</a>
        <a href="https://fatkhurrhn.vercel.app/writings">Writings</a>
      </nav>
    </div>
  );
};

export default Navbar;
