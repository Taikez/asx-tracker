"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import ModeToggle from "./mode-toggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="
        sticky top-0 z-50
        backdrop-blur-md
        bg-white/80 dark:bg-zinc-950/80
        border-b border-zinc-200 dark:border-zinc-800
      "
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Top bar */}
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="
              text-lg font-semibold tracking-tight
              text-blue-700 dark:text-blue-400
              hover:opacity-80 transition
            "
          >
            ASX Tracker
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6 text-sm">
            <Link
              href="/"
              className="text-zinc-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              Companies
            </Link>
            <Link
              href="/industries"
              className="text-zinc-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              Industries
            </Link>
            <Link
              href="/about"
              className="text-zinc-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              About
            </Link>
          </div>

          {/* Desktop theme toggle */}

          <div className="hidden md:flex">
            <ModeToggle />
          </div>

          {/* Mobile actions */}
          <div className="flex md:hidden items-center gap-2">
            <ModeToggle />
            <button
              onClick={() => setOpen(!open)}
              className="
                rounded-lg p-2
                text-zinc-700 dark:text-zinc-300
                hover:bg-zinc-100 dark:hover:bg-zinc-800
                transition
              "
              aria-label="Toggle menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div
            className="
              md:hidden
              border-t border-zinc-200 dark:border-zinc-800
              py-4 space-y-3
            "
          >
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="block px-2 text-zinc-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              Companies
            </Link>
            <Link
              href="/industries"
              onClick={() => setOpen(false)}
              className="block px-2 text-zinc-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              Industries
            </Link>
            <Link
              href="/about"
              onClick={() => setOpen(false)}
              className="block px-2 text-zinc-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              About
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
