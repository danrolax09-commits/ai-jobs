export default function Home() {
  const jobs = [
    {
      id: 1,
      title: 'Senior LLM Engineer',
      company: 'Anthropic',
      location: 'San Francisco, CA',
      salary: '$250K - $350K',
      type: 'Full-time',
      level: 'Senior',
      tags: ['LLMs', 'Python', 'PyTorch'],
    },
    {
      id: 2,
      title: 'AI Agent Framework Developer',
      company: 'OpenRouter',
      location: 'Remote',
      salary: '$200K - $280K',
      type: 'Full-time',
      level: 'Mid',
      tags: ['Agents', 'Node.js', 'TypeScript'],
    },
    {
      id: 3,
      title: 'Machine Learning Engineer',
      company: 'Mistral AI',
      location: 'Paris, France',
      salary: '€180K - €250K',
      type: 'Full-time',
      level: 'Senior',
      tags: ['ML', 'C++', 'CUDA'],
    },
    {
      id: 4,
      title: 'Prompt Engineer',
      company: 'OpenAI',
      location: 'San Francisco, CA',
      salary: '$200K - $280K',
      type: 'Full-time',
      level: 'Mid',
      tags: ['Prompting', 'Research', 'Testing'],
    },
    {
      id: 5,
      title: 'AI Infrastructure Engineer',
      company: 'Modal Labs',
      location: 'Remote',
      salary: '$220K - $320K',
      type: 'Full-time',
      level: 'Senior',
      tags: ['Infrastructure', 'Kubernetes', 'Python'],
    },
    {
      id: 6,
      title: 'AI Product Manager',
      company: 'Notion AI',
      location: 'San Francisco, CA',
      salary: '$180K - $250K',
      type: 'Full-time',
      level: 'Mid',
      tags: ['Product', 'AI/ML', 'Strategy'],
    },
  ];

  return (
    <main>
      {/* Hero */}
      <section className="hero">
        <div className="container">
          <h1>The #1 Job Board for AI Builders</h1>
          <p>Find your next role at the world's leading AI companies and startups.</p>
          <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <button className="btn btn-primary">Browse {jobs.length}+ Jobs</button>
            <button className="btn btn-secondary">Post a Job ($99)</button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="container">
        <div className="stats" style={{ marginTop: '3rem', marginBottom: '3rem' }}>
          <div className="stat">
            <div className="stat-value">2,847</div>
            <div className="stat-label">Active Jobs</div>
          </div>
          <div className="stat">
            <div className="stat-value">1,200+</div>
            <div className="stat-label">Companies</div>
          </div>
          <div className="stat">
            <div className="stat-value">$250K</div>
            <div className="stat-label">Avg Salary</div>
          </div>
          <div className="stat">
            <div className="stat-value">95%</div>
            <div className="stat-label">Avg Satisfaction</div>
          </div>
        </div>
      </section>

      {/* Featured Jobs */}
      <section className="container">
        <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Featured Opportunities</h2>
        <div className="grid">
          {jobs.map((job) => (
            <div key={job.id} className="job-card">
              <div className="job-title">{job.title}</div>
              <div className="company">{job.company}</div>
              <div style={{ color: '#9ca3af', fontSize: '0.9rem' }}>
                📍 {job.location}
              </div>
              <div className="price">{job.salary}</div>
              <div className="job-meta">
                <span className="badge">{job.type}</span>
                <span className="badge">{job.level}</span>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
                {job.tags.map((tag) => (
                  <span key={tag} className="badge">
                    {tag}
                  </span>
                ))}
              </div>
              <button className="btn btn-primary" style={{ width: '100%' }}>
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section style={{ background: '#f9fafb', padding: '3rem 2rem', marginTop: '3rem' }}>
        <div className="container">
          <h2 style={{ fontSize: '2rem', marginBottom: '2rem', textAlign: 'center' }}>For Companies</h2>
          <div className="grid">
            <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e5e7eb' }}>
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>📝</div>
              <h3>Post a Job</h3>
              <p>Post your job for just $99. Reach 50,000+ qualified AI engineers.</p>
            </div>
            <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e5e7eb' }}>
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🎯</div>
              <h3>Targeted Reach</h3>
              <p>Your job appears in email digest sent to qualified candidates.</p>
            </div>
            <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e5e7eb' }}>
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>📊</div>
              <h3>Analytics</h3>
              <p>Track views, applications, and hiring metrics in real-time.</p>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <h3 style={{ marginBottom: '1rem' }}>Pricing</h3>
            <p style={{ color: '#4b5563', marginBottom: '1.5rem' }}>
              Flat $99 per job posting. Featured listings available.
            </p>
            <button className="btn btn-primary">Post Your First Job</button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', padding: '3rem 2rem', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ marginBottom: '1rem' }}>Ready to find your next AI role?</h2>
          <p style={{ fontSize: '1.1rem', marginBottom: '2rem', opacity: 0.95 }}>
            Join 50,000+ AI engineers on the leading job board for AI.
          </p>
          <button className="btn btn-secondary">Browse Jobs Now</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 AIJobs Board. The #1 job board for AI engineers and AI companies.</p>
      </footer>
    </main>
  );
}
