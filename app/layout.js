import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'DFL - Agri-FoodTech Solutions',
  description: 'Dexterous Fingers Limited provides smart tools and solutions for agriculture and food manufacturing across Africa.',
  keywords: 'agriculture, food technology, Africa, farming, food processing, smart tools',
  openGraph: {
    title: 'DFL - Agri-FoodTech Solutions',
    description: 'Dexterous Fingers Limited provides smart tools and solutions for agriculture and food manufacturing across Africa.',
    url: 'https://yourdomain.com',
    siteName: 'DFL',
    images: [
      {
        url: '/dfl-logo.png',
        width: 800,
        height: 600,
        alt: 'DFL Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@yourtwitterhandle',
    title: 'DFL - Agri-FoodTech Solutions',
    description: 'Dexterous Fingers Limited provides smart tools and solutions for agriculture and food manufacturing across Africa.',
    image: '/dfl-logo.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
} 