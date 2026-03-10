"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import Link from "next/link";
import { register } from "@/app/actions/auth";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg shadow-indigo-200 disabled:opacity-50"
    >
      {pending ? "Registering..." : "Register"}
    </button>
  );
}

export default function RegisterPage() {
  const [state, formAction] = useActionState(register, { error: "" });

  return (
    <div className="flex items-center justify-center min-h-[80vh]">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-3xl font-bold w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
            C
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Create Account</h1>
          <p className="text-gray-500 mt-2">Register to start managing contacts</p>
        </div>

        <form
          action={formAction}
          className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100"
        >
          {state.error && (
            <div className="bg-red-50 border border-red-200 text-red-600 text-sm text-center p-3 rounded-xl mb-5">
              {state.error}
            </div>
          )}

          <div className="flex flex-col gap-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className="w-full border border-gray-200 bg-gray-50 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                className="w-full border border-gray-200 bg-gray-50 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Create a password"
                className="w-full border border-gray-200 bg-gray-50 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                required
              />
            </div>
            <SubmitButton />
          </div>

          <p className="text-center text-gray-500 text-sm mt-5">
            Already have an account?{" "}
            <Link href="/login" className="text-indigo-600 font-semibold hover:underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
