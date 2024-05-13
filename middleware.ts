import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { protectedRoute } from "./constants/route";

const isProtectedRoute = createRouteMatcher(protectedRoute);

export default clerkMiddleware((auth, request) => {
  if (isProtectedRoute(request)) {
    auth().protect();
  }
});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
