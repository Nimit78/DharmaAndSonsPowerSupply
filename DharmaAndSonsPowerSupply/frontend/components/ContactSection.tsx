import React from 'react';
import { Phone, Mail, MapPin, Facebook, Youtube, Instagram, Linkedin, Send } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="pt-10 pb-10 bg-white">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-[#d4af37] mx-auto mb-6"></div> {/* pg-gold replacement */}
          <p className="text-gray-700">
            Have questions or interested in our products? Contact us today for personalized power solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-gradient-to-br from-stone-500/5 to-orange-500/5 p-6 md:p-12 rounded-xl md:col-span-2 border border-gray-100 shadow-sm">
            <div className="grid md:grid-cols-2 gap-12">
              
              {/* Left Column: Contact Info */}
              <div className="flex flex-col">
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-gray-900">Contact Information</h3>
                  <p className="text-gray-600 mb-8">Get in touch with us for any inquiries about our products and services.</p>
                </div>

                <div className="space-y-6 flex-grow">
                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-orange-500/10 text-orange-600 rounded-full shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-semibold text-gray-900 mb-2">Phone</h4>
                      <div className="space-y-1">
                        <div className="flex flex-col sm:flex-row sm:gap-4 gap-1">
                          <a href="tel:+919654400023" className="text-gray-700 hover:text-orange-600 transition-colors">+91 9654400023</a>
                          <a href="tel:+918527500501" className="text-gray-700 hover:text-orange-600 transition-colors">+91 8527500501</a>
                        </div>
                        <a href="tel:01204560160" className="text-gray-700 hover:text-orange-600 transition-colors block">0120-4560160</a>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-teal-500/10 text-teal-600 rounded-full shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-semibold text-gray-900 mb-2">Email</h4>
                      <div className="space-y-1">
                        <a href="mailto:info@perfectgenerators.com" className="text-gray-700 hover:text-teal-600 transition-colors block break-all">info@perfectgenerators.com</a>
                        <a href="mailto:marketing@perfectgenerators.com" className="text-gray-700 hover:text-teal-600 transition-colors block break-all">marketing@perfectgenerators.com</a>
                      </div>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-yellow-500/10 text-yellow-600 rounded-full shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-semibold text-gray-900 mb-2">Head Office</h4>
                      <address className="text-gray-700 not-italic leading-relaxed">
                        512, 5th Floor, Ansal Chamber-2<br /> Bhikaji Cama Place, New Delhi-66
                      </address>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="pt-6 mt-auto border-t border-gray-200">
                  <h4 className="text-lg font-semibold mb-4 text-gray-900">Follow Us</h4>
                  <div className="flex gap-4">
                    {[
                      { icon: <Facebook />, href: "https://facebook.com/..." },
                      { icon: <Youtube />, href: "https://youtube.com/..." },
                      { icon: <Instagram />, href: "https://instagram.com/..." },
                      { icon: <Linkedin />, href: "https://linkedin.com/..." }
                    ].map((social, idx) => (
                      <a 
                        key={idx}
                        href={social.href}
                        target="_blank"
                        className="p-3 bg-orange-600 text-white rounded-full hover:bg-white hover:text-orange-600 border border-transparent hover:border-orange-600 transition-all duration-300"
                      >
                        {social.icon }
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Contact Form */}
              <div className="bg-white/70 p-6 md:p-8 rounded-lg shadow-sm flex flex-col border border-gray-100">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">Send us a Message</h3>
                  <p className="text-gray-600 text-sm">Fill out the form below and we'll get back to you as soon as possible.</p>
                </div>
                
                <form className="space-y-4 flex flex-col h-full">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Your Name <span className="text-red-500">*</span></label>
                    <input type="text" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-orange-500 outline-none transition-all" required />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email <span className="text-red-500">*</span></label>
                      <input type="email" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-orange-500 outline-none transition-all" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                      <div className="flex">
                        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">+91</span>
                        <input type="tel" maxLength={10} className="w-full px-4 py-2 rounded-r-md border border-gray-300 focus:ring-2 focus:ring-orange-500 outline-none transition-all" />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">City <span className="text-red-500">*</span></label>
                      <input type="text" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-orange-500 outline-none transition-all" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                      <input type="text" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-orange-500 outline-none transition-all" />
                    </div>
                  </div>

                  <div className="flex-grow">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Your Message <span className="text-red-500">*</span></label>
                    <textarea rows={4} className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-orange-500 outline-none transition-all resize-none" required></textarea>
                  </div>

                  <button type="submit" className="mt-4 flex items-center justify-center gap-2 bg-orange-600 hover:bg-[#d4af37] text-white font-semibold py-3 px-6 rounded-md transition-all group w-full md:w-max">
                    Send Message
                    <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </form>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;