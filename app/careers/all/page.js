import Link from 'next/link'
import { MapPin, Clock, ExternalLink } from 'lucide-react'

const jobs = [
  {
    key: 'customer-support',
    title: 'Customer Support',
    location: 'Lagos, Nigeria',
    type: 'Full-time',
  },
  {
    key: 'qa-operative',
    title: 'Quality Assurance Operative',
    location: 'Lagos, Nigeria',
    type: 'Full-time',
  },
  {
    key: 'hygiene-operative',
    title: 'Hygiene Operative',
    location: 'Lagos, Nigeria',
    type: 'Full-time',
  },
  {
    key: 'quality-manager',
    title: 'Quality Manager',
    location: 'Lagos, Nigeria',
    type: 'Full-time',
  },
  {
    key: 'hygiene-manager',
    title: 'Hygiene Manager',
    location: 'Lagos, Nigeria',
    type: 'Full-time',
  },
  {
    key: 'process-technologist',
    title: 'Process Technologist',
    location: 'Lagos, Nigeria',
    type: 'Full-time',
  },
  {
    key: 'warehouse-operative',
    title: 'Warehouse Operative',
    location: 'Lagos, Nigeria',
    type: 'Full-time',
  },
  {
    key: 'night-security',
    title: 'Night Security',
    location: 'Lagos, Nigeria',
    type: 'Full-time',
  },
]

const DFL_LOGO_SRC = '/dfl-logo.png'

// Get unique locations and types from jobs
const locations = Array.from(new Set(jobs.map(j => j.location)));
const types = Array.from(new Set(jobs.map(j => j.type)));

export default function AllVacanciesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-2 md:px-6">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Filter */}
          <aside className="w-full md:w-64 bg-white border border-gray-200 rounded-2xl shadow-sm p-6 h-fit mb-4 md:mb-0">
            <h2 className="text-xl font-extrabold text-gray-900 mb-6">Filter Vacancies</h2>
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-700 mb-1">Job Location</label>
              <div className="relative">
                <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-200">
                  <option value="">All Locations</option>
                  {locations.map(loc => (
                    <option key={loc} value={loc}>{loc}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-700 mb-1">Select Job Type</label>
              <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-200">
                <option value="">All Types</option>
                {types.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {/* Header Controls */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
              <h1 className="text-3xl font-extrabold text-gray-900">All Jobs</h1>
              <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center w-full md:w-auto">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-gray-700">Location radius</span>
                  <select className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-200">
                    <option>Nationally</option>
                  </select>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-gray-700">Sort by</span>
                  <select className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-200">
                    <option>Newest</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Job Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {jobs.map((job) => (
                <div key={job.key} className="relative bg-white border border-gray-200 rounded-2xl shadow-md p-6 flex flex-col h-full transition hover:shadow-lg">
                  {/* Logo */}
                  <div className="flex justify-center mb-4">
                    <img src={DFL_LOGO_SRC} alt="DFL Logo" className="h-20 w-auto object-contain" />
                  </div>
                  {/* Title */}
                  <h3 className="text-lg font-extrabold text-gray-900 mb-2 text-center">{job.title}</h3>
                  {/* Meta */}
                  <div className="flex flex-col items-center gap-1 text-gray-600 text-sm mb-4">
                    <div className="flex items-center gap-1"><MapPin className="w-4 h-4" />{job.location}</div>
                    <div className="flex items-center gap-1"><Clock className="w-4 h-4" />{job.type}</div>
                  </div>
                  <hr className="my-4" />
                  {/* More Info Button */}
                  <Link href={`/careers/${job.key}`} className="mt-auto block bg-primary-600 hover:bg-primary-700 text-white font-bold py-2 rounded-lg text-center text-base transition-all duration-200 shadow-sm">More Info</Link>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  )
} 