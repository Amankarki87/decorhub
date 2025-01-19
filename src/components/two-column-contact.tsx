"use client";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import React, { useState } from "react";

export default function TwoColumContact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };
  return (
    <section className=" bg-gray-50 py-0 md:py-20">
      <div className="max-w-7xl mx-auto px-0 md:px-8">
        <div className=" bg-white md:rounded-2xl shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Contact Information */}
            <div className="bg-secondary p-8 py-12 md:p-12 text-white">
              <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Phone className="w-5 h-5 text-primary flex-grow-0 flex-shrink-0" />
                  <a className="block" href={`tele:+977-9843660749`}>
                    +977-9843660749
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="w-5 h-5 text-primary flex-grow-0 flex-shrink-0" />
                  <a className="block" href={`mailto:info@decorhub.com.np`}>
                    info@decorhub.com.np
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="w-5 h-5 text-primary flex-grow-0 flex-shrink-0" />
                  <p>
                    Main Office: Near Eye Hospital, Lokanthali, Kathmandu
                    <br />
                    Branch Office: Sai Baba Marg , Biratnagar
                  </p>
                </div>
              </div>
              <div className="mt-12 rounded-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.440055147989!2d85.35550359999999!3d27.672790900000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1b0012fc0bd1%3A0x197607d1e1794489!2sDecorHub!5e0!3m2!1sen!2snp!4v1737268240148!5m2!1sen!2snp"
                  width="100%"
                  height="192"
                  style={{ border: 0, borderRadius: "8px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Main Office"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div className="p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-8 text-gray-800">
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/80 text-secondary font-medium py-3 px-6 rounded-lg transition duration-200 flex items-center justify-center space-x-2"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
