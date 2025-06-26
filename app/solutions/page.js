import { Leaf, Factory, Users, Smartphone, BarChart3, Shield, Zap, TrendingUp } from 'lucide-react'

export default function Solutions() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-green-100 py-20 bg-pattern">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <span className="text-primary-600 font-semibold text-lg">Our Solutions</span>
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Technology Solutions for Every Need
            </h1>
            <p className="text-xl text-gray-600">
              Tailored technology solutions designed to meet the unique needs 
              of farmers, food processors, and NGOs across Africa.
            </p>
          </div>
        </div>
      </section>

      {/* For Farmers */}
      <section id="farmers" className="py-20 section-gradient">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-primary-100 to-green-100 w-12 h-12 rounded-lg flex items-center justify-center mr-4 shadow-md">
                  <Leaf className="w-6 h-6 text-primary-600" />
                </div>
                <h2 className="text-4xl font-bold text-gray-900">
                  For Farmers
                </h2>
              </div>
              <p className="text-lg text-gray-600 mb-8">
                Empower your farming operations with smart technology solutions 
                that increase yields, reduce costs, and improve sustainability.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start group">
                  <div className="bg-gradient-to-br from-primary-100 to-green-100 w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1 shadow-sm group-hover:shadow-md transition-shadow duration-300">
                    <Smartphone className="w-4 h-4 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Smart Farming Apps
                    </h3>
                    <p className="text-gray-600">
                      Mobile applications for crop monitoring, weather tracking, 
                      and market price alerts to optimize your farming decisions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="bg-gradient-to-br from-primary-100 to-green-100 w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1 shadow-sm group-hover:shadow-md transition-shadow duration-300">
                    <BarChart3 className="w-4 h-4 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Precision Agriculture
                    </h3>
                    <p className="text-gray-600">
                      IoT sensors and data analytics to monitor soil conditions, 
                      irrigation needs, and crop health in real-time.
                    </p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="bg-gradient-to-br from-primary-100 to-green-100 w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1 shadow-sm group-hover:shadow-md transition-shadow duration-300">
                    <TrendingUp className="w-4 h-4 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Market Access
                    </h3>
                    <p className="text-gray-600">
                      Direct connections to buyers and processors, eliminating 
                      middlemen and maximizing your profits.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="gradient-border">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  Key Benefits
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center group">
                    <div className="w-2 h-2 bg-gradient-to-r from-primary-600 to-green-600 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                    <span className="text-gray-700 group-hover:text-primary-600 transition-colors duration-300">40% average yield increase</span>
                  </div>
                  <div className="flex items-center group">
                    <div className="w-2 h-2 bg-gradient-to-r from-primary-600 to-green-600 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                    <span className="text-gray-700 group-hover:text-primary-600 transition-colors duration-300">30% reduction in water usage</span>
                  </div>
                  <div className="flex items-center group">
                    <div className="w-2 h-2 bg-gradient-to-r from-primary-600 to-green-600 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                    <span className="text-gray-700 group-hover:text-primary-600 transition-colors duration-300">50% better market prices</span>
                  </div>
                  <div className="flex items-center group">
                    <div className="w-2 h-2 bg-gradient-to-r from-primary-600 to-green-600 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                    <span className="text-gray-700 group-hover:text-primary-600 transition-colors duration-300">Real-time decision support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Processors */}
      <section id="processors" className="bg-pattern py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="gradient-border">
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                    Key Benefits
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center group">
                      <div className="w-2 h-2 bg-gradient-to-r from-primary-600 to-green-600 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                      <span className="text-gray-700 group-hover:text-primary-600 transition-colors duration-300">60% increase in processing efficiency</span>
                    </div>
                    <div className="flex items-center group">
                      <div className="w-2 h-2 bg-gradient-to-r from-primary-600 to-green-600 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                      <span className="text-gray-700 group-hover:text-primary-600 transition-colors duration-300">99.9% quality compliance rate</span>
                    </div>
                    <div className="flex items-center group">
                      <div className="w-2 h-2 bg-gradient-to-r from-primary-600 to-green-600 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                      <span className="text-gray-700 group-hover:text-primary-600 transition-colors duration-300">25% reduction in operational costs</span>
                    </div>
                    <div className="flex items-center group">
                      <div className="w-2 h-2 bg-gradient-to-r from-primary-600 to-green-600 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                      <span className="text-gray-700 group-hover:text-primary-600 transition-colors duration-300">Automated quality control</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-blue-100 to-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center mr-4 shadow-md">
                  <Factory className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-4xl font-bold text-gray-900">
                  For Processors
                </h2>
              </div>
              <p className="text-lg text-gray-600 mb-8">
                Streamline your food processing operations with automated systems, 
                quality control, and supply chain optimization solutions.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start group">
                  <div className="bg-gradient-to-br from-blue-100 to-indigo-100 w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1 shadow-sm group-hover:shadow-md transition-shadow duration-300">
                    <Zap className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Automated Processing
                    </h3>
                    <p className="text-gray-600">
                      Smart machinery and robotics to automate repetitive tasks, 
                      increase throughput, and reduce human error.
                    </p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="bg-gradient-to-br from-blue-100 to-indigo-100 w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1 shadow-sm group-hover:shadow-md transition-shadow duration-300">
                    <Shield className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Quality Control
                    </h3>
                    <p className="text-gray-600">
                      Advanced sensors and AI-powered systems to ensure consistent 
                      product quality and compliance with international standards.
                    </p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="bg-gradient-to-br from-blue-100 to-indigo-100 w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1 shadow-sm group-hover:shadow-md transition-shadow duration-300">
                    <BarChart3 className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Supply Chain Management
                    </h3>
                    <p className="text-gray-600">
                      End-to-end visibility and optimization of your supply chain 
                      from farm to market, reducing waste and improving efficiency.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For NGOs */}
      <section id="ngos" className="py-20 section-gradient">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-purple-100 to-pink-100 w-12 h-12 rounded-lg flex items-center justify-center mr-4 shadow-md">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <h2 className="text-4xl font-bold text-gray-900">
                  For NGOs
                </h2>
              </div>
              <p className="text-lg text-gray-600 mb-8">
                Support your agricultural development programs with technology 
                solutions that enhance impact measurement and community engagement.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start group">
                  <div className="bg-gradient-to-br from-purple-100 to-pink-100 w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1 shadow-sm group-hover:shadow-md transition-shadow duration-300">
                    <BarChart3 className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Impact Measurement
                    </h3>
                    <p className="text-gray-600">
                      Comprehensive tools to track and measure the impact of your 
                      agricultural programs and community development initiatives.
                    </p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="bg-gradient-to-br from-purple-100 to-pink-100 w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1 shadow-sm group-hover:shadow-md transition-shadow duration-300">
                    <Users className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Community Engagement
                    </h3>
                    <p className="text-gray-600">
                      Digital platforms to connect with farmers, share knowledge, 
                      and build stronger agricultural communities.
                    </p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="bg-gradient-to-br from-purple-100 to-pink-100 w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1 shadow-sm group-hover:shadow-md transition-shadow duration-300">
                    <TrendingUp className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Capacity Building
                    </h3>
                    <p className="text-gray-600">
                      Training and educational resources to build local capacity 
                      and empower communities with agricultural knowledge.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="gradient-border">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  Key Benefits
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center group">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                    <span className="text-gray-700 group-hover:text-purple-600 transition-colors duration-300">Enhanced program impact tracking</span>
                  </div>
                  <div className="flex items-center group">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                    <span className="text-gray-700 group-hover:text-purple-600 transition-colors duration-300">Improved community engagement</span>
                  </div>
                  <div className="flex items-center group">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                    <span className="text-gray-700 group-hover:text-purple-600 transition-colors duration-300">Better resource allocation</span>
                  </div>
                  <div className="flex items-center group">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                    <span className="text-gray-700 group-hover:text-purple-600 transition-colors duration-300">Sustainable development outcomes</span>
                  </div>
                </div>
              </div>
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
              <span className="text-white font-semibold">Ready to Get Started?</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-4 text-shadow-lg">
              Transform Your Agricultural Operations
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto text-shadow">
              Join hundreds of farmers, processors, and organizations who are already 
              using DFL solutions to improve their operations and increase their impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-md">
                Get Started Today
              </a>
              <a href="/about" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 