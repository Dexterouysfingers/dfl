'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSubmitStatus('success')
        reset()
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="container-custom py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left: Intro Text */}
          <div className="flex items-start justify-center md:justify-start">
            <p className="text-gray-700 text-base md:text-lg max-w-md">
              Please contact us using this form if you have any questions or comments about Dexterous Fingers Limited.
            </p>
          </div>
          {/* Right: Contact Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 w-full">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full name</label>
              <input type="text" id="name" {...register('name')} className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary-500" />
              {errors.name && (<p className="mt-1 text-sm text-red-600">{errors.name.message}</p>)}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input type="email" id="email" {...register('email')} className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary-500" />
              {errors.email && (<p className="mt-1 text-sm text-red-600">{errors.email.message}</p>)}
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
              <input type="text" id="phone" className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary-500" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="iam" className="block text-sm font-medium text-gray-700 mb-2">I am</label>
                <select id="iam" className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary-500" defaultValue="">
                  <option value="">Select an option</option>
                  <option>An Agro Buyer</option>
                  <option>An Agro Seller</option>
                  <option>A Processor</option>
                  <option>A Farmer</option>
                  <option>An Investor</option>
                  <option>A Manufacturer</option>
                  <option>Others</option>
                </select>
              </div>
              <div>
                <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-2">Interested in</label>
                <select id="interest" className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary-500" defaultValue="">
                  <option value="">Select an option</option>
                  <option>Buying</option>
                  <option>Selling</option>
                  <option>Information</option>
                  <option>Data</option>
                  <option>Projects</option>
                  <option>Others</option>
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea id="message" rows={4} {...register('message')} className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary-500" />
              {errors.message && (<p className="mt-1 text-sm text-red-600">{errors.message.message}</p>)}
            </div>
            <button type="submit" disabled={isSubmitting} className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 rounded transition-colors duration-200 text-lg">
              {isSubmitting ? 'Sending...' : 'Submit'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
} 