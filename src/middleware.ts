import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default function middleware(req: NextRequest) {
  const route = ["/artist", "/artist/new"];
  const token = req.cookies.get("accessToken")?.value;
  console.log(token);

  const { pathname } = req.nextUrl;

  const protectedRoutes = route.some((route: string) => {
    if (route === "/artist") {
      return (
        pathname.startsWith("/artist") && !pathname.startsWith("/artist/share")
      );
    }
    return pathname.startsWith(route);
  });

  if (!token && protectedRoutes) {
    const redirectRoute = `/login?redirect=${encodeURIComponent(pathname)}`;
    const absoluteUrl = new URL(redirectRoute, req.nextUrl.origin);
    return NextResponse.redirect(absoluteUrl.toString());
  }

  return NextResponse.next();
}
