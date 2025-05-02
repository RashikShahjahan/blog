import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import { AnalyticsProvider } from 'rashik-analytics-provider'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AnalyticsProvider 
        serviceName="blog"
        endpoint="https://analytics.rashik.sh/api"
        autoTrackPageViews={true}
      >
        <App />
      </AnalyticsProvider>
    </BrowserRouter>
  </StrictMode>,
)
