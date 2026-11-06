import { Link } from "react-router-dom";
import { Menu, MoveRight, X } from "lucide-react";
import { useState } from "react";
import FullWidthLayout from "./layout/FullWidthLayout";
import Button from "./ui/Button";

const Navbar = ({ additionalStyle = "" }) => {
  const navLinks = [
    { text: "Home", url: "/" },
    { text: "Flowers", url: "/flowers" },
    { text: "About us", url: "/about" },
    { text: "Contact", url: "/contact" },
  ];

  const [isNavVisible, setNavVisibility] = useState(false);

  function toggleNavVisibility() {
    setNavVisibility((prev) => !prev);
  }

  return (
    <nav
      className={`relative flex justify-end items-center p-5 pt-10 text-white gap-40 h-auto lg:justify-center ${additionalStyle}`}
    >
      {navLinks.map((link, index) => (
        <Link
          to={link.url}
          key={index}
          className="font-body text-lg hidden lg:inline"
        >
          {link.text}
        </Link>
      ))}

      <section className="lg:hidden">
        <button className="cursor-pointer " onClick={toggleNavVisibility}>
          <Menu className="size-7 md:size-8" strokeWidth={1} />
        </button>
      </section>

      {isNavVisible && (
        <FullWidthLayout additionalStyle="fixed top-0 left-0 z-100 bg-black/40 flex justify-end">
          <section className="flex flex-col w-2/3 bg-white h-full p-3 md:w-1/2 lg:w-1/4">
            <Button
              leadingIcon={<X strokeWidth={1} />}
              onClick={toggleNavVisibility}
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
                  <MoveRight />
                </Link>
              ))}
            </nav>
          </section>
        </FullWidthLayout>
      )}
    </nav>
  );
};

export default Navbar;
