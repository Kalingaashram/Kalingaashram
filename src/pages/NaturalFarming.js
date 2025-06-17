import React from 'react';
import naturalFarmingImage from '../assets/images/services/natural-farming.jpg';

function NaturalFarming() {
  return (
    <div className='container page-container'>
      <div className="content-text-fluid">
        <div style={{ flex: 1 }}>
          <h1 style={{ color: '#d87d0a', fontWeight: 'bold', marginBottom: '20px' }}>Natural Farming</h1>
          <p>
            Natural Farming is more than just a method—it's a way of living in harmony with nature. At Kalinga Ashram, we practice and promote natural farming as a sustainable, eco-friendly approach that nurtures the earth, respects biodiversity, and supports healthy living.
          </p>
          <p>
            Unlike conventional agriculture, natural farming avoids chemical fertilizers, pesticides, and heavy machinery. Instead, it relies on time-tested techniques that enrich the soil using cow dung, cow urine (jeevamrut), compost, and natural mulching. These practices regenerate the land, conserve water, and produce nutrient-rich food without harming the environment.
          </p>
          <p>
            Our farm serves as a living classroom where volunteers, visitors, and farmers learn about:
          </p>
          <ul>
            <li>Soil health and composting</li>
            <li>Seed preservation</li>
            <li>Organic pest control</li>
            <li>Crop diversity and seasonal planting</li>
            <li>Integration of livestock and agriculture</li>
          </ul>
          <p>
            Natural farming at Kalinga Ashram is not only about growing food—it's about cultivating consciousness. It reconnects us with the rhythm of the earth, promotes self-reliance, and restores the sacred relationship between humans and nature.
          </p>
          <p>
            Come, experience the joy of growing your own food the natural way—and sow the seeds of a sustainable future.
          </p>
        </div>
        <div style={{ flex: 1 }}>
          <img src={naturalFarmingImage} alt="Natural Farming" style={{ width: '100%', borderRadius: '8px' }} />
        </div>
      </div>
    </div>
  );
}

export default NaturalFarming;
