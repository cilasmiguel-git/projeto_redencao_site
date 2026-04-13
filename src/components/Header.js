import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <Link href="/" className={styles.logoLink}>
          <Image 
            src="/projeto_redencao_site/images/cropped-logo.png" 
            alt="Redenção Transporte e Turismo" 
            width={180} 
            height={50} 
            className={styles.logoImg}
            priority
          />
        </Link>
        <nav className={styles.nav}>
          <Link href="#servicos">Serviços</Link>
          <Link href="#frota">A Frota</Link>
          <Link href="#orcamento" className={styles.ctaBtn}>
            Orçamento
          </Link>
        </nav>
      </div>
    </header>
  );
}
