import Link from "next/link";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center text-center px-6 py-32">
      <div className="bg-indigo-100 text-indigo-700 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
        Simple Contact Management
      </div>
      <h1 className="text-5xl font-bold text-gray-900 mb-5 leading-tight">
        Your Contacts, <br />
        <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Simplified</span>
      </h1>
      <p className="text-lg text-gray-500 max-w-md mb-10">
        Store, search, and manage all your contacts in one place. Fast, simple, and organized.
      </p>
      <div className="flex gap-4">
        <Link
          href="/contact"
          className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition shadow-lg shadow-indigo-200"
        >
          View Contacts
        </Link>
        <Link
          href="/register"
          className="bg-white border border-gray-200 text-gray-700 px-8 py-3 rounded-xl font-semibold hover:bg-gray-50 transition shadow-sm"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
}
