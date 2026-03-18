import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AI Jobs Board - AI Engineer Jobs & Startup Roles',
  description: 'The #1 job board for AI engineers, LLM builders, and AI companies. Find your next opportunity.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <nav className="navbar">
          <div className="nav-container">
            <div className="logo">🤖 AIJobs</div>
            <div className="nav-links">
              <a href="/">Browse Jobs</a>
              <a href="#companies">Companies</a>
              <a href="#pricing">Post a Job</a>
              <a href="#account">Account</a>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
