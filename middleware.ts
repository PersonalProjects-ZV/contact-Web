import { NextRequest, NextResponse } from "next/server";

// Middleware — har request pe chalta hai
export function middleware(request: NextRequest) {
  const session = request.cookies.get("session");
  const { pathname } = request.nextUrl;

  // Agar login page pe hai aur already logged in — redirect to /contact
  if (pathname === "/login" && session) {
    return NextResponse.redirect(new URL("/contact", request.url));
  }

  // Agar protected route pe hai aur logged in nahi — redirect to /login
  if (pathname.startsWith("/contact") && !session) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

// Middleware sirf in routes pe chalega
export const config = {
  matcher: ["/contact/:path*", "/login"],
};
