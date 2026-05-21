import { useState, FormEvent } from "react";

interface NewsletterFormProps {
  variant?: "hero" | "bottom";
}

export default function NewsletterForm({ variant = "hero" }: NewsletterFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes("@")) {
      setStatus("error");
      setMessage("Please enter a valid email address");
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      if (response.ok) {
        setStatus("success");
        setMessage("Successfully subscribed! Check your email.");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || data.message || "Failed to subscribe. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  };

  if (variant === "hero") {
    return (
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
        <div className="flex flex-col gap-0 overflow-hidden rounded-lg shadow-lg md:flex-row">
          <div className="flex items-center flex-1 px-6 py-4 bg-white border border-gray-200">
            <svg className="flex-shrink-0 w-6 h-6 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <input
              type="email"
              placeholder="Get the SaaS Distribution Blueprint —5 days free email course"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={status === "loading"}
              className="flex-1 text-lg text-gray-700 outline-none disabled:opacity-50"
            />
          </div>
          <button 
            type="submit"
            disabled={status === "loading"}
            className="w-full px-8 py-4 text-lg font-bold text-white transition-colors bg-green-500 md:w-auto hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === "loading" ? "..." : "SEND IT →"}
          </button>
        </div>
        
        {message && (
          <p className={`mt-4 text-lg ${status === "error" ? "text-red-600" : "text-green-600"}`}>
            {message}
          </p>
        )}
        
        {status !== "success" && (
          <p className="mt-4 text-lg text-gray-600">
            *But it's 100% organic (pinky promise) ⭐⭐⭐⭐⭐ 4.8 stars out of 7,471 founders
          </p>
        )}
      </form>
    );
  }

  // Bottom variant
  return (
    <form onSubmit={handleSubmit} className="flex-1 w-full max-w-md">
      <div className="space-y-0">
        <input
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === "loading"}
          className="w-full px-6 py-4 text-lg text-gray-700 transition-colors border-2 border-gray-900 outline-none focus:border-green-500 disabled:opacity-50"
        />
        <button 
          type="submit"
          disabled={status === "loading"}
          className="w-full px-6 py-4 text-lg font-bold text-white transition-colors bg-green-500 hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "loading" ? "Subscribing..." : "Get the strategy →"}
        </button>
      </div>
      
      {message ? (
        <p className={`mt-4 text-base text-center ${status === "error" ? "text-red-600" : "text-green-600"}`}>
          {message}
        </p>
      ) : (
        <p className="mt-4 text-base text-center text-gray-600">
          One idea. One system. 4 minutes or less. Free.
        </p>
      )}
    </form>
  );
}
