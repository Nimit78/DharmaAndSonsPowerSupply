import React from 'react';
import Link from 'next/link';
import { Facebook, Linkedin, Instagram, Youtube, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-slate-900 text-white overflow-hidden">
      {/* Custom Background Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(at_68%_0%,hsla(189,100%,30%,0.25)_0px,transparent_50%),radial-gradient(at_2%_82%,hsla(20,67%,57%,0.12)_0px,transparent_50%)] z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40 opacity-80 z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Newsletter Section */}
        <div className="py-6 border-b border-white/20">
          <div className="max-w-5xl mx-auto text-center">
            <h3 className="text-xl font-semibold mb-4">Stay Updated</h3>
            <p className="text-white/80 mb-6">
              Subscribe for latest industry insights, company news, and information about our products and services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex h-10 w-full rounded-md border border-white/20 bg-white/10 px-3 py-1 text-sm outline-none focus:ring-2 focus:ring-[#d4af37] transition-all placeholder:text-white/60"
              />
              <button className="h-10 px-6 rounded-md bg-[#d4af37] hover:bg-[#c09d2f] text-stone-900 font-bold text-sm transition-all shrink-0">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:px-16">
          {/* About Column */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Perfect Generator Technologies Pvt. Ltd.</h4>
            <p className="text-white/80 text-sm leading-relaxed mb-6">
              Perfect Generator Technologies Pvt. Ltd. is a proud OEM of Mahindra & Mahindra Ltd., delivering cutting-edge diesel and gas gensets trusted by businesses across India.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="https://facebook.com/..." icon={<Facebook size={20} />} />
              <SocialLink href="https://linkedin.com/..." icon={<Linkedin size={20} />} />
              <SocialLink href="https://instagram.com/..." icon={<Instagram size={20} />} />
              <SocialLink href="https://youtube.com/..." icon={<Youtube size={20} />} />
              <SocialLink href="https://x.com/..." icon={<Twitter size={20} />} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <FooterLink href="/about-us">About Us</FooterLink>
              <FooterLink href="/careers">Careers</FooterLink>
              <FooterLink href="/resources/blogs">Articles</FooterLink>
              <FooterLink href="/sustainability">Sustainability</FooterLink>
              <FooterLink href="/contacts">Contact Us</FooterLink>
              <FooterLink href="/resources/brochures">Brochures</FooterLink>
              <FooterLink href="/cpcb-4-gensets">CPCP IV+ Gensets</FooterLink>
            </ul>
          </div>

          {/* Products Column */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Our Products</h4>
            <ul className="space-y-3 text-sm">
              {/* <FooterLink href="/products?category=diesel-genset">Diesel Gensets</FooterLink>
              <FooterLink href="/products?category=gas-genset">Gas Gensets</FooterLink>
              <FooterLink href="/products?category=rent">Rental Gensets</FooterLink>
              <FooterLink href="/products?category=transformer">Transformers</FooterLink>
              <FooterLink href="/products?category=servo">Servo</FooterLink>
              <FooterLink href="/products?category=ltpanel">LT Panel</FooterLink>
              <FooterLink href="/products">All products</FooterLink> */}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact</h4>
            <address className="not-italic text-white/80 space-y-4 text-sm">
              <div className="leading-relaxed">
                <div className="font-medium text-white/90 mb-1">Head Office:</div>
                <span>512, 5th Floor</span><br />
                <span>Ansal Chamber-2, Bhikaji Cama Place</span><br />
                <span>New Delhi-66</span>
              </div>
              <div className="space-y-1 flex flex-col">
                <a href="tel:+919654400023" className="hover:text-[#d4af37] transition-colors">+91 9654400023</a>
                <a href="tel:+918527500501" className="hover:text-[#d4af37] transition-colors">+91 8527500501</a>
                <a href="tel:01204560160" className="hover:text-[#d4af37] transition-colors">0120-4560160</a>
              </div>
              <div className="space-y-1 flex flex-col">
                <a href="mailto:info@perfectgenerators.com" className="hover:text-[#d4af37] transition-colors break-all">info@perfectgenerators.com</a>
                <a href="mailto:marketing@perfectgenerators.com" className="hover:text-[#d4af37] transition-colors break-all">marketing@perfectgenerators.com</a>
              </div>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/20 text-center text-white/60 text-sm">
          <p>© 2026 Perfect Generator Technologies Pvt. Ltd. All rights reserved.</p>
          <p className="mt-2 text-xs">
            Designed and Developed by{' '}
            <a href="https://amlan.xyz" className="font-semibold text-orange-300 hover:underline">Amlan</a> &{' '}
            <a href="https://pranay.top" className="font-semibold text-orange-300 hover:underline">Pranay</a>
          </p>
          <div className="mt-2">
            <Link href="/privacy-policy" className="text-yellow-200/80 hover:text-yellow-200 underline-offset-4 hover:underline">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Helper Components for cleaner code
const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <Link href={href} className="text-white/80 hover:text-[#d4af37] transition-colors">
      {children}
    </Link>
  </li>
);

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-white hover:text-[#d4af37] transition-colors"
  >
    {icon}
  </a>
);

export default Footer;