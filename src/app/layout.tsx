import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AI Jobs Board',
  description: 'The job board for AI engineers and machine learning professionals',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
