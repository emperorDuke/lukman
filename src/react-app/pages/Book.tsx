import { Link } from "react-router";
import { useState } from "react";

export default function Book() {
  const [showBuyModal, setShowBuyModal] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Fixed "Press B" Button */}
      <button 
        onClick={() => setShowBuyModal(true)}
        className="fixed z-50 px-6 py-3 text-sm font-bold text-white transition-all bg-green-500 rounded-lg shadow-lg top-4 right-4 hover:bg-green-600 hover:shadow-xl md:text-base"
      >
        Press B anytime to buy
      </button>

      {/* Header */}
      <header className="flex items-center justify-between px-8 py-6 mx-auto max-w-7xl">
        <Link to="/" className="flex items-center gap-4">
          <img 
            src="https://019b9ced-b80c-7083-8e53-5d37790b421c.mochausercontent.com/image.png_0228.png" 
            alt="Lukman Aufbau"
            className="object-cover w-16 h-16 rounded-lg"
          />
          <div>
            <p className="text-sm text-gray-600">by</p>
            <h1 className="text-2xl font-bold text-gray-900">LUKMAN AUFBAU</h1>
          </div>
        </Link>

        <nav className="items-center hidden gap-8 md:flex">
          <Link to="/" className="font-medium text-gray-700 hover:text-gray-900">HOME</Link>
          <Link to="/services" className="font-medium text-gray-700 hover:text-gray-900">SERVICES</Link>
          <Link to="/articles" className="font-medium text-gray-700 hover:text-gray-900">ARTICLES</Link>
          <a href="/#about" className="font-medium text-gray-700 hover:text-gray-900">ABOUT</a>
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
      </header>

      {/* Book Section */}
      <main className="px-8 py-8 mx-auto max-w-7xl">
        {/* Top Banner */}
        <div className="py-4 mb-8 text-center border-t border-b border-gray-300">
          <p className="text-gray-600 tracking-[0.2em] text-xs md:text-sm uppercase font-serif">
            More than 200,000 copies sold
          </p>
        </div>

        {/* Achievement Badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-12 text-center md:gap-12">
          <div className="flex flex-col items-center gap-2">
            <span className="text-3xl font-bold text-gray-900 md:text-4xl">#1</span>
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M0 0v24h24V0H0zm19.938 5.686L18.651 6.92a.376.376 0 0 0-.143.362v9.067a.376.376 0 0 0 .143.361l1.257 1.234v.271h-6.322v-.27l1.302-1.265c.128-.128.128-.165.128-.36V8.99l-3.62 9.195h-.49L6.69 8.99v6.163a.85.85 0 0 0 .233.707l1.694 2.054v.271H3.815v-.27L5.51 15.86a.82.82 0 0 0 .218-.707V8.027a.624.624 0 0 0-.203-.527L4.019 5.686v-.27h4.674l3.613 7.923 3.176-7.924h4.456v.271z"/>
              </svg>
              <span className="font-semibold">Medium</span>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-3xl font-bold text-gray-900 md:text-4xl">#1</span>
            <span className="font-semibold">Substack</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-3xl font-bold text-gray-900 md:text-4xl">#5</span>
            <span className="font-semibold">Content Marketing</span>
          </div>
        </div>

        {/* Main Book Display - Three Column Layout */}
        <div className="grid items-start gap-8 mb-12 md:grid-cols-3 md:gap-12">
          {/* Left Testimonial */}
          <div className="space-y-4 text-center">
            <div className="flex justify-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400 fill-current md:w-6 md:h-6" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              ))}
            </div>
            <p className="max-w-xs mx-auto text-sm leading-relaxed text-gray-700 md:text-base">
              "Essential reading for the modern entrepreneur. If you're looking for a book that instills confidence and fun into starting a business, this is it."
            </p>
            <div className="flex flex-col items-center gap-2 mt-4">
              <div className="overflow-hidden bg-gray-200 rounded-full w-14 h-14 md:w-16 md:h-16">
                <img src="https://via.placeholder.com/64" alt="Marie Forleo" className="object-cover w-full h-full" />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900 md:text-base">Marie Forleo</p>
                <p className="text-xs italic text-gray-500 md:text-sm">#1 NYTimes bestselling author,<br/>Everything is Figureoutable</p>
              </div>
            </div>
          </div>

          {/* Center Book Cover */}
          <div className="flex justify-center">
            <button 
              onClick={() => setShowBuyModal(true)}
              className="relative cursor-pointer group"
            >
              <img 
                src="https://019b9ced-b80c-7083-8e53-5d37790b421c.mochausercontent.com/NEWSLETTER-TOOLKIT-PHOTOS.jpg"
                alt="The Newsletter Toolkit"
                className="w-full max-w-sm transition-transform rounded-sm shadow-2xl group-hover:scale-105"
              />
            </button>
          </div>

          {/* Right Testimonial */}
          <div className="space-y-4 text-center">
            <div className="flex justify-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400 fill-current md:w-6 md:h-6" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              ))}
            </div>
            <p className="max-w-xs mx-auto text-sm leading-relaxed text-gray-700 md:text-base">
              "Lukman Aufbau changed my life. I created a newsletter because of him. That newsletter went on to reach tens of thousands... The Newsletter Toolkit is the real deal!"
            </p>
            <div className="flex flex-col items-center gap-2 mt-4">
              <div className="overflow-hidden bg-gray-200 rounded-full w-14 h-14 md:w-16 md:h-16">
                <img src="https://via.placeholder.com/64" alt="Sam Parr" className="object-cover w-full h-full" />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900 md:text-base">Sam Parr</p>
                <p className="text-xs italic text-gray-500 md:text-sm">Founder of Hampton and<br/>The Hustle, host of My First Million</p>
              </div>
            </div>
          </div>
        </div>

        {/* Buy Buttons Row */}
        <div className="flex flex-col items-center justify-center gap-4 mb-20 md:flex-row">
          <button 
            onClick={() => setShowBuyModal(true)}
            className="flex items-center justify-center w-full gap-2 px-8 py-4 font-semibold text-gray-900 transition-all bg-white border-2 border-gray-300 rounded-lg shadow md:w-auto hover:shadow-md"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13.5 2C9.364 2 6 5.364 6 9.5c0 1.026.243 2.058.692 3.03L2 17.222l1.778 1.778 4.692-4.692A7.455 7.455 0 0013.5 17c4.136 0 7.5-3.364 7.5-7.5S17.636 2 13.5 2zm0 13c-3.032 0-5.5-2.468-5.5-5.5S10.468 4 13.5 4 19 6.468 19 9.5 16.532 15 13.5 15zm2-5.5h-4v-1h4v1z"/>
            </svg>
            Amazon
          </button>
          <button 
            onClick={() => setShowBuyModal(true)}
            className="w-full px-8 py-4 font-semibold text-gray-900 transition-all bg-white border-2 border-gray-300 rounded-lg shadow md:w-auto hover:shadow-md"
          >
            Audible
          </button>
          <button 
            onClick={() => setShowBuyModal(true)}
            className="w-full px-8 py-4 font-semibold text-gray-900 transition-all bg-white border-2 border-gray-300 rounded-lg shadow md:w-auto hover:shadow-md"
          >
            Kindle
          </button>
          <button 
            onClick={() => setShowBuyModal(true)}
            className="w-full px-8 py-4 font-semibold text-gray-900 transition-all bg-white border-2 border-gray-300 rounded-lg shadow md:w-auto hover:shadow-md"
          >
            Barnes & Noble
          </button>
        </div>

        {/* Bonuses Section */}
        <section className="max-w-4xl p-8 mx-auto mb-20 bg-gray-50 md:p-12 rounded-2xl">
          <h2 className="mb-8 text-3xl font-bold text-center text-gray-900 md:text-4xl">
            Get these bonuses 💚
          </h2>
          <div className="space-y-4 text-lg">
            <div className="flex items-start gap-3">
              <span className="text-2xl">💚</span>
              <p className="text-gray-800"><strong>The Newsletter Growth Journal</strong> – Track your progress and set actionable goals</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">💚</span>
              <p className="text-gray-800"><strong>10 Idea Challenges</strong> – Exercises to generate winning content ideas</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">💚</span>
              <p className="text-gray-800"><strong>Newsletter Business Model Workbook</strong> – Map out your monetization strategy</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">💚</span>
              <p className="text-gray-800"><strong>Toolkit Enhancement Guide</strong> – Advanced tactics for scaling to 100K+ subscribers</p>
            </div>
          </div>
        </section>

        {/* Free Chapter Section */}
        <section className="max-w-5xl p-8 mx-auto mb-20 border-2 border-green-500 bg-green-50 md:p-12 rounded-2xl">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                Get a free chapter!
              </h2>
              <p className="mb-6 text-lg text-gray-700">
                Learn the exact framework I used to grow from 0 to 50,000 newsletter subscribers in 12 months.
              </p>
              <div className="flex flex-col gap-0 mb-4 overflow-hidden rounded-lg shadow-lg md:flex-row">
                <div className="flex items-center flex-1 px-4 py-3 bg-white border border-gray-200 md:px-6 md:py-4">
                  <svg className="w-5 h-5 mr-3 text-gray-400 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <input
                    type="email"
                    placeholder="Your Email Address"
                    className="flex-1 text-base text-gray-700 outline-none md:text-lg"
                  />
                </div>
                <button className="px-6 py-3 text-base font-bold text-white transition-colors bg-green-500 md:px-8 md:py-4 hover:bg-green-600 md:text-lg">
                  Get the free chapter!
                </button>
              </div>
              <p className="text-sm text-gray-600">
                🌮 We'll also send you newsletter tips and growth strategies
              </p>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://019b9ced-b80c-7083-8e53-5d37790b421c.mochausercontent.com/NEWSLETTER-TOOLKIT-PHOTOS.jpg"
                alt="The Newsletter Toolkit"
                className="w-64 mx-auto rounded-sm shadow-xl"
              />
            </div>
          </div>
        </section>

        {/* What You'll Learn Section */}
        <section className="max-w-4xl mx-auto mb-20">
          <h2 className="mb-12 text-3xl font-bold text-center text-gray-900 md:text-4xl">
            What you'll learn
          </h2>
          <div className="space-y-6 text-lg">
            <p className="text-gray-800">
              ✅ How to calculate your <strong>Freedom Number</strong> and use your newsletter to reach it
            </p>
            <p className="text-gray-800">
              ✅ The exact steps to get your <strong>first 100 subscribers</strong> in 48 hours
            </p>
            <p className="text-gray-800">
              ✅ <strong>10 easy-to-validate content ideas</strong> that attract your ideal readers
            </p>
            <p className="text-gray-800">
              ✅ My <strong>One-Page Newsletter Business Model</strong> you can fill out in 10 minutes
            </p>
            <p className="text-gray-800">
              ✅ How to <strong>monetize from day one</strong> (even with a small list)
            </p>
            <p className="text-gray-800">
              ✅ The <strong>48-Hour Content Sprint</strong> that produces weeks of newsletter content
            </p>
            <p className="text-gray-800">
              ✅ <strong>Automation systems</strong> that run your newsletter while you sleep
            </p>
            <p className="text-gray-800">
              ✅ How to <strong>repurpose one article</strong> into 30+ social media posts
            </p>
            <p className="text-gray-800">
              ✅ The psychology behind <strong>viral newsletter growth</strong> and how to trigger it
            </p>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="max-w-6xl mx-auto mb-20">
          <h2 className="mb-12 text-3xl font-bold text-center text-gray-900 md:text-4xl">
            What readers are saying
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                name: "Jessica Wu",
                role: "Content Creator",
                quote: "This book completely changed how I approach my newsletter. I went from 200 to 5,000 subscribers in 3 months using Lukman's strategies."
              },
              {
                name: "David Rodriguez",
                role: "Freelance Writer",
                quote: "The automation tactics alone are worth 10x the price. I now spend 2 hours a week on my newsletter instead of 20."
              },
              {
                name: "Emma Thompson",
                role: "Marketing Consultant",
                quote: "Finally, a book that treats newsletters as a real business. The monetization frameworks are pure gold."
              }
            ].map((review, i) => (
              <div key={i} className="p-6 bg-white border border-gray-200 rounded-lg shadow-md">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
                <p className="mb-4 italic text-gray-700">"{review.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                  <div>
                    <p className="font-bold text-gray-900">{review.name}</p>
                    <p className="text-sm text-gray-500">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 mb-12 text-center md:py-20 bg-gradient-to-b from-green-50 to-white rounded-2xl">
          <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
            Ready to Build Your Newsletter Empire?
          </h2>
          <p className="max-w-2xl px-4 mx-auto mb-8 text-xl text-gray-600">
            Join thousands of creators who have transformed their newsletters using the strategies in this book.
          </p>
          <button 
            onClick={() => setShowBuyModal(true)}
            className="px-10 py-4 text-lg font-bold text-white transition-all transform bg-green-500 rounded-lg shadow-lg md:px-12 md:py-5 hover:bg-green-600 md:text-xl hover:shadow-xl hover:-translate-y-1"
          >
            Get Your Copy Today →
          </button>
        </section>
      </main>

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
        <div className="py-12 text-white bg-gray-900 md:py-16">
          <div className="max-w-4xl px-8 mx-auto space-y-8 text-center">
            <p className="text-xl leading-relaxed md:text-2xl">
              Want to sponsor me and get in front of 10,000+ combined creators, writer's & AI enthusiasts?{' '}
              <a href="mailto:bigaufbau@gmail.com" className="font-semibold text-green-400 underline hover:text-green-300">
                Get in touch
              </a>.
            </p>

            <p className="text-xl leading-relaxed md:text-2xl">
              Interested in working with me 1:1?{' '}
              <a href="mailto:bigaufbau@gmail.com" className="font-semibold text-green-400 underline hover:text-green-300">
                Get in touch
              </a>.
            </p>

            <p className="text-xl leading-relaxed md:text-2xl">
              Or{' '}
              <a href="#" className="font-semibold text-green-400 underline hover:text-green-300">
                book a call
              </a>.
            </p>

            <p className="text-xl leading-relaxed md:text-2xl">
              Go deeper?{' '}
              <a href="#" className="font-semibold text-green-400 underline hover:text-green-300">
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

      {/* Buy Modal */}
      {showBuyModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50" onClick={() => setShowBuyModal(false)}>
          <div className="w-full max-w-md p-8 bg-white rounded-2xl" onClick={(e) => e.stopPropagation()}>
            <h3 className="mb-4 text-2xl font-bold text-gray-900">Get The Newsletter Toolkit</h3>
            <p className="mb-6 text-gray-600">Choose your preferred format:</p>
            <div className="space-y-3">
              <a href="#" className="block w-full px-6 py-4 font-bold text-center text-white transition-colors bg-green-500 rounded-lg hover:bg-green-600">
                Buy on Amazon
              </a>
              <a href="#" className="block w-full px-6 py-4 font-bold text-center text-gray-900 transition-colors bg-gray-100 rounded-lg hover:bg-gray-200">
                Buy on Audible
              </a>
              <a href="#" className="block w-full px-6 py-4 font-bold text-center text-gray-900 transition-colors bg-gray-100 rounded-lg hover:bg-gray-200">
                Buy on Kindle
              </a>
              <a href="#" className="block w-full px-6 py-4 font-bold text-center text-gray-900 transition-colors bg-gray-100 rounded-lg hover:bg-gray-200">
                Buy at Barnes & Noble
              </a>
            </div>
            <button 
              onClick={() => setShowBuyModal(false)}
              className="w-full px-6 py-3 mt-6 font-semibold text-gray-700 transition-colors border-2 border-gray-300 rounded-lg hover:bg-gray-50"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
