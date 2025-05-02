import { useAnalytics } from 'rashik-analytics-provider';

/**
 * Custom hook to easily track events throughout the application
 * 
 * @example
 * const { trackEvent } = useAnalyticsTracker();
 * 
 * // Track a button click
 * const handleClick = () => {
 *   trackEvent('button_click', { button_id: 'submit', action: 'form_submit' });
 * };
 */
export const useAnalyticsTracker = () => {
  const { trackEvent } = useAnalytics();
  
  return {
    /**
     * Track a custom event
     * @param eventName - Name of the event to track
     * @param properties - Additional properties to include with the event
     */
    trackEvent: (eventName: string, properties?: Record<string, unknown>) => {
      trackEvent(eventName, properties);
    }
  };
}; 