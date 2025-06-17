import React from 'react';
import educationImage from '../assets/images/services/education.jpg';
import './../assets/css/Common.css';

const Education = () => {
  return (
    <div className='container page-container'>
      <div className="content-text-fluid">
        <div style={{ flex: 1 }}>
          <h2 className='page-title'>Education at Kalinga Ashram</h2>
          <p>
            At Kalinga Ashram, we believe education is the foundation for a brighter future. Our mission is to uplift underprivileged children by providing them with access to quality education, moral guidance, and a nurturing environment to grow and thrive.
          </p>
          <p>
            We are committed to serving economically disadvantaged families by offering free education, study materials, and meals to children who otherwise may not have the opportunity to attend school. Through dedicated teachers, volunteers, and community support, we aim to empower every child with the knowledge, confidence, and values needed to shape a better tomorrow.
          </p>
          <p>
            Every child deserves a chance — and at Kalinga Ashram, we’re making that possible, one student at a time.
          </p>
        </div>
        <div style={{ flex: 1 }}>
          <img src={educationImage} alt="Education" style={{ width: '100%', borderRadius: '8px' }} />
        </div>
      </div>
    </div>
  );
};

export default Education;
