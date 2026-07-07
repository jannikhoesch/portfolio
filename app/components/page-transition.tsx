'use client'

import { usePathname } from 'next/navigation'
import { useState } from 'react'

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
  const [transition, setTransition] = useState({
    pathname,
    index: getSectionIndex(pathname),
    animationClass: '',
  })

  if (transition.pathname !== pathname) {
    const nextIndex = getSectionIndex(pathname)
    setTransition({
      pathname,
      index: nextIndex,
      animationClass:
        nextIndex > transition.index
          ? 'page-slide-from-right'
          : nextIndex < transition.index
            ? 'page-slide-from-left'
            : '',
    })
    return null
  }

  return (
    <div key={pathname} className={transition.animationClass}>
      {children}
    </div>
  )
}
