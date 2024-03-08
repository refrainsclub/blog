import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { GeistSans } from "geist/font/sans";
import { Nav } from "@/components/nav";
import { Toaster } from "@/components/toaster";
import PlausibleProvider from "next-plausible";

const og =
  "https://jamesblair.nz/og?title=I%27m%20James%20Blair%20%F0%9F%91%8B&description=Programmer,%20student%20and%20creator";

export const metadata: Metadata = {
  metadataBase: new URL("https://jamesblair.nz"),
  title: {
    default: "James Blair",
    template: "%s | James Blair",
  },
  description: "Programmer, student and creator.",
  openGraph: {
    title: "James Blair",
    description: "Programmer, student and creator.",
    url: "https://jamesblair.nz",
    siteName: "James Blair",
    locale: "en_NZ",
    type: "website",
    images: [
      {
        url: og,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "James Blair",
    card: "summary_large_image",
    images: [og],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <head>
        <PlausibleProvider
          domain="jamesblair.nz"
          customDomain="https://analytics.koru.ws"
          selfHosted
        />
      </head>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Nav className="container mx-auto my-12" />
          {children}
          <Footer className="my-12" />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
