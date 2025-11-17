export default function Footer() {
  return (
    <footer id="contact" className="py-10 border-t bg-white/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
          <p>© {new Date().getFullYear()} NurConnect. All rights reserved.</p>
          <nav className="flex items-center gap-5">
            <a href="#features" className="hover:text-gray-900">Features</a>
            <a href="#pricing" className="hover:text-gray-900">Pricing</a>
            <a href="/test" className="hover:text-gray-900">System Status</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
