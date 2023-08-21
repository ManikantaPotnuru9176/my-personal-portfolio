import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Snackbar } from "@mui/material";

const Contact = () => {
  const [open, setOpen] = useState(false);
  const form = useRef();

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
    <div className="flex flex-col justify-center items-center relative z-1">
      <div className="flex flex-col justify-between items-center flex-col w-full max-w-1350px px-0 gap-12 py-0 md:py-80">
        <div className="text-4xl text-center font-semibold mt-20 md:text-5xl text-primary">
          Contact
        </div>
        <div className="text-lg text-center max-w-600px text-secondary md:text-xl">
          Feel free to reach out to me for any questions or opportunities!
        </div>
        <form
          ref={form}
          onSubmit={handleSubmit}
          className="w-full bg-[#15151e] max-w-600px flex flex-col p-8 rounded-lg shadow-lg gap-3"
        >
          <div className="text-2xl font-semibold mb-1">Email Me 🚀</div>
          <input
            className="flex-1 bg-transparent border border-text-secondary outline-none text-lg rounded-lg p-4 focus:border-primary"
            type="email"
            placeholder="Your Email"
            name="from_email"
            required
          />
          <input
            className="flex-1 bg-transparent border border-text-secondary outline-none text-lg rounded-lg p-4 focus:border-primary"
            type="text"
            placeholder="Your Name"
            name="from_name"
            required
          />
          <input
            className="flex-1 bg-transparent border border-text-secondary outline-none text-lg rounded-lg p-4 focus:border-primary"
            type="text"
            placeholder="Subject"
            name="subject"
            required
          />
          <textarea
            className="flex-1 bg-transparent border border-text-secondary outline-none text-lg rounded-lg p-4 focus:border-primary resize-none"
            placeholder="Message"
            rows="4"
            name="message"
            required
          />
          <input
            className="w-full text-center bg-gradient-to-r bg-primary py-3 px-4 mt-8 rounded-lg text-lg font-semibold cursor-pointer"
            type="submit"
            value="Send"
          />
        </form>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={() => setOpen(false)}
          message="Email sent successfully!"
          severity="success"
        />
      </div>
    </div>
  );
};

export default Contact;
