import type { Metadata } from 'next'
import { LegalPage } from '../legal-page'
import { TermsDe, TermsEn } from './content'

export const metadata: Metadata = {
  title: {
    absolute: 'Terms of Use · Coords',
  },
  description:
    'Terms of Use (also called Terms of Service) for Coords, a daily location-guessing game for iOS.',
  alternates: {
    canonical: '/coords/terms',
  },
  openGraph: {
    title: 'Terms of Use · Coords',
    description:
      'Terms of Use (also called Terms of Service) for Coords, a daily location-guessing game for iOS.',
    url: '/coords/terms',
  },
}

export default function TermsPage() {
  return <LegalPage en={<TermsEn />} de={<TermsDe />} />
}
