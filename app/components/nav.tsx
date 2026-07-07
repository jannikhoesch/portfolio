'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { ThemeToggle } from './theme-toggle'

const navItems = {
  '/': {
    name: 'home',
  },
  '/portfolio': {
    name: 'projects',
  },
  '/blog': {
    name: 'blog',
  },
  '/chat': {
    name: 'chat',
  },
}

export function Navbar() {
  const pathname = usePathname()
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 })
  const navRef = useRef<HTMLDivElement>(null)
  const linkRefs = useRef<{ [key: string]: HTMLAnchorElement | null }>({})

  useEffect(() => {
    const activeLink = linkRefs.current[pathname || '/']
    if (activeLink && navRef.current) {
      const navRect = navRef.current.getBoundingClientRect()
      const linkRect = activeLink.getBoundingClientRect()
      setIndicatorStyle({
        left: linkRect.left - navRect.left,
        width: linkRect.width,
      })
    }
  }, [pathname])

  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <div className="flex items-start justify-between gap-4">
        <nav
          ref={navRef}
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-0 relative">
            {/* Sliding indicator */}
            <div
              className="absolute bottom-0 h-0.5 bg-neutral-800 dark:bg-neutral-200 transition-all duration-300 ease-out"
              style={{
                left: `${indicatorStyle.left}px`,
                width: `${indicatorStyle.width}px`,
              }}
            />
            {Object.entries(navItems).map(([path, { name }]) => {
              const isActive = pathname === path || (pathname?.startsWith(path) && path !== '/')
              return (
                <Link
                  key={path}
                  href={path}
                  ref={(el) => {
                    linkRefs.current[path] = el
                  }}
                  className={`transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1 ${
                    isActive ? 'text-neutral-800 dark:text-neutral-200' : 'text-neutral-500 dark:text-neutral-500'
                  }`}
                >
                  {name}
                </Link>
              )
            })}
          </div>
        </nav>
        <ThemeToggle />
        </div>
      </div>
    </aside>
  )
}
