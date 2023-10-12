import { cn } from "@/lib/utils";
import { fonts } from "@/lib/fonts";
import '@/styles/globals.css';


export const metadata = {
  title: 'Website Name',
  description: 'Website Descrpition',
  other: {
    "google-site-verification": process.env.NEXT_PUBLIC_GOOGLE_CONSOLE // Google Search Console Verification
  },
  alternates: {
    canonical: 'http://domain.com',
  },
  icons: {
    other: [
      {
        rel: 'preconnect',
        url: 'domain.com',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={cn('mx-auto max-w-[1920px]', fonts.className)}>
      <body suppressHydrationWarning={true} className="relative mx-auto min-h-screen antialiased">
            {children}
      </body>
    </html>
  )
}
