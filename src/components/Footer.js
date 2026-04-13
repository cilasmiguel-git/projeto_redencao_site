import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.footerBrand}>
          <Image 
            src=\"/projeto_redencao_site/images/cropped-logo.png" 
            alt="Redenção Transporte e Turismo" 
            width={180} 
            height={50} 
            className={styles.logoImg}
          />
          <p className={styles.desc}>
            Uma das mais tradicionais empresas de transporte de passageiros em operação no Brasil. Referência em viagens, turismo e soluções corporativas.
          </p>
        </div>
        
        <div className={styles.footerLinks}>
          <h4 className={styles.footerTitle}>Serviços</h4>
          <ul className={styles.linksList}>
            <li><Link href="#servicos">Fretamento Turístico</Link></li>
            <li><Link href="#servicos">Fretamento Contínuo</Link></li>
            <li><Link href="#servicos">Oficina Mecânica</Link></li>
          </ul>
        </div>
        
        <div className={styles.footerLinks}>
          <h4 className={styles.footerTitle}>Navegação</h4>
          <ul className={styles.linksList}>
            <li><Link href="/#frota">Conheça a Frota</Link></li>
            <li><Link href="/#orcamento">Faça um Orçamento</Link></li>
            <li><Link href="/politica-de-privacidade">Política de Privacidade</Link></li>
          </ul>
        </div>
      </div>
      
      <div className={`container ${styles.bottom}`}>
        <p>&copy; {year} Redenção Transporte e Turismo LTDA. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
