import localFont from "next/font/local";
import { DM_Sans, Inter } from "next/font/google"; // Import Inter from Google Fonts
import { Italiana } from 'next/font/google';
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const dmSans = DM_Sans({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const inter = Inter({  // Define Inter font
  weight: "400",
  subsets: ["latin"],
  variable: "--font-inter",
});

const italiana = Italiana({
  subsets: ['latin'],
  weight: '400',
});

export const metadata = {
  title: "Aether Landing Page",
  description: "Landing page for Aether app which helps caregivers save time by providing them with autofilling options for their forms.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${dmSans.variable} ${italiana.variable} ${inter.variable}`}> {/* Add Inter variable here */}
        {children}
      </body>
    </html>
  );
}
