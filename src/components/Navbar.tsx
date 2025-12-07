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
      <img 
        src="./bargadmain.png" 
        alt="Bargad tree" 
        className="hidden lg:block top-0 left-0 w-60 h-60 text-left absolute" 
      />
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <>
      <div
        className={cn("fixed top-10 inset-x-0 max-w-lg mx-auto z-50 p-5 text-xl", className)}
      >
        <Menu setActive={setActive}>
          <MenuItem setActive={setActive} active={active} item="Emails">
            <div className="flex flex-col space-y-4 text-md">
              <HoveredLink href="#">harshityadav5499@gmail.com</HoveredLink>
              <HoveredLink href="#">harshityadav.mits@gmail.com</HoveredLink>
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Projects">
            <div className="text-sm grid grid-cols-2 gap-10 p-4">
              <ProductItem
                title="Loan Dapp"
                href="https://github.com/harshitneversettle/Capstone_harshit"
                src="https://assets.aceternity.com/demos/algochurn.webp"
                description="prepared for decentralized lending and borrowing."
              />
              <ProductItem
                title="Mentors connect"
                href="https://github.com/harshitneversettle/Mentors_connect"
                src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                description="A platform for connecting mentors and mentee"
              />
              <ProductItem
                title="Ecommerce"
                href="https://github.com/harshitneversettle/Seven-spices"
                src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                description="A clean ecommerce website for practicing Mern"
              />
              <ProductItem
                title="Moodle Automation"
                href="https://github.com/harshitneversettle/Moodle-automation"
                src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
                description="An automated Moodle quiz system that scrapes questions and options, intelligently queries an AI model, and returns accurate responses in real-time."
              />
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Contacts">
            <div className="flex flex-col space-y-4">
              <HoveredLink href="https://github.com/harshitneversettle">
                <FaGithub className="text-white text-3xl mb-1" />
              </HoveredLink>
              <HoveredLink href="https://x.com/Harshit_yad4v">
                <FaTwitter className="text-white text-3xl mb-1" />
              </HoveredLink>
              <HoveredLink href="https://leetcode.com/u/titan1104/">
                <SiLeetcode className="text-white text-3xl mb-1" />
              </HoveredLink>
              <HoveredLink href="https://www.linkedin.com/in/harshit-yadav-harshit/">
                <FaLinkedin className="text-white text-3xl mb-1" />
              </HoveredLink>
              <HoveredLink href="https://discord.com/harshit_yad4v">
                <FaDiscord className="text-white text-3xl mb-1" />
              </HoveredLink>
            </div>
          </MenuItem>
        </Menu>
      </div>
    </>
  );
}
