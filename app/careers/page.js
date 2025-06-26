'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import { Mail, ArrowRight, Users, ShieldCheck, Sparkles, Award, X, MapPin, Clock, Info } from 'lucide-react'
import Link from 'next/link'

export default function Careers() {
  const [openJob, setOpenJob] = useState(null)
  const [page, setPage] = useState(0)
  const [searchTitle, setSearchTitle] = useState('')
  const [searchLocation, setSearchLocation] = useState('')
  const [filteredJobs, setFilteredJobs] = useState([])
  const jobs = [
    {
      key: 'customer-support',
      title: 'Customer Support',
      company: 'DFL',
      icon: <Users className="w-8 h-8 text-primary-600" />,
      location: 'Lagos, Nigeria',
      type: 'Full-time',
      salary: '₦150,000 - ₦250,000',
      experience: '1-3 years',
      summary: 'Be the friendly face and voice of DFL, helping our customers get the most from our solutions and services.',
      description: 'As a Customer Support representative, you will provide timely, accurate, and friendly assistance to our customers via phone, email, and chat. You will resolve inquiries, troubleshoot issues, and ensure customer satisfaction at every touchpoint.',
      responsibilities: [
        'Respond to customer inquiries via phone, email, and chat',
        'Resolve product or service issues promptly and professionally',
        'Document customer interactions and feedback',
        'Collaborate with internal teams to resolve complex issues',
        'Maintain a positive, empathetic, and professional attitude',
        'Escalate urgent issues to appropriate departments',
        'Follow up with customers to ensure resolution satisfaction',
        'Contribute to knowledge base and FAQ updates',
      ],
      requirements: [
        'Bachelor\'s degree in Business, Communications, or related field',
        '1-3 years of customer service experience',
        'Excellent communication and interpersonal skills',
        'Strong problem-solving abilities',
        'Proficiency in CRM software and Microsoft Office',
        'Ability to work in shifts including weekends',
        'Experience in food/agriculture industry preferred',
      ],
      benefits: [
        'Competitive salary with performance bonuses',
        'Health insurance coverage',
        'Professional development opportunities',
        'Flexible work arrangements',
        'Employee discount on company products',
        'Team building activities',
      ],
      mailto: 'careers@dexterousfingersltd.com?subject=Application%20for%20Customer%20Support',
    },
    {
      key: 'qa-operative',
      title: 'Quality Assurance Operative',
      company: 'DFL',
      icon: <ShieldCheck className="w-8 h-8 text-green-600" />,
      location: 'Lagos, Nigeria',
      type: 'Full-time',
      salary: '₦180,000 - ₦300,000',
      experience: '2-4 years',
      summary: 'Ensure our products and services meet the highest standards through rigorous testing and process checks.',
      description: 'As a Quality Assurance Operative, you will monitor and inspect products and processes to ensure compliance with company and regulatory standards. You will play a key role in maintaining our reputation for excellence.',
      responsibilities: [
        'Conduct inspections and tests on products and processes',
        'Document and report quality issues and non-conformities',
        'Assist in developing and implementing quality control procedures',
        'Work with production teams to resolve quality concerns',
        'Maintain accurate records of inspections and findings',
        'Perform routine quality audits and assessments',
        'Ensure compliance with food safety regulations',
        'Participate in continuous improvement initiatives',
      ],
      requirements: [
        'Bachelor\'s degree in Food Science, Agriculture, or related field',
        '2-4 years of quality assurance experience',
        'Knowledge of food safety standards (HACCP, ISO)',
        'Attention to detail and analytical skills',
        'Experience with quality management systems',
        'Strong documentation and reporting skills',
        'Ability to work in production environment',
      ],
      benefits: [
        'Competitive salary with quality performance bonuses',
        'Comprehensive health and safety training',
        'Career advancement opportunities',
        'Professional certification support',
        'Performance-based incentives',
        'Modern laboratory facilities',
      ],
      mailto: 'careers@dexterousfingersltd.com?subject=Application%20for%20Quality%20Assurance%20Operative',
    },
    {
      key: 'hygiene-operative',
      title: 'Hygiene Operative',
      company: 'DFL',
      icon: <Sparkles className="w-8 h-8 text-yellow-500" />,
      location: 'Lagos, Nigeria',
      type: 'Full-time',
      salary: '₦120,000 - ₦200,000',
      experience: '1-2 years',
      summary: 'Maintain a clean, safe, and healthy environment in our facilities, supporting our commitment to quality and safety.',
      description: 'As a Hygiene Operative, you will be responsible for cleaning and sanitizing workspaces, equipment, and common areas. Your work will help ensure a safe and healthy environment for all staff and visitors.',
      responsibilities: [
        'Clean and sanitize production areas, offices, and restrooms',
        'Follow hygiene and safety protocols at all times',
        'Monitor and replenish cleaning supplies as needed',
        'Report any maintenance or safety issues promptly',
        'Support the team in maintaining high standards of cleanliness',
        'Operate cleaning equipment safely and efficiently',
        'Maintain cleaning schedules and checklists',
        'Assist in emergency cleaning procedures',
      ],
      requirements: [
        'Secondary school education or equivalent',
        '1-2 years of cleaning or hygiene experience',
        'Knowledge of cleaning chemicals and safety procedures',
        'Physical stamina for manual cleaning tasks',
        'Attention to detail and thoroughness',
        'Ability to work flexible hours including shifts',
        'Food industry cleaning experience preferred',
      ],
      benefits: [
        'Competitive hourly rate with overtime opportunities',
        'Safety equipment and training provided',
        'Health and safety insurance coverage',
        'Regular performance reviews and feedback',
        'Opportunity for advancement to supervisory roles',
        'Clean and safe working environment',
      ],
      mailto: 'careers@dexterousfingersltd.com?subject=Application%20for%20Hygiene%20Operative',
    },
    {
      key: 'quality-manager',
      title: 'Quality Manager',
      company: 'DFL',
      icon: <Award className="w-8 h-8 text-blue-600" />,
      location: 'Lagos, Nigeria',
      type: 'Full-time',
      salary: '₦400,000 - ₦600,000',
      experience: '5-8 years',
      summary: 'Lead our quality team, develop best practices, and drive continuous improvement across all operations.',
      description: 'As a Quality Manager, you will oversee all aspects of quality assurance, develop and implement quality management systems, and lead a team of QA professionals to achieve operational excellence.',
      responsibilities: [
        'Develop and implement quality management systems and policies',
        'Lead, train, and mentor the quality assurance team',
        'Analyze data and prepare reports on quality performance',
        'Drive continuous improvement initiatives across the organization',
        'Ensure compliance with industry standards and regulations',
        'Manage quality audits and certifications',
        'Collaborate with cross-functional teams on quality projects',
        'Develop and monitor quality KPIs and metrics',
      ],
      requirements: [
        'Bachelor\'s degree in Food Science, Quality Management, or related field',
        '5-8 years of quality management experience in food industry',
        'Professional certification in quality management (ISO, HACCP)',
        'Strong leadership and team management skills',
        'Experience with quality management software and tools',
        'Excellent analytical and problem-solving abilities',
        'Knowledge of food safety regulations and standards',
        'Project management and change management skills',
      ],
      benefits: [
        'Competitive executive salary with performance bonuses',
        'Comprehensive benefits package including health insurance',
        'Professional development and certification support',
        'Leadership training and mentoring programs',
        'Performance-based equity opportunities',
        'Modern office and laboratory facilities',
      ],
      mailto: 'careers@dexterousfingersltd.com?subject=Application%20for%20Quality%20Manager',
    },
    {
      key: 'hygiene-manager',
      title: 'Hygiene Manager',
      location: 'Lagos, Nigeria',
      type: 'Full-time',
      salary: '₦300,000 - ₦450,000',
      experience: '4-6 years',
      summary: 'Lead hygiene initiatives and ensure the highest standards of cleanliness and safety across all facilities.',
      description: 'As a Hygiene Manager, you will oversee all hygiene operations, develop and implement hygiene protocols, and train staff to maintain a safe and healthy environment.',
      responsibilities: [
        'Develop and implement hygiene policies and procedures',
        'Supervise and train hygiene staff',
        'Conduct regular hygiene audits and inspections',
        'Ensure compliance with health and safety regulations',
        'Promote a culture of cleanliness and safety',
        'Manage hygiene equipment and supplies',
        'Coordinate with other departments on hygiene matters',
        'Develop and monitor hygiene performance metrics',
      ],
      requirements: [
        'Bachelor\'s degree in Environmental Health, Safety Management, or related field',
        '4-6 years of hygiene management experience',
        'Certification in food safety and hygiene management',
        'Strong supervisory and training skills',
        'Knowledge of health and safety regulations',
        'Experience in food processing or manufacturing environment',
        'Excellent organizational and communication skills',
      ],
      benefits: [
        'Competitive salary with performance incentives',
        'Professional development opportunities',
        'Health and safety training programs',
        'Leadership development support',
        'Modern facilities and equipment',
        'Comprehensive benefits package',
      ],
      mailto: 'careers@dexterousfingersltd.com?subject=Application%20for%20Hygiene%20Manager',
    },
    {
      key: 'process-technologist',
      title: 'Process Technologist',
      location: 'Lagos, Nigeria',
      type: 'Full-time',
      salary: '₦350,000 - ₦500,000',
      experience: '3-5 years',
      summary: 'Drive process improvements and support the implementation of new technologies in food and agri-processing.',
      description: 'As a Process Technologist, you will optimize production processes, introduce innovative technologies, and ensure efficient and high-quality output.',
      responsibilities: [
        'Analyze and improve production processes',
        'Implement new technologies and best practices',
        'Collaborate with R&D and production teams',
        'Monitor process performance and quality',
        'Train staff on new equipment and procedures',
        'Conduct process validation and optimization studies',
        'Develop standard operating procedures',
        'Troubleshoot process-related issues',
      ],
      requirements: [
        'Bachelor\'s degree in Food Technology, Chemical Engineering, or related field',
        '3-5 years of process technology experience in food industry',
        'Knowledge of food processing equipment and technologies',
        'Strong analytical and problem-solving skills',
        'Experience with process optimization and validation',
        'Excellent communication and training abilities',
        'Project management skills',
      ],
      benefits: [
        'Competitive salary with innovation bonuses',
        'Professional development and training opportunities',
        'Access to latest processing technologies',
        'Research and development collaboration',
        'Performance-based incentives',
        'Modern laboratory and processing facilities',
      ],
      mailto: 'careers@dexterousfingersltd.com?subject=Application%20for%20Process%20Technologist',
    },
    {
      key: 'warehouse-operative',
      title: 'Warehouse Operative',
      location: 'Lagos, Nigeria',
      type: 'Full-time',
      salary: '₦100,000 - ₦180,000',
      experience: '1-2 years',
      summary: 'Support warehouse operations including receiving, storing, and dispatching goods efficiently and safely.',
      description: 'As a Warehouse Operative, you will be responsible for handling goods, maintaining inventory, and ensuring the warehouse is organized and safe.',
      responsibilities: [
        'Receive, store, and dispatch goods accurately',
        'Maintain inventory records and perform stock checks',
        'Operate warehouse equipment safely',
        'Keep the warehouse clean and organized',
        'Assist with loading and unloading deliveries',
        'Follow safety procedures and protocols',
        'Report any damaged or missing items',
        'Support inventory management processes',
      ],
      requirements: [
        'Secondary school education or equivalent',
        '1-2 years of warehouse or logistics experience',
        'Physical fitness for manual handling tasks',
        'Basic computer skills for inventory management',
        'Attention to detail and accuracy',
        'Ability to work in shifts including weekends',
        'Forklift certification preferred',
      ],
      benefits: [
        'Competitive hourly rate with overtime opportunities',
        'Safety training and equipment provided',
        'Health and safety insurance coverage',
        'Performance-based bonuses',
        'Opportunity for advancement to supervisory roles',
        'Safe and well-maintained warehouse facilities',
      ],
      mailto: 'careers@dexterousfingersltd.com?subject=Application%20for%20Warehouse%20Operative',
    },
    {
      key: 'night-security',
      title: 'Night Security',
      location: 'Lagos, Nigeria',
      type: 'Full-time',
      salary: '₦120,000 - ₦200,000',
      experience: '2-3 years',
      summary: 'Ensure the safety and security of the premises during night hours.',
      description: 'As a Night Security Officer, you will patrol the premises, monitor surveillance equipment, and respond to any security incidents during the night shift.',
      responsibilities: [
        'Patrol and monitor premises during night hours',
        'Monitor surveillance equipment and report suspicious activity',
        'Respond to alarms and security incidents',
        'Ensure all entry points are secure',
        'Maintain security logs and incident reports',
        'Conduct regular security checks and inspections',
        'Coordinate with emergency services when needed',
        'Maintain security equipment and systems',
      ],
      requirements: [
        'Secondary school education or equivalent',
        '2-3 years of security experience',
        'Security guard license or certification',
        'Physical fitness for patrolling duties',
        'Excellent observation and reporting skills',
        'Ability to work night shifts',
        'Basic computer skills for surveillance systems',
        'Clean criminal record',
      ],
      benefits: [
        'Competitive salary with night shift allowances',
        'Security training and certification support',
        'Health and safety insurance coverage',
        'Performance-based bonuses',
        'Modern security equipment and facilities',
        'Opportunity for advancement to supervisory roles',
      ],
      mailto: 'careers@dexterousfingersltd.com?subject=Application%20for%20Night%20Security',
    },
  ]

  const getPerPage = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) return 1;
      if (window.innerWidth < 1024) return 2;
    }
    return 4;
  };
  const [perPage, setPerPage] = useState(getPerPage());
  
  // Search functionality
  const handleSearch = (e) => {
    e.preventDefault()
    performSearch()
  }

  const performSearch = () => {
    // If both fields are empty, show all jobs
    if (!searchTitle.trim() && !searchLocation.trim()) {
      setFilteredJobs([])
      setPage(0)
      return
    }
    
    const filtered = jobs.filter(job => {
      const titleMatch = !searchTitle.trim() || job.title.toLowerCase().includes(searchTitle.toLowerCase())
      const locationMatch = !searchLocation.trim() || job.location.toLowerCase().includes(searchLocation.trim())
      return titleMatch && locationMatch
    })
    
    setFilteredJobs(filtered)
    setPage(0) // Reset to first page when searching
  }

  const clearSearch = () => {
    setSearchTitle('')
    setSearchLocation('')
    setFilteredJobs([])
    setPage(0)
  }

  // Use filtered jobs if search is active, otherwise use all jobs
  const displayJobs = filteredJobs.length > 0 || searchTitle.trim() || searchLocation.trim() ? filteredJobs : jobs

  useEffect(() => {
    const handleResize = () => setPerPage(getPerPage());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  useEffect(() => {
    if (page > 0 && page >= Math.ceil(displayJobs.length / perPage)) {
      setPage(0);
    }
  }, [perPage, displayJobs.length, page]);
  
  const totalPages = Math.ceil(displayJobs.length / perPage);
  const paginatedJobs = displayJobs.slice(page * perPage, page * perPage + perPage);

  const DFL_LOGO_SRC = '/dfl-logo.png';

  return (
    <div className="min-h-screen bg-white flex flex-col items-center w-full">
      {/* Hero Section */}
      <section className="relative w-full min-h-[420px] flex items-center justify-center" style={{ backgroundImage: 'url(/team.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-20 md:py-32">
          {/* Left: Heading, description, and image */}
          <div className="text-white max-w-xl mb-12 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Join Our Winning Team!</h1>
            <p className="text-lg md:text-xl font-medium leading-relaxed mb-8">Dexterous Fingers Limited offers a dynamic and exciting work environment with fantastic opportunities for personal development.</p>
          </div>
          
          {/* Right: Search Card */}
          <div className="bg-primary-600 rounded-2xl shadow-2xl p-8 w-full max-w-md flex flex-col items-center md:items-start">
            <h2 className="text-white text-2xl font-bold mb-8 text-center md:text-left">Start Your Search Today!</h2>
            <form onSubmit={handleSearch} className="w-full space-y-6">
              <div>
                <label htmlFor="job-title" className="block text-white font-semibold mb-2">Job Title:</label>
                <input 
                  id="job-title" 
                  type="text" 
                  placeholder="e.g. Driver" 
                  value={searchTitle}
                  onChange={(e) => setSearchTitle(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-600" 
                />
              </div>
              <div>
                <label htmlFor="job-location" className="block text-white font-semibold mb-2">Job Location:</label>
                <input 
                  id="job-location" 
                  type="text" 
                  placeholder="e.g. Lagos" 
                  value={searchLocation}
                  onChange={(e) => setSearchLocation(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-600" 
                />
              </div>
              <button type="submit" className="w-full bg-primary-700 text-white font-bold py-4 rounded-lg mt-4 hover:bg-primary-800 transition">Find a Career</button>
            </form>
            <div className="w-full flex justify-center md:justify-start mt-6 space-x-4">
              <button 
                onClick={clearSearch}
                className="text-primary-100 underline font-semibold hover:text-white"
              >
                Clear Search
              </button>
              <span className="text-primary-100">|</span>
              <a href="#" className="text-primary-100 underline font-semibold hover:text-white">View All Vacancies</a>
            </div>
          </div>
        </div>
      </section>
      {/* Main Careers Content */}
      <div className="w-full max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Latest Jobs at DFL</h2>
          <p className="text-lg text-primary-600 mb-2">Kick Start Your Career in Agri-FoodTech</p>
          {(searchTitle.trim() || searchLocation.trim()) && (
            <div className="mt-4 p-3 bg-primary-50 rounded-lg">
              <p className="text-primary-700">
                {filteredJobs.length > 0 
                  ? `Found ${filteredJobs.length} job${filteredJobs.length !== 1 ? 's' : ''} matching your search`
                  : 'No jobs found matching your search criteria'
                }
              </p>
            </div>
          )}
        </div>
        {/* Carousel */}
        <div className="w-full mb-12 overflow-x-auto hide-scrollbar snap-x snap-mandatory">
          {paginatedJobs.length > 0 ? (
            <div className="flex flex-row gap-8 min-w-fit px-10">
              {paginatedJobs.map((job) => (
                <div
                  key={job.key}
                  className="bg-white rounded-2xl shadow-lg border border-gray-200 flex flex-col items-start p-8 min-w-[280px] max-w-xs w-full transition-transform duration-200 hover:shadow-xl snap-start"
                >
                  <img src={DFL_LOGO_SRC} alt="DFL Logo" className="h-36 w-auto object-contain mb-2 -mt-8" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{job.title}</h3>
                  <hr className="w-full border-gray-200 my-4" />
                  <div className="flex items-center text-gray-500 text-sm mb-2">
                    <MapPin className="w-4 h-4 mr-2" />
                    {job.location}
                  </div>
                  <div className="flex items-center text-gray-500 text-sm mb-6">
                    <Clock className="w-4 h-4 mr-2" />
                    {job.type}
                  </div>
                  <Link
                    href={`/careers/${job.key}`}
                    className="mt-auto w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 hover:shadow-lg flex items-center justify-center group"
                  >
                    View Details
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="bg-gray-50 rounded-lg p-8 max-w-md mx-auto">
                <h3 className="text-xl font-semibold text-gray-700 mb-2">No Jobs Found</h3>
                <p className="text-gray-600 mb-4">Try adjusting your search criteria or browse all available positions.</p>
                <button 
                  onClick={clearSearch}
                  className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors"
                >
                  View All Jobs
                </button>
              </div>
            </div>
          )}
        </div>
        {/* Pagination dots */}
        <div className="flex justify-center mb-16 gap-3">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              className={`w-4 h-4 rounded-full transition-all duration-200 ${idx === page ? 'bg-primary-600' : 'bg-gray-300 hover:bg-gray-400'}`}
              onClick={() => setPage(idx)}
              aria-label={`Go to page ${idx + 1}`}
            />
          ))}
        </div>
        {/* View All Vacancies Button */}
        <div className="flex justify-center mb-20">
          <Link href="/careers/all" className="bg-black text-white font-semibold px-10 py-4 rounded-lg shadow-lg hover:bg-gray-900 transition-all duration-200 hover:shadow-xl">View All Vacancies</Link>
        </div>

        {/* Modal for job details */}
        {openJob && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 relative animate-fade-in">
              <button className="absolute top-6 right-6 text-gray-400 hover:text-gray-700 transition-colors" onClick={() => setOpenJob(null)} aria-label="Close">
                <X className="w-6 h-6" />
              </button>
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900">{openJob.title}</h3>
              </div>
              <h4 className="font-semibold text-gray-900 mb-3">Job Description</h4>
              <p className="text-gray-700 mb-6 leading-relaxed">{openJob.description}</p>
              <h4 className="font-semibold text-gray-900 mb-3">Responsibilities</h4>
              <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
                {openJob.responsibilities.map((item, idx) => (
                  <li key={idx} className="leading-relaxed">{item}</li>
                ))}
              </ul>
              <a href={`mailto:${openJob.mailto}`} className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 hover:shadow-lg">Apply Now</a>
            </div>
          </div>
        )}
      </div>
    </div>
  )
} 