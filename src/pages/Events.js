import React from 'react';

// Import images from assets/images/events
import event1 from '../assets/images/events/event1.jpg';
import event2 from '../assets/images/events/event2.jpg';
import event3 from '../assets/images/events/event3.jpg';

const Events = () => {
  return (
    <div style={{ maxWidth: '900px', margin: '40px auto' }}>
      <p style={{ fontSize: '16px', lineHeight: '1.6', textAlign: 'left' }}>
        <strong>Kalinga Ashram:</strong> Celebrate Moments, Cherish Memories
Explore glimpses of various spiritual, cultural, and service-oriented events held at Kalinga Ashram.
Each photo tells a story of unity, devotion, and selfless service.
Join us as we continue to create more meaningful memories together.
      </p>
      <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
        <img src={event1} alt="Event 1" style={{ width: '30%', border: '1px solid #ccc', borderRadius: '4px' }} />
        <img src={event2} alt="Event 2" style={{ width: '30%', border: '1px solid #ccc', borderRadius: '4px' }} />
        <img src={event3} alt="Event 3" style={{ width: '30%', border: '1px solid #ccc', borderRadius: '4px' }} />
      </div>
    </div>
  );
};

export default Events;
