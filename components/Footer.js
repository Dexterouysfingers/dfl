'use client'

import Link from 'next/link'
import { Mail, MapPin, Phone } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container-custom py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-8 overflow-visible">
              <img 
                src="/dfl-logo.png" 
                alt="DFL Logo" 
                className="h-40 w-auto max-w-[450px] filter brightness-0 invert drop-shadow-lg" 
              />
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Dexterous Fingers Limited provides smart tools and solutions for agriculture 
              and food manufacturing across Africa, empowering farmers and processors with 
              innovative technology.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-gray-300 hover:text-primary-400 transition-colors duration-300 group">
                <Phone className="w-4 h-4 mr-3 text-primary-400 group-hover:scale-110 transition-transform duration-300" />
                <span>+234 (0) 806 943 6415</span>
              </div>
              <div className="flex items-center text-gray-300 hover:text-primary-400 transition-colors duration-300 group">
                <Mail className="w-4 h-4 mr-3 text-primary-400 group-hover:scale-110 transition-transform duration-300" />
                <span>info@dexterousfingers.com</span>
              </div>
              <div className="flex items-center text-gray-300 hover:text-primary-400 transition-colors duration-300 group">
                <MapPin className="w-4 h-4 mr-3 text-primary-400 group-hover:scale-110 transition-transform duration-300" />
                <span>Lagos, Nigeria</span>
              </div>
              <div className="flex items-center text-gray-300">
                <span className="text-sm">CAC Registration: RC 1416117</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4"></div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-primary-400 transition-all duration-300 transform hover:translate-x-1 block group">
                  <span className="flex items-center">
                    <span className="w-0 h-0.5 bg-gradient-to-r from-primary-400 to-green-400 transition-all duration-300 group-hover:w-4 mr-2"></span>
                    About Us
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="text-gray-300 hover:text-primary-400 transition-all duration-300 transform hover:translate-x-1 block group">
                  <span className="flex items-center">
                    <span className="w-0 h-0.5 bg-gradient-to-r from-primary-400 to-green-400 transition-all duration-300 group-hover:w-4 mr-2"></span>
                    Solutions
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-primary-400 transition-all duration-300 transform hover:translate-x-1 block group">
                  <span className="flex items-center">
                    <span className="w-0 h-0.5 bg-gradient-to-r from-primary-400 to-green-400 transition-all duration-300 group-hover:w-4 mr-2"></span>
                    Contact
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">
              Solutions
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/solutions#farmers" className="text-gray-300 hover:text-primary-400 transition-all duration-300 transform hover:translate-x-1 block group">
                  <span className="flex items-center">
                    <span className="w-0 h-0.5 bg-gradient-to-r from-primary-400 to-green-400 transition-all duration-300 group-hover:w-4 mr-2"></span>
                    For Farmers
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/solutions#processors" className="text-gray-300 hover:text-primary-400 transition-all duration-300 transform hover:translate-x-1 block group">
                  <span className="flex items-center">
                    <span className="w-0 h-0.5 bg-gradient-to-r from-primary-400 to-green-400 transition-all duration-300 group-hover:w-4 mr-2"></span>
                    For Processors
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/solutions#ngos" className="text-gray-300 hover:text-primary-400 transition-all duration-300 transform hover:translate-x-1 block group">
                  <span className="flex items-center">
                    <span className="w-0 h-0.5 bg-gradient-to-r from-primary-400 to-green-400 transition-all duration-300 group-hover:w-4 mr-2"></span>
                    For NGOs
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/df-shops" className="text-gray-300 hover:text-primary-400 transition-all duration-300 transform hover:translate-x-1 block group">
                  <span className="flex items-center">
                    <span className="w-0 h-0.5 bg-gradient-to-r from-primary-400 to-green-400 transition-all duration-300 group-hover:w-4 mr-2"></span>
                    DF Shops
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/df-foods" className="text-gray-300 hover:text-primary-400 transition-all duration-300 transform hover:translate-x-1 block group">
                  <span className="flex items-center">
                    <span className="w-0 h-0.5 bg-gradient-to-r from-primary-400 to-green-400 transition-all duration-300 group-hover:w-4 mr-2"></span>
                    DF Foods
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Dexterous Fingers Limited. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
} 