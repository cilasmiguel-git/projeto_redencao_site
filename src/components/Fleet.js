"use client";
import { useState } from 'react';
import styles from './Fleet.module.css';
import Image from 'next/image';

const BusCarousel = ({ images, altPrefix }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) {
    return <div className={styles.carouselContainer} />;
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className={styles.carouselContainer}>
      <Image
        src={images[currentIndex]}
        alt={`${altPrefix} - Foto ${currentIndex + 1}`}
        fill
        className={styles.carouselImg}
        style={{ objectFit: 'cover' }}
      />
      
      {images.length > 1 && (
        <>
          <button onClick={prevSlide} className={`${styles.carouselBtn} ${styles.carouselBtnLeft}`} aria-label="Anterior">
            <svg xmlns="http://www.w3.org/0000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </button>
          
          <button onClick={nextSlide} className={`${styles.carouselBtn} ${styles.carouselBtnRight}`} aria-label="Próxima">
            <svg xmlns="http://www.w3.org/0000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>

          <div className={styles.carouselDots}>
            {images.map((_, idx) => (
              <span 
                key={idx} 
                className={`${styles.dot} ${idx === currentIndex ? styles.dotActive : ''}`} 
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default function Fleet() {
  const fleet = [
    {
      name: "G7 Leito Turismo",
      capacity: "46 passageiros",
      images: [
        \"/projeto_redencao_site/images/G7 Leito Turismo/g7.jpg",
        \"/projeto_redencao_site/images/G7 Leito Turismo/2039-1.jpg",
        \"/projeto_redencao_site/images/G7 Leito Turismo/2015-int.jpg",
        \"/projeto_redencao_site/images/G7 Leito Turismo/2039-5.jpg"
      ],
      features: [
        "Ar condicionado",
        "Sistema de Som e DVD com controle individual",
        "Poltronas reclináveis soft com descanso de pernas",
        "Frigobar",
        "Toilet"
      ]
    },
    {
      name: "Executivo",
      capacity: "46 ou 50 passageiros",
      images: [
        \"/projeto_redencao_site/images/Executivo/executivo-externa.jpg",
        \"/projeto_redencao_site/images/Executivo/executivo-interna.jpg",
        \"/projeto_redencao_site/images/Executivo/frota1.png"
      ],
      features: [
        "Ar condicionado",
        "Sistema de Som e DVD",
        "Poltronas reclináveis",
        "Frigobar",
        "Toilet"
      ]
    },
    {
      name: "Microônibus",
      capacity: "28 ou 36 passageiros",
      images: [
        \"/projeto_redencao_site/images/Microônibus/foto01-1.png",
        \"/projeto_redencao_site/images/Microônibus/2038-2-1.jpg",
        \"/projeto_redencao_site/images/Microônibus/2036-2.jpg",
        \"/projeto_redencao_site/images/Microônibus/2036-3.jpg",
        \"/projeto_redencao_site/images/Microônibus/2036-4.jpg"
      ],
      features: [
        "Ar condicionado",
        "Sistema de Som e DVD",
        "Poltronas reclináveis",
        "Frigobar",
        "Toilet"
      ]
    },
    {
      name: "Leito Turismo",
      capacity: "46 passageiros",
      images: [
        \"/projeto_redencao_site/images/Leito Turismo/frota2.png"
      ],
      features: [
        "Ar condicionado",
        "Sistema de Som e DVD",
        "Poltronas reclináveis soft com descanso de pernas",
        "Frigobar",
        "Toilet"
      ]
    }
  ];

  return (
    <section id="frota" className={`section ${styles.fleet}`}>
      <div className="container">
        <h2 className="title">Conheça Nossa Frota</h2>
        <p className="subtitle">Veículos modernos e revisados periodicamente para garantir sua total segurança.</p>
        
        <div className={styles.fleetGrid}>
          {fleet.map((bus, index) => (
            <div key={index} className={styles.fleetCard}>
              <div className={styles.imageWrapper}>
                <BusCarousel images={bus.images} altPrefix={bus.name} />
              </div>
              <div className={styles.fleetInfo}>
                <h3 className={styles.fleetName}>{bus.name}</h3>
                <p><strong>Capacidade:</strong> {bus.capacity}</p>
                <ul className={styles.fleetFeatures}>
                  {bus.features.map((feat, i) => (
                    <li key={i}>{feat}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
