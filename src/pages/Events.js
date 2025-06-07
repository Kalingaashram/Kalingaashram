import React from 'react';

// Import images from assets/images/events
import event1 from '../assets/images/events/event1.jpg';
import event2 from '../assets/images/events/event2.jpg';
import event3 from '../assets/images/events/event3.jpg';

const Events = () => {
  return (
    <div style={{ maxWidth: '900px', margin: '40px auto', fontFamily: 'Arial, sans-serif' }}>
      <p style={{ fontSize: '16px', lineHeight: '1.6' }}>
        <strong>BAL SANSKAR SHIVIR - 31/03/2024:</strong> A one-day Bal Sanskar camp was organized on Sunday, March 31, 2024 by Bharatiya JanSewa Sansthan with the aim of sowing the seeds of values for the protection of the country's religion among the boys and girls of the Magra Merwada region. These Bal Sanskar camps were successfully conducted at 10 places. In which 1107 Bal Gopals from 183 villages from 10 blocks (tehsils) participated enthusiastically.
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
