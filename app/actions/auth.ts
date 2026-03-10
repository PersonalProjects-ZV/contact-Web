"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

// Server Action — ye server pe chalta hai, client ko pata nahi
export async function login(prevState: { error: string }, formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  // Step 1: Form Validation
  if (!email || !password) {
    return { error: "Email and password are required" };
  }

  // Step 2: Authentication — db.json se user check karo
  const res = await fetch("http://localhost:3001/users");
  const users = await res.json();

  const user = users.find(
    (u: { email: string; password: string }) =>
      u.email === email && u.password === password
  );

  if (!user) {
    return { error: "Invalid email or password" };
  }

  // Step 3: Session Management — cookie mein user info store karo (Stateless)
  const cookieStore = await cookies();
  cookieStore.set("session", JSON.stringify({ id: user.id, name: user.name, role: user.role }), {
    httpOnly: true,
    path: "/",
    maxAge: 60 * 60 * 24, // 1 din
  });

  // Step 4: Redirect
  redirect("/contact");
}

// Register Server Action
export async function register(prevState: { error: string }, formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  // Validation
  if (!name || !email || !password) {
    return { error: "All fields are required" };
  }

  // Check if user already exists
  const res = await fetch("http://localhost:3001/users");
  const users = await res.json();

  const existingUser = users.find((u: { email: string }) => u.email === email);
  if (existingUser) {
    return { error: "Email already registered" };
  }

  // Create new user in db.json
  await fetch("http://localhost:3001/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password, role: "user" }),
  });

  // Redirect to login page
  redirect("/login");
}

export async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete("session");
  redirect("/login");
}
