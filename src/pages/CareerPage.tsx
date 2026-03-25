import { Mail } from 'lucide-react'
import { COMPANY } from '../types'
import { SectionHeader } from '../components/ui'

const OPENINGS = [
  { role: 'Production Supervisor', type: 'Full-time', location: 'Hosur', dept: 'Manufacturing' },
  { role: 'Quality Control Inspector', type: 'Full-time', location: 'Hosur', dept: 'Quality' },
  { role: 'Sales Executive', type: 'Full-time', location: 'Pan India', dept: 'Sales' },
  { role: 'PCB Design Engineer', type: 'Full-time', location: 'Hosur', dept: 'Engineering' },
]

export default function CareerPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-brand-navy py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #B87333 1px, transparent 0)`, backgroundSize: '40px 40px' }}
        />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <p className="font-body text-brand-gold text-sm tracking-widest uppercase mb-2">Join Us</p>
          <h1 className="font-heading text-white text-4xl md:text-5xl font-bold">Careers</h1>
          <p className="font-body text-gray-300 mt-3 text-lg max-w-xl">
            Be part of a growing team driving LED innovation in India.
          </p>
        </div>
      </div>

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <SectionHeader badge="Openings" title="Current Opportunities" subtitle="We're always looking for passionate, driven people to join our team." />
          <div className="space-y-4">
            {OPENINGS.map((job) => (
              <div key={job.role} className="bg-white border border-gray-100 p-6 shadow-sm hover:border-brand-gold/40 hover:shadow-md transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="font-heading text-brand-navy font-semibold text-lg">{job.role}</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="bg-brand-gold/10 text-brand-gold text-xs font-body px-2.5 py-0.5 rounded-full">{job.dept}</span>
                    <span className="bg-gray-100 text-gray-600 text-xs font-body px-2.5 py-0.5 rounded-full">{job.type}</span>
                    <span className="bg-gray-100 text-gray-600 text-xs font-body px-2.5 py-0.5 rounded-full">{job.location}</span>
                  </div>
                </div>
                <a
                  href={`mailto:${COMPANY.email}?subject=Application: ${job.role}`}
                  className="btn-primary text-sm whitespace-nowrap flex items-center gap-2"
                >
                  <Mail size={14} /> Apply Now
                </a>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-brand-navy p-10 text-center">
            <h3 className="font-heading text-white text-2xl font-bold mb-3">Don't see a fit?</h3>
            <p className="font-body text-gray-300 mb-6">
              Send your resume to us — we're always open to talented individuals.
            </p>
            <a href={`mailto:${COMPANY.email}?subject=General Application`} className="btn-primary inline-flex items-center gap-2">
              <Mail size={16} /> Send Your Resume
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
