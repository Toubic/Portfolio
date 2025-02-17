import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
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
  const [isSent, setIsSent] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isCaptchaWrong, setIsCaptchaWrong] = useState(false);
  const [captchaNumberOne, setCaptchaNumberOne] = useState(Math.floor(Math.random()*10));
  const [captchaNumberTwo, setCaptchaNumberTwo] = useState(Math.floor(Math.random()*10));

  const resetFlags = () => {
    setIsSent(false);
    setIsError(false);
    setIsCaptchaWrong(false);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;

    resetFlags();

    setForm({
      ...form,
      [name]: value,
    });
  }; 

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    resetFlags();

    if ((captchaNumberOne + captchaNumberTwo) === Number(form.captcha)) {
    emailjs.send(
      import.meta.env.VITE_REACT_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_REACT_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: "Tobias Johansson",
        from_email: form.email,
        to_email: "tobias.johansson.dev@gmail.com",
        message: form.message,
      },
      import.meta.env.VITE_REACT_APP_EMAILJS_PUBLIC_KEY,
    )
    .then(
      () => {
        setLoading(false);
        setIsSent(true);

        setForm({
          name: "",
          email: "",
          message: "",
        });
      },
      (error) => {
        setLoading(false);
        console.error(error);
        setIsError(true);
      }
    );
  } else if ((captchaNumberOne + captchaNumberTwo) !== Number(form.captcha)) {
    setLoading(false);
    setIsCaptchaWrong(true);
  }
  };
  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Captcha</span>
            <input
              type="input"
              name="captcha"
              value={form.captcha}
              onChange={handleChange}
              placeholder={`What is the sum of ${captchaNumberOne} + ${captchaNumberTwo}?`}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <div className="flex flex-row mb-4">
            <button
              type="submit"
              className="bg-tetiary border-solid border-2 border-white py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
            >
              {loading ? "Sending..." : "Send"}
            </button>
            {isSent && <span className="ml-4 mt-3 text-white font-medium">Sent!</span>}
            {isError && <span className="ml-4 mt-3 text-white font-medium">Error! Try again later.</span>}
            {isCaptchaWrong && <span className="ml-4 mt-3 text-white font-medium">Captcha is wrong!</span>}
          </div>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact");