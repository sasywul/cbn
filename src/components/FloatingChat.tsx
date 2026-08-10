import React, { useState } from 'react';
import styles from './FloatingChat.module.css';
import { X } from 'lucide-react';

const FloatingChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.floatingContainer}>
      {isOpen && (
        <div className={styles.chatPopup}>
          <div className={styles.chatHeader}>
            <span>Hubungi Kami</span>
            <button onClick={() => setIsOpen(false)} className={styles.closeBtn}>
              <X size={20} />
            </button>
          </div>
          <div className={styles.chatBody}>
            <button className={styles.chatOption}>
              <span className={styles.iconWhatsapp}></span>
              WhatsApp
            </button>
            <button className={styles.chatOption}>
              <span className={styles.iconLivechat}></span>
              Live Chat
            </button>
            <button className={styles.chatOption}>
              <span className={styles.iconCall}></span>
              Call Center
            </button>
            <button className={styles.chatOption}>
              <span className={styles.iconMessage}></span>
              Message
            </button>
          </div>
        </div>
      )}
      
      <button 
        className={`${styles.chatTrigger} ${isOpen ? styles.hidden : ''}`}
        onClick={() => setIsOpen(true)}
      >
        <img src="https://storage.cybiteam.id/assets.cbn.id/24_02_21_Floating_Contact_c78082a24f.gif" alt="Chat" style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} />
      </button>
    </div>
  );
};

export default FloatingChat;
