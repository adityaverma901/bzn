import { Toaster } from "@/components/ui/toaster";
import { SessionProvider } from "next-auth/react";
import "./globals.css";
import { auth } from "@/auth";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
// import { Great_Vibes } from "next/font/google";
import { Amita, Montserrat ,Gilda_Display } from "next/font/google"; // ✅ import Google font
import "./globals.css";
import { Great_Vibes } from "next/font/google";

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-great-vibes",
});
const gilda = Gilda_Display({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-gilda',
});
// Load Amita font
const amita = Amita({
  weight: ["400", "700"],
  subsets: ["devanagari", "latin"],
  variable: "--font-amita",
});
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});
export const metadata: Metadata = {


  title: "S|क",
  description: "",
  generator: "next.js",
  manifest: "/manifest.json",
  keywords: ["nextjs", "next14", "pwa", "next-pwa"],
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#fff" }],
  authors: [
    {
      name: "Aditya",
      url: "https://github.com/adityaverma901",
    }
  ],
  viewport: "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover",
  icons: [
    { rel: "apple-touch-icon", url: "/icons-512.png" },
    { rel: "icon", url: "/icons-512.png" },
  ]
 
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // Choose weights
  variable: "--font-poppins", // Define a CSS variable
})

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      <html lang="en" className={poppins.variable}>
        <head>
          <meta name="theme-color" content="#ffffff"/>
          <link rel="manifest" href="/manifest.json"/>
          <link rel="icon" href="/icons-512.png" />
          <link rel="apple-touch-icon" href="/icons-512.png" />
        </head>
        <body className={`${montserrat.variable} ${gilda.variable} ${greatVibes.variable} ${amita.variable} antialiased`}>
          {children}
          <Toaster />
        </body>
      </html>
    </SessionProvider>
  );
}