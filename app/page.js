'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Leaf, Factory, Users, TrendingUp } from 'lucide-react'

export default function Home() {
  return (
    <div>
      {/* Hero Carousel Section */}
      <section className="relative">
        <div className="relative overflow-hidden">
          {/* Slide 1 - Main Hero with Background Image */}
          <div className="relative h-screen flex items-center" style={{ backgroundImage: 'url(/homesection1.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="absolute inset-0 hero-gradient"></div>
            <div className="container-custom relative z-10">
              <div className="text-center max-w-4xl mx-auto stagger-animation">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight text-shadow-lg px-4">
                  Smart Solutions for
                  <span className="gradient-text block"> African Agriculture</span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed text-shadow px-4">
                  Empowering farmers and food processors across Africa with innovative 
                  technology solutions that drive efficiency, sustainability, and growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
                  <Link href="/solutions" className="btn-primary pulse-glow text-sm sm:text-base">
                    Explore Solutions
                  </Link>
                  <Link href="/about" className="btn-secondary text-sm sm:text-base">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section with Image */}
      <section className="py-12 sm:py-16 md:py-20 section-gradient bg-pattern">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div className="stagger-animation">
              <div className="flex items-center mb-4">
                <div className="w-8 sm:w-12 h-1 bg-gradient-to-r from-primary-600 to-green-600 rounded-full mr-3 sm:mr-4"></div>
                <span className="text-primary-600 font-semibold text-sm sm:text-base">Our Approach</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                Transforming Agriculture Through Technology
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                DFL is a global Agtech company focused on solving deficiencies in the food value chain. 
                Our business model leverages technology to connect stakeholders with easy access to 
                aggregate farm produce, raw agro-products and processed food.
              </p>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Our Purpose is to deliver premium value to stakeholders in the food value chain. 
                We are keen on leaving a strong legacy which is why we are focused on building 
                a household name unrivaled in Africa's digital agricultural space.
              </p>
            </div>
            <div className="gradient-border">
              <Image 
                src="/section2.png" 
                alt="DFL Agricultural Solutions" 
                width={600}
                height={400}
                className="w-full h-auto rounded-xl"
                loading="lazy"
                priority={false}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section with Background */}
      <section className="py-12 sm:py-16 md:py-20 text-white relative overflow-hidden" style={{ backgroundImage: 'url(/Black.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60"></div>
        <div className="container-custom relative z-10">
          <div className="text-center max-w-4xl mx-auto stagger-animation">
            <div className="flex items-center justify-center mb-4">
              <div className="w-8 sm:w-12 h-1 bg-gradient-to-r from-primary-400 to-green-400 rounded-full mr-3 sm:mr-4"></div>
              <span className="text-primary-400 font-semibold text-sm sm:text-base">Our Methodology</span>
              <div className="w-8 sm:w-12 h-1 bg-gradient-to-r from-primary-400 to-green-400 rounded-full ml-3 sm:ml-4"></div>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-shadow-lg px-4">
              How We Do It
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed text-shadow px-4">
              At DFL, we have aligned our business models with Sustainable Development Goal 2, 
              to end all forms of hunger while promoting food security across Africa. Our 
              tech-infused platform drives an enabling environment for farmers and sets up 
              more efficient food distribution channels.
            </p>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 section-gradient">
        <div className="container-custom">
          <div className="text-center mb-16 stagger-animation">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-1 bg-gradient-to-r from-primary-600 to-green-600 rounded-full mr-4"></div>
              <span className="text-primary-600 font-semibold">See Our Impact</span>
              <div className="w-12 h-1 bg-gradient-to-r from-primary-600 to-green-600 rounded-full ml-4"></div>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Transforming Agriculture Across Africa
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Watch how our technology solutions are transforming agriculture across Africa.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-xl overflow-hidden shadow-2xl card-hover gradient-border">
              <video 
                className="w-full h-auto" 
                autoPlay 
                muted 
                loop 
                playsInline
                style={{ maxHeight: '500px', objectFit: 'cover' }}
              >
                <source src="/Collagedangote.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-pattern">
        <div className="container-custom">
          <div className="text-center mb-16 stagger-animation">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-1 bg-gradient-to-r from-primary-600 to-green-600 rounded-full mr-4"></div>
              <span className="text-primary-600 font-semibold">Our Core Solutions</span>
              <div className="w-12 h-1 bg-gradient-to-r from-primary-600 to-green-600 rounded-full ml-4"></div>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Technology-Driven Agricultural Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Leveraging technology to connect stakeholders with easy access to aggregate 
              farm produce, raw agro-products and processed food.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-animation">
            <div className="card text-center p-8 hover:transform hover:scale-105 transition-all duration-500">
              <div className="bg-gradient-to-br from-primary-100 to-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Leaf className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Smart Farming
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Advanced monitoring systems and data-driven insights to maximize 
                agricultural productivity and sustainability.
              </p>
            </div>

            <div className="card text-center p-8 hover:transform hover:scale-105 transition-all duration-500">
              <div className="bg-gradient-to-br from-blue-100 to-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Factory className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Food Processing
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Automated processing systems and quality control for food 
                manufacturers across the continent.
              </p>
            </div>

            <div className="card text-center p-8 hover:transform hover:scale-105 transition-all duration-500">
              <div className="bg-gradient-to-br from-orange-100 to-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <TrendingUp className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Data-Driven Insights
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Make informed decisions with real-time analytics and predictive 
                modeling for better yields and efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Preview with Background Pattern */}
      <section className="py-20 relative overflow-hidden" style={{ backgroundImage: 'url(/fcshopandfood.svg)', backgroundSize: 'cover', backgroundPosition: 'center bottom' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        <div className="container-custom relative z-10">
          <div className="text-center mb-16 stagger-animation">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-1 bg-gradient-to-r from-primary-400 to-green-400 rounded-full mr-4"></div>
              <span className="text-primary-400 font-semibold">Tailored Solutions</span>
              <div className="w-12 h-1 bg-gradient-to-r from-primary-400 to-green-400 rounded-full ml-4"></div>
            </div>
            <h2 className="text-4xl font-bold text-white mb-4 text-shadow-lg">
              Solutions for Every Need
            </h2>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto text-shadow">
              From small-scale farmers to large food processors, we have solutions 
              tailored to your specific requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-animation">
            <div className="card p-8 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="bg-gradient-to-br from-primary-100 to-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 shadow-md">
                <Leaf className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                For Farmers
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Smart farming tools, crop monitoring, and market access solutions 
                to maximize your agricultural productivity.
              </p>
              <Link href="/solutions#farmers" className="text-primary-600 hover:text-primary-700 font-medium animated-underline inline-flex items-center">
                Learn More 
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            <div className="card p-8 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="bg-gradient-to-br from-blue-100 to-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 shadow-md">
                <Factory className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                For Processors
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Automated processing systems, quality control, and supply chain 
                optimization for food manufacturers.
              </p>
              <Link href="/solutions#processors" className="text-primary-600 hover:text-primary-700 font-medium animated-underline inline-flex items-center">
                Learn More 
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            <div className="card p-8 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 shadow-md">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                For NGOs
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Community development tools, impact measurement, and capacity 
                building solutions for agricultural programs.
              </p>
              <Link href="/solutions#ngos" className="text-primary-600 hover:text-primary-700 font-medium animated-underline inline-flex items-center">
                Learn More 
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary-600 to-green-600 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container-custom text-center relative z-10">
          <div className="stagger-animation">
            <div className="flex items-center justify-center mb-4">
              <span className="text-white font-semibold">Ready to Transform?</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-4 text-shadow-lg">
              Ready to Transform Your Agriculture?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto leading-relaxed text-shadow">
              Join hundreds of farmers and processors who are already using DFL 
              solutions to improve their operations and increase their profits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-md">
                Start Today
              </Link>
              <Link href="/about" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 