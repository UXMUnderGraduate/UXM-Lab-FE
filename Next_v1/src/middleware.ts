import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  // console.log('관리자 페이지 미들웨어');
  const userToken = request.cookies.get('token')?.value;
  if (!userToken) {
    // console.log('리다이렉트 미들웨어');
    return NextResponse.redirect(new URL('/', request.url));
  }
  if (request.nextUrl.pathname === '/admin/members') {
    // console.log("'/admin/members' 미들웨어");
  }
}

export const config = {
  matcher: ['/admin/:path*'],
};
