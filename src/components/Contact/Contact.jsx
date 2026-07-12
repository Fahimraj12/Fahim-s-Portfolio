import React, { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    if (isSending || isSent) return;
    setIsSending(true);

    emailjs
      .sendForm(
        "service_hirsizz",
        "template_x8mzcwg",
        form.current,
        "03RzxRs0aXmgZ1UAD"
      )
      .then(
        () => {
          setIsSent(true);
          setIsSending(false);
          form.current.reset();
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        },
        (error) => {
          console.error("Error Sending Message", error);
          setIsSending(false);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        }
      )
      .catch((err) => {
        console.error(err);
        setIsSending(false);
        toast.error("Unexpected error. Please try again.", {
          position: "top-right",
          theme: "dark",
        });
      });
  };

  return (
    <section
      id="contact"
      className="relative py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto font-sans"
    >
      <ToastContainer />

      {/* Background ambient light */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="text-center mb-16 relative z-10">
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          CONTACT
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4 rounded-full" />
        <p className="text-gray-400 mt-6 text-base sm:text-lg max-w-2xl mx-auto font-medium">
          Get in touch! Feel free to reach out for projects, collaborations, or just a friendly chat.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch relative z-10">
        {/* Left panel - contact info */}
        <aside className="lg:col-span-5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 flex flex-col justify-between shadow-2xl hover:border-purple-500/25 transition-all duration-300">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
              Get in touch
            </h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8">
              I’m available for freelance work, internships, and collaborations. Drop a line and I’ll get back to you as soon as possible.
            </p>

            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <span className="text-purple-400 p-3 rounded-xl bg-purple-500/10 border border-purple-500/20">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 2v.511l-8 5.333-8-5.333V6h16zM4 18V8.489l7.445 4.963a1 1 0 0 0 1.11 0L20 8.489V18H4z" />
                  </svg>
                </span>
                <div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Email</div>
                  <div className="text-white font-semibold text-sm sm:text-base">hello@yourdomain.com</div>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <span className="text-purple-400 p-3 rounded-xl bg-purple-500/10 border border-purple-500/20">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79a15.464 15.464 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1v3.5a1 1 0 01-1 1C10.07 21.5 2.5 13.93 2.5 4.5A1 1 0 013.5 3.5H7a1 1 0 011 1c0 1.24.2 2.45.57 3.57.12.33.04.71-.24 1.01l-2.71 2.71z" />
                  </svg>
                </span>
                <div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Phone</div>
                  <div className="text-white font-semibold text-sm sm:text-base">+91 93162 43930</div>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <span className="text-purple-400 p-3 rounded-xl bg-purple-500/10 border border-purple-500/20">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 9.5A2.5 2.5 0 1112 6.5a2.5 2.5 0 010 5z" />
                  </svg>
                </span>
                <div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Location</div>
                  <div className="text-white font-semibold text-sm sm:text-base">Surat, Gujarat, India</div>
                </div>
              </li>
            </ul>
          </div>
        </aside>

        {/* Right panel - form */}
        <div className="lg:col-span-7">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-2xl hover:border-purple-500/25 transition-all duration-300">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">
              Send a Message
            </h3>

            {isSent ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="bg-green-500/10 border border-green-500/20 text-green-400 rounded-full p-4 mb-4">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-white text-lg font-bold">Message Sent!</h4>
                <p className="text-gray-400 text-sm mt-2">Thanks for reaching out! I'll get back to you shortly.</p>
              </div>
            ) : (
              <form ref={form} onSubmit={sendEmail} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col">
                    <label htmlFor="user_name" className="text-xs text-gray-400 font-semibold mb-2 uppercase tracking-wider">Your Name</label>
                    <input
                      id="user_name"
                      type="text"
                      name="user_name"
                      required
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors duration-200"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="user_email" className="text-xs text-gray-400 font-semibold mb-2 uppercase tracking-wider">Your Email</label>
                    <input
                      id="user_email"
                      type="email"
                      name="user_email"
                      required
                      placeholder="e.g. john@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors duration-200"
                    />
                  </div>
                </div>

                <div className="flex flex-col">
                  <label htmlFor="user_subject" className="text-xs text-gray-400 font-semibold mb-2 uppercase tracking-wider">Subject</label>
                  <input
                    id="user_subject"
                    type="text"
                    name="user_subject"
                    required
                    placeholder="What is this about?"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors duration-200"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="message" className="text-xs text-gray-400 font-semibold mb-2 uppercase tracking-wider">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Your message details here..."
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors duration-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-500 hover:to-pink-400 text-white rounded-xl font-bold transition-all duration-200 shadow-lg shadow-purple-500/25 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSending ? (
                    <>
                      <svg className="w-5 h-5 animate-spin text-white" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v3a5 5 0 00-5 5H4z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
