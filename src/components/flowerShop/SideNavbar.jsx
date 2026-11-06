import React from "react";
import { Link } from "react-router-dom";
import { MoveRight, X } from "lucide-react";
import FullWidthLayout from "../layout/FullWidthLayout";
import Button from "../ui/Button";

const SideNavbar = ({ onToggle }) => {
  const navLinks = [
    { text: "Home", url: "/" },
    { text: "Flowers", url: "/flowers" },
    { text: "About us", url: "/about" },
    { text: "Contact", url: "/contact" },
  ];
  return (
    <FullWidthLayout additionalStyle="fixed top-0 left-0 z-100 bg-black/40 flex justify-end">
      <section className="flex flex-col w-[90%] bg-white h-full p-3 md:w-1/2 lg:w-1/4">
        <Button
          leadingIcon={<X strokeWidth={1} />}
          onClick={onToggle}
          additionalStyle="w-fit aspect-square p-2 bg-gray self-end"
        />
        <nav className="flex flex-col w-full bg-white h-full">
          {navLinks.map((link, index) => (
            <Link
              to={link.url}
              key={index}
              className="font-body text-lg text-black flex justify-between items-center gap-5 p-3"
            >
              <p>{link.text}</p>
              <MoveRight strokeWidth={1} />
            </Link>
          ))}
        </nav>
      </section>
    </FullWidthLayout>
  );
};

export default SideNavbar;
