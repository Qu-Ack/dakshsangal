"use client";

import { useState } from "react";
import Link from "next/link";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center pt-16 pl-32 pr-32 sm:px-4 sm:pt-4">
      <Link href="/" className="text-3xl">
        dakshsangal
      </Link>
      <div className="hidden md:flex gap-16 text-xl">
        <ul className="flex gap-16">
          <li>
            <Link href="/about">about me</Link>
          </li>
          <li>
            <Link href="/resume">resume</Link>
          </li>
        </ul>
      </div>
      <div className="md:hidden flex items-center">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <XIcon className="h-8 w-8 text-black" />
          ) : (
            <MenuIcon className="h-8 w-8 text-black" />
          )}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center z-50">
          <button
            className="absolute top-4 right-4"
            onClick={() => setIsOpen(false)}
          >
            <XIcon className="h-8 w-8 text-black" />
          </button>
          <ul className="flex flex-col items-center gap-8 text-xl">
            <li>
              <Link href="/" onClick={() => setIsOpen(false)}>
                home
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={() => setIsOpen(false)}>
                about me
              </Link>
            </li>
            <li>
              <Link href="/resume" onClick={() => setIsOpen(false)}>
                resume
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
