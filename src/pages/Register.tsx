import React, { useState } from 'react';
import { Send, Loader2 } from 'lucide-react';
import styles from './Register.module.css';

const Register: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    district: '',
    village: '',
    package: '100mbps/100 Ribu',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const sendToTelegram = async (message: string) => {
    const botToken = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
    const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      throw new Error('Telegram Bot Token atau Chat ID belum dikonfigurasi di file .env');
    }

    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
    
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: 'HTML',
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('Telegram API Response Error:', errorData);
      throw new Error('Gagal mengirim pesan ke Telegram');
    }
    
    return await response.json();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    const message = `
<b>🔔 Pendaftaran Baru CBN</b>

<b>Nama:</b> ${formData.name}
<b>Email:</b> ${formData.email}
<b>No. Telepon:</b> ${formData.phone}
<b>Paket Pilihan:</b> ${formData.package}

<b>Alamat Pemasangan:</b>
${formData.address}
<b>Kota/Kabupaten:</b> ${formData.city}
<b>Kecamatan:</b> ${formData.district}
<b>Kelurahan:</b> ${formData.village}
    `;

    try {
      await sendToTelegram(message);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        district: '',
        village: '',
        package: '100mbps/100 Ribu',
      });
    } catch (error: any) {
      console.error('Telegram API Error:', error);
      setSubmitStatus('error');
      setErrorMessage('Gagal pendaftaran silahkan coba lagi');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.registerContainer}>
      <div className={styles.registerCard}>
        <div className={styles.header}>
          <h2>Daftar Layanan CBN Fiber</h2>
          <p>Silakan lengkapi formulir di bawah ini, tim kami akan segera menghubungi Anda.</p>
        </div>

        {submitStatus === 'success' && (
          <div className={styles.alertSuccess}>
            Pendaftaran berhasil dikirim! Tim kami akan segera menghubungi Anda melalui nomor telepon yang terdaftar.
          </div>
        )}

        {submitStatus === 'error' && (
          <div className={styles.alertError}>
            {errorMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Nama Lengkap</label>
            <input
              type="text"
              id="name"
              name="name"
              className="input-field"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Masukkan nama lengkap Anda"
            />
          </div>

          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="email">Alamat Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="input-field"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="nama@email.com"
              />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="phone">No. Telepon / WhatsApp</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="input-field"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="08123456789"
              />
            </div>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="package">Pilih Paket Layanan</label>
            <select
              id="package"
              name="package"
              className="input-field"
              value={formData.package}
              onChange={handleChange}
            >
              <option value="100mbps/100 Ribu">100mbps/100 Ribu</option>
              <option value="200mbps/180 Ribu">200mbps/180 Ribu</option>
              <option value="500mbps/300 Ribu">500mbps/300 Ribu</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="address">Alamat Pemasangan Lengkap</label>
            <textarea
              id="address"
              name="address"
              className="input-field"
              value={formData.address}
              onChange={handleChange}
              required
              rows={3}
              placeholder="Sertakan nama jalan, nomor rumah, RT/RW"
            />
          </div>

          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="city">Kota / Kabupaten</label>
              <input
                type="text"
                id="city"
                name="city"
                className="input-field"
                value={formData.city}
                onChange={handleChange}
                required
                placeholder="Misal: Jakarta Selatan"
              />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="district">Kecamatan</label>
              <input
                type="text"
                id="district"
                name="district"
                className="input-field"
                value={formData.district}
                onChange={handleChange}
                required
                placeholder="Misal: Kebayoran Baru"
              />
            </div>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="village">Kelurahan / Desa</label>
            <input
              type="text"
              id="village"
              name="village"
              className="input-field"
              value={formData.village}
              onChange={handleChange}
              required
              placeholder="Misal: Senayan"
            />
          </div>

          <button 
            type="submit" 
            className={`btn btn-primary ${styles.submitBtn}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <><Loader2 size={20} className={styles.spinIcon} /> Memproses...</>
            ) : (
              <><Send size={20} className="btn-icon" /> Kirim Pendaftaran</>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
