import './globals.css'
import { Metadata } from 'next'
import { AnalyticsProvider } from '../components/AnalyticsProvider'

export const metadata: Metadata = {
  title: "Rashik's Blog",
  description: "Personal blog by Rashik",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="nous">
      <body>
        <AnalyticsProvider serviceName="blog">
          {children}
        </AnalyticsProvider>
      </body>
    </html>
  )
} 