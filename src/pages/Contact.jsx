import React from "react";
import contactImage from "../assets/contact-image-1.jpg";
import ContactForm from "../components/contact/ContactForm";
import FullWidthLayout from "../components/layout/FullWidthLayout";
import Hero from "../components/contact/Hero";

const Contact = () => {
  return (
    <>
      <Hero />
      <FullWidthLayout additionalStyle="grid grid-cols-1 grid-rows-2 mb-50 md:grid-cols-2 md:grid-rows-1">
        <section className="overflow-hidden h-full w-full bg-red-100">
          <img
            src={contactImage}
            alt="Image of the Owner and Staff handling Emails"
            className="w-full h-full object-cover"
          />
        </section>

        <ContactForm />
      </FullWidthLayout>
    </>
  );
};

export default Contact;
