import React from "react";
import Contact from "../../../public/contact.json";
import Lottie from "lottie-react";

const ContactUs = () => {
  return (
    <div className="mt-10 lg:mt-20">
      <h1
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        style={{ fontFamily: "Lemon, sans-serif" }}
        className="bg-gradient-to-r text-2xl text-center lg:text-4xl from-pink-500 to-orange-700 text-transparent bg-clip-text mt-10 lg-mt-20 mb-10"
      >
        <span className="bg-gradient-to-r from-pink-500 to-orange-500 text-transparent bg-clip-text">
          Get in Touch
        </span>
      </h1>

      <div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div>
            {" "}
            <Lottie animationData={Contact} />
          </div>
          <div>
            <p
              data-aos="fade-right"
              className="mt-6 lg:mt-10 text-xl lg:text-2xl text-center text-blue-600 font-bold uppercase"
              style={{ letterSpacing: "1px" }}
            >
              We would love to hear from you!
            </p>
            <div className="py-10 px-4 mt-5  md:px-10">
              <form className="w-full max-w-lg">
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-gray-700 dark:text-gray-100 text-xs font-bold mb-2"
                      htmlFor="firstName"
                    >
                      First Name
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 dark:bg-slate-500 text-gray-700 border dark:text-gray-100 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="firstName"
                      type="text"
                      placeholder="John"
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 dark:text-gray-100 text-xs font-bold mb-2"
                      htmlFor="lastName"
                    >
                      Last Name
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 dark:bg-slate-500 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="lastName"
                      type="text"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700  dark:text-gray-100 text-xs font-bold mb-2"
                      htmlFor="email"
                    >
                      Email Address
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 dark:bg-slate-500 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="email"
                      type="email"
                      placeholder="example@example.com"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 dark:text-gray-100  text-xs font-bold mb-2"
                      htmlFor="message"
                    >
                      Message
                    </label>
                    <textarea
                      className="appearance-none block w-full bg-gray-200 dark:bg-slate-500 dark:text-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-32 resize-none"
                      id="message"
                      placeholder="Enter your message..."
                    ></textarea>
                  </div>
                </div>
                <div className="flex justify-center">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="w-full ">
          <iframe
            className="w-full h-64"
            title="Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.063671782999!2d-74.0060152!3d40.7127753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1625201631039!5m2!1sen!2sin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
