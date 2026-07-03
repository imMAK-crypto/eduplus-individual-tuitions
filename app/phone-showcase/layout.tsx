import type { Metadata } from 'next';

// Internal preview route — keep it out of the index (belt-and-braces over robots.txt).
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function ShowcaseLayout({ children }: { children: React.ReactNode }) {
  return children;
}
