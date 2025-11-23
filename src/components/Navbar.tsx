"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../components/ui/navbar-menu";
import { cn } from "../utils/cn";
import { FaDiscord, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";

export default function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <img src="./bargadmain.png" alt="" className=" top-1  w-60 h-60 -ml-375 absolute" />
      <Navbar className="top-2" />
     
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <>
     
    <div
      className={cn("fixed top-10 inset-x-0 max-w-lg mx-auto z-50 p-5 text-xl  ", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Projects">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Loan Dapp  "
              href="https://algochurn.com"
              src="https://assets.aceternity.com/demos/algochurn.webp"
              description="prepared for decentralized lending and borrowing."
            />
            <ProductItem
              title="Mentors connect"
              href="https://tailwindmasterkit.com"
              src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
              description="A platform for connecting mentors and mentee"
            />
            <ProductItem
              title="Ecommerce"
              href="https://gomoonbeam.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
              description="A clean ecommerce website for practicing Mern"
            />
            <ProductItem
              title="Rogue"
              href="https://userogue.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Contacts">
          <div className="flex flex-col space-y-4 ">
            <HoveredLink href="https://github.com/harshitneversettle"><FaGithub className="text-white text-3xl mb-1" /></HoveredLink>
            <HoveredLink href="https://x.com/Harshit_yad4v"><FaTwitter className="text-white text-3xl  mb-1" /></HoveredLink>
            <HoveredLink href="https://leetcode.com/u/titan1104/"><SiLeetcode className="text-white text-3xl  mb-1" /></HoveredLink>
            <HoveredLink href="https://www.linkedin.com/in/harshit-yadav-harshit/"><FaLinkedin  className="text-white text-3xl  mb-1" /></HoveredLink>
            <HoveredLink href="https://discord.com/harshit_yad4v"><FaDiscord  className="text-white text-3xl  mb-1"/></HoveredLink>

          </div>
        </MenuItem>
      </Menu>
    </div>
    </>
  );
}
