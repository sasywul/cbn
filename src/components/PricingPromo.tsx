import React from 'react';
import { Link } from 'react-router-dom';
import { Gauge, Activity, Wifi, ShieldCheck, Headphones, Wifi as WifiLogo, ChevronRight } from 'lucide-react';
import styles from './PricingPromo.module.css';

const PricingPromo: React.FC = () => {
  return (
    <div className={styles.promoContainer}>
      <div className={styles.glowBackground}></div>

      <div className={styles.cardsContainer}>
        {/* 100 Mbps Card */}
        <Link to="/register?paket=100Mbps/100%20Ribu" style={{ textDecoration: 'none' }}>
          <div className={`${styles.priceCard} ${styles.cardBlue}`}>
            <div className={styles.speedSection}>
              <Gauge size={48} className={styles.speedIcon} />
              <div className={styles.speedValue}>
                100<span className={styles.speedUnit}>Mbps</span>
              </div>
            </div>
            <div className={styles.priceSection}>
              <span className={styles.priceLabel}>HANYA</span>
              <span className={`${styles.priceValue} ${styles.textBlue}`}>100</span>
              <span className={styles.priceUnit}>RIBU</span>
              <div className={`${styles.selectBtn} ${styles.btnBlue}`}>Pilih Paket <ChevronRight size={16}/></div>
            </div>
          </div>
        </Link>

        {/* 200 Mbps Card */}
        <Link to="/register?paket=200Mbps/180%20Ribu" style={{ textDecoration: 'none' }}>
          <div className={`${styles.priceCard} ${styles.cardGreen}`}>
            <div className={styles.speedSection}>
              <Gauge size={48} className={styles.speedIcon} />
              <div className={styles.speedValue}>
                200<span className={styles.speedUnit}>Mbps</span>
              </div>
            </div>
            <div className={styles.priceSection}>
              <span className={styles.priceLabel}>HANYA</span>
              <span className={`${styles.priceValue} ${styles.textGreen}`}>180</span>
              <span className={styles.priceUnit}>RIBU</span>
              <div className={`${styles.selectBtn} ${styles.btnGreen}`}>Pilih Paket <ChevronRight size={16}/></div>
            </div>
          </div>
        </Link>

        {/* 500 Mbps Card */}
        <Link to="/register?paket=500Mbps/300%20Ribu" style={{ textDecoration: 'none' }}>
          <div className={`${styles.priceCard} ${styles.cardOrange}`}>
            <div className={styles.speedSection}>
              <Gauge size={48} className={styles.speedIcon} />
              <div className={styles.speedValue}>
                500<span className={styles.speedUnit}>Mbps</span>
              </div>
            </div>
            <div className={styles.priceSection}>
              <span className={styles.priceLabel}>HANYA</span>
              <span className={`${styles.priceValue} ${styles.textOrange}`}>300</span>
              <span className={styles.priceUnit}>RIBU</span>
              <div className={`${styles.selectBtn} ${styles.btnOrange}`}>Pilih Paket <ChevronRight size={16}/></div>
            </div>
          </div>
        </Link>
      </div>

      <div className={styles.featuresGrid}>
        <div className={styles.featureItem}>
          <div className={styles.featureIconBox}>
            <Activity size={32} />
          </div>
          <div className={styles.featureText}>KECEPATAN<br/>STABIL</div>
        </div>
        <div className={styles.featureItem}>
          <div className={styles.featureIconBox}>
            <Wifi size={32} />
          </div>
          <div className={styles.featureText}>KONEKSI<br/>HANDAL</div>
        </div>
        <div className={styles.featureItem}>
          <div className={styles.featureIconBox}>
            <ShieldCheck size={32} />
          </div>
          <div className={styles.featureText}>AMAN &<br/>TERPERCAYA</div>
        </div>
        <div className={styles.featureItem}>
          <div className={styles.featureIconBox}>
            <Headphones size={32} />
          </div>
          <div className={styles.featureText}>SUPPORT<br/>24/7</div>
        </div>
      </div>

      <div className={styles.footerBanner}>
        <div className={styles.footerBrand}>
          <Wifi size={24} /> CBN
        </div>
        <div className={styles.footerDivider}></div>
        <div className={styles.footerText}>
          TERHUBUNG TANPA BATAS,<br/>
          AKTIVITAS <span className={styles.highlight}>MAKIN PUAS!</span>
        </div>
      </div>
    </div>
  );
};

export default PricingPromo;
