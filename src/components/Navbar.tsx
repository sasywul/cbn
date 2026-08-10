import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Search, X, ChevronDown, Radar, Wifi } from 'lucide-react';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.navContainer}`}>
        <div className="flex items-center">
          <Menu 
            className={styles.mobileMenuIcon} 
            onClick={() => setIsMobileMenuOpen(true)}
          />
          <Link to="/" className={styles.logo} style={{ display: 'flex', alignItems: 'center' }}>
            <img src="https://storage.cybiteam.id/assets.cbn.id/CBN_logo_03_cf08aa390e.png" alt="CBN Logo" style={{ height: '40px', objectFit: 'contain' }} />
          </Link>
        </div>
        
        <div className={styles.centerMenu}>
          <ul className={styles.menuList}>
            <li className={styles.menuItem}><Link to="/">CBN Fiber</Link></li>
            <li className={styles.menuItem}><Link to="/">CBN Enterprise</Link></li>
            <li className={styles.menuItem}><Link to="/">Promo</Link></li>
            <li className={styles.menuItem}><Link to="/">Bantuan</Link></li>
          </ul>
        </div>
        
        <div className={styles.rightMenu}>
          <button className={styles.iconBtn} aria-label="Search">
            <Search size={20} />
          </button>
          
          <div className={styles.langSelector}>
            <span>ID</span>
            <ChevronDown size={16} />
          </div>
          
          <Link to="/register" className={`btn btn-primary ${styles.registerBtn}`}>
            <Radar size={20} className="btn-icon" />
            Daftar Sekarang
          </Link>
        </div>
      </div>
      
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <>
          <div className={styles.mobileOverlay} onClick={() => setIsMobileMenuOpen(false)} />
          <div className={styles.mobileMenu}>
            <div className={styles.mobileMenuHeader}>
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className={styles.logo} style={{ display: 'flex', alignItems: 'center' }}>
                <img src="https://storage.cybiteam.id/assets.cbn.id/CBN_logo_03_cf08aa390e.png" alt="CBN Logo" style={{ height: '40px', objectFit: 'contain' }} />
              </Link>
              <button onClick={() => setIsMobileMenuOpen(false)} className={styles.iconBtn}>
                <X size={24} />
              </button>
            </div>
            <div className={styles.mobileMenuContent}>
              <ul className={styles.mobileMenuList}>
                <li><Link to="/" onClick={() => setIsMobileMenuOpen(false)}>CBN Fiber</Link></li>
                <li><Link to="/" onClick={() => setIsMobileMenuOpen(false)}>CBN Enterprise</Link></li>
                <li><Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Promo</Link></li>
                <li><Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Bantuan</Link></li>
              </ul>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
