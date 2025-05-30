import './globals.css'
import { Metadata, Viewport } from 'next'
import { ClientAnalyticsWrapper } from '../components/ClientAnalyticsWrapper'

export const metadata: Metadata = {
  title: "Rashik's Blog",
  description: "Personal blog by Rashik",
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="nous">
      <body>
        <ClientAnalyticsWrapper serviceName="blog">
          {children}
        </ClientAnalyticsWrapper>
      </body>
    </html>
  )
} 