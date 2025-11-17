import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section id="join" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border bg-gradient-to-tr from-emerald-600 via-emerald-500 to-teal-500 p-8 sm:p-12">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

          <div className="relative grid lg:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <h3 className="text-3xl sm:text-4xl font-bold">Start your journey with a free onboarding call</h3>
              <p className="mt-3 text-emerald-50 text-lg">We'll help match you with a teacher, set goals, and create a personalized plan to memorize and understand the Quran.</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-end">
              <a href="#" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-emerald-700 font-semibold px-5 py-3 shadow-sm hover:shadow">
                Book a Call
                <ArrowRight size={18} />
              </a>
              <a href="#" className="inline-flex items-center justify-center rounded-xl bg-emerald-700/40 hover:bg-emerald-700/50 text-white font-medium px-5 py-3 border border-white/20">
                Explore Community
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
