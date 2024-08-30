import { NextRequest, NextResponse } from "next/server";

export const middleware = (request: NextRequest) => {
  const accessToken = request.cookies.has("accessToken");

  if (!accessToken && request.nextUrl.pathname !== "/")
    return NextResponse.redirect(new URL("/", request.url));

  if (accessToken && request.nextUrl.pathname === "/")
    return NextResponse.redirect(new URL("/todo", request.url));

  return NextResponse.next();
};

export const config = {
  matcher: ["/", "/todo/:path*"],
};
