import { authMiddleware } from '@clerk/nextjs'

export default authMiddleware({
  publicRoutes: ['/', '/auth(.*)', '/portal(.*)', '/images(.*)', '/dashboard(.*)', '/time(.*)', '/location(.*)', '/itinerary(.*)', '/activities(.*)'],
  ignoredRoutes: ['/chatbot'],
})

export const config = {
  matcher: ['/((?!.+.[w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}