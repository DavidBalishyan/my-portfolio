import React from "react";

const Contact: React.FC = () => {
  return (
    <>
    <p>Sorry, you can`t send us a message thru website. use our email or phone number, until we fix the problem</p>
    <section id="contact" className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-gray-800">Contact Us</h2>
          <p className="text-gray-600 mt-4 text-lg">
            We'd love to hear from you! Feel free to reach out with any questions, feedback, or collaboration ideas.
          </p>
        </div>

        {/* Contact Form and Info */}
        <div className="mt-12 flex flex-col md:flex-row gap-12">
          {/* Contact Form */}
          <div className="flex-1 bg-white p-8 rounded-lg shadow">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Send Us a Message
            </h3>
            <form action="#" method="POST" className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full p-3 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full p-3 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 block w-full p-3 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your message here..."
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-md shadow hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="flex-1 bg-white p-8 rounded-lg shadow">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Contact Information
            </h3>
            <p className="text-gray-600 leading-relaxed">
              You can also reach us through the following channels:
            </p>
            <ul className="mt-4 space-y-4">
              <li className="flex items-center">
              </li>
              <li className="flex items-center">
                <span className="bg-blue-600 text-white p-3 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 10h11M9 21h-2m12-8h-4m0 0h-4m4-6h-4m0 0H5m4 0H4m0 0H3m7-6H4"
                    />
                  </svg>
                </span>
                <span className="ml-4 text-gray-800">+374 (77) 12-65-56</span>
              </li>
              <li className="flex items-center">
                <span className="bg-blue-600 text-white p-3 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16.72 11.06a8 8 0 10-4.64 4.64m1.42-7.1a3 3 0 11-4.24 4.24"
                    />
                  </svg>
                </span>
                <span className="ml-4 text-gray-800">davidbalishyan12@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Contact;
