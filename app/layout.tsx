import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Contact Management Application",
  description: "Manage your contacts easily",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50">
        <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
          <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              ContactApp
            </Link>
            <div className="flex items-center gap-5">
              <Link href="/" className="text-gray-600 hover:text-indigo-600 font-medium transition">
                Home
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-indigo-600 font-medium transition">
                Contacts
              </Link>
              <Link href="/login" className="bg-indigo-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-indigo-700 transition">
                Login
              </Link>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
