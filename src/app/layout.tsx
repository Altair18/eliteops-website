import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { Head } from "next/document";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fivra.co.uk"),
  title: "Fivra",
  description:
    "Your 24/7 Operations Assistant. Stop drowning in admin, we draft, you approve.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Fivra",
    description:
      "Your 24/7 Operations Assistant. Stop drowning in admin, we draft, you approve.",
    url: "https://fivra.co.uk",
    siteName: "Fivra",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Fivra",
      },
    ],
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fivra",
    description:
      "Your 24/7 Operations Assistant. Stop drowning in admin, we draft, you approve.",
    images: ["/og-image.png"],
  },
};

// app/layout.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <Script
          id="org-jsonld"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://fivra.co.uk/#organization",
              name: "Fivra",
              url: "https://fivra.co.uk",
              logo: "https://fivra.co.uk/logo.png",
              image: "https://fivra.co.uk/logo.png",
              sameAs: [
                "https://www.instagram.com/getfivra",
                "https://www.linkedin.com/company/fivra",
              ],
            }),
          }}
        />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
