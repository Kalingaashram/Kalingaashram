import React from 'react';
import Slider from 'react-slick';
import './../assets/css/Home.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import banner1 from './../assets/images/banner/1.jpg';
import banner2 from './../assets/images/banner/2.jpg';
import banner3 from './../assets/images/banner/3.jpg';
import banner4 from './../assets/images/banner/4.jpg';


import aboutImage from './../assets/images/advisory-team.jpg';

const Home = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div style={{ maxWidth: '900px', margin: '40px auto' }}>
      {/* Slider */}
      <Slider {...sliderSettings}>
        <div>
          <img src={banner1} alt="Slide 1" style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
        </div>
        <div>
          <img src={banner1} alt="Slide 2" style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
        </div>
        <div>
          <img src={banner3} alt="Slide 3" style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
        </div>
        <div>
          <img src={banner4} alt="Slide 4" style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
        </div>

      </Slider>

      {/* Mission, Vision, Function */}
      <h2 style={{ textAlign: 'center', color: '#d87d0a', marginTop: '40px', marginBottom: '20px', fontWeight: 'bold' }}>
        सेवा परमोधर्मः
      </h2>
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '20px', marginBottom: '40px' }}>
        <div style={{ flex: 1, border: '1px solid #ccc', padding: '20px', textAlign: 'center' }}>
          <div style={{ fontSize: '30px', color: '#d87d0a', marginBottom: '10px' }}>ॐ</div>
          <h3>MISSION</h3>
          <p style={{ fontSize: '14px', textAlign: "left" }}>
            At Kalinga Ashram, we believe in the power of stillness and self-reflection to bring clarity and balance to the mind, body, and spirit. Our mission is to guide individuals on their path to personal growth and enlightenment through meditation, yoga, and a deep connection with nature. Whether you are seeking inner peace, spiritual awakening, or simply a respite from the demands of modern life, we offer a peaceful refuge where you can reconnect with yourself.
          </p>
        </div>
        <div style={{ flex: 1, border: '1px solid #ccc', padding: '20px', textAlign: 'center' }}>
          <div style={{ fontSize: '30px', color: '#d87d0a', marginBottom: '10px' }}>ॐ</div>
          <h3>VISION</h3>
          <p style={{ fontSize: '14px', textAlign: 'left' }}>
            We envision Kalinga Ashram as a place where people from all walks of life can come together to learn, grow, and support one another on their spiritual journeys. Through simple living and profound teachings, we hope to inspire a return to inner peace and a deeper understanding of the interconnectedness of all beings.
          </p>
        </div>
        <div style={{ flex: 1, border: '1px solid #ccc', padding: '20px', textAlign: 'center' }}>
          <div style={{ fontSize: '30px', color: '#d87d0a', marginBottom: '10px' }}>ॐ</div>
          <h3>FUNCTION</h3>
          <p style={{ fontSize: '14px', textAlign: 'left' }}>
            The core offerings of our organization are rooted in inner growth, healing, and selfless service. We guide individuals on their spiritual journey through four transformative pathways:
            <br /><br />

            <strong>1. Dhyana & Yoga</strong> (Meditation & Yoga Retreats)<br />

            <strong>2. Chetna Vikas</strong> (Mindfulness & Spiritual Growth)<br />

            <strong>3. Sampurna Chikitsa</strong> (Holistic Healing)<br />

            <strong>4. Sangat & Seva</strong> (Community & Service)<br />
          </p>
        </div>
      </div>

      {/* About Us */}
      <h2 style={{ color: '#d87d0a', fontWeight: 'bold', marginBottom: '20px' }}>ABOUT US</h2>
      <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        <div style={{ flex: 1, fontSize: '14px', lineHeight: '1.6', textAlign: 'left' }}>
          <p>
            Welcome to Kalinga Ashram, a serene sanctuary nestled in nature's embrace, where the journey of self-discovery and inner peace begins. Our ashram offers a tranquil space for individuals seeking mindfulness, healing, and spiritual growth through time-honored practices.
          </p>
          <p>
            We provide immersive Meditation & Yoga Retreats to deepen awareness and mental clarity, along with Mindfulness & Spiritual Growth sessions that open the heart and mind. Our Holistic Healing environment supports physical, emotional, and spiritual well-being using traditional and natural methods.
          </p>
          <p>
            Kalinga Ashram is also home to a warm community of seekers and servers, united by a shared commitment to personal development and compassionate living. Whether you seek quiet reflection or meaningful connection, the ashram offers a sacred space to reconnect with yourself and others.
          </p>
          <p>
            Join us at Kalinga Ashram, where every breath invites calm and every step leads to deeper harmony.
          </p>
          <button style={{
            backgroundColor: '#d87d0a',
            color: '#fff',
            border: 'none',
            borderRadius: '20px',
            padding: '8px 16px',
            cursor: 'pointer',
            marginTop: '10px'
          }}>
            Read More..
          </button>
        </div>
        <div style={{ flex: 1 }}>
          <img src={aboutImage} alt="About Us" style={{ width: '100%', borderRadius: '8px' }} />
        </div>
      </div>
    </div>
  );
};

export default Home;
