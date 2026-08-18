'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, type ReactNode } from 'react'

type Lang = 'en' | 'de'

export function LegalPage({
  en,
  de,
}: {
  en: ReactNode
  de: ReactNode
}) {
  const pathname = usePathname()
  const [lang, setLang] = useState<Lang>('en')

  return (
    <div>
      <header className="mb-10">
        <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-neutral-500">
          Coords
        </p>
        <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
          <nav
            aria-label={lang === 'de' ? 'Rechtliches' : 'Legal'}
            className="flex gap-5 text-sm"
          >
            <Link
              href="/coords/privacy"
              className={navClass(pathname === '/coords/privacy')}
            >
              {lang === 'de' ? 'Datenschutz' : 'Privacy Policy'}
            </Link>
            <Link
              href="/coords/terms"
              className={navClass(pathname === '/coords/terms')}
            >
              {lang === 'de' ? 'Nutzungsbedingungen' : 'Terms of Use'}
            </Link>
          </nav>
          <div
            className="flex overflow-hidden rounded-full border border-neutral-800 text-[11px] font-medium uppercase tracking-[0.12em]"
            role="group"
            aria-label={lang === 'de' ? 'Sprache' : 'Language'}
          >
            <LangButton active={lang === 'en'} onClick={() => setLang('en')}>
              EN
            </LangButton>
            <LangButton active={lang === 'de'} onClick={() => setLang('de')}>
              DE
            </LangButton>
          </div>
        </div>
      </header>
      <article lang={lang}>{lang === 'de' ? de : en}</article>
      <p className="mt-16 text-xs text-neutral-600">
        {lang === 'de'
          ? 'Dies ist keine Rechtsberatung.'
          : 'This is not legal advice.'}
      </p>
    </div>
  )
}

export function LegalTitle({ children }: { children: ReactNode }) {
  return (
    <h1 className="text-3xl font-semibold tracking-tight text-white">{children}</h1>
  )
}

export function LegalUpdated({ children }: { children: ReactNode }) {
  return <p className="mt-3 text-sm text-neutral-500">{children}</p>
}

export function LegalLead({ children }: { children: ReactNode }) {
  return (
    <p className="mt-8 text-[15px] leading-7 text-neutral-300">{children}</p>
  )
}

export function LegalSection({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) {
  return (
    <section className="mt-10">
      <h2 className="mb-3 text-[13px] font-semibold uppercase tracking-[0.16em] text-white">
        {title}
      </h2>
      <div className="space-y-4 text-[15px] leading-7 text-neutral-300">
        {children}
      </div>
    </section>
  )
}

export function LegalList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="list-disc space-y-2 pl-5">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  )
}

export function LegalLink({
  href,
  children,
}: {
  href: string
  children: ReactNode
}) {
  const external = href.startsWith('http') || href.startsWith('mailto:')
  const className =
    'underline decoration-neutral-600 underline-offset-2 transition-colors hover:text-white hover:decoration-neutral-400'

  if (external) {
    return (
      <a
        href={href}
        className={className}
        {...(href.startsWith('http')
          ? { rel: 'noopener noreferrer', target: '_blank' }
          : {})}
      >
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  )
}

export const CONTACT_EMAIL = 'jannik.hoesch@outlook.de'
export const CONTACT_MAILTO = `mailto:${CONTACT_EMAIL}`

function navClass(active: boolean) {
  return active
    ? 'text-white underline decoration-white underline-offset-4'
    : 'text-neutral-500 transition-colors hover:text-neutral-200'
}

function LangButton({
  active,
  onClick,
  children,
}: {
  active: boolean
  onClick: () => void
  children: ReactNode
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`px-3 py-1 transition-colors ${
        active
          ? 'bg-white text-black'
          : 'bg-transparent text-neutral-500 hover:text-neutral-200'
      }`}
    >
      {children}
    </button>
  )
}
