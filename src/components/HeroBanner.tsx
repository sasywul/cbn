import React from 'react';
import styles from './HeroBanner.module.css';

const HeroBanner: React.FC = () => {
  return (
    <div className={styles.heroContainer}>
      {/* Actual image from CBN */}
      <img 
        src="https://storage.cybiteam.id/assets.cbn.id/Website_Banner_3840x1000px_IND_e33126d0cf.webp" 
        alt="Level Up Indonesia" 
        className={styles.bannerImageDesktop}
      />
      <img 
        src="https://storage.cybiteam.id/assets.cbn.id/Artikel_1200x600px_IND_57b101d8c4.webp"
        alt="Level Up Indonesia Mobile"
        className={styles.bannerImageMobile}
      />
    </div>
  );
};

export default HeroBanner;
