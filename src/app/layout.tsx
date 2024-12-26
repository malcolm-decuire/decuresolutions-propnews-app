"use client";

import { Inter, Lexend } from 'next/font/google';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import ConditionalHeaderSidebarLayout from './(auth)/ConditionalHeaderSidebarLayout';

import '@/styles/tailwind.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Define the pages where the layout should apply
  const demoPages = [
    "/CaseStudies", // Should match the folder structure casing
    "/demo",
    "/kpione",
    "/kpitwo",
    "/kpithree",
    "/demopolicyinfo",
  ];
  
  // Normalize the pathname for comparison 
  const normalizedPathname = pathname?.toLowerCase().replace(/\/$/, "");
  const isDemoPage = demoPages.map(page => page.toLowerCase()).includes(normalizedPathname);
  

  return (
    <html
      lang="en"
      className={clsx(
        'h-full scroll-smooth bg-white antialiased',
        inter.variable,
        lexend.variable,
      )}
    >
      <body className="flex h-full flex-col">
        {isDemoPage ? (
          <ConditionalHeaderSidebarLayout>{children}</ConditionalHeaderSidebarLayout>
        ) : (
          children
        )}
      </body>
    </html>
  );
}
