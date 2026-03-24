"use client";
import { Calendar } from "lucide-react";
import Link from "next/link";

export function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-[#00A86B]">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">
              Tekknopolis
            </span>
          </div>

          {/* Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="#events"
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
            >
              Events
            </Link>
            <Link
              href="#about"
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
            >
              About
            </Link>
            <Link
              href="#contact"
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Button */}
          <button
            aria-label="button"
            className="px-6 py-2 rounded-lg font-semibold text-white bg-[#00A86B] hover:bg-[#008557] active:scale-95 transition-all duration-200"
          >
            Sign In
          </button>

        </div>
      </div>
    </header>
  );
}