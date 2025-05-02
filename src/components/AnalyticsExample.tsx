import { useEffect } from 'react';
import { useAnalyticsTracker } from '../utils/analytics';

interface ExampleButtonProps {
  id: string;
  label: string;
  action: string;
}

/**
 * Example button component that tracks click events
 */
const ExampleButton = ({ id, label, action }: ExampleButtonProps) => {
  const { trackEvent } = useAnalyticsTracker();

  const handleClick = () => {
    // Track the button click with additional metadata
    trackEvent('button_click', {
      button_id: id,
      action: action,
      timestamp: new Date().toISOString()
    });
    
    // Your actual button click logic here
    console.log(`Button ${id} clicked`);
  };

  return (
    <button onClick={handleClick}>
      {label}
    </button>
  );
};

/**
 * Example component that demonstrates how to use analytics tracking
 * throughout your application
 */
export default function AnalyticsExample() {
  const { trackEvent } = useAnalyticsTracker();
  
  // Example of tracking a component mount event
  useEffect(() => {
    trackEvent('component_view', {
      component: 'AnalyticsExample',
      view_type: 'initial'
    });
  }, []);

  return (
    <div className="analytics-example">
      <h2>Analytics Example</h2>
      
      <div className="button-group">
        <ExampleButton 
          id="submit-button" 
          label="Submit Form" 
          action="form_submit" 
        />
        
        <ExampleButton 
          id="cancel-button" 
          label="Cancel" 
          action="form_cancel" 
        />
        
        <button onClick={() => trackEvent('custom_event', { 
          event_category: 'user_interaction',
          event_action: 'special_action'
        })}>
          Track Custom Event
        </button>
      </div>
    </div>
  );
} 