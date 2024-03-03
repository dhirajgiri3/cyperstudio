import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cyper Studio | Software Development & Digital Marketing Agency",
  description:
    "Cyper Studio is a software development and digital marketing agency that specializes in building custom web and mobile applications, and creating digital marketing strategies to help businesses grow.",
  keywords:
    '    "software development", "software development agency", "web development", "web development agency", "mobile app development", "mobile app development agency", "digital marketing", "digital marketing agency", "seo", "seo agency", "ppc", "ppc agency", "social media marketing", "social media marketing agency", "email marketing", "email marketing agency", "content marketing", "content marketing agency", "branding", "branding agency", "web design", "web design agency", "web development", "web development agency", "mobile app development", "mobile app development agency", "digital marketing", "digital marketing agency", "seo", "seo agency", "ppc", "ppc agency", "social media marketing", "social media marketing agency", "email marketing", "email marketing agency", "content marketing", "content marketing agency", "branding", "branding agency", "web design", "web design agency", "web development", "web development agency", "mobile app development", "mobile app development agency", "digital marketing", "digital marketing agency", "seo", "seo agency", "ppc", "ppc agency", "social media marketing", "social media marketing agency", "email marketing", "email marketing agency", "content marketing", "content marketing agency", "branding", "branding agency", "web design", "web design agency", "web development", "web development agency", "mobile app development", "mobile app development agency", "digital marketing", "digital marketing agency", "seo", "seo agency", "ppc", "ppc agency", "social media marketing", "social media marketing agency", "email marketing", "email marketing agency", "content marketing", "content marketing agency", "branding", "branding agency", "web design", "web design agency", "web development", "web development agency", "mobile app development", "mobile app development agency", "digital marketing", "digital marketing agency", "seo", "seo agency", "ppc", "ppc agency", "social media marketing", "social media marketing agency", "email marketing", "email marketing agency", "content marketing", "content marketing agency", "branding", "branding agency", "web design", "web design agency", "web development", "web development agency", "mobile app development", "mobile app development agency", "digital marketing", "digital marketing agency"',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
