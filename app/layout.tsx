import type { Metadata } from "next";
import { Anton, Geist, Geist_Mono, Noto_Sans_JP } from "next/font/google";
import { SmoothScroll } from "@/components/smooth-scroll";
import { Cursor } from "@/components/cursor";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const anton = Anton({
  variable: "--font-anton",
  weight: "400",
  subsets: ["latin"],
});

const notoJp = Noto_Sans_JP({
  variable: "--font-noto-jp",
  weight: ["400", "700"],
  preload: false,
});

export const metadata: Metadata = {
  title: "Zephaniah Raika — Creative Photographer & Videographer",
  description:
    "Zephaniah Raika is a creative photographer and amateur videographer who also designs and trains.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${anton.variable} ${notoJp.variable} antialiased`}
    >
      <body className="grain overflow-x-clip font-sans">
        <SmoothScroll>{children}</SmoothScroll>
        <Cursor />
      </body>
    </html>
  );
}
