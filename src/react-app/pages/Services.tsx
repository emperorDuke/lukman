import { useState } from "react";

export default function Services() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto relative">
        <div className="flex items-center gap-4">
          <img 
            src="https://019b9ced-b80c-7083-8e53-5d37790b421c.mochausercontent.com/image.png_0228.png" 
            alt="Lukman Aufbau"
            className="w-16 h-16 rounded-lg object-cover"
          />
          <div>
            <p className="text-sm text-gray-600">by</p>
            <h1 className="text-2xl font-bold text-gray-900">LUKMAN AUFBAU</h1>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="/" className="text-gray-700 hover:text-gray-900 font-medium">HOME</a>
          <a href="/book" className="text-gray-700 hover:text-gray-900 font-medium">BOOK</a>
          <a href="/services" className="text-gray-700 hover:text-gray-900 font-medium">SERVICES</a>
          <a href="/articles" className="text-gray-700 hover:text-gray-900 font-medium">ARTICLES</a>
          <a 
            href="https://medium.com/@LukmanAufbau" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md font-medium transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M0 0v24h24V0H0zm19.938 5.686L18.651 6.92a.376.376 0 0 0-.143.362v9.067a.376.376 0 0 0 .143.361l1.257 1.234v.271h-6.322v-.27l1.302-1.265c.128-.128.128-.165.128-.36V8.99l-3.62 9.195h-.49L6.69 8.99v6.163a.85.85 0 0 0 .233.707l1.694 2.054v.271H3.815v-.27L5.51 15.86a.82.82 0 0 0 .218-.707V8.027a.624.624 0 0 0-.203-.527L4.019 5.686v-.27h4.674l3.613 7.923 3.176-7.924h4.456v.271z"/>
            </svg>
            4K
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-gray-700 hover:text-gray-900"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg md:hidden z-50">
            <nav className="flex flex-col px-8 py-4 space-y-4">
              <a href="/" className="text-gray-700 hover:text-gray-900 font-medium py-2">HOME</a>
              <a href="/book" className="text-gray-700 hover:text-gray-900 font-medium py-2">BOOK</a>
              <a href="/services" className="text-gray-700 hover:text-gray-900 font-medium py-2">SERVICES</a>
              <a href="/articles" className="text-gray-700 hover:text-gray-900 font-medium py-2">ARTICLES</a>
              <a 
                href="https://medium.com/@LukmanAufbau" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md font-medium transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M0 0v24h24V0H0zm19.938 5.686L18.651 6.92a.376.376 0 0 0-.143.362v9.067a.376.376 0 0 0 .143.361l1.257 1.234v.271h-6.322v-.27l1.302-1.265c.128-.128.128-.165.128-.36V8.99l-3.62 9.195h-.49L6.69 8.99v6.163a.85.85 0 0 0 .233.707l1.694 2.054v.271H3.815v-.27L5.51 15.86a.82.82 0 0 0 .218-.707V8.027a.624.624 0 0 0-.203-.527L4.019 5.686v-.27h4.674l3.613 7.923 3.176-7.924h4.456v.271z"/>
                </svg>
                4K
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-8 py-20 text-center">
        <h2 className="text-6xl md:text-7xl font-bold mb-8">
          <span className="text-green-500">Services</span>
        </h2>
        <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-4">
          I'm a wordsmith who lives on the internet. I craft copy, ghostwrite in your voice, build content engines, and turn ideas into consistent presence that attracts the right people.
        </p>
        <p className="text-xl text-gray-900 font-semibold">
          Everything is 100% human-written—no AI, no shortcuts, no filler.
        </p>
      </section>

      {/* Services Grid */}
      <section className="max-w-6xl mx-auto px-8 py-12">
        <div className="space-y-12">
          {/* Copy & Ghostwriting */}
          <div className="border border-gray-200 rounded-lg p-8 md:p-10 bg-gradient-to-br from-gray-50 to-white hover:shadow-lg transition-shadow">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Copy & Ghostwriting</h3>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Words that sound exactly like you—or better. Sales pages, email sequences, landing copy, ad scripts, thought leadership articles, personal brand threads, short books. Deep voice matching through interviews and research. Unlimited revisions until it feels right.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-lg">Sales & marketing copy</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-lg">Thought leadership & personal brand pieces</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-lg">LinkedIn threads, Twitter/X content, short ebooks</span>
              </li>
            </ul>
          </div>

          {/* Newsletter Ghostwriting */}
          <div className="border border-gray-200 rounded-lg p-8 md:p-10 bg-gradient-to-br from-green-50 to-white hover:shadow-lg transition-shadow">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Newsletter Ghostwriting</h3>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              I ghost your newsletter so every issue reads like it came straight from your mind. Long-form, subscriber-first content built for high opens and real loyalty. Includes strategy for retention, monetization hooks, welcome sequences, and lead magnets when it makes sense.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-lg">1–2 premium issues per month</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-lg">Deep, engaging, branded voice</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-lg">Growth & monetization strategy baked in</span>
              </li>
            </ul>
          </div>

          {/* Blog Posts & Sponsored Content */}
          <div className="border border-gray-200 rounded-lg p-8 md:p-10 bg-gradient-to-br from-gray-50 to-white hover:shadow-lg transition-shadow">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Blog Posts & Sponsored Content</h3>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Evergreen articles that educate, build trust, and convert over months—not days. Fully researched, SEO-optimized, human-written. Sponsored pieces written native and value-first. Distribution available through trusted channels (Medium, Substack, digitalmehmet.com ecosystem) if aligned.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-lg">4–8 in-depth posts per month</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-lg">1,500–3,000 words each</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-lg">Native sponsored integration</span>
              </li>
            </ul>
          </div>

          {/* Content & Growth Strategy */}
          <div className="border border-gray-200 rounded-lg p-8 md:p-10 bg-gradient-to-br from-green-50 to-white hover:shadow-lg transition-shadow">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Content & Growth Strategy</h3>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              I build the full engine: audit where you are, map your audience, create the roadmap (SEO, lead magnets, distribution channels). Then deliver weekly high-performance social content—threads, carousels, posts—crafted for real engagement. Monthly optimization based on what actually moves the needle.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-lg">Comprehensive audit + custom roadmap</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-lg">6–12 pieces of social content per week</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-lg">Blog/newsletter integration for compounding reach</span>
              </li>
            </ul>
          </div>

          {/* Full Weekly Content Engine */}
          <div className="border-2 border-green-500 rounded-lg p-8 md:p-10 bg-gradient-to-br from-green-50 via-white to-green-50 hover:shadow-xl transition-shadow">
            <div className="inline-block bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
              MOST POPULAR
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Full Weekly Content Engine</h3>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              The done-for-you package: a high-quality newsletter (1 issue per week or bi-weekly) plus 6–12 pieces of sharp social media content every single week. Threads that spark real conversation, posts people save and share, carousels that stop the scroll. All aligned to your voice and goals. You show up consistently without lifting a finger.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-lg">Weekly newsletter + social batch</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-lg">Strategy, writing, and optimization included</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-lg">Long-term presence that builds authority & leads</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-8 py-20 text-center">
        <div className="border-2 border-gray-900 rounded-lg p-12 bg-gray-50">
          <p className="text-2xl text-gray-900 mb-6 leading-relaxed">
            Everything is 100% human-crafted. I roll up my sleeves on strategy, writing, distribution, and long-term thinking.
          </p>
          <p className="text-xl text-gray-700 mb-4">
            If any of this resonates, hit the contact button or DM me—we'll talk fit.
          </p>
          <p className="text-lg text-gray-700 mb-8">
            Email: <a href="mailto:Bigaufbau@gmail.com" className="text-green-600 hover:text-green-700 font-medium underline">Bigaufbau@gmail.com</a>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/sponsor" 
              className="inline-block bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Get in Touch
            </a>
            <a 
              href="https://calendly.com/bigaufbau/30min" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block border-2 border-gray-900 hover:bg-gray-900 hover:text-white text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Book a Call
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-20">
        <div className="bg-green-500 py-8">
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex justify-center gap-8 md:gap-12">
              <a href="https://medium.com/@LukmanAufbau" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200 transition-colors">
                <svg className="w-10 h-10 md:w-12 md:h-12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M0 0v24h24V0H0zm19.938 5.686L18.651 6.92a.376.376 0 0 0-.143.362v9.067a.376.376 0 0 0 .143.361l1.257 1.234v.271h-6.322v-.27l1.302-1.265c.128-.128.128-.165.128-.36V8.99l-3.62 9.195h-.49L6.69 8.99v6.163a.85.85 0 0 0 .233.707l1.694 2.054v.271H3.815v-.27L5.51 15.86a.82.82 0 0 0 .218-.707V8.027a.624.624 0 0 0-.203-.527L4.019 5.686v-.27h4.674l3.613 7.923 3.176-7.924h4.456v.271z"/>
                </svg>
              </a>
              <a href="https://twitter.com/LukmanAufbau" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200 transition-colors">
                <svg className="w-10 h-10 md:w-12 md:h-12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="https://substack.com/@LukmanAufbau" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200 transition-colors">
                <svg className="w-10 h-10 md:w-12 md:h-12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="bg-white py-8 border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-8 text-center">
            <p className="text-gray-900 text-base mb-2">
              © 2029 Lukman Aufbau
            </p>
            <a href="#" className="text-gray-900 hover:underline text-sm font-medium">
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
