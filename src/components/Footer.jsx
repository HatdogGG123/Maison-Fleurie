import React from "react";
import { Link } from "react-router-dom";
import footerBgImage from "../assets/footer-bg-image.webp";
import FullWidthLayout from "./layout/FullWidthLayout";
import Button from "./ui/Button";

const Footer = () => {
  return (
    <FullWidthLayout
      inlineStyle={{
        background: `linear-gradient(180deg, rgba(220,217,216,1) 0%, rgba(220,217,216,0.05) 19%, rgba(220,217,216,0.1) 100%), 
                     linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), 
                     url(${footerBgImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <section className="w-full h-full flex flex-col justify-end p-5 gap-5 text-white font-body">
        {/* <section className="w-fit">
          <Link to={"/bookEvent"}>
            <Button
              text="Book an Event"
              additionalStyle="bg-secondary px-10 py-3"
            />
          </Link>
        </section> */}

        <section className="flex flex-col gap-10 justify-between md:flex-row lg:justify-start">
          <section className="flex flex-col gap-2">
            <p className="text-2xl mb-2 lg:mb-5">Contacts</p>
            <p className="text-md lg:text-xl mb-2 lg:mb-5">
              128 Rosewood Avenue, Greenfield Village,
              <br /> Dasmariñas, Cavite, Philippines 4114
            </p>
            <p className="text-md lg:text-xl">maisonfleurie@gmail.com</p>
            <p className="text-md lg:text-xl">+63 912837482</p>
          </section>

          <section className="flex flex-col gap-2">
            <p className="text-2xl mb-2 lg:mb-5">Pages</p>
            <Link to={"/"} className="text-md lg:text-xl w-fit">
              Home
            </Link>
            <Link to={"/flowers"} className="text-md lg:text-xl w-fit">
              Flowers
            </Link>
            <Link to={"/about"} className="text-md lg:text-xl w-fit">
              About us
            </Link>
            <Link to={"/contact"} className="text-md lg:text-xl w-fit">
              Contact us
            </Link>
          </section>
        </section>

        <section>
          <p
            className="whitespace-nowrap leading-none text-center font-heading"
            style={{ fontSize: "15cqw" }}
          >
            Maison Fleurie
          </p>
        </section>

        <div className="h-0.5 w-full bg-gray/50"></div>

        <section className="flex justify-between gap-6 flex-col md:gap-20 md:flex-row">
          <Link>Terms & Conditions</Link>
          <p className="text-start">
            &copy; 2026 Maison Fleurie. Created by Renzo Tolentino as a project.
            All rights reserved.
          </p>
          <Link>Privacy Policy</Link>
        </section>
      </section>
    </FullWidthLayout>
  );
};

export default Footer;
