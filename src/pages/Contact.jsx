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
    <>
      <div className="flex items-center p-10">
        <div className=" pl-15">
          <h4 className="font-bold text-2xl mt-5">Contact Info</h4>
          <div className="flex flex-col flex-wrap gap-15 pt-7">
            {contacts.map((contacts) => {
              return (
                <div key={contacts.label} className="flex">
                  <div className="flex items-center justify-center bg-gray-700 p-4 w-15 rounded-2xl">
                    <img src={contacts.Image} alt="" className="w-10" />
                  </div>
                  <div className="flex-col ml-3 items-center">
                    <span className="text-gray-300 inline">
                      {contacts.description}
                    </span>
                    <br />
                    {contacts.info}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="bg-gray-500 ml-25 w-2xl h-150 p-9 rounded-2xl">
          <div className=" pt-5">
            <div className="text-4xl pb-9">
              Let's work <span className="text-gray-700 ">together.</span>
            </div>
            <form action="/submit-form" ref={form} onSubmit={sendEmail}>
              <div class="mb-5">
                <input
                  placeholder="Name*"
                  type="text"
                  id="name"
                  name="title"
                  className="w-full p-1 border-1 border-amber-100 border-solid rounded-sm text-2xl"
                  required
                />
              </div>
              <div class="mb-5">
                <input
                  placeholder="E-mail*"
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-1 border-1 border-amber-100 border-solid rounded-sm text-2xl"
                  required
                />
              </div>
              <div class="mb-5">
                <textarea
                  placeholder="Your Message*"
                  id="message"
                  name="message"
                  className="w-full p-2.5 border-1 border-amber-100 border-solid rounded-sm text-2xl h-36 resize-y"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-gray-900 text-white border-none rounded-md cursor-pointer w-full h-10 hover:bg-gray-600 focus:outline-6 focus:outline-offset-2 focus:outline-gray-500 active:bg-gray-700"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
