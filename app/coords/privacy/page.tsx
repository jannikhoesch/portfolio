import type { Metadata } from 'next'
import { LegalPage } from '../legal-page'
import { PrivacyDe, PrivacyEn } from './content'

export const metadata: Metadata = {
  title: {
    absolute: 'Privacy Policy · Coords',
  },
  description:
    'Privacy Policy for Coords. How we collect and use account, video, camera, microphone, and precise location data, and how to delete your account.',
  alternates: {
    canonical: '/coords/privacy',
  },
  openGraph: {
    title: 'Privacy Policy · Coords',
    description:
      'How Coords collects and uses account, video, camera, microphone, and precise location data.',
    url: '/coords/privacy',
  },
}

export default function PrivacyPage() {
  return <LegalPage en={<PrivacyEn />} de={<PrivacyDe />} />
}
