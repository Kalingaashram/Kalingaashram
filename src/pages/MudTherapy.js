import React from 'react';
import mudImage from '../assets/images/mud-therapy.jpg';

function MudTherapy() {
  return (
    <div style={{ maxWidth: '900px', margin: '40px auto', fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <h1 style={{ color: '#d87d0a', fontWeight: 'bold', marginBottom: '20px' }}>Mud Therapy</h1>
      <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        <div style={{ flex: 1, fontSize: '14px', lineHeight: '1.6', textAlign: 'left' }}>
          <p>
            Mud therapy is a natural and powerful healing practice that utilizes the earth's elements to detoxify, rejuvenate, and balance the body and mind. At Kalinga Ashram, we embrace this ancient naturopathic treatment as part of our holistic approach to well-being.
          </p>
          <p>
            Our mud therapy sessions use mineral-rich, sunbaked mud applied to specific parts of the body or as a full-body treatment. Mud has the unique ability to absorb toxins from the skin, improve circulation, reduce inflammation, and calm the nervous system. It is particularly effective for treating skin disorders, joint pain, digestive issues, and stress-related conditions.
          </p>
          <p>
            Sessions are conducted in a peaceful environment surrounded by nature, allowing you to connect with the earth and experience its grounding energy. As the body relaxes under the cooling touch of mud, the mind also finds stillness and clarity.
          </p>
          <p>
            Whether as a standalone therapy or part of a wellness retreat, mud therapy offers a deeply restorative experience—helping you return to balance, naturally.
          </p>
        </div>
        <div style={{ flex: 1 }}>
          <img src={mudImage} alt="Mud Therapy" style={{ width: '100%', borderRadius: '8px' }} />
        </div>
      </div>
    </div>
  );
}

export default MudTherapy;
