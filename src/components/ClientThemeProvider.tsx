'use client'

import { useEffect } from 'react'

export function ClientThemeProvider() {
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'nous');
  }, []);

  return null
} 