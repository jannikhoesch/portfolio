import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: {
    absolute: 'Coords',
  },
  description:
    'Legal pages for Coords, a daily location-guessing game for iOS by Jannik Hösch.',
  alternates: {
    canonical: '/coords',
  },
}

export default function CoordsIndexPage() {
  return (
    <div>
      <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-neutral-500">
        Coords
      </p>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white">
        Legal
      </h1>
      <p className="mt-4 text-[15px] leading-7 text-neutral-400">
        Coords is a daily location-guessing game for iOS. These pages are the
        public Privacy Policy and Terms of Use required for the App Store.
      </p>
      <ul className="mt-10 space-y-4 text-[15px]">
        <li>
          <Link
            href="/coords/privacy"
            className="text-white underline decoration-neutral-600 underline-offset-4 hover:decoration-neutral-400"
          >
            Privacy Policy
          </Link>
        </li>
        <li>
          <Link
            href="/coords/terms"
            className="text-white underline decoration-neutral-600 underline-offset-4 hover:decoration-neutral-400"
          >
            Terms of Use
          </Link>
          <span className="text-neutral-500">
            {' '}
            (Terms of Service on the welcome screen)
          </span>
        </li>
      </ul>
      <p className="mt-16 text-sm text-neutral-500">
        Contact:{' '}
        <a
          href="mailto:jannik.hoesch@outlook.de"
          className="text-neutral-300 underline decoration-neutral-700 underline-offset-2 hover:text-white"
        >
          jannik.hoesch@outlook.de
        </a>
      </p>
    </div>
  )
}
