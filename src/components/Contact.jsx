import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Trupti",
          from_email: form.email,
          to_email: "truptivijayyadav27@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          setFormSubmitted(true);

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="max-w-6xl mx-auto">
      <motion.div
        variants={slideIn("down", "tween", 0.2, 1)}
        className="text-center mb-12">
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
      </motion.div>

      <motion.div
        variants={slideIn("up", "tween", 0.2, 1)}
        className="bg-black-100 p-8 rounded-2xl shadow-card">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Availability & Collaboration Info */}
          <div className="flex flex-col justify-start">
            <h4 className="text-white font-bold text-2xl mb-6">
              I am available for:
            </h4>

            <ul className="list-disc pl-5 text-secondary mb-6">
              <li className="text-white font-medium py-2">
                Freelance & contract-based projects
              </li>
              <li className="text-white font-medium py-2">
                Full-time opportunities
              </li>
              <li className="text-white font-medium py-2">
                Open-source contributions
              </li>
              <li className="text-white font-medium py-2">
                Collaborations on innovative projects
              </li>
              <li className="text-white font-medium py-2">
                Building scalable web & mobile applications
              </li>
              <li className="text-white font-medium py-2">
                Developing and optimizing APIs & backend systems
              </li>
              <li className="text-white font-medium py-2">
                Enhancing UI/UX for better user experience
              </li>
            </ul>
            <p className="text-secondary mt-auto">
              Let's build something great together! Feel free to connect via the
              social links in the header or footer.
            </p>
            <p className="text-secondary mt-4">
              <span className="font-semibold text-white">Response time:</span>{" "}
              24-48 hours
            </p>
          </div>

          {/* Right side - Contact form */}
          <div>
            {!formSubmitted ? (
              <>
                <h4 className="text-white font-bold text-2xl mb-6">
                  Send a Message
                </h4>
                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-5">
                  <label className="flex flex-col">
                    <span className="text-white font-medium mb-2">
                      Your Name
                    </span>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="What's your name?"
                      className="bg-tertiary py-3 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                      required
                    />
                  </label>
                  <label className="flex flex-col">
                    <span className="text-white font-medium mb-2">
                      Your Email
                    </span>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="What's your email address?"
                      className="bg-tertiary py-3 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                      required
                    />
                  </label>
                  <label className="flex flex-col">
                    <span className="text-white font-medium mb-2">
                      Your Message
                    </span>
                    <textarea
                      rows={4}
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="What would you like to discuss?"
                      className="bg-tertiary py-3 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                      required
                    />
                  </label>

                  <button
                    type="submit"
                    className="bg-gradient-to-r from-violet-600 to-pink-500 hover:from-pink-500 hover:to-violet-600 transition-all duration-300 py-3 px-8 rounded-lg outline-none w-fit text-white font-bold shadow-md shadow-primary mt-2">
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center bg-tertiary p-8 rounded-xl">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-violet-600 to-pink-500 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h4 className="text-white font-bold text-2xl mb-3">
                  Message Sent!
                </h4>
                <p className="text-secondary text-lg mb-4">
                  Thank you for reaching out. I'll get back to you as soon as
                  possible.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="text-white underline hover:text-pink-500 transition-colors">
                  Send another message
                </button>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
