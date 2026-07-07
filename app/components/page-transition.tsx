'use client'

import { usePathname } from 'next/navigation'
import { useRef } from 'react'

// Must match the tab order in nav.tsx so slide direction follows the tab bar.
const sectionOrder = ['/', '/portfolio', '/blog', '/chat']

function getSectionIndex(pathname: string): number {
  const index = sectionOrder.findIndex(
    (path) => pathname === path || (path !== '/' && pathname.startsWith(path))
  )
  return index === -1 ? 0 : index
}

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() || '/'
  const previousIndexRef = useRef<number | null>(null)

  const currentIndex = getSectionIndex(pathname)
  const previousIndex = previousIndexRef.current
  previousIndexRef.current = currentIndex

  let animationClass = ''
  if (previousIndex !== null && previousIndex !== currentIndex) {
    animationClass =
      currentIndex > previousIndex ? 'page-slide-from-right' : 'page-slide-from-left'
  }

  return (
    <div key={pathname} className={animationClass}>
      {children}
    </div>
  )
}
