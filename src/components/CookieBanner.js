"use client";
import { useState, useEffect } from 'react';
import styles from './CookieBanner.module.css';
import Link from 'next/link';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Basic check for LGPD consent in localStorage
    const consent = localStorage.getItem('redencao_cookie_consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('redencao_cookie_consent', 'accepted');
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('redencao_cookie_consent', 'rejected');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className={styles.cookieBanner}>
      <div className={`container ${styles.cookieContainer}`}>
        <div className={styles.cookieText}>
          <p>
            Em conformidade com a LGPD, utilizamos cookies e tecnologias semelhantes para melhorar a sua experiência em nosso site, personalizar conteúdo e anúncios, além de analisar nosso tráfego. Ao continuar navegando, você concorda com a nossa <Link href="/politica-de-privacidade">Política de Privacidade e Cookies</Link>.
          </p>
        </div>
        <div className={styles.cookieActions}>
          <button onClick={handleReject} className={styles.btnReject}>Recusar</button>
          <button onClick={handleAccept} className={styles.btnAccept}>Entendi e Aceito</button>
        </div>
      </div>
    </div>
  );
}
