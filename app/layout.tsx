import type React from "react"
import type { Metadata } from "next"
import { Toaster } from "@/components/ui/sonner"
import { Inter, Montserrat } from "next/font/google"
import "./globals.css"
import Link from "next/link"
import localFont from "next/font/local";

const clashDisplay = localFont({
  src: [
    {
      path: './fonts/ClashDisplay-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-clashDisplay',
  display: 'swap',
})
const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "icon",
        url: "/favicon-32x32.png",
        sizes: "32x32",
      },
      {
        rel: "icon",
        url: "/favicon-16x16.png",
        sizes: "16x16",
      },
    ],
  },
  title: {
    default: "Stop Money Stress | Financial Literacy for Young Professionals",
    template: "%s | Live Life In The Black",
  },
  description:
    "Master your money with our financial literacy workshop for young professionals. Learn budgeting, investing, and debt management to build a secure future. Join the waitlist for early access!",
  keywords: [
    "financial literacy for young professionals",
    "money management workshop",
    "budgeting for young professionals",
    "investing for beginners",
    "financial education online",
    "personal finance workshop",
    "saving strategies",
    "debt management",
    "wealth building for young adults",
    "financial planning basics",
    "early career finance",
    "financial freedom",
    "money stress solutions",
    "financial coaching",
    "online financial workshop",
  ],
  metadataBase: new URL('https://livelifeintheblack.com'),
  openGraph: {
    images: '/opengraph-image.jpg'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Open+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${montserrat.className} ${clashDisplay.className} ${clashDisplay.variable}`}>
        {children}
        <footer className="py-6 border-t h-full my-7">
          <div className="container mx-auto">
            <div className="px-5 py-6">
              <h4 className="font-medium text-sm"> Disclosure </h4>
              <p className=" text-xs font-light">Information presented is for educational purposes only and does not intend to make an offer or solicitation for the sale or purchase of any specific securities, investments, or investment strategies. Investments involve risk and unless otherwise stated, are not guaranteed. Commentary of any kind on this site is based on our own opinion and analysis, and not representative of future performance of any security or market. Personalized investment advice can only be rendered after engagement of the firm for services, execution of the required documentation, and receipt of required disclosures. Please contact the firm for further information. Information presented is not intended as tax or legal advice. Please consult legal or tax professionals for specific information regarding your individual situation.  Copyright © 2025 Live Life in the Black®.</p>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-gray-600">
                &copy; {new Date().getFullYear()} Live Life In The Black®. All rights reserved.
              </p>
              <div className="flex gap-4">
                <Link href="#" className="text-sm text-gray-600 hover:text-purple-500">
                  Privacy Policy
                </Link>
                <Link href="#" className="text-sm text-gray-600 hover:text-purple-500">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </footer>
        <Toaster position="top-center" />
      </body>

    </html>
  )
}
