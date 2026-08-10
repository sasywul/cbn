import React from 'react';
import { Link } from 'react-router-dom';
import HeroBanner from '../components/HeroBanner';
import PricingPromo from '../components/PricingPromo';

const Home: React.FC = () => {
  return (
    <>
      <HeroBanner />
      
      {/* Promo Sections */}
      <section className="container" style={{ padding: '2rem 1.25rem', textAlign: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', margin: '2rem 0', color: 'var(--text-gray)' }}>
          <span style={{ cursor: 'pointer', fontWeight: 600, color: 'var(--text-dark)' }}>Internet</span>
          <span style={{ cursor: 'pointer' }}>Add-On</span>
          <span style={{ cursor: 'pointer' }}>Cybro Loyalty</span>
        </div>

        <PricingPromo />
      </section>
    </>
  );
};

export default Home;
