import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Movie App",
  description: "Find your favorite movie, by @clangroth",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="luxury">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
