import { contacts } from "./data";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_i8zftbl", "template_kz1wfwb", form.current, {
        publicKey: "oiHOimoAiTzmjalki",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-10 px-4 sm:px-6 md:px-10 lg:px-20 py-10 w-full max-w-screen-xl mx-auto">
      {/* Contact Info */}
      <div className="w-full lg:w-1/2">
        <h4 className="font-bold text-2xl md:text-3xl mb-6 text-center lg:text-left">
          Contact Info
        </h4>
        <div className="flex flex-col gap-6">
          {contacts.map((contact) => (
            <div
              key={contact.label}
              className="flex items-center gap-4 flex-wrap"
            >
              <div className="flex items-center justify-center bg-gray-700 p-4 w-14 h-14 rounded-2xl shrink-0">
                <img
                  src={contact.Image}
                  alt={contact.label}
                  className="w-8 h-8 object-contain"
                />
              </div>
              <div className="text-sm sm:text-base text-gray-300 leading-5">
                <span className="block font-medium">{contact.description}</span>
                <p className="text-white">{contact.info}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Form */}
      <div className="w-full lg:w-1/2 bg-gray-800 rounded-2xl p-6 sm:p-8 md:p-10">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center lg:text-left">
          Let's work <span className="text-gray-400">together.</span>
        </h2>
        <form ref={form} onSubmit={sendEmail} className="space-y-5">
          <div>
            <input
              placeholder="Name*"
              type="text"
              name="title"
              className="w-full p-3 border border-gray-500 bg-gray-900 text-white rounded-md text-base focus:outline-pink-500"
              required
            />
          </div>
          <div>
            <input
              placeholder="E-mail*"
              type="email"
              name="email"
              className="w-full p-3 border border-gray-500 bg-gray-900 text-white rounded-md text-base focus:outline-pink-500"
              required
            />
          </div>
          <div>
            <textarea
              placeholder="Your Message*"
              name="message"
              rows={5}
              className="w-full p-3 border border-gray-500 bg-gray-900 text-white rounded-md text-base resize-none focus:outline-pink-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-pink-500 text-white font-medium py-3 rounded-md hover:bg-pink-600 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
