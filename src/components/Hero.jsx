import { motion } from 'framer-motion'
import { CalendarClock, TrendingUp, MessageSquareHeart } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative pt-28 pb-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-emerald-100 blur-3xl opacity-70" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-teal-100 blur-3xl opacity-70" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-flex items-center gap-2 text-emerald-700 bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full text-xs font-medium">
            <MessageSquareHeart size={14} /> Learn together, grow together
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
            Connect Students and Teachers to master the Quran
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Schedule lessons, track progress by Surah & Ayah, and build vibrant learning communities with mentorship and care.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#join" className="inline-flex items-center justify-center rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3 font-medium shadow-sm">
              Get Started Free
            </a>
            <a href="#features" className="inline-flex items-center justify-center rounded-lg bg-white hover:bg-gray-50 text-gray-900 px-5 py-3 font-medium border">
              See how it works
            </a>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 text-sm">
            <div className="flex items-center gap-2 text-gray-700">
              <CalendarClock className="text-emerald-600" size={18} /> Easy call scheduling
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <TrendingUp className="text-emerald-600" size={18} /> Progress analytics
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
          <div className="relative mx-auto max-w-md">
            <div className="absolute -inset-4 bg-gradient-to-tr from-emerald-200/60 to-teal-200/60 blur-2xl rounded-3xl" />
            <div className="relative bg-white border rounded-3xl shadow-xl p-4">
              <div className="bg-gray-900 rounded-2xl p-3">
                <div className="h-56 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-xl grid place-content-center text-white">
                  <div className="text-center">
                    <p className="text-xs uppercase tracking-widest text-emerald-100">Demo View</p>
                    <p className="mt-1 text-2xl font-semibold">Lesson in progress</p>
                    <p className="mt-1 text-emerald-100 text-sm">Student and teacher connected on a secure call</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3 text-sm">
                <div className="p-3 rounded-xl bg-emerald-50 border text-emerald-800 text-center">
                  1:1 Calls
                </div>
                <div className="p-3 rounded-xl bg-teal-50 border text-teal-800 text-center">
                  Group Circles
                </div>
                <div className="p-3 rounded-xl bg-amber-50 border text-amber-800 text-center">
                  Parent View
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
