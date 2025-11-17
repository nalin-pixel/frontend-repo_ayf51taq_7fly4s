import { Menu, BookOpen, Users } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Features', href: '#features' },
    { label: 'Community', href: '#community' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-30 bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-tr from-emerald-500 to-teal-500 text-white grid place-content-center">
              <BookOpen size={18} />
            </div>
            <div>
              <p className="text-sm leading-tight text-gray-500">Quran Learning</p>
              <p className="font-semibold -mt-1">NurConnect</p>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-gray-600 hover:text-gray-900 transition-colors">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#join" className="text-gray-600 hover:text-gray-900 text-sm">Sign in</a>
            <a href="#join" className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium px-4 py-2 rounded-lg shadow-sm">
              <Users size={16} />
              Join as Teacher
            </a>
          </div>

          <button className="md:hidden p-2" onClick={() => setOpen(!open)}>
            <Menu />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <nav className="grid gap-2">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="px-2 py-2 rounded-lg text-gray-700 hover:bg-gray-50">
                  {item.label}
                </a>
              ))}
              <a href="#join" className="px-2 py-2 rounded-lg bg-emerald-600 text-white text-center">Join as Teacher</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
