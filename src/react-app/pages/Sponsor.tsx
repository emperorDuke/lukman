export default function Sponsor() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-8 py-6">
          <a href="/" className="inline-flex items-center gap-2 text-gray-900 hover:text-gray-600 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="font-medium">Back to Home</span>
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-8 py-16">
        {/* Title Section */}
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Partner with Lukman Aufbau
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed mb-4">
            30 Days of Authentic Exposure
          </p>
          <p className="text-xl text-gray-600 leading-relaxed">
            Ideal for founders, tools, and creators who want meaningful reach to an engaged audience—not vanity metrics.
          </p>
        </div>

        {/* Package Overview */}
        <div className="mb-16 pb-16 border-b border-gray-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Package Overview</h2>
          
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 mb-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-2">Duration</p>
                <p className="text-2xl font-bold text-gray-900">30 Days</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-2">Total Reach</p>
                <p className="text-2xl font-bold text-gray-900">10,000+ Creators & Builders</p>
              </div>
            </div>
          </div>
        </div>

        {/* X/Twitter Promotion */}
        <div className="mb-16 pb-16 border-b border-gray-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">X/Twitter Promotion</h2>
          <ul className="space-y-4 text-lg text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-green-500 font-bold mt-1">•</span>
              <span>1 strategic, high-performing post per day</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 font-bold mt-1">•</span>
              <span>Native, value-first content that ties naturally to your product</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 font-bold mt-1">•</span>
              <span>Optimized for real engagement and algorithm reach</span>
            </li>
          </ul>
          
          <div className="mt-8 bg-gray-50 border border-gray-200 rounded-lg p-6">
            <p className="text-lg font-semibold text-gray-900 mb-3">Total: 30 posts</p>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-sm text-gray-600 mb-1">Lowest</p>
                <p className="text-xl font-bold text-gray-900">1,000+</p>
                <p className="text-xs text-gray-500">impressions</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Average</p>
                <p className="text-xl font-bold text-gray-900">1,000+</p>
                <p className="text-xs text-gray-500">impressions</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Highest</p>
                <p className="text-xl font-bold text-gray-900">1,600+</p>
                <p className="text-xs text-gray-500">impressions</p>
              </div>
            </div>
          </div>
        </div>

        {/* Long-Form Content */}
        <div className="mb-16 pb-16 border-b border-gray-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Long-Form Content</h2>
          <ul className="space-y-4 text-lg text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-green-500 font-bold mt-1">•</span>
              <span>1 in-depth, high-converting article per week</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 font-bold mt-1">•</span>
              <span>Written to educate, build trust, and drive action</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 font-bold mt-1">•</span>
              <span>Your product woven seamlessly into the narrative</span>
            </li>
          </ul>
          
          <div className="mt-8 bg-gray-50 border border-gray-200 rounded-lg p-6">
            <p className="text-lg font-semibold text-gray-900">Total: 4 articles</p>
          </div>
        </div>

        {/* Distribution */}
        <div className="mb-16 pb-16 border-b border-gray-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Distribution</h2>
          <p className="text-lg text-gray-700 mb-6">
            Every article is amplified across:
          </p>
          <ul className="space-y-4 text-lg text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-green-500 font-bold mt-1">•</span>
              <span>My blog magazine at Digitalmehmet.com</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 font-bold mt-1">•</span>
              <span>Substack (343+ subscribers)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 font-bold mt-1">•</span>
              <span>Twitter/X (2,200+ followers)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 font-bold mt-1">•</span>
              <span>Medium (4,000+ followers)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 font-bold mt-1">•</span>
              <span>Medium (1,215+ email subscribers)</span>
            </li>
          </ul>
          
          <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-6">
            <p className="text-lg text-gray-900 italic">
              Your brand gets layered, compounding exposure across trusted creator platforms.
            </p>
          </div>
        </div>

        {/* What Sponsors Get */}
        <div className="mb-16 pb-16 border-b border-gray-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What Sponsors Get</h2>
          <ul className="space-y-4 text-lg text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-green-500 font-bold mt-1">•</span>
              <span>Consistent daily visibility for a full month</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 font-bold mt-1">•</span>
              <span>Trust-based promotion from a creator your audience already follows</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 font-bold mt-1">•</span>
              <span>Evergreen long-form content that keeps working long after the campaign</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 font-bold mt-1">•</span>
              <span>Direct access to a thoughtful, high-intent audience of builders and writers</span>
            </li>
          </ul>
        </div>

        {/* Why Partner */}
        <div className="mb-16 pb-16 border-b border-gray-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Partner with Me?</h2>
          <p className="text-lg text-gray-700 mb-8">
            Because I don't just promote, I roll up my sleeves.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <span className="text-green-500 font-bold text-xl">1.</span>
              <p className="text-lg text-gray-700">I'll upgrade your index on Google, ChatGPT, and Perplexity in as little as 1 week</p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-green-500 font-bold text-xl">2.</span>
              <p className="text-lg text-gray-700">Get discovered by buyers already searching for your solution</p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-green-500 font-bold text-xl">3.</span>
              <p className="text-lg text-gray-700">I'll build a content engine that brings in leads every month</p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-green-500 font-bold text-xl">4.</span>
              <p className="text-lg text-gray-700">I'll implement a full SEO strategy: content, backlinks, tech, all of it</p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-green-500 font-bold text-xl">5.</span>
              <p className="text-lg text-gray-700">Have +20% monthly organic growth</p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-green-500 font-bold text-xl">6.</span>
              <p className="text-lg text-gray-700">I'll promote your services across my portfolio and client base</p>
            </div>
          </div>
          
          <div className="mt-8 bg-gray-50 border border-gray-200 rounded-lg p-6">
            <p className="text-lg text-gray-700 mb-4">
              And yes, I'll bring content strategy, email, Twitter strategy, lead magnets, and more.
            </p>
            <p className="text-lg text-gray-900 font-semibold">
              You get access to all the people and processes in my network.
            </p>
          </div>
        </div>

        {/* Partnership Philosophy */}
        <div className="mb-16 pb-16 border-b border-gray-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">This Isn't a Flip</h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-4">
            I'm a long-term partner.
          </p>
          <p className="text-xl text-gray-700 leading-relaxed">
            And I want to build something real, with the right operator.
          </p>
        </div>

        {/* Pricing */}
        <div className="mb-16 pb-16 border-b border-gray-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Pricing</h2>
          <div className="bg-green-50 border-2 border-green-500 rounded-lg p-8">
            <p className="text-xl text-gray-900 font-semibold mb-4">
              Packages start at $5,000 (custom based on fit and scope).
            </p>
            <p className="text-lg text-gray-700">
              <strong>Pro tip:</strong> I also offer a lighter "Spotlight" tier—15 posts + 2 articles—for $2,500. Perfect for testing the waters or smaller budgets.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-gray-600 mb-8">
            If that's you (or you know someone who might be a fit), let's chat.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:bigaufbau@gmail.com"
              className="inline-block px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold text-lg rounded-lg transition-colors"
            >
              Email Me
            </a>
            <a 
              href="https://calendly.com/bigaufbau/30min?source=user_about----------------------4b1e9b04c796----------------------&month=2026-02"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white font-bold text-lg rounded-lg transition-colors"
            >
              Book a Call
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
