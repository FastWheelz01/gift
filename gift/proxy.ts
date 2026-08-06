import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const SITE_PASSWORD = "alinmylove";

export default function proxy(request: NextRequest) {
  const cookie = request.cookies.get("site-auth");

  if (cookie?.value === SITE_PASSWORD) {
    return NextResponse.next();
  }

  if (request.nextUrl.pathname === "/enter-password") {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL("/enter-password", request.url));
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};