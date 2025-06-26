'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

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

  // Close menu when clicking outside - FIXED LOGIC
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Don't close if clicking on the mobile menu button or menu items
      if (event.target.closest('.mobile-menu-container')) {
        return
      }
      
      // Close menu if clicking outside
      if (isOpen) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      // Add a small delay to prevent immediate closing
      const timeoutId = setTimeout(() => {
        document.addEventListener('mousedown', handleClickOutside)
        document.addEventListener('touchstart', handleClickOutside)
      }, 100)

      return () => {
        clearTimeout(timeoutId)
        document.removeEventListener('mousedown', handleClickOutside)
        document.removeEventListener('touchstart', handleClickOutside)
      }
    }
  }, [isOpen])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const handleMenuToggle = (e) => {
    e.preventDefault()
    e.stopPropagation()
    console.log('Menu toggle clicked, current state:', isOpen)
    setIsOpen(!isOpen)
  }

  const handleMenuClose = () => {
    setIsOpen(false)
  }

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
      {/* Blur overlay when menu is open */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-[9998]" />
      )}
      
      <nav className={`bg-white sticky top-0 z-[9999] transition-all duration-300 ${
        scrolled ? 'shadow-lg backdrop-blur-md bg-white/95 border-b border-gray-100' : 'shadow-sm'
      }`}>
        <div className="container-custom">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center group">
                <img 
                  src="/dfl-logo.png" 
                  alt="Dexterous Fingers Limited (DFL) Logo - Home" 
                  className="h-12 sm:h-16 md:h-20 w-auto transition-transform duration-300 group-hover:scale-105 drop-shadow-sm" 
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
            <div className="md:hidden flex items-center mobile-menu-container">
              <button
                onClick={handleMenuToggle}
                onTouchStart={handleMenuToggle}
                className="text-gray-700 hover:text-primary-600 focus:outline-none focus:text-primary-600 p-3 rounded-lg hover:bg-gray-100 transition-all duration-200 border border-gray-200 bg-white shadow-md hover:shadow-lg min-w-[48px] min-h-[48px] flex items-center justify-center"
                aria-label="Toggle mobile menu"
                type="button"
                style={{ touchAction: 'manipulation' }}
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
          
          {/* Mobile Navigation - Fixed positioning to prevent hiding behind content */}
          {isOpen && (
            <div className="md:hidden fixed top-16 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-[10000] mobile-menu-container">
              <div className="px-4 py-2 space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-700 hover:text-primary-600 block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 hover:bg-gray-50"
                    onClick={handleMenuClose}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="border-t border-gray-200 my-2"></div>
                {highlightedLinks.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-primary-600 font-semibold block px-4 py-3 rounded-lg text-base hover:bg-primary-50 transition-all duration-200"
                    onClick={handleMenuClose}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-2">
                  <Link
                    href="/careers"
                    className="btn-primary flex items-center justify-center w-full"
                    onClick={handleMenuClose}
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