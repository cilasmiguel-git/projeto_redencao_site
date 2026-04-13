import styles from './Services.module.css';

export default function Services() {
  const services = [
    {
      title: "Fretamento Turístico",
      description: "Viagens rodoviárias, excursões e traslados com o máximo de conforto em veículos de última geração, equipados com ar-condicionado, Wi-Fi e toalete.",
      icon: (
        <svg xmlns="http://www.w3.org/0000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
          <path d="M2 12h20"></path>
        </svg>
      )
    },
    {
      title: "Fretamento Contínuo",
      description: "Transporte diário de funcionários para empresas e indústrias, com rotas otimizadas e vans ou ônibus dedicados à sua equipe.",
      icon: (
        <svg xmlns="http://www.w3.org/0000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
        </svg>
      )
    },
    {
      title: "Oficina Mecânica",
      description: "Manutenção preventiva e corretiva para veículos pesados, utilizando toda a nossa expertise na manutenção da nossa rigorosa frota.",
      icon: (
        <svg xmlns="http://www.w3.org/0000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
        </svg>
      )
    }
  ];

  return (
    <section id="servicos" className={`section ${styles.services}`}>
      <div className="container">
        <h2 className="title">Nossos Serviços</h2>
        <p className="subtitle">Com mais de 80 anos de mercado, oferecemos as melhores soluções em transporte e mecânica pesada.</p>
        
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              <div className={styles.iconWrapper}>
                {service.icon}
              </div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceText}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
