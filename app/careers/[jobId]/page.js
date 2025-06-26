'use client'

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, MapPin, Clock, DollarSign, Users, ShieldCheck, Sparkles, Award, Mail, Calendar, Building, CheckCircle, ArrowRight } from 'lucide-react'

const jobs = {
  'customer-support': {
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
  'qa-operative': {
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
  'hygiene-operative': {
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
  'quality-manager': {
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
  'hygiene-manager': {
    title: 'Hygiene Manager',
    company: 'DFL',
    icon: <Sparkles className="w-8 h-8 text-purple-600" />,
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
  'process-technologist': {
    title: 'Process Technologist',
    company: 'DFL',
    icon: <Award className="w-8 h-8 text-indigo-600" />,
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
  'warehouse-operative': {
    title: 'Warehouse Operative',
    company: 'DFL',
    icon: <Building className="w-8 h-8 text-gray-600" />,
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
  'night-security': {
    title: 'Night Security',
    company: 'DFL',
    icon: <ShieldCheck className="w-8 h-8 text-red-600" />,
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
}

// DFL logo path (adjust if needed)
const DFL_LOGO_SRC = '/dfl-logo.png';

export default function JobDetail() {
  const params = useParams()
  const router = useRouter()
  const jobId = params.jobId
  const job = jobs[jobId]

  if (!job) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Job Not Found</h1>
          <p className="text-gray-600 mb-6">The job you're looking for doesn't exist.</p>
          <Link href="/careers" className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition">
            Back to Careers
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-10 font-sans">
      {/* Unified Card: Header + Main Content */}
      <div className="max-w-2xl lg:max-w-5xl mx-auto w-full flex flex-col lg:flex-row gap-10 bg-transparent">
        {/* Left/Main Content (including header) */}
        <div className="flex-1 bg-white rounded-2xl shadow-xl p-8 space-y-10">
          {/* Header */}
          <div>
            <Link href="/careers" className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-4">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Careers
            </Link>
            <h1 className="text-4xl font-extrabold text-primary-700 mb-2 leading-tight">{job.title}</h1>
            <p className="text-lg text-gray-700 mb-4 leading-snug">{job.summary}</p>
            <div className="flex flex-wrap gap-4 text-gray-500 text-base mb-2">
              <div className="flex items-center"><Building className="w-4 h-4 mr-1" />{job.company}</div>
              <div className="flex items-center"><MapPin className="w-4 h-4 mr-1" />{job.location}</div>
              <div className="flex items-center"><Clock className="w-4 h-4 mr-1" />{job.type}</div>
              <div className="flex items-center"><DollarSign className="w-4 h-4 mr-1" />{job.salary}</div>
              <div className="flex items-center"><Calendar className="w-4 h-4 mr-1" />{job.experience} experience</div>
            </div>
          </div>
          {/* Job Description */}
          <section>
            <h2 className="text-2xl font-bold text-primary-700 mb-3 flex items-center gap-2">Job Description</h2>
            <p className="text-gray-700 text-base leading-relaxed mb-6">{job.description}</p>
            <div className="border-t border-gray-200 my-6"></div>
            <h3 className="text-xl font-semibold text-primary-700 mb-3 flex items-center gap-2">Key Responsibilities</h3>
            <ul className="space-y-3">
              {job.responsibilities.map((responsibility, index) => (
                <li key={index} className="flex items-start text-base">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{responsibility}</span>
                </li>
              ))}
            </ul>
          </section>
          <div className="border-t border-gray-200 my-6"></div>
          {/* Requirements */}
          <section>
            <h2 className="text-2xl font-bold text-primary-700 mb-3 flex items-center gap-2">Requirements</h2>
            <ul className="space-y-3">
              {job.requirements.map((requirement, index) => (
                <li key={index} className="flex items-start text-base">
                  <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{requirement}</span>
                </li>
              ))}
            </ul>
          </section>
          <div className="border-t border-gray-200 my-6"></div>
          {/* Benefits */}
          <section>
            <h2 className="text-2xl font-bold text-primary-700 mb-3 flex items-center gap-2">Benefits & Perks</h2>
            <ul className="space-y-3">
              {job.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start text-base">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </section>
          <div className="border-t border-gray-200 my-6"></div>
          {/* Job Summary */}
          <section>
            <h2 className="text-xl font-semibold text-primary-700 mb-2">Job Summary</h2>
            <div className="space-y-2 text-base">
              <div className="flex justify-between">
                <span className="text-gray-600">Position:</span>
                <span className="font-medium">{job.title}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Location:</span>
                <span className="font-medium">{job.location}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Type:</span>
                <span className="font-medium">{job.type}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Salary:</span>
                <span className="font-medium">{job.salary}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Experience:</span>
                <span className="font-medium">{job.experience}</span>
              </div>
            </div>
          </section>
          {/* Bottom CTA */}
          <div className="mt-10 text-center">
            <Link href="/careers" className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold text-base">
              <ArrowLeft className="w-5 h-5 mr-2" />
              View All Open Positions
            </Link>
          </div>
        </div>
        {/* Right/Sidebar: Apply Now Button (sticky on desktop) */}
        <div className="lg:w-80 w-full flex-shrink-0 lg:pl-2">
          <div className="lg:sticky lg:top-24 flex lg:justify-end">
            <Link
              href={`/careers/apply/${jobId}`}
              className="block bg-primary-600 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded-xl transition-all duration-200 text-center text-lg shadow-lg mb-4 w-full lg:w-64"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>
      {/* Jobs Carousel OUTSIDE the main card */}
      <div className="w-full bg-gray-50 mt-20 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Other Job Openings</h2>
          <div className="flex gap-6 overflow-x-auto pb-2 hide-scrollbar">
            {Object.entries(jobs).filter(([key]) => key !== jobId).map(([key, jobItem]) => (
              <div key={key} className="min-w-[240px] max-w-xs bg-white border border-gray-200 rounded-xl shadow-lg flex flex-col p-4">
                <img src={DFL_LOGO_SRC} alt="DFL Logo" className="h-36 w-auto object-contain mb-2" />
                <h3 className="text-base font-bold text-gray-900 mb-1 break-words min-h-[48px] leading-snug">{jobItem.title}</h3>
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <MapPin className="w-4 h-4 mr-1" />
                  {jobItem.location}
                </div>
                <Link href={`/careers/${key}`} className="mt-auto inline-flex items-center gap-1 text-primary-600 font-semibold hover:underline">
                  View <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 