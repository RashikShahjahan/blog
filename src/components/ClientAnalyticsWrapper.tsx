'use client'

import { ReactNode } from 'react'
import { AnalyticsProvider } from './AnalyticsProvider'

interface ClientAnalyticsWrapperProps {
  children: ReactNode
  serviceName: string
}

export function ClientAnalyticsWrapper({ children, serviceName }: ClientAnalyticsWrapperProps) {
  return (
    <AnalyticsProvider serviceName={serviceName}>
      {children}
    </AnalyticsProvider>
  )
} 