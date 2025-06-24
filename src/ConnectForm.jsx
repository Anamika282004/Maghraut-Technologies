import React, { useState } from 'react';

export default function ConnectForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thanks for contacting us!');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Form - fixed width, left side */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="w-full max-w-sm">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-gray-800">
              Connect With Us
            </h2>

            <form
              onSubmit={handleSubmit}
              className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm space-y-4"
            >
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#6465F1]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#6465F1]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input
                  type="text"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#6465F1]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  name="message"
                  rows="4"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#6465F1]"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#6465F1] text-white font-medium py-2 text-sm rounded hover:bg-[#5757d9] transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Image - right side, full width */}
        <div className="w-full md:w-1/2">
          <img
            src="/Imagecrm.svg"
            alt="Contact Illustration"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
