import { Clock, CheckCircle2, Video, BarChart3, Users, BookOpenCheck } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: Video,
      title: 'Schedule Calls Effortlessly',
      desc: 'Set up recurring or one-off sessions. Automatic time zone handling and reminders.',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      icon: BookOpenCheck,
      title: 'Track Quran Progress',
      desc: 'Record Surah & Ayah checkpoints, tajweed notes, memorization status, and goals.',
      color: 'from-indigo-500 to-violet-500'
    },
    {
      icon: BarChart3,
      title: 'Insights & Reports',
      desc: 'Visualize consistency, streaks, and mastery across Surahs with beautiful charts.',
      color: 'from-amber-500 to-orange-500'
    },
    {
      icon: Users,
      title: 'Grow Communities',
      desc: 'Create halaqahs, manage cohorts, and invite parents to view progress securely.',
      color: 'from-sky-500 to-cyan-500'
    },
    {
      icon: Clock,
      title: 'Attendance & Reminders',
      desc: 'Automated attendance logs, SMS/email reminders, and make-up sessions.',
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: CheckCircle2,
      title: 'Certificates & Milestones',
      desc: 'Celebrate juz and surah completions with shareable badges and certificates.',
      color: 'from-lime-500 to-green-500'
    },
  ]

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white to-emerald-50/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Built for meaningful learning</h2>
          <p className="mt-3 text-gray-600">Everything you need to teach, learn, and stay connected — all in one place.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="group relative rounded-2xl border bg-white p-6 shadow-sm hover:shadow-lg transition-shadow">
              <div className={`h-12 w-12 rounded-xl bg-gradient-to-tr ${f.color} text-white grid place-content-center`}>
                <f.icon size={22} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-1 text-gray-600 text-sm">{f.desc}</p>
              <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-emerald-300/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
