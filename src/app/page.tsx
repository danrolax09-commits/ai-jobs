import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="bg-slate-900/50 backdrop-blur border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-purple-400">💼 AI Jobs Board</div>
            <div className="flex gap-4">
              <Link href="/jobs" className="text-slate-300 hover:text-white transition">
                Browse Jobs
              </Link>
              <Link href="/auth/login" className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded transition">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          The Job Board for AI Engineers
        </h1>
        <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
          Exclusive opportunities at AI startups, enterprises, and cutting-edge AI teams. From LLM engineers to ML Ops specialists.
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-4 justify-center mb-16">
          <Link
            href="/jobs"
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition transform hover:scale-105"
          >
            View All Jobs →
          </Link>
          <Link
            href="/auth/login"
            className="border border-purple-400 text-purple-400 hover:bg-purple-400/10 px-8 py-3 rounded-lg font-semibold transition"
          >
            Post a Job
          </Link>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold text-white mb-2">Curated Roles</h3>
            <p className="text-slate-400">
              Only the best AI and ML opportunities from verified companies.
            </p>
          </div>
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-semibold text-white mb-2">Interview Prep</h3>
            <p className="text-slate-400">
              AI-powered guidance tailored to the role and company you're targeting.
            </p>
          </div>
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
            <div className="text-4xl mb-4">💡</div>
            <h3 className="text-xl font-semibold text-white mb-2">Company Profiles</h3>
            <p className="text-slate-400">
              Deep dives into company culture, tech stack, and career growth.
            </p>
          </div>
        </div>

        {/* For Employers */}
        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 max-w-3xl mx-auto mb-16">
          <h3 className="text-2xl font-semibold text-white mb-4">For Employers</h3>
          <p className="text-slate-400 mb-6">
            Post your job openings and reach the top AI talent in the market.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">$99</div>
              <p className="text-sm text-slate-400 mt-1">Standard Listing</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">$199</div>
              <p className="text-sm text-slate-400 mt-1">Featured Listing</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">$499</div>
              <p className="text-sm text-slate-400 mt-1">Sponsored (30 days)</p>
            </div>
          </div>
          <button className="w-full mt-6 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition">
            Post a Job Now
          </button>
        </div>

        {/* Health Check */}
        <div className="bg-green-900/20 border border-green-700 rounded-lg p-4 max-w-md mx-auto text-green-400">
          ✅ Platform is online and ready to use
        </div>
      </div>
    </div>
  );
}
