// Shared job data for careers pages
import { Users, ShieldCheck, Sparkles, Award } from 'lucide-react'

export const jobsArray = [
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
      "Bachelor's degree in Business, Communications, or related field",
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
      "Bachelor's degree in Food Science, Agriculture, or related field",
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
    ],
    mailto: 'careers@dexterousfingersltd.com?subject=Application%20for%20Hygiene%20Manager',
  },
]

// Validation function to check data integrity
const validateJobsArray = () => {
  const keys = jobsArray.map(job => job.key);
  const uniqueKeys = new Set(keys);
  
  // Check for duplicate keys
  if (keys.length !== uniqueKeys.size) {
    console.error('❌ Duplicate keys found in jobsArray:', keys.filter((key, index) => keys.indexOf(key) !== index));
    return false;
  }
  
  // Check for missing keys
  const jobsWithoutKeys = jobsArray.filter(job => !job.key);
  if (jobsWithoutKeys.length > 0) {
    console.error('❌ Jobs without keys found:', jobsWithoutKeys);
    return false;
  }
  
  // Check for missing required fields
  const requiredFields = ['title', 'company', 'location', 'type', 'salary', 'description'];
  const jobsWithMissingFields = jobsArray.filter(job => 
    requiredFields.some(field => !job[field])
  );
  
  if (jobsWithMissingFields.length > 0) {
    console.error('❌ Jobs with missing required fields:', jobsWithMissingFields);
    return false;
  }
  
  console.log('✅ JobsArray validation passed:', {
    totalJobs: jobsArray.length,
    uniqueKeys: Array.from(uniqueKeys),
    allJobsHaveKeys: true,
    allJobsHaveRequiredFields: true
  });
  
  return true;
};

// Run validation
validateJobsArray();

// Create an object for fast lookup by key
export const jobsObject = Object.fromEntries(jobsArray.map(job => [job.key, job])) 