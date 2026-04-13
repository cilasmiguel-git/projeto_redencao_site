import Image from 'next/image';
import styles from './Hero.module.css';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBackground}>
        <Image 
          src=\"/projeto_redencao_site/images/banner_hero.png" 
          alt="Banner Hero Redenção Transporte e Turismo" 
          fill 
          className={styles.heroImage}
          priority 
        />
      </div>
      
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Tradição em Transporte <span>no Ceará</span></h1>
        <p className={styles.heroSubtitle}>Há mais de 80 anos levando você com conforto, segurança e pontualidade. Especialistas em fretamento turístico e empresarial.</p>
        
        <div className={styles.heroButtons}>
          <Link href="#orcamento" className="btn-primary">
            Faça seu Orçamento
          </Link>
          <Link href="#frota" className={styles.btnSecondary}>
            Conheça a Frota
          </Link>
        </div>
      </div>
    </section>
  );
}
