import { Shield, Truck, Factory, Award, MapPin, Clock, Users, Zap } from 'lucide-react'

export default function Facilities() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 relative" style={{ backgroundImage: 'url(/warehouse1.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        <div className="container-custom relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <span className="text-primary-400 font-semibold text-lg">Our Facilities</span>
            </div>
            <h1 className="text-5xl font-bold text-white mb-6 text-shadow-lg">
              Where We Process & Store
            </h1>
            <p className="text-xl text-gray-200 text-shadow">
              Take a look at our food processing center and warehouses where we handle 
              everything from raw materials to finished products for our customers.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 section-gradient bg-pattern">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-1 bg-gradient-to-r from-primary-600 to-green-600 rounded-full mr-4"></div>
              <span className="text-primary-600 font-semibold">What We Have</span>
              <div className="w-12 h-1 bg-gradient-to-r from-primary-600 to-green-600 rounded-full ml-4"></div>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Processing & Storage Setup
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've built facilities that handle the complete journey of food products - from 
              when we receive raw materials to processing, packaging, and getting them to our customers. 
              Everything is designed with food safety and quality in mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center p-8 hover:transform hover:scale-105 transition-all duration-500">
              <div className="bg-gradient-to-br from-primary-100 to-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Factory className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Processing Center
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our processing facility has modern equipment that helps us maintain 
                consistent quality while handling large volumes efficiently.
              </p>
            </div>

            <div className="card text-center p-8 hover:transform hover:scale-105 transition-all duration-500">
              <div className="bg-gradient-to-br from-blue-100 to-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Truck className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Storage & Distribution
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Temperature-controlled warehouses with systems that help us track 
                inventory and maintain optimal storage conditions.
              </p>
            </div>

            <div className="card text-center p-8 hover:transform hover:scale-105 transition-all duration-500">
              <div className="bg-gradient-to-br from-orange-100 to-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Shield className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Quality Control
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We have strict quality checks and food safety procedures, plus 
                our own lab for testing products.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Facility Details */}
      <section className="py-20 bg-pattern">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-primary-100 to-green-100 w-12 h-12 rounded-lg flex items-center justify-center mr-4 shadow-md">
                  <Factory className="w-6 h-6 text-primary-600" />
                </div>
                <h2 className="text-4xl font-bold text-gray-900">
                  Our Food Processing Center
                </h2>
              </div>
              <p className="text-lg text-gray-600 mb-8">
                This is where the magic happens. Our licensed processing facility has the equipment 
                we need to handle different types of agricultural products while keeping everything 
                safe and up to standard.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start group">
                  <div className="bg-gradient-to-br from-primary-100 to-green-100 w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1 shadow-sm group-hover:shadow-md transition-shadow duration-300">
                    <Zap className="w-4 h-4 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Processing Lines
                    </h3>
                    <p className="text-gray-600">
                      We have automated processing equipment that helps us maintain quality 
                      and handle large volumes efficiently.
                    </p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="bg-gradient-to-br from-primary-100 to-green-100 w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1 shadow-sm group-hover:shadow-md transition-shadow duration-300">
                    <Award className="w-4 h-4 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Licensed Abattoir
                    </h3>
                    <p className="text-gray-600">
                      Our abattoir is fully licensed and follows strict health and safety 
                      procedures for processing livestock.
                    </p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="bg-gradient-to-br from-primary-100 to-green-100 w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1 shadow-sm group-hover:shadow-md transition-shadow duration-300">
                    <Shield className="w-4 h-4 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Food Safety Certified
                    </h3>
                    <p className="text-gray-600">
                      We're HACCP certified and have systems in place to ensure food safety 
                      at every step of the process.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="gradient-border">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  What We Can Handle
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center group">
                    <div className="w-2 h-2 bg-gradient-to-r from-primary-600 to-green-600 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                    <span className="text-gray-700 group-hover:text-primary-600 transition-colors duration-300">Process 50+ tons daily</span>
                  </div>
                  <div className="flex items-center group">
                    <div className="w-2 h-2 bg-gradient-to-r from-primary-600 to-green-600 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                    <span className="text-gray-700 group-hover:text-primary-600 transition-colors duration-300">Temperature-controlled storage</span>
                  </div>
                  <div className="flex items-center group">
                    <div className="w-2 h-2 bg-gradient-to-r from-primary-600 to-green-600 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                    <span className="text-gray-700 group-hover:text-primary-600 transition-colors duration-300">24/7 security monitoring</span>
                  </div>
                  <div className="flex items-center group">
                    <div className="w-2 h-2 bg-gradient-to-r from-primary-600 to-green-600 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                    <span className="text-gray-700 group-hover:text-primary-600 transition-colors duration-300">ISO 22000 certified</span>
                  </div>
                  <div className="flex items-center group">
                    <div className="w-2 h-2 bg-gradient-to-r from-primary-600 to-green-600 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                    <span className="text-gray-700 group-hover:text-primary-600 transition-colors duration-300">Proper waste management</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Warehouse Section */}
      <section className="py-20 section-gradient">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="gradient-border">
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                    Warehouse Features
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center group">
                      <div className="w-2 h-2 bg-gradient-to-r from-primary-600 to-green-600 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                      <span className="text-gray-700 group-hover:text-primary-600 transition-colors duration-300">Climate-controlled storage areas</span>
                    </div>
                    <div className="flex items-center group">
                      <div className="w-2 h-2 bg-gradient-to-r from-primary-600 to-green-600 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                      <span className="text-gray-700 group-hover:text-primary-600 transition-colors duration-300">Automated inventory management</span>
                    </div>
                    <div className="flex items-center group">
                      <div className="w-2 h-2 bg-gradient-to-r from-primary-600 to-green-600 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                      <span className="text-gray-700 group-hover:text-primary-600 transition-colors duration-300">Loading docks and logistics hub</span>
                    </div>
                    <div className="flex items-center group">
                      <div className="w-2 h-2 bg-gradient-to-r from-primary-600 to-green-600 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                      <span className="text-gray-700 group-hover:text-primary-600 transition-colors duration-300">Real-time tracking systems</span>
                    </div>
                    <div className="flex items-center group">
                      <div className="w-2 h-2 bg-gradient-to-r from-primary-600 to-green-600 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                      <span className="text-gray-700 group-hover:text-primary-600 transition-colors duration-300">Pest control and hygiene protocols</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-blue-100 to-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center mr-4 shadow-md">
                  <Truck className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-4xl font-bold text-gray-900">
                  Storage & Distribution Hub
                </h2>
              </div>
              <p className="text-lg text-gray-600 mb-8">
                Our warehouses are set up to store different types of agricultural products 
                properly, with systems that help us manage inventory and get products to 
                customers efficiently.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start group">
                  <div className="bg-gradient-to-br from-blue-100 to-indigo-100 w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1 shadow-sm group-hover:shadow-md transition-shadow duration-300">
                    <MapPin className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Good Location
                    </h3>
                    <p className="text-gray-600">
                      Our warehouse is in a central location with easy access to major 
                      roads, making distribution efficient.
                    </p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="bg-gradient-to-br from-blue-100 to-indigo-100 w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1 shadow-sm group-hover:shadow-md transition-shadow duration-300">
                    <Clock className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Always Open
                    </h3>
                    <p className="text-gray-600">
                      We operate 24/7 with automated systems that keep products flowing 
                      and available when customers need them.
                    </p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="bg-gradient-to-br from-blue-100 to-indigo-100 w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1 shadow-sm group-hover:shadow-md transition-shadow duration-300">
                    <Users className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Experienced Team
                    </h3>
                    <p className="text-gray-600">
                      Our warehouse staff knows how to handle food products properly, 
                      with training in storage, handling, and distribution.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality & Safety */}
      <section className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-5"></div>
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-1 bg-gradient-to-r from-primary-400 to-green-400 rounded-full mr-4"></div>
              <span className="text-primary-400 font-semibold">Quality & Safety</span>
              <div className="w-12 h-1 bg-gradient-to-r from-primary-400 to-green-400 rounded-full ml-4"></div>
            </div>
            <h2 className="text-4xl font-bold mb-4 text-shadow-lg">
              We Don't Compromise on Quality
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto text-shadow">
              Food safety and quality are non-negotiable for us. We have systems and 
              procedures that ensure everything meets the highest standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center hover:transform hover:scale-105 transition-transform duration-300 group">
              <div className="bg-gradient-to-br from-primary-600 to-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                HACCP Certified
              </h3>
              <p className="text-gray-300">
                We follow HACCP principles to identify and control food safety 
                risks throughout our processes.
              </p>
            </div>

            <div className="text-center hover:transform hover:scale-105 transition-transform duration-300 group">
              <div className="bg-gradient-to-br from-primary-600 to-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                ISO 22000
              </h3>
              <p className="text-gray-300">
                Our food safety management system meets international standards 
                for consistent quality and safety.
              </p>
            </div>

            <div className="text-center hover:transform hover:scale-105 transition-transform duration-300 group">
              <div className="bg-gradient-to-br from-primary-600 to-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Regular Checks
              </h3>
              <p className="text-gray-300">
                We monitor everything continuously and bring in outside auditors 
                to make sure we're maintaining high standards.
              </p>
            </div>

            <div className="text-center hover:transform hover:scale-105 transition-transform duration-300 group">
              <div className="bg-gradient-to-br from-primary-600 to-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Trained Staff
              </h3>
              <p className="text-gray-300">
                Our team gets regular training on food safety, hygiene, and 
                quality control procedures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary-600 to-green-600 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="container-custom text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <span className="text-white font-semibold">Want to See for Yourself?</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-4 text-shadow-lg">
              Come Visit Our Facilities
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto text-shadow">
              We'd love to show you around our processing center and warehouses. 
              Contact us to schedule a tour or talk about how we can work together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-md">
                Schedule a Tour
              </a>
              <a href="/solutions" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 