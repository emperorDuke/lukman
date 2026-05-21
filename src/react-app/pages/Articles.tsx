import { useState } from "react";
import { articles } from "@/data/articles";

export default function Articles() {
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

      {/* Archive Content */}
      <main className="max-w-4xl mx-auto px-8 py-16">
        <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-8">Archive</h1>
        <p className="text-xl text-gray-700 mb-16 leading-relaxed">
          Looking for an old post? You've come to the right place. Every one of the 300+ articles I've ever published can be found here, but I'm not promising it will be easy.
        </p>

        <div className="space-y-8">
          {articles.map((article, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 items-start">
              <div className="text-lg font-semibold text-gray-900">
                {article.date}
              </div>
              <div>
                <a 
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-gray-900 hover:text-green-600 underline decoration-2 underline-offset-4 transition-colors"
                >
                  {article.title}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Older Posts Link */}
        <div className="flex justify-end mt-12 mb-16">
          <a 
            href="https://medium.com/@LukmanAufbau" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-900 hover:text-green-600 font-medium underline underline-offset-4 decoration-2 transition-colors text-lg"
          >
            Older posts →
          </a>
        </div>

        {/* Newsletter Section */}
        <section className="max-w-5xl mx-auto mt-32 mb-20 py-16 px-8 border-t border-gray-200">
          <div className="grid md:grid-cols-[1fr_auto_1fr] gap-8 md:gap-12 items-center">
            {/* Left - Newsletter Info */}
            <div className="text-left">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-gray-900">Free weekly</span> <span className="text-green-500">Content OS</span>
                <br />
                <span className="text-gray-900">Newsletter</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Join 1000+ subscribers to the Free Weekly Content OS Newsletter for insider tips, cutting-edge strategies, and personal tool recommendations.
              </p>
            </div>

            {/* Center - Arrow */}
            <div className="hidden md:block">
              <svg 
                className="w-32 h-24 transform rotate-12" 
                viewBox="0 0 100 100" 
                fill="none" 
                stroke="currentColor"
              >
                <path 
                  d="M 20 80 Q 40 20, 80 40" 
                  strokeWidth="2" 
                  strokeLinecap="round"
                  className="text-gray-900"
                />
                <path 
                  d="M 80 40 L 70 35 M 80 40 L 75 50" 
                  strokeWidth="2" 
                  strokeLinecap="round"
                  className="text-gray-900"
                />
              </svg>
            </div>

            {/* Right - Signup Form */}
            <div className="flex flex-col gap-4">
              <form className="space-y-0">
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="w-full px-6 py-4 border-2 border-gray-900 text-gray-700 text-lg outline-none focus:border-green-500 transition-colors"
                />
                <button 
                  type="submit"
                  className="w-full px-6 py-4 bg-green-500 hover:bg-green-600 text-gray-900 font-bold text-lg transition-colors"
                >
                  Spice me up!
                </button>
              </form>
              <p className="text-center text-gray-900 text-base">
                All tactics. No fluff. Action Takers Only 💥
              </p>
            </div>
          </div>
        </section>
      </main>

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
