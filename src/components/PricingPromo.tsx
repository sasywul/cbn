import React from 'react';
import { Link } from 'react-router-dom';
import { Gauge, Activity, Wifi, ShieldCheck, Headphones, ChevronRight } from 'lucide-react';
import styles from './PricingPromo.module.css';

const PricingPromo: React.FC = () => {
  return (
    <div className={styles.promoContainer}>
      <div className={styles.glowBackground}></div>

      <div className={styles.cardsContainer}>
        {/* 100 Mbps Card */}
        <Link to="/register?paket=100Mbps/100%20Ribu" style={{ textDecoration: 'none' }}>
          <div className={styles.priceCard}>
            <div className={styles.speedSection}>
              <div className={styles.iconWrapper}>
                <Gauge size={32} strokeWidth={1.5} />
              </div>
              <div className={styles.speedValue}>
                100<span className={styles.speedUnit}>Mbps</span>
              </div>
            </div>
            
            <div className={styles.divider}></div>

            <div className={styles.priceSection}>
              <span className={styles.priceLabel}>Hanya</span>
              <span className={styles.priceValue}>100</span>
              <span className={styles.priceUnit}>Ribu</span>
              <div className={`${styles.selectBtn} ${styles.btnStandard}`}>
                Pilih Paket <ChevronRight size={16} className={styles.arrowIcon}/>
              </div>
            </div>
          </div>
        </Link>

        {/* 200 Mbps Card (BEST SELLER) */}
        <Link to="/register?paket=200Mbps/180%20Ribu" style={{ textDecoration: 'none' }}>
          <div className={`${styles.priceCard} ${styles.popularCard}`}>
            <div className={styles.popularBadge}>Best Seller</div>
            <div className={styles.speedSection}>
              <div className={styles.iconWrapper}>
                <Activity size={32} strokeWidth={1.5} />
              </div>
              <div className={styles.speedValue}>
                200<span className={styles.speedUnit}>Mbps</span>
              </div>
            </div>
            
            <div className={styles.divider}></div>

            <div className={styles.priceSection}>
              <span className={styles.priceLabel}>Hanya</span>
              <span className={styles.priceValue}>180</span>
              <span className={styles.priceUnit}>Ribu</span>
              <div className={`${styles.selectBtn} ${styles.btnPopular}`}>
                Pilih Paket <ChevronRight size={16} className={styles.arrowIcon}/>
              </div>
            </div>
          </div>
        </Link>

        {/* 500 Mbps Card */}
        <Link to="/register?paket=500Mbps/300%20Ribu" style={{ textDecoration: 'none' }}>
          <div className={styles.priceCard}>
            <div className={styles.speedSection}>
              <div className={styles.iconWrapper}>
                <ShieldCheck size={32} strokeWidth={1.5} />
              </div>
              <div className={styles.speedValue}>
                500<span className={styles.speedUnit}>Mbps</span>
              </div>
            </div>
            
            <div className={styles.divider}></div>

            <div className={styles.priceSection}>
              <span className={styles.priceLabel}>Hanya</span>
              <span className={styles.priceValue}>300</span>
              <span className={styles.priceUnit}>Ribu</span>
              <div className={`${styles.selectBtn} ${styles.btnStandard}`}>
                Pilih Paket <ChevronRight size={16} className={styles.arrowIcon}/>
              </div>
            </div>
          </div>
        </Link>
      </div>

      <div className={styles.featuresGrid}>
        <div className={styles.featureItem}>
          <div className={styles.featureIconBox}>
            <Activity size={24} strokeWidth={1.5} />
          </div>
          <div className={styles.featureText}>Kecepatan Stabil</div>
        </div>
        <div className={styles.featureItem}>
          <div className={styles.featureIconBox}>
            <Wifi size={24} strokeWidth={1.5} />
          </div>
          <div className={styles.featureText}>Koneksi Handal</div>
        </div>
        <div className={styles.featureItem}>
          <div className={styles.featureIconBox}>
            <ShieldCheck size={24} strokeWidth={1.5} />
          </div>
          <div className={styles.featureText}>Aman & Terpercaya</div>
        </div>
        <div className={styles.featureItem}>
          <div className={styles.featureIconBox}>
            <Headphones size={24} strokeWidth={1.5} />
          </div>
          <div className={styles.featureText}>Support 24/7</div>
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
