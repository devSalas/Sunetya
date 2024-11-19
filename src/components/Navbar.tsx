import React from 'react';
import { Menu, X } from 'lucide-react';
import { LinkWhatsapp, navContent } from '../content/siteContent';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              {navContent.brand}
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <NavLink href="#services">{navContent.links.services}</NavLink>
              <NavLink href="#work">{navContent.links.work}</NavLink>
              <NavLink href="#process">{navContent.links.process}</NavLink>
              <NavLink href="#contact">{navContent.links.contact}</NavLink>
              <a href={LinkWhatsapp.href} target='_blank'  className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors">
                {navContent.cta}
              </a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <MobileNavLink href="#services">{navContent.links.services}</MobileNavLink>
            <MobileNavLink href="#work">{navContent.links.work}</MobileNavLink>
            <MobileNavLink href="#process">{navContent.links.process}</MobileNavLink>
            <MobileNavLink href="#contact">{navContent.links.contact}</MobileNavLink>
            <a href={LinkWhatsapp.href} target='_blank' className="w-full bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors">
              {navContent.cta}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-gray-700 hover:text-purple-600 transition-colors duration-300 font-medium"
  >
    {children}
  </a>
);

const MobileNavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="block px-3 py-2 text-gray-700 hover:text-purple-600 transition-colors duration-300 font-medium"
  >
    {children}
  </a>
);