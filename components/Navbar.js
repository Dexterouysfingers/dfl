'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Phone } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Facilities', href: '/facilities' },
    { name: 'Contact', href: '/contact' },
  ]

  const highlightedLinks = [
    { name: 'DF Shops', href: '/df-shops' },
    { name: 'DF Foods', href: '/df-foods' },
  ]

  return (
    <>
      {/* Top Info Bar */}
      <div className="w-full bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50 border-b border-gray-200 py-3 relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-30"></div>
        <div className="container-custom flex justify-between items-center relative z-10">
          <span className="text-gray-600 font-medium text-sm md:text-base flex items-center">
            <span className="w-2 h-2 bg-gradient-to-r from-primary-500 to-green-500 rounded-full mr-2 animate-pulse shadow-sm"></span>
            Nigeria's First Digital Agriculture Platform
          </span>
          <span className="text-gray-700 text-xs md:text-sm flex items-center font-medium">
            <Phone className="w-3 h-3 mr-1 text-primary-600" />
            Helpline: +234 (0) 806 943 6415
          </span>
        </div>
      </div>
      
      {/* Main Navbar */}
      <nav className={`bg-white sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'shadow-lg backdrop-blur-md bg-white/95 border-b border-gray-100' : 'shadow-sm'
      }`}>
        <div className="container-custom">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center group">
                <img 
                  src="/dfl-logo.png" 
                  alt="Dexterous Fingers Limited (DFL) Logo - Home" 
                  className="h-40 w-auto transition-transform duration-300 group-hover:scale-105 drop-shadow-sm" 
                />
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center flex-1 justify-center">
              <div className="flex items-center space-x-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-700 hover:text-primary-600 focus-visible:ring-2 focus-visible:ring-primary-400 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 outline-none animated-underline relative group"
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-600 to-green-600 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                ))}
              </div>
              
              {/* Divider */}
              <div className="mx-8 h-8 border-l border-gray-300"></div>
              
              {/* Highlighted Links */}
              <div className="flex items-center space-x-3">
                {highlightedLinks.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-primary-600 font-semibold px-4 py-2 rounded-lg text-sm hover:bg-gradient-to-r hover:from-primary-50 hover:to-green-50 focus:bg-primary-100 focus-visible:ring-2 focus-visible:ring-primary-400 transition-all duration-300 outline-none border border-transparent hover:border-primary-200 hover:shadow-md"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Careers Button (right side) */}
            <div className="hidden md:block ml-6">
              <Link href="/careers" className="btn-primary pulse-glow">
                Careers
              </Link>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 hover:text-primary-600 focus:outline-none focus:text-primary-600 p-2 rounded-lg hover:bg-gray-100 transition-all duration-200"
                aria-label="Toggle mobile menu"
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
          
          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-xl z-50 animate-fadeIn backdrop-blur-md">
              <div className="px-4 pt-4 pb-6 space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-700 hover:text-primary-600 block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 hover:bg-gradient-to-r hover:from-gray-50 hover:to-primary-50"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="border-t border-gray-200 my-3"></div>
                {highlightedLinks.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-primary-600 font-semibold block px-4 py-3 rounded-lg text-base hover:bg-gradient-to-r hover:from-primary-50 hover:to-green-50 transition-all duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4">
                  <Link
                    href="/careers"
                    className="btn-primary flex items-center justify-center w-full"
                    onClick={() => setIsOpen(false)}
                  >
                    Careers
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  )
} 