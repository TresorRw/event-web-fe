import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider"
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css";
import Header from "@/components/ui/header";
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  generator: 'Next.js',
  applicationName: 'TresEvents',
  title: {
    template: "%s | TresEvents",
    default: "Discover Your Next Event | TresEvents",
  },
  authors: [{ name: "CYUSA Alain Tresor", url: "https://catresor.vercel.app" }],
  description: "Empower Your Events: Seamlessly Plan, Manage, and Experience Every Moment",
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Toaster />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
