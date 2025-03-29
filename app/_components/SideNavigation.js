"use client";

import Link from "next/link";
import {
  CalendarDaysIcon,
  HomeIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import SignOutButton from "./SignOutButton";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/account", icon: HomeIcon },
  {
    name: "Reservations",
    href: "/account/reservations",
    icon: CalendarDaysIcon,
  },
  { name: "My profile", href: "/account/profile", icon: UserIcon },
];

function SideNavigation() {
  const pathname = usePathname();

  return (
    <nav className="border-r border-primary-900 p-2 w-12 sm:w-16 ">
      <ul className="flex flex-col  items-center justify-center gap-4 mt-4 h-full">
        {navLinks.map((link) => (
          <li key={link.name} className="relative group ">
            <Link
              href={link.href}
              className={`p-2 sm:p-3 rounded-full hover:bg-primary-800 transition-colors flex items-center justify-center  ${
                pathname === link.href
                  ? "bg-primary-900 text-primary-100"
                  : "text-primary-600"
              }`}
            >
              <link.icon className="h-6 w-6" />
            </Link>

            <span className="absolute left-8 top-1/4 -translate-y-1/2 bg-gray-900 text-white     text-xs sm:text-sm px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50">
              {link.name}
            </span>
          </li>
        ))}

        <li className="mt-auto">
          <SignOutButton />
        </li>
      </ul>
    </nav>
  );
}

export default SideNavigation;
