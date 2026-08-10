import React from 'react';
import styles from './Footer.module.css';
import { Globe, Mail, Phone, MapPin, MessageSquare } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContent}`}>
        <div className={styles.footerBrand}>
          <div className={styles.logo}>
            <span className={styles.logoText}>CBN<span className={styles.logoDot}>.id</span></span>
          </div>
          <p className={styles.brandDesc}>
            CBN Fiber menghadirkan koneksi internet super cepat dan unlimited untuk rumah dan bisnis Anda.
          </p>
          <div className={styles.socialLinks}>
            <a href="#" className={styles.socialBtn} aria-label="Website"><Globe size={20} /></a>
            <a href="#" className={styles.socialBtn} aria-label="Email"><Mail size={20} /></a>
            <a href="#" className={styles.socialBtn} aria-label="Phone"><Phone size={20} /></a>
            <a href="#" className={styles.socialBtn} aria-label="Location"><MapPin size={20} /></a>
            <a href="#" className={styles.socialBtn} aria-label="Message"><MessageSquare size={20} /></a>
          </div>
        </div>
        
        <div className={styles.footerLinksGroup}>
          <div className={styles.linkColumn}>
            <h4 className={styles.linkTitle}>Layanan</h4>
            <ul className={styles.linkList}>
              <li><a href="#">Internet Rumah</a></li>
              <li><a href="#">Internet Bisnis</a></li>
              <li><a href="#">Paket Promo</a></li>
              <li><a href="#">Cek Coverage</a></li>
            </ul>
          </div>
          
          <div className={styles.linkColumn}>
            <h4 className={styles.linkTitle}>Dukungan</h4>
            <ul className={styles.linkList}>
              <li><a href="#">Pusat Bantuan</a></li>
              <li><a href="#">Hubungi Kami</a></li>
              <li><a href="#">Syarat & Ketentuan</a></li>
              <li><a href="#">Kebijakan Privasi</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className={styles.footerBottom}>
        <div className={`container ${styles.bottomContent}`}>
          <p>&copy; {new Date().getFullYear()} PT Cyberindo Aditama. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
