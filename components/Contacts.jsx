"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Zoom } from "react-awesome-reveal";
import emailjs from "@emailjs/browser";


const Contact = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const clearForm = () => {
    setName("");
    setEmail("");
    setMessage("");
  };


  const submitHandler = async (e) => {
  
    e.preventDefault();
    setLoading(true);

    // emailjs
    emailjs
      .send(
        "service_591517a",
        "template_323tubp",
        {
          from_name: name,
          to_name: "NHP",
          from_email: email,
          to_email: "rickmasha888@gmail.com",
          message: message,
        },
        "skNoOkkBfsoNXwpTh"
      )
      .then(() => {
        setLoading(false);
        clearForm();
      })
      .catch((error) => {
        console.log(error);
        alert("something went wrong!");
      });
  };



  return (
    <div id="contacts" className="mt-20 relative px-8">
      <div className="text-center">
      <h3 className='capitalize half-underline text-[#0d0d4e] text-[24px] font-[900] inline-block'>
        contact us
      </h3>

      </div>
      <p className="mt-8 md:text-center">
        We are available 24/7 , So You may contact us at any time you wish
      </p>

      <div className="md:flex md:flex-wrap gap-8 md:gap-10 mx-auto">
        <div className="mt-14 md:min-w-[320px]">
          <Image
            className="block opacity"
            src='/assets/images/location.png'
            alt="location adress"
            width={30}
            height={30}
          />
          <h2 className="capitalize mt-4 text-[#999] font-bold">address</h2>
          <p className="mt-4">Upanga West, Dar es salaam, Tanzania</p>
        </div>

        <div className="mt-14 md:min-w-[320px]">
          <Image
            className="block"
            src='/assets/images/call.png'
            alt="location adress"
            width={30}
            height={30}
          />
          <h2 className="uppercase mt-4 text-[#999] font-bold">phone number</h2>
          <p className="mt-4">+255655396997</p>
          <p className="mt-2">+255763396997</p>
        </div>

        <div className="mt-14 md:min-w-[320px]">
          <Image
            className="block"
            src='/assets/images/email.png'
            alt="location adress"
            width={30}
            height={30}
          />
          <h2 className="uppercase mt-4 text-[#999] font-bold">email</h2>
          <p className="mt-4">rickmasha888@gmail.com</p>
        </div>
      </div>

      <p className="mt-20 md:text-center">You can contact us via email adress by filling the contact form below</p>

      <Zoom>
        <div className="rounded-lg mt-6 bg-[#d21034da] p-4 py-8 mx-auto max-w-[400px]">
          <form onSubmit={submitHandler}>
            <div className="mt-4">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Enter name"
                className="block w-full p-2 rounded-lg focus:outline-none"
              />
            </div>

            <div className="mt-4">
              <input
                type="email"
                value={email}
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
                required
                className="block w-full p-2 rounded-lg focus:outline-none"
              />
            </div>


            <div className="mt-4">
              <textarea
                rows={2}
                value={message}
                placeholder="Enter message"
                onChange={(e) => setMessage(e.target.value)}
                required
                className="block w-full p-2 rounded-lg focus:outline-none"
              />
            </div>

            <div className="mt-8">
              <button className="px-8 text-white py-2 rounded-lg bg-[#d21041c9] hover:bg-orange-700 transition-all duration-500 block mx-auto">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </Zoom>
    </div>
  );
};

export default Contact;
