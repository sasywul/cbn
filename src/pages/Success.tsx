import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const Success: React.FC = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: 'calc(100vh - 400px)',
      padding: '4rem 2rem',
      backgroundColor: 'var(--secondary)',
      textAlign: 'center'
    }}>
      <div style={{
        backgroundColor: 'white',
        padding: '3rem 2rem',
        borderRadius: '1rem',
        boxShadow: '0 10px 25px -5px rgba(0,0,0,0.05)',
        maxWidth: '500px',
        width: '100%'
      }}>
        <CheckCircle size={80} color="#10b981" style={{ margin: '0 auto 1.5rem auto' }} />
        <h1 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '1rem' }}>
          Pendaftaran Berhasil!
        </h1>
        <p style={{ color: 'var(--text-gray)', marginBottom: '2rem', lineHeight: '1.6' }}>
          Terima kasih telah mendaftar layanan CBN Fiber. Tim kami telah menerima data Anda dan akan segera menghubungi Anda melalui nomor telepon / WhatsApp yang terdaftar untuk proses verifikasi selanjutnya.
        </p>
        <Link to="/" className="btn btn-primary" style={{ display: 'inline-block', width: '100%' }}>
          Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
};

export default Success;
