import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    absolute: 'Coords',
  },
  description:
    'Privacy Policy and Terms of Use for Coords, a daily location-guessing game for iOS.',
  robots: { index: true, follow: true },
}

export default function CoordsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto bg-black text-neutral-100">
      <div className="mx-auto w-full max-w-xl px-6 py-10 sm:py-16">{children}</div>
    </div>
  )
}
