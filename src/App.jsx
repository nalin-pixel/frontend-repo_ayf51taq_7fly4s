import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50/40 via-white to-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <section id="pricing" className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Simple, transparent pricing</h2>
              <p className="mt-3 text-gray-600">Start free. Upgrade when you need more.</p>
            </div>

            <div className="mt-12 grid md:grid-cols-3 gap-6">
              <div className="rounded-2xl border bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold text-emerald-700">Starter</p>
                <p className="mt-2 text-4xl font-extrabold">$0</p>
                <p className="text-gray-600">Forever free for individuals</p>
                <ul className="mt-6 space-y-2 text-sm text-gray-700">
                  <li>2 active calls / month</li>
                  <li>Basic progress tracker</li>
                  <li>Community access</li>
                </ul>
                <a href="#join" className="mt-6 inline-block w-full text-center rounded-xl bg-emerald-600 text-white py-3 font-medium">Get started</a>
              </div>

              <div className="relative rounded-2xl border bg-gradient-to-b from-white to-emerald-50 p-6 shadow-sm ring-2 ring-emerald-500/20">
                <div className="absolute -top-3 right-4 inline-flex items-center rounded-full bg-emerald-600 px-3 py-1 text-xs font-semibold text-white">Popular</div>
                <p className="text-sm font-semibold text-emerald-700">Halaqah</p>
                <p className="mt-2 text-4xl font-extrabold">$12</p>
                <p className="text-gray-600">Per teacher per month</p>
                <ul className="mt-6 space-y-2 text-sm text-gray-700">
                  <li>Unlimited calls</li>
                  <li>Advanced progress & reports</li>
                  <li>Parent dashboards</li>
                </ul>
                <a href="#join" className="mt-6 inline-block w-full text-center rounded-xl bg-emerald-600 text-white py-3 font-medium">Start 14-day trial</a>
              </div>

              <div className="rounded-2xl border bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold text-emerald-700">Academy</p>
                <p className="mt-2 text-4xl font-extrabold">Custom</p>
                <p className="text-gray-600">For schools and organizations</p>
                <ul className="mt-6 space-y-2 text-sm text-gray-700">
                  <li>Bulk onboarding</li>
                  <li>SSO and integrations</li>
                  <li>Dedicated support</li>
                </ul>
                <a href="#join" className="mt-6 inline-block w-full text-center rounded-xl bg-emerald-600 text-white py-3 font-medium">Contact sales</a>
              </div>
            </div>
          </div>
        </section>
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
