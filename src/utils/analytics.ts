/**
 * Mock analytics tracker for development
 * This can be replaced with actual analytics implementation later
 */
export const useAnalyticsTracker = () => {
  return {
    /**
     * Mock track event function
     * @param eventName - Name of the event to track
     * @param properties - Additional properties to include with the event
     */
    trackEvent: (eventName: string, properties?: Record<string, unknown>) => {
      // Mock implementation - just log to console in development
      if (process.env.NODE_ENV === 'development') {
        console.log('Analytics Event:', eventName, properties);
      }
    }
  };
}; 