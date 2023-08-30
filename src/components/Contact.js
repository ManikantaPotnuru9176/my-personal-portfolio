import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Snackbar } from "@mui/material";

const Contact = () => {
  const [open, setOpen] = useState(false);
  const form = useRef();

  const InputField = ({ type, placeholder, name, required }) => (
    <input
      className="flex-1 bg-transparent border border-text-secondary outline-none md:text-lg rounded-lg p-2 md:p-4 focus:border-primary"
      type={type}
      placeholder={placeholder}
      name={name}
      required={required}
    />
  );

  const handleSnackbarClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_lrwfruw",
        "template_8wvp3dv",
        form.current,
        "p5E-IcARcN1v-Y7DZ"
      )
      .then(
        (result) => {
          setOpen(true);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="flex flex-col justify-center items-center relative z-1 pb-20 md:py-32">
      <div
        id="contact"
        className="flex flex-col justify-between items-center flex-col w-full max-w-1350px gap-12 py-0"
      >
        <div className="text-4xl text-center font-semibold mt-20 md:text-5xl text-primary">
          Contact
        </div>
        <div className="text-lg text-center max-w-600px text-secondary md:text-xl">
          Feel free to reach out to me for any questions or opportunities!
        </div>
        <form
          ref={form}
          onSubmit={handleSubmit}
          className="w-[90vw] md:w-full bg-[#15151e] max-w-600px flex flex-col p-4 md:p-8 rounded-lg shadow-lg gap-3"
        >
          <div className="text-xl md:text-2xl font-semibold mb-1">Email Me 🚀</div>
          <InputField
            type="email"
            placeholder="Your Email"
            name="from_email"
            required
          />
          <InputField
            type="text"
            placeholder="Your Name"
            name="from_name"
            required
          />
          <InputField
            type="text"
            placeholder="Subject"
            name="subject"
            required
          />
          <textarea
            className="flex-1 bg-transparent border border-text-secondary outline-none md:text-lg rounded-lg p-2 md:p-4 focus:border-primary resize-none"
            placeholder="Message"
            rows="4"
            name="message"
            required
          />
          <input
            className="w-full text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-2 md:py-3 md:px-4 mt-2 md:mt-8 rounded-lg text-lg font-semibold cursor-pointer"
            type="submit"
            value="Send"
          />
        </form>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleSnackbarClose}
          message="Email sent successfully!"
          severity="success"
        />
      </div>
    </div>
  );
};

export default Contact;
