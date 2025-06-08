import React from 'react';
import './../assets/css/Events.css';


// Import images from assets/images/events
import event1 from '../assets/images/events/event1.jpg';
import event2 from '../assets/images/events/event2.jpg';
import event3 from '../assets/images/events/event3.jpg';
import event4 from '../assets/images/events/event4.jpg';
import event6 from '../assets/images/events/event6.jpg';
import event7 from '../assets/images/events/event7.jpg';
import event8 from '../assets/images/events/event8.jpg';
import event9 from '../assets/images/events/event9.jpg';
import event10 from '../assets/images/events/event10.jpg';
import event11 from '../assets/images/events/event11.jpg';
import event12 from '../assets/images/events/event12.jpg';
import event13 from '../assets/images/events/event13.jpg';
import event14 from '../assets/images/events/event14.jpg';
import event15 from '../assets/images/events/event15.jpg';
import event16 from '../assets/images/events/event16.jpg';
import event17 from '../assets/images/events/event17.jpg';

const Events = () => {
  return (
    <div className="container">
      <p className="description">
        <strong>Kalinga Ashram:</strong> Celebrate Moments, Cherish Memories
Explore glimpses of various spiritual, cultural, and service-oriented events held at Kalinga Ashram.
Each photo tells a story of unity, devotion, and selfless service.
Join us as we continue to create more meaningful memories together.
      </p>
      <div className="image-gallery">
        <img src={event1} alt="Event 1" />
        <img src={event2} alt="Event 2" />
        <img src={event3} alt="Event 3" />
        
        <img src={event15} alt="Event 3" />
        <img src={event16} alt="Event 3" />
        <img src={event4} alt="Event 3" />
    
        <span>
          <img src={event17} alt="Event 3" />
        <img src={event10} alt="Event 3" />

        </span>
        <img src={event11} alt="Event 3" />
        <img src={event12} alt="Event 3" />
        
        <img src={event13} alt="Event 3" />
        <img src={event14} alt="Event 3" />
            <img src={event6} alt="Event 3" />
        <img src={event7} alt="Event 3" />
        <img src={event8} alt="Event 3" />
        <img src={event9} alt="Event 3" />

        
      </div>
    </div>
  );
};

export default Events;
