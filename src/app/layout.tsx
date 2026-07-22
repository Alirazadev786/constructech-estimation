import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyActions from "@/components/StickyActions";
import Schema from "@/components/Schema";
import GlobalUploadModal from "@/components/GlobalUploadModal";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});
//this is const meta code area there we can update the meta tags for the website and the meta algo

//we can also update the meta tags in the individual pages for that we have to import the Metadata from the next/head and use it in the page
export const metadata: Metadata = {
  metadataBase: new URL("https://constructechestimation.com"),
  title: "Constructech Estimation | Construction Estimating Services",
  description: "Constructech provides professional Construction Estimating Services in the United States and Canada, delivering accurate cost estimating, material takeoffs, and bid preparation.",
  openGraph: {
    title: "Constructech Estimation",
    description: "Constructech provides professional Construction Estimating Services in the United States and Canada, delivering accurate cost estimating, material takeoffs, and bid preparation.",
    url: "https://constructechestimation.com",
    siteName: "Constructech Estimation",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Constructech Estimation",
    description: "Professional Construction Estimating Services in the United States and Canada.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} h-full antialiased`}
    >
      <head>
        <Schema />
      </head>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <StickyActions />
        <GlobalUploadModal />
      </body>
    </html>
  );
}
