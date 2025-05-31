import { useState } from "react";
import NavBar from "../NavBar";
import React from "react";
import ReCAPTCHA from "react-google-recaptcha";

const RECAPTCHA_SITE_KEY = "6LeJ-FArAAAAACHkRIUIyzierCiN172orNtmUoui";


export default function Contact() {
  const [status, setStatus] = useState<string | null>(null);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement & {
      name: { value: string };
      email: { value: string };
      subject: { value: string };
      message: { value: string };
    };

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const subject = form.subject.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !subject || !message) {
      setStatus("Please fill in all fields.");
      return;
    }

    try {
      if (!recaptchaToken) {
        setStatus("Please complete the reCAPTCHA.");
        return;
      }

      const data = { name, email, subject, message, recaptchaToken };
      const response = await fetch(
        "https://eokrmh7kumz9ob7.m.pipedream.net",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        setStatus("Message sent successfully!");
        form.reset();
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setStatus("An error occurred. Please try again.");
    }
  };

  return (
    <>
      <NavBar />
      <div className="text-center py-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wide uppercase">
          Contact Me
        </h1>
        <p className="text-sm sm:text-base mt-2">
          Have questions or want to collaborate? Feel free to reach out!
        </p>
      </div>

      <div className="px-4">
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          <label className="block mb-2">
            <span className="text-sm font-medium">Name</span>
            <input
              type="text"
              name="name"
              required
              className="px-1 mt-1 block w-full border-black border-1"
            />
          </label>

          <label className="block mb-2">
            <span className="text-sm font-medium">Email</span>
            <input
              type="email"
              name="email"
              required
              className="px-1 mt-1 block w-full border-black border-1"
            />
          </label>

          <label className="block mb-2">
            <span className="text-sm font-medium">Subject</span>
            <input
              type="text"
              name="subject"
              required
              className="px-1 mt-1 block w-full border-black border-1"
            />
          </label>

          <label className="block mb-4">
            <span className="text-sm font-medium">Message</span>
            <textarea
              name="message"
              rows={5}
              required
              className="mt-1 block w-full border-black border-1"
            ></textarea>
          </label>
          <ReCAPTCHA
            sitekey={RECAPTCHA_SITE_KEY}
            onChange={(token: string | null) => setRecaptchaToken(token)}
            className="mb-4"
          />
          <button
            type="submit"
            className="inline-block border border-black px-4 py-2 text-sm sm:text-base uppercase tracking-wide hover:bg-black hover:text-white transition-colors"
          >
            Send Message
          </button>

          {status && (
            <p className="mt-4 text-sm text-center text-gray-700">{status}</p>
          )}
        </form>
      </div>
    </>
  );
}
