import React from 'react';
import { Link } from 'react-router-dom';
import HeroBanner from '../components/HeroBanner';

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

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {/* Promo Card 1 */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img 
              src="https://storage.cybiteam.id/assets.cbn.id/Website_KV_Fiber_Safe_3840x1000px_IND_edcb3edff2.webp" 
              alt="Fiber HOME" 
              style={{ width: '100%', borderRadius: '1rem', objectFit: 'cover' }} 
            />
            <h3 style={{ fontSize: '2rem', fontWeight: 800, margin: '1.5rem 0 0.5rem 0', color: '#0077c8' }}>Fiber HOME</h3>
            <p style={{ color: 'var(--text-gray)', marginBottom: '1.5rem' }}>Koneksi internet dan WiFi rumah super cepat yang unlimited</p>
            <Link to="/register" className="btn btn-primary" style={{ padding: '0.75rem 2rem', borderRadius: '2rem', fontSize: '1rem' }}>
              Daftar Sekarang
            </Link>
          </div>
          
          {/* Promo Card 2 */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img 
              src="https://storage.cybiteam.id/assets.cbn.id/CBN_Fiber_Promo_85_Trend_Micro_web_ID_dda26909ce.webp" 
              alt="Fiber PRO" 
              style={{ width: '100%', borderRadius: '1rem', objectFit: 'cover' }} 
            />
            <h3 style={{ fontSize: '2rem', fontWeight: 800, margin: '1.5rem 0 0.5rem 0', color: '#0077c8' }}>Fiber PRO</h3>
            <p style={{ color: 'var(--text-gray)', marginBottom: '1.5rem' }}>Transformasi bisnis menjadi lebih fleksibel dan menguntungkan</p>
            <Link to="/register" className="btn btn-primary" style={{ padding: '0.75rem 2rem', borderRadius: '2rem', fontSize: '1rem' }}>
              Daftar Sekarang
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
