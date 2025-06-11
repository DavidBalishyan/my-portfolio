import React from "react";

const Contact: React.FC = () => {
  return (
    <>
      <p>
        Sorry, you can`t send me a message through the website. Use our email or phone number until we fix the problem.
      </p>
      <section id="contact" className="bg-base-200 py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          {/* Section Header */}
          <div className="text-center">
            <h2 className="text-4xl font-bold text-ey">Contact Me</h2>
            <p className="text-white mt-4 text-lg">
              We'd love to hear from you! Feel free to reach out with any questions, feedback, or collaboration ideas.
            </p>
          </div>

          {/* Contact Form and Info */}
          <div className="mt-12 flex flex-col md:flex-row gap-12">
            {/* Contact Form */}
            <div className="flex-1 bg-base-100 p-8 rounded-lg shadow">
              <h3 className="text-2xl font-semibold text-ey mb-6">
                Send Us a Message
              </h3>
              <form action="#" method="POST" className="space-y-6">
                <div className="form-control">
                  <label htmlFor="name" className="label">
                    <span className="label-text">Full Name</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="input input-bordered w-full"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="form-control">
                  <label htmlFor="email" className="label">
                    <span className="label-text">Email Address</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="input input-bordered w-full"
                    placeholder="you@example.com"
                    required
                  />
                </div>
                <div className="form-control">
                  <label htmlFor="message" className="label">
                    <span className="label-text">Message</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="textarea textarea-bordered w-full"
                    placeholder="Your message here..."
                    required
                  />
                </div>
                <button type="submit" className="btn btn-ey w-full">
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="flex-1 bg-base-100 p-8 rounded-lg shadow">
              <h3 className="text-2xl font-semibold text-ey mb-6">
                Contact Information
              </h3>
              <p className="text-white leading-relaxed">
                You can also reach us through the following channels:
              </p>
              <ul className="mt-4 space-y-4">
                <li className="flex items-center">
                  <span className="bg-primary text-white p-3 rounded-full">
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
                  <span className="ml-4 text-white">
                    +374 (77) 12-65-56 (only in Armenia)
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="bg-primary text-white p-3 rounded-full">
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
                  <span className="ml-4 text-white">
                    davidbalishyan12@gmail.com
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="bg-primary text-white p-3 rounded-full">
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
                  <span className="ml-4 text-white">
                    davidbalishyan.work@gmail.com
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="bg-primary text-white p-3 rounded-full">
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
                  <span className="ml-4 text-white">
                    david.balishyan@tumo.org
                  </span>
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