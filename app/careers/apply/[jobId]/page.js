'use client'

import { useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Upload, FileText, User, MapPin, Mail, Phone, Calendar, Building, ArrowRight } from 'lucide-react'

const jobs = {
  'customer-support': { title: 'Customer Support', location: 'Lagos, Nigeria' },
  'qa-operative': { title: 'Quality Assurance Operative', location: 'Lagos, Nigeria' },
  'hygiene-operative': { title: 'Hygiene Operative', location: 'Lagos, Nigeria' },
  'quality-manager': { title: 'Quality Manager', location: 'Lagos, Nigeria' },
  'hygiene-manager': { title: 'Hygiene Manager', location: 'Lagos, Nigeria' },
  'process-technologist': { title: 'Process Technologist', location: 'Lagos, Nigeria' },
  'warehouse-operative': { title: 'Warehouse Operative', location: 'Lagos, Nigeria' },
  'night-security': { title: 'Night Security', location: 'Lagos, Nigeria' },
}

export default function ApplyPage() {
  const params = useParams()
  const router = useRouter()
  const jobId = params.jobId
  const job = jobs[jobId]

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    postalCode: '',
    country: 'Nigeria',
    dateOfBirth: '',
    cvFile: null,
    coverLetter: '',
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [cvFileName, setCvFileName] = useState('')
  const [coverFileName, setCoverFileName] = useState('')

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

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      // Check file type
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
      if (!allowedTypes.includes(file.type)) {
        setErrors(prev => ({
          ...prev,
          cvFile: 'Please upload a PDF or Word document'
        }))
        return
      }
      // Check file size (5MB limit)
      if (file.size > 5 * 1024 * 1024) {
        setErrors(prev => ({
          ...prev,
          cvFile: 'File size must be less than 5MB'
        }))
        return
      }
      setFormData(prev => ({
        ...prev,
        cvFile: file
      }))
      setCvFileName(file.name)
      setErrors(prev => ({
        ...prev,
        cvFile: ''
      }))
    }
  }

  const handleCoverFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
      if (!allowedTypes.includes(file.type)) {
        setErrors(prev => ({
          ...prev,
          coverFile: 'Please upload a PDF or Word document'
        }))
        return
      }
      if (file.size > 5 * 1024 * 1024) {
        setErrors(prev => ({
          ...prev,
          coverFile: 'File size must be less than 5MB'
        }))
        return
      }
      setFormData(prev => ({
        ...prev,
        coverFile: file
      }))
      setCoverFileName(file.name)
      setErrors(prev => ({
        ...prev,
        coverFile: ''
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required'
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required'
    if (!formData.address.trim()) newErrors.address = 'Address is required'
    if (!formData.city.trim()) newErrors.city = 'City is required'
    if (!formData.state.trim()) newErrors.state = 'State is required'
    if (!formData.postalCode.trim()) newErrors.postalCode = 'Postal code is required'
    if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Date of birth is required'
    if (!formData.cvFile) newErrors.cvFile = 'CV upload is required'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      alert('Application submitted successfully! We will review your application and get back to you within 48 hours.')
      router.push('/careers')
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="max-w-2xl mx-auto pt-8 pb-2">
        <h1 className="text-xl font-bold text-center mb-2">Apply for {job.title}</h1>
        <p className="text-center text-gray-600 mb-6">Complete the form below to submit your application</p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
        {/* Main Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First name*</label>
            <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleInputChange} className={`w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-primary-600 ${errors.firstName ? 'border-red-500' : ''}`} />
            {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last name*</label>
            <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleInputChange} className={`w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-primary-600 ${errors.lastName ? 'border-red-500' : ''}`} />
            {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email*</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} className={`w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-primary-600 ${errors.email ? 'border-red-500' : ''}`} />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="confirmEmail" className="block text-sm font-medium text-gray-700 mb-1">Confirm your email*</label>
            <input type="email" id="confirmEmail" name="confirmEmail" value={formData.confirmEmail || ''} onChange={handleInputChange} className={`w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-primary-600 ${errors.confirmEmail ? 'border-red-500' : ''}`} />
            {errors.confirmEmail && <p className="text-red-500 text-xs mt-1">{errors.confirmEmail}</p>}
          </div>
          <div>
            <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">City*</label>
            <input type="text" id="city" name="city" value={formData.city} onChange={handleInputChange} className={`w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-primary-600 ${errors.city ? 'border-red-500' : ''}`} />
            {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone number*</label>
            <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} className={`w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-primary-600 ${errors.phone ? 'border-red-500' : ''}`} />
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
          </div>
        </div>

        {/* Resume Upload Section */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Resume</h2>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-primary-400 transition-colors">
            <input type="file" id="cvFile" name="cvFile" onChange={handleFileChange} accept=".pdf,.doc,.docx" className="hidden" />
            <label htmlFor="cvFile" className="cursor-pointer">
              <p className="text-sm text-gray-600 mb-1">
                <span className="text-primary-600 font-semibold">Click to upload</span> or drag and drop
              </p>
              <p className="text-xs text-gray-500">PDF, DOC, or DOCX (max 5MB)</p>
              {cvFileName && (
                <p className="text-sm text-green-600 mt-1 font-medium">✓ {cvFileName}</p>
              )}
            </label>
          </div>
          {errors.cvFile && <p className="text-red-500 text-xs mt-1">{errors.cvFile}</p>}
        </div>

        {/* Cover Letter Section */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Cover Letter (Optional)</h2>
          <textarea id="coverLetter" name="coverLetter" value={formData.coverLetter} onChange={handleInputChange} rows={4} className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-primary-600" placeholder="Tell us why you're interested in this position and what makes you a great fit..." />
          <p className="text-xs text-gray-500 mt-1">Maximum 1000 characters</p>
          {/* Cover Letter File Upload */}
          <div className="mt-4">
            <label htmlFor="coverFile" className="block text-sm font-medium text-gray-700 mb-1">Upload Cover Letter (PDF, DOC, DOCX, max 5MB)</label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-primary-400 transition-colors">
              <input type="file" id="coverFile" name="coverFile" onChange={handleCoverFileChange} accept=".pdf,.doc,.docx" className="hidden" />
              <label htmlFor="coverFile" className="cursor-pointer">
                <p className="text-sm text-gray-600 mb-1">
                  <span className="text-primary-600 font-semibold">Click to upload</span> or drag and drop
                </p>
                <p className="text-xs text-gray-500">PDF, DOC, or DOCX (max 5MB)</p>
                {coverFileName && (
                  <p className="text-sm text-green-600 mt-1 font-medium">✓ {coverFileName}</p>
                )}
              </label>
            </div>
            {errors.coverFile && <p className="text-red-500 text-xs mt-1">{errors.coverFile}</p>}
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex items-center justify-end pt-4 border-t">
          <button type="submit" disabled={isSubmitting} className="bg-primary-600 hover:bg-primary-700 disabled:bg-gray-400 text-white font-bold py-3 px-8 rounded transition-all duration-200">
            {isSubmitting ? 'Submitting...' : 'Submit Application'}
          </button>
        </div>
      </form>

      {/* Jobs Carousel OUTSIDE the form */}
      <div className="w-full bg-gray-50 mt-20 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Other Job Openings</h2>
          <div className="flex gap-6 overflow-x-auto pb-2 hide-scrollbar">
            {Object.entries(jobs).filter(([key]) => key !== jobId).map(([key, jobItem]) => (
              <div key={key} className="min-w-[240px] max-w-xs bg-white border border-gray-200 rounded-xl shadow-lg flex flex-col p-4">
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