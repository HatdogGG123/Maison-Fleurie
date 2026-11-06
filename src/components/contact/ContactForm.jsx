import React from "react";
import { useForm } from "react-hook-form";
import ClipWidthLayout from "../layout/ClipWidthLayout";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Contact form data:", data);
    reset();
  };

  return (
    <ClipWidthLayout additionalStyle="flex flex-col justify-start gap-6 bg-gray p-8 font-body md:justify-center">
      <h2 className="font-heading text-4xl">Get in touch with us</h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="flex flex-col gap-4"
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="firstName" className="text-sm">
            First Name
          </label>
          <input
            id="firstName"
            type="text"
            className={`w-full border bg-transparent p-2 outline-none ${
              errors.firstName ? "border-red-700" : "border-black/60"
            }`}
            {...register("firstName", {
              validate: (value) =>
                value.trim() !== "" || "First name is required.",
              minLength: {
                value: 2,
                message: "First name must be at least 2 characters.",
              },
            })}
          />
          {errors.firstName && (
            <p className="text-sm text-red-700">{errors.firstName.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="lastName" className="text-sm">
            Last Name
          </label>
          <input
            id="lastName"
            type="text"
            className={`w-full border bg-transparent p-2 outline-none ${
              errors.lastName ? "border-red-700" : "border-black/60"
            }`}
            {...register("lastName", {
              validate: (value) =>
                value.trim() !== "" || "Last name is required.",
              minLength: {
                value: 2,
                message: "Last name must be at least 2 characters.",
              },
            })}
          />
          {errors.lastName && (
            <p className="text-sm text-red-700">{errors.lastName.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-sm">
            Email
          </label>
          <input
            id="email"
            type="email"
            className={`w-full border bg-transparent p-2 outline-none ${
              errors.email ? "border-red-700" : "border-black/60"
            }`}
            {...register("email", {
              validate: (value) => {
                if (value.trim() === "") {
                  return "Email is required.";
                }
                if (!value.includes("@") || !value.includes(".")) {
                  return "Please enter a valid email address.";
                }
                return true;
              },
            })}
          />
          {errors.email && (
            <p className="text-sm text-red-700">{errors.email.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="message" className="text-sm">
            Message
          </label>
          <textarea
            id="message"
            rows={6}
            className={`w-full resize-none border bg-transparent p-2 outline-none ${
              errors.message ? "border-red-700" : "border-black/60"
            }`}
            {...register("message", {
              validate: (value) =>
                value.trim() !== "" || "Message is required.",
              minLength: {
                value: 10,
                message: "Message must be at least 10 characters.",
              },
            })}
          />
          {errors.message && (
            <p className="text-sm text-red-700">{errors.message.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-primary p-3 text-sm text-white"
        >
          Send Message
        </button>
      </form>
    </ClipWidthLayout>
  );
};

export default ContactForm;
