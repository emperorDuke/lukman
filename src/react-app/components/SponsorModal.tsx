import { useState } from "react";

export default function SponsorModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="text-gray-900 hover:underline text-base font-medium"
      >
        Sponsor Us
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-8 py-4 flex justify-between items-center">
              <h2 className="text-3xl font-bold text-gray-900">Sponsor Us</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700 text-3xl leading-none"
              >
                ×
              </button>
            </div>

            <div className="p-8 md:p-12">
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  Sponsored Content Package
                </h3>
                <p className="text-xl text-gray-600 mb-4">
                  30 Days of Authentic Exposure
                </p>
                <p className="text-base text-gray-700 leading-relaxed">
                  Ideal for founders, tools, and creators who want meaningful reach to an engaged audience—not vanity metrics.
                </p>
              </div>

              <div className="space-y-8">
                {/* Duration */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">📅</span>
                    <h4 className="text-xl font-bold text-gray-900">Duration</h4>
                  </div>
                  <p className="text-gray-700 ml-8">30 days</p>
                </div>

                {/* X/Twitter Promotion */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl">🐦</span>
                    <h4 className="text-xl font-bold text-gray-900">X/Twitter Promotion</h4>
                  </div>
                  <ul className="ml-8 space-y-2 text-gray-700">
                    <li>• 1 strategic, high-performing post per day</li>
                    <li>• Native, value-first content that ties naturally to your product</li>
                    <li>• Optimized for real engagement and algorithm reach</li>
                    <li className="font-semibold mt-3">➡️ Total: 30 posts</li>
                  </ul>
                </div>

                {/* Long-Form Content */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl">✍️</span>
                    <h4 className="text-xl font-bold text-gray-900">Long-Form Content</h4>
                  </div>
                  <ul className="ml-8 space-y-2 text-gray-700">
                    <li>• 1 in-depth, high-converting article per week</li>
                    <li>• Written to educate, build trust, and drive action</li>
                    <li>• Your product woven seamlessly into the narrative</li>
                    <li className="font-semibold mt-3">➡️ Total: 4 articles</li>
                  </ul>
                </div>

                {/* Distribution */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl">📣</span>
                    <h4 className="text-xl font-bold text-gray-900">Distribution</h4>
                  </div>
                  <p className="ml-8 text-gray-700 mb-2">Every article is amplified across:</p>
                  <ul className="ml-12 space-y-2 text-gray-700">
                    <li>• Medium (4,000+ followers)</li>
                    <li>• Substack newsletter (1,000+ subscribers)</li>
                    <li>• Digitalmehmet.com blog/magazine and community channels</li>
                    <li>• Additional dedicated community networks</li>
                  </ul>
                  <p className="ml-8 text-gray-700 mt-3 italic">
                    Your brand gets layered, compounding exposure across trusted creator platforms.
                  </p>
                </div>

                {/* What Sponsors Get */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl">✅</span>
                    <h4 className="text-xl font-bold text-gray-900">What Sponsors Get</h4>
                  </div>
                  <ul className="ml-8 space-y-2 text-gray-700">
                    <li>• Consistent daily visibility for a full month</li>
                    <li>• Trust-based promotion from a creator your audience already follows</li>
                    <li>• Evergreen long-form content that keeps working long after the campaign</li>
                    <li>• Direct access to a thoughtful, high-intent audience of builders and writers</li>
                  </ul>
                </div>

                {/* Pricing */}
                <div className="bg-green-50 border-2 border-green-500 p-6 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl">💰</span>
                    <h4 className="text-xl font-bold text-gray-900">Pricing</h4>
                  </div>
                  <p className="ml-8 text-gray-900 font-semibold mb-3">
                    Packages start at $5,000 (custom based on fit and scope).
                  </p>
                  <p className="ml-8 text-gray-700">
                    <strong>Pro tip:</strong> I also offer a lighter "Spotlight" tier—15 posts + 2 articles—for $2,500. Perfect for testing the waters or smaller budgets.
                  </p>
                </div>

                {/* Ready to Collaborate */}
                <div className="text-center pt-4">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <span className="text-2xl">📩</span>
                    <h4 className="text-2xl font-bold text-gray-900">Ready to collaborate?</h4>
                  </div>
                  <p className="text-gray-700 text-lg mb-4">
                    DM me or email to discuss details and alignment.
                  </p>
                  <a 
                    href="mailto:bigaufbau@gmail.com"
                    className="inline-block px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold text-lg rounded-lg transition-colors"
                  >
                    Get in Touch →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
