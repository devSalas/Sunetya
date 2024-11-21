import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { footerContent } from '../content/siteContent';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300" id='contact'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
              {footerContent.brand.name}
            </h3>
            <p className="text-gray-400 mb-4">
              {footerContent.brand.description}
            </p>
            {/* <div className="flex space-x-4">
              <SocialLink href="#" icon={<Facebook size={20} />} />
              <SocialLink href="#" icon={<Twitter size={20} />} />
              <SocialLink href="#" icon={<Instagram size={20} />} />
              <SocialLink href="#" icon={<Linkedin size={20} />} />
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">{footerContent.quickLinks.title}</h4>
            <ul className="space-y-2">
              {footerContent.quickLinks.links.map((link, index) => (
                <FooterLink key={index} href={link.href}>{link.text}</FooterLink>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">{footerContent.services.title}</h4>
            <ul className="space-y-2">
              {footerContent.services.links.map((link, index) => (
                <FooterLink key={index} href={link.href}>{link.text}</FooterLink>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">{footerContent.contact.title}</h4>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-purple-400" />
                <span>{footerContent.contact.email}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-purple-400" />
                <span>{footerContent.contact.phone}</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin size={20} className="text-purple-400" />
                <span>{footerContent.contact.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              {footerContent.legal.copyright}
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {footerContent.legal.links.map((link, index) => (
                <FooterLink key={index} href={link.href}>{link.text}</FooterLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <a
    href={href}
    className="text-gray-400 hover:text-purple-400 transition-colors"
    target="_blank"
    rel="noopener noreferrer"
  >
    {icon}
  </a>
);

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <a
      href={href}
      className="text-gray-400 hover:text-purple-400 transition-colors"
    >
      {children}
    </a>
  </li>
);