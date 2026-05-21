import NewsletterForm from "@/react-app/components/NewsletterForm";
import { useState } from "react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Floating Partner Banner */}
      <a 
        href="/sponsor"
        className="fixed z-50 px-8 py-4 text-lg font-bold text-white transition-all duration-300 -translate-x-1/2 bg-green-500 shadow-xl bottom-8 left-1/2 hover:bg-green-600 rounded-2xl hover:scale-105 md:text-xl whitespace-nowrap"
      >
        Want to sponsor me?
      </a>
      {/* Header */}
      <header className="relative flex items-center justify-between px-8 py-6 mx-auto max-w-7xl">
        <div className="flex items-center gap-4">
          {/* Profile image */}
          <img 
            src="https://019b9ced-b80c-7083-8e53-5d37790b421c.mochausercontent.com/image.png_0228.png" 
            alt="Lukman Aufbau"
            className="object-cover w-16 h-16 rounded-lg"
          />
          <div>
            <p className="text-sm text-gray-600">by</p>
            <h1 className="text-2xl font-bold text-gray-900">LUKMAN AUFBAU</h1>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="items-center hidden gap-8 md:flex">
          <a href="/book" className="font-medium text-gray-700 hover:text-gray-900">BOOK</a>
          <a href="/services" className="font-medium text-gray-700 hover:text-gray-900">SERVICES</a>
          <a href="/articles" className="font-medium text-gray-700 hover:text-gray-900">ARTICLES</a>
          <a href="#about" className="font-medium text-gray-700 hover:text-gray-900">ABOUT</a>
          <a 
            href="https://medium.com/@LukmanAufbau" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 font-medium text-white transition-colors bg-green-500 rounded-md hover:bg-green-600"
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
          className="p-2 text-gray-700 md:hidden hover:text-gray-900"
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
          <div className="absolute left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg top-full md:hidden">
            <nav className="flex flex-col px-8 py-4 space-y-4">
              <a href="/book" className="py-2 font-medium text-gray-700 hover:text-gray-900">BOOK</a>
              <a href="/services" className="py-2 font-medium text-gray-700 hover:text-gray-900">SERVICES</a>
              <a href="/articles" className="py-2 font-medium text-gray-700 hover:text-gray-900">ARTICLES</a>
              <a href="#about" onClick={() => setMobileMenuOpen(false)} className="py-2 font-medium text-gray-700 hover:text-gray-900">ABOUT</a>
              <a 
                href="https://medium.com/@LukmanAufbau" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2 font-medium text-white transition-colors bg-green-500 rounded-md hover:bg-green-600"
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

      {/* Main Content */}
      <main className="max-w-5xl px-8 py-20 mx-auto text-center" id="newsletter">
        <h2 className="mb-8 text-6xl font-bold text-gray-900 md:text-7xl">
          LIKE STEROIDS FOR DISTRIBUTION
        </h2>

        <p className="max-w-4xl mx-auto mb-12 text-xl text-gray-600">
          Growing a SaaS is hard. We make distribution a whole lot easier, more predictable, less stressful, and more fun.
        </p>

        {/* Email Form */}
        <NewsletterForm variant="hero" />

        {/* Arrow decoration */}
        <div className="relative mt-4">
          <svg 
            className="w-32 h-32 mx-auto transform rotate-12" 
            viewBox="0 0 100 100" 
            fill="none" 
            stroke="currentColor"
          >
            <path 
              d="M 20 80 Q 40 20, 80 40" 
              strokeWidth="2" 
              strokeLinecap="round"
              className="text-gray-800"
            />
            <path 
              d="M 80 40 L 70 35 M 80 40 L 75 50" 
              strokeWidth="2" 
              strokeLinecap="round"
              className="text-gray-800"
            />
          </svg>
        </div>
      </main>

      {/* About Section */}
      <section className="max-w-6xl px-8 py-8 mx-auto" id="about">
        <div className="grid gap-12 p-12 border border-gray-200 rounded-lg md:grid-cols-2 bg-gray-50">
          {/* Left Column - Bio */}
          <div className="space-y-5 text-left">
            <h3 className="text-2xl font-bold text-gray-900">
              Hola, I'm the founder of{' '}
              <a href="https://respostly.ai" target="_blank" rel="noopener noreferrer" className="font-medium text-green-600 hover:underline">
                Respostly.AI
              </a>
              ,
            </h3>
            <p className="text-lg leading-relaxed text-gray-800">
              where we help writers and creators get more value from the content they've already written.
            </p>
            
            <p className="text-lg leading-relaxed text-gray-800">
              Before this, I was doing what most writers do — publishing articles, sharing them once, and moving on. I learned the hard way that great content isn't enough if distribution is inconsistent. Those lessons led to building systems that post for you instead of burning you out.
            </p>
            
            <p className="text-lg leading-relaxed text-gray-800">
              These are my stories about content, marketing, building lean one-person businesses, and using automation to create leverage.
            </p>
            
            <p className="text-lg leading-relaxed text-gray-800">
              This site is about actionable advice for writers, creators, and entrepreneurs. You'll learn how to reuse content, grow visibility, and build systems that work in the background. I've failed, learned, and shipped imperfectly over the years — and I share what actually works.
            </p>
            
            <p className="text-lg leading-relaxed text-gray-800">
              <strong>Bonus:</strong> Bonus, you can browse through my{' '}
              <a href="https://medium.com/@LukmanAufbau" target="_blank" rel="noopener noreferrer" className="font-medium text-green-600 hover:underline">
                Medium
              </a>
              {' '}where you'll learn about the experiences I gather from the digital landscape.
            </p>
          </div>

          {/* Right Column - Article Links */}
          <div className="text-left">
            <div>
              <h3 className="mb-4 text-lg font-bold text-gray-900">Best articles to start with:</h3>
              <ul className="mb-8 space-y-3">
                <li>
                  <a href="https://medium.com/readers-digests/if-its-uncomfortable-you-re-growing-fe56a3a09129?sk=7b1448db9ccd2de2b0fcf35082a5945c" target="_blank" rel="noopener noreferrer" className="text-base font-medium text-gray-900 underline transition-colors hover:text-green-600 decoration-2 underline-offset-4">
                    If it's uncomfortable, you're growing.
                  </a>
                </li>
                <li>
                  <a href="https://medium.com/illuminations-mirror/how-i-write-copy-for-rundown-ai-that-anyone-can-steal-52ac914bce39?sk=3009e423e28d361314d98baee9a9c224" target="_blank" rel="noopener noreferrer" className="text-base font-medium text-gray-900 underline transition-colors hover:text-green-600 decoration-2 underline-offset-4">
                    How I Write Copy for Rundown AI (that Anyone Can Steal)
                  </a>
                </li>
                <li>
                  <a href="https://medium.com/readers-digests/my-thoughts-on-writing-content-that-win-the-crowd-the-arena-strategy-fceb0154a524?sk=95fafc85846fc61ad82ac6caed39576b" target="_blank" rel="noopener noreferrer" className="text-base font-medium text-gray-900 underline transition-colors hover:text-green-600 decoration-2 underline-offset-4">
                    My Thoughts On Writing Content That Wins The Crowd (The Arena Strategy)
                  </a>
                </li>
              </ul>

              <h3 className="mb-4 text-lg font-bold text-gray-900">Recent piece on The Newsletter Toolkit:</h3>
              <ul className="space-y-3">
                <li>
                  <a href="https://medium.com/technology-hits/turn-subscribers-into-engaged-readers-with-this-battle-tested-checklist-fe362e040f11?sk=23b786a22194b340d71cf4372e9c4ddb" target="_blank" rel="noopener noreferrer" className="text-base font-medium text-gray-900 underline transition-colors hover:text-green-600 decoration-2 underline-offset-4">
                    The 30-Day Email Sequence
                  </a>
                </li>
                <li>
                  <a href="https://medium.com/illumination/the-newsletter-toolkit-chapter-2-618af2ec7d90?sk=1202487082b31974ca3494f0eebef1dc" target="_blank" rel="noopener noreferrer" className="text-base font-medium text-gray-900 underline transition-colors hover:text-green-600 decoration-2 underline-offset-4">
                    Content Creation & Sharing
                  </a>
                </li>
                <li>
                  <a href="https://medium.com/illumination-book-chapters/the-newsletter-toolkit-chapter-3-cc4470ee75b8?sk=9618445230d72b8b162ea5fa0e52ae11" target="_blank" rel="noopener noreferrer" className="text-base font-medium text-gray-900 underline transition-colors hover:text-green-600 decoration-2 underline-offset-4">
                    Define Your Audience & Niche
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Newsletter Section */}
      <section className="px-8 py-16 mx-auto border-t border-gray-200 max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-12 md:flex-row">
          {/* Left Side - Newsletter Info */}
          <div className="flex-1 text-left">
            <h3 className="mb-6 text-5xl font-bold text-gray-900">
              Free weekly <span className="text-green-500">Content OS</span> Newsletter
            </h3>
            <p className="mb-4 text-lg text-gray-600">
              Join 1000+ subscribers to the Free Weekly Content OS Newsletter for insider tips, cutting-edge strategies, and personal tool recommendations.
            </p>
          </div>

          {/* Arrow */}
          <div className="hidden md:block">
            <svg 
              className="w-24 h-24 transform rotate-0" 
              viewBox="0 0 100 100" 
              fill="none" 
              stroke="currentColor"
            >
              <path 
                d="M 20 50 L 80 50" 
                strokeWidth="2" 
                strokeLinecap="round"
                className="text-gray-800"
              />
              <path 
                d="M 80 50 L 70 40 M 80 50 L 70 60" 
                strokeWidth="2" 
                strokeLinecap="round"
                className="text-gray-800"
              />
            </svg>
          </div>

          {/* Right Side - Signup Form */}
          <NewsletterForm variant="bottom" />
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-20">
        {/* Social Media Bar */}
        <div className="py-8 bg-green-500">
          <div className="px-8 mx-auto max-w-7xl">
            <div className="flex justify-center gap-8 md:gap-12">
              <a href="https://medium.com/@LukmanAufbau" target="_blank" rel="noopener noreferrer" className="text-white transition-colors hover:text-gray-200">
                <svg className="w-10 h-10 md:w-12 md:h-12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M0 0v24h24V0H0zm19.938 5.686L18.651 6.92a.376.376 0 0 0-.143.362v9.067a.376.376 0 0 0 .143.361l1.257 1.234v.271h-6.322v-.27l1.302-1.265c.128-.128.128-.165.128-.36V8.99l-3.62 9.195h-.49L6.69 8.99v6.163a.85.85 0 0 0 .233.707l1.694 2.054v.271H3.815v-.27L5.51 15.86a.82.82 0 0 0 .218-.707V8.027a.624.624 0 0 0-.203-.527L4.019 5.686v-.27h4.674l3.613 7.923 3.176-7.924h4.456v.271z"/>
                </svg>
              </a>
              <a href="https://twitter.com/LukmanAufbau" target="_blank" rel="noopener noreferrer" className="text-white transition-colors hover:text-gray-200">
                <svg className="w-10 h-10 md:w-12 md:h-12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="https://substack.com/@LukmanAufbau" target="_blank" rel="noopener noreferrer" className="text-white transition-colors hover:text-gray-200">
                <svg className="w-10 h-10 md:w-12 md:h-12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="py-12 text-gray-900 bg-white md:py-16">
          <div className="max-w-4xl px-8 mx-auto space-y-8 text-center">
            <p className="text-xl leading-relaxed md:text-2xl">
              Want to sponsor me and get in front of 10,000+ combined creators, writer's & AI enthusiasts?{' '}
              <a href="/sponsor" className="font-semibold text-green-600 underline hover:text-green-700">
                Get in touch
              </a>.
            </p>

            <p className="text-xl leading-relaxed md:text-2xl">
              Interested in working with me 1:1?{' '}
              <a href="/sponsor" className="font-semibold text-green-600 underline hover:text-green-700">
                Get in touch
              </a>.
            </p>

            <p className="text-xl leading-relaxed md:text-2xl">
              Or{' '}
              <a href="https://calendly.com/lukmanaufbau" target="_blank" rel="noopener noreferrer" className="font-semibold text-green-600 underline hover:text-green-700">
                book a call
              </a>.
            </p>

            <p className="text-xl leading-relaxed md:text-2xl">
              Go deeper?{' '}
              <a href="https://respostly.ai" target="_blank" rel="noopener noreferrer" className="font-semibold text-green-600 underline hover:text-green-700">
                Join the Repostly AI
              </a>.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="py-8 bg-white border-t border-gray-200">
          <div className="px-8 mx-auto text-center max-w-7xl">
            <p className="mb-2 text-base text-gray-900">
              © 2029 Lukman Aufbau
            </p>
            <a href="#" className="text-sm font-medium text-gray-900 hover:underline">
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
