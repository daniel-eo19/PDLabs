import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pdlabshq.com"),
  title: "PD Labs - Custom Web Apps & Digital Design",
  description: "Premium digital solutions: custom web apps, UI & UX design, and brand identity. Transform your vision into reality.",
  openGraph: {
    title: "PD Labs - Custom Web Apps & Digital Design",
    description: "Premium digital solutions: custom web apps, UI & UX design, and brand identity. Transform your vision into reality.",
    url: "https://pdlabshq.com",
    siteName: "PD Labs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PD Labs - Custom Web Apps & Digital Design",
    description: "Premium digital solutions: custom web apps, UI & UX design, and brand identity. Transform your vision into reality.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,600,700&f[]=akira-expanded@400,700,800&display=swap"
        />
      </head>
      <body className={`${jetbrainsMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
