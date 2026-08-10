import React from 'react';
import styles from './FloatingChat.module.css';

const FloatingChat: React.FC = () => {
  return (
    <div className={styles.floatingContainer}>
      <a 
        href="https://wa.me/6281257847411" 
        target="_blank" 
        rel="noopener noreferrer"
        className={styles.chatTrigger}
      >
        <img src="https://storage.cybiteam.id/assets.cbn.id/24_02_21_Floating_Contact_c78082a24f.gif" alt="Chat" style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} />
      </a>
    </div>
  );
};

export default FloatingChat;
