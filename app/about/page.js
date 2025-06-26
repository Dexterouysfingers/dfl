import { Award, Target, Users, Globe } from 'lucide-react'

export default function About() {
  return (
    <div>
      {/* Hero Section with Background */}
      <section className="py-20 relative" style={{ backgroundImage: 'url(/new_hero_bg.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 hero-gradient"></div>
        <div className="container-custom relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-white mb-6 text-shadow-lg">
              About DFL
            </h1>
            <p className="text-xl text-gray-200 text-shadow">
              Pioneering the future of African agriculture through innovative 
              technology solutions and sustainable practices.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 section-gradient bg-pattern">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-12 h-1 bg-gradient-to-r from-primary-600 to-green-600 rounded-full mr-4"></div>
                <span className="text-primary-600 font-semibold">Our Mission</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Empowering African Agriculture
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                To empower African farmers and food processors with cutting-edge 
                technology solutions that drive efficiency, sustainability, and 
                economic growth across the continent.
              </p>
              <p className="text-lg text-gray-600">
                We believe that technology can bridge the gap between traditional 
                farming practices and modern agricultural needs, creating a more 
                prosperous and sustainable future for Africa's agricultural sector.
              </p>
            </div>
            <div className="gradient-border">
              <div className="bg-gradient-to-br from-primary-50 to-green-50 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
                <Target className="w-12 h-12 text-primary-600 mb-4" />
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Our Vision
                </h3>
                <p className="text-gray-600">
                  To be the leading Agri-FoodTech company in Africa, transforming 
                  the agricultural landscape through innovative solutions that 
                  benefit farmers, processors, and communities alike.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-5"></div>
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-1 bg-gradient-to-r from-primary-400 to-green-400 rounded-full mr-4"></div>
              <span className="text-primary-400 font-semibold">Our Values</span>
              <div className="w-12 h-1 bg-gradient-to-r from-primary-400 to-green-400 rounded-full ml-4"></div>
            </div>
            <h2 className="text-4xl font-bold mb-4 text-shadow-lg">
              Core Values That Drive Us
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto text-shadow">
              These core values guide everything we do and shape our relationships 
              with clients, partners, and communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center hover:transform hover:scale-105 transition-transform duration-300 group">
              <div className="bg-gradient-to-br from-primary-600 to-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Excellence
              </h3>
              <p className="text-gray-300">
                We strive for excellence in every solution we deliver, ensuring 
                the highest quality and reliability for our clients.
              </p>
            </div>

            <div className="text-center hover:transform hover:scale-105 transition-transform duration-300 group">
              <div className="bg-gradient-to-br from-primary-600 to-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Community
              </h3>
              <p className="text-gray-300">
                We believe in building strong communities and supporting local 
                agricultural development across Africa.
              </p>
            </div>

            <div className="text-center hover:transform hover:scale-105 transition-transform duration-300 group">
              <div className="bg-gradient-to-br from-primary-600 to-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Sustainability
              </h3>
              <p className="text-gray-300">
                Environmental responsibility is at the heart of our solutions, 
                promoting sustainable agricultural practices.
              </p>
            </div>

            <div className="text-center hover:transform hover:scale-105 transition-transform duration-300 group">
              <div className="bg-gradient-to-br from-primary-600 to-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Innovation
              </h3>
              <p className="text-gray-300">
                We continuously innovate and adapt our solutions to meet the 
                evolving needs of African agriculture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 section-gradient">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-1 bg-gradient-to-r from-primary-600 to-green-600 rounded-full mr-4"></div>
              <span className="text-primary-600 font-semibold">Our Story</span>
              <div className="w-12 h-1 bg-gradient-to-r from-primary-600 to-green-600 rounded-full ml-4"></div>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              From Vision to Reality
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Founded with a vision to revolutionize African agriculture, DFL has grown from 
              a small startup to a leading Agri-FoodTech company. Our journey began with a 
              simple observation: the immense potential of African agriculture was being 
              limited by outdated practices and lack of access to modern technology.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mt-6">
              Today, we work with thousands of farmers and food processors across the 
              continent, helping them adopt smart farming practices, improve their yields, 
              and access better markets. Our commitment to innovation and sustainability 
              continues to drive our mission of building a more prosperous future for 
              African agriculture.
            </p>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="bg-gradient-to-r from-primary-600 to-green-600 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <span className="text-white font-semibold">Our Impact</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-4 text-shadow-lg">
              Transforming African Agriculture
            </h2>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto text-shadow">
              Numbers that tell the story of our commitment to transforming 
              African agriculture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="hover:transform hover:scale-110 transition-transform duration-300 group">
              <div className="text-4xl font-bold text-white mb-2 group-hover:text-primary-200 transition-colors duration-300">500+</div>
              <div className="text-primary-100">Farmers Empowered</div>
            </div>
            <div className="hover:transform hover:scale-110 transition-transform duration-300 group">
              <div className="text-4xl font-bold text-white mb-2 group-hover:text-primary-200 transition-colors duration-300">50+</div>
              <div className="text-primary-100">Food Processors</div>
            </div>
            <div className="hover:transform hover:scale-110 transition-transform duration-300 group">
              <div className="text-4xl font-bold text-white mb-2 group-hover:text-primary-200 transition-colors duration-300">15</div>
              <div className="text-primary-100">African Countries</div>
            </div>
            <div className="hover:transform hover:scale-110 transition-transform duration-300 group">
              <div className="text-4xl font-bold text-white mb-2 group-hover:text-primary-200 transition-colors duration-300">40%</div>
              <div className="text-primary-100">Average Yield Increase</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 