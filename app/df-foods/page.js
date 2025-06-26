import Image from 'next/image';
import { Clock, FileText, Smile, Gem } from 'lucide-react';

export default function DFFoodsPage() {
  return (
    <div className="bg-white w-full">
      {/* Hero Section */}
      <section className="relative w-full min-h-[400px] flex flex-col justify-center items-center bg-gray-100 overflow-hidden">
        <Image
          src="/dfshop-hero.jpg" // Use the same hero image as DF Shops
          alt="DF Foods Hero"
          fill
          className="object-cover object-center opacity-60"
          priority
        />
        {/* Enhanced hero text visibility */}
        <div className="relative z-30 max-w-3xl w-full p-8 mt-8">
          <div className="bg-black bg-opacity-60 rounded-xl p-8 shadow-2xl flex flex-col items-start">
            <span className="flex items-center mb-4">
              <span className="bg-green-600 text-white px-3 py-1 rounded font-extrabold text-base tracking-wide shadow">DF Foods</span>
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg">Revolutionizing Food Distribution Across Nigeria</h1>
            <p className="text-lg md:text-2xl text-gray-100 font-medium drop-shadow-lg max-w-xl">
              DF Foods is a comprehensive food distribution platform connecting farmers, processors, and consumers. We deliver fresh food products, groceries, and hygienic livestock through our licensed abattoir, ensuring quality and efficiency from farm to table.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 px-4 md:px-0 flex flex-col items-center bg-white">
        <span className="text-green-600 font-semibold uppercase tracking-widest text-xs mb-2">More About Us</span>
        <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-8">WHAT DF FOODS IS ALL ABOUT</h2>
        <div className="w-full max-w-6xl flex flex-col items-center">
          {/* Four Animated Photos Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 w-full">
            {/* Photo 1 - Digital Marketplace */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <div className="relative w-full h-64">
                <Image
                  src="/warehouse1.jpeg"
                  alt="Digital Marketplace"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-bold text-lg mb-2">Digital Marketplace</h3>
                  <p className="text-gray-200 text-sm">One-stop platform for trading raw agro-products</p>
                </div>
              </div>
            </div>

            {/* Photo 2 - Fresh Foods */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <div className="relative w-full h-64">
                <Image
                  src="/warehouse2.jpeg"
                  alt="Fresh Foods"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-bold text-lg mb-2">Fresh Foods</h3>
                  <p className="text-gray-200 text-sm">Convenient purchase of fresh food products</p>
                </div>
              </div>
            </div>

            {/* Photo 3 - Licensed Abattoir */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <div className="relative w-full h-64">
                <Image
                  src="/warehouse3.jpeg"
                  alt="Licensed Abattoir"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-bold text-lg mb-2">Licensed Abattoir</h3>
                  <p className="text-gray-200 text-sm">Hygienic livestock delivery to consumers</p>
                </div>
              </div>
            </div>

            {/* Photo 4 - Supply Chain */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <div className="relative w-full h-64">
                <Image
                  src="/warehouse4.jpeg"
                  alt="Supply Chain"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-bold text-lg mb-2">Supply Chain</h3>
                  <p className="text-gray-200 text-sm">Seamless distribution from farm to table</p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-gray-700 text-center max-w-2xl">
            DF Foods delivers processed foods and products to SMEs and MSMEs in the retail chain by enhancing an effortless distribution of goods at the best price. With DF Foods, businesses can conveniently bank on us for a seamless supply chain management from start to finish.
          </p>
        </div>
      </section>

      {/* Features/Benefits Section */}
      <section className="py-12 px-4 md:px-0 bg-white">
        <h3 className="text-xl md:text-2xl font-bold text-center mb-8">HARNESSING TECHNOLOGY TO REVOLUTIONIZE FOOD DISTRIBUTION IN NIGERIA</h3>
        
        {/* Creative Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div className="rounded-lg overflow-hidden shadow-sm">
            <Image src="/food1.PNG" alt="Digital Innovation" width={400} height={300} className="object-cover w-full h-48" />
          </div>
          <div className="rounded-lg overflow-hidden shadow-sm">
            <Image src="/food2.PNG" alt="Quality Assurance" width={400} height={300} className="object-cover w-full h-48" />
          </div>
          <div className="rounded-lg overflow-hidden shadow-sm">
            <Image src="/food3.PNG" alt="Efficient Logistics" width={400} height={300} className="object-cover w-full h-48" />
          </div>
          <div className="rounded-lg overflow-hidden shadow-sm">
            <Image src="/food4.PNG" alt="Community Impact" width={400} height={300} className="object-cover w-full h-48" />
          </div>
        </div>
      </section>

      {/* Contact/CTA Section */}
      <section className="relative py-16 px-4 md:px-0 min-h-[600px] flex items-center" style={{ background: '#e6f4ea' }}>
        <div className="max-w-7xl mx-auto w-full flex md:flex-row items-center justify-between">
          {/* Left: Heading, description, button */}
          <div className="flex flex-col justify-center items-start flex-1">
            <h4 className="text-3xl font-extrabold mb-4 text-gray-900">Want to know more?</h4>
            <p className="text-gray-700 mb-8 text-lg max-w-md">We'll be happy to hear from you for any inquiry or feedback. A representative is ready to hear you out.</p>
            <button className="bg-lime-600 hover:bg-lime-700 text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg transition self-start">Get in Touch</button>
          </div>
          {/* Right: Info cards */}
          <div className="flex flex-col justify-center items-start flex-1">
            <div className="grid grid-cols-2 gap-4 -ml-16">
              <div className="bg-[#e6f4ea] rounded-xl p-4 shadow text-center flex flex-col items-center">
                <Clock className="text-lime-600 w-8 h-8 mb-2" />
                <div className="font-bold text-lime-700 mb-1">Quick Response</div>
                <div className="text-xs text-gray-500">Assured.</div>
              </div>
              <div className="bg-[#e6f4ea] rounded-xl p-4 shadow text-center flex flex-col items-center">
                <FileText className="text-lime-600 w-8 h-8 mb-2" />
                <div className="font-bold text-lime-700 mb-1">Relevant & Comprehensive</div>
                <div className="text-xs text-gray-500">Information.</div>
              </div>
              <div className="bg-[#e6f4ea] rounded-xl p-4 shadow text-center flex flex-col items-center">
                <Smile className="text-lime-600 w-8 h-8 mb-2" />
                <div className="font-bold text-lime-700 mb-1">Easy & Fluid</div>
                <div className="text-xs text-gray-500">Customer Experience.</div>
              </div>
              <div className="bg-[#e6f4ea] rounded-xl p-4 shadow text-center flex flex-col items-center">
                <Gem className="text-lime-600 w-8 h-8 mb-2" />
                <div className="font-bold text-lime-700 mb-1">Matchless Value</div>
                <div className="text-xs text-gray-500">& Satisfaction.</div>
              </div>
            </div>
          </div>
        </div>
        {/* Large image - positioned relative to section */}
        <div className="hidden md:block absolute right-8 top-1/2 -translate-y-[60%] w-80 h-80 rounded-xl shadow-lg z-30 bg-[#e6f4ea]">
          <img
            src="/dfshop-support.png"
            alt="Support"
            className="w-full h-full object-cover rounded-xl mix-blend-multiply"
          />
        </div>
        {/* SVG Curve at the bottom */}
        <div className="absolute left-0 right-0 bottom-0 w-full overflow-hidden leading-none">
          <svg viewBox="0 0 1600 150" width="100%" height="150" preserveAspectRatio="none">
            <path d="M0,0 C800,180 800,180 1600,0 L1600,150 L0,150 Z" fill="#fff"/>
          </svg>
        </div>
      </section>
    </div>
  );
} 