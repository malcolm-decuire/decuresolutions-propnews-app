"use client";

import { Inter, Lexend } from "next/font/google";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import ConditionalHeaderSidebarLayout from "./(auth)/ConditionalHeaderSidebarLayout";

import "@/styles/tailwind.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const lexend = Lexend({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lexend",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Define the pages where the layout should apply
  const demoPages = [
    "/casestudies", // Normalize path to lowercase
    "/demo",
    "/kpione",
    "/kpitwo",
    "/kpithree",
    "/demopolicyinfo",
  ];

  // Normalize the pathname for comparison 
  const normalizedPathname = pathname?.toLowerCase().replace(/\/$/, "");

  // Check if the normalized pathname exists in demoPages
  const isDemoPage = demoPages.includes(normalizedPathname || "");

  return (
    <html
      lang="en"
      className={clsx(
        "h-full scroll-smooth bg-white antialiased",
        inter.variable,
        lexend.variable
      )}
    >
      <body className="flex h-full flex-col">
        {/* Conditional rendering based on path */}
        {isDemoPage ? (
          <ConditionalHeaderSidebarLayout>{children}</ConditionalHeaderSidebarLayout>
        ) : (
          children
        )}
      </body>
    </html>
  );
}
