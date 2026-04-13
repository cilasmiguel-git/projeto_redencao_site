import styles from './ContactForm.module.css';

export default function ContactForm() {
  return (
    <section id="orcamento" className={styles.contactSection}>
      <div className={`container ${styles.contactContainer}`}>

        <div className={styles.contactInfo}>
          <h2 className={styles.contactTitle}>Solicite um Orçamento</h2>
          <p className={styles.contactDesc}>
            Estamos prontos para atender a sua necessidade de transporte. Preencha o formulário e nossa equipe entrará em contato com a melhor proposta comercial para você ou sua empresa.
          </p>

          <div className={styles.infoItem}>
            <div className={styles.infoIcon}>
              <svg xmlns="http://www.w3.org/0000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            </div>
            <div>
              <strong>Telefone</strong><br />
              (85) 3494-4744
            </div>
          </div>

          <div className={styles.infoItem}>
            <div className={styles.infoIcon}>
              <svg xmlns="http://www.w3.org/0000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            </div>
            <div>
              <strong>E-mail</strong><br />
              fretamento@redencaoonline.com.br
            </div>
          </div>

          <div className={styles.infoItem}>
            <div className={styles.infoIcon}>
              <svg xmlns="http://www.w3.org/0000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            </div>
            <div>
              <strong>Endereço</strong><br />
              R. Machado de Assis, 513 – Damas, Fortaleza-CE
            </div>
          </div>

        </div>

        <form className={styles.contactForm}>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="name">Nome / Empresa</label>
            <input type="text" id="name" className={styles.input} placeholder="Digite seu nome completo ou empresa" />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="email">E-mail</label>
            <input type="email" id="email" className={styles.input} placeholder="seu@email.com" />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="phone">Telefone / WhatsApp</label>
            <input type="tel" id="phone" className={styles.input} placeholder="(00) 00000-0000" />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="message">Serviço Desejado</label>
            <textarea id="message" className={styles.textarea} placeholder="Ex: Fretamento de 1 ônibus executivo para Jericoacoara no feriado..." />
          </div>

          <button type="button" className={`btn-primary ${styles.submitBtn}`}>Enviar Solicitação</button>
        </form>
      </div>

      <div className={`container ${styles.mapContainer}`}>
        <iframe
          title="Localização Redenção Transporte e Turismo"
          width="100%"
          height="450"
          src="https://maps.google.com/maps?q=Redenção%20Transporte%20e%20Turismo,%20Fortaleza,%20CE&t=&z=15&ie=UTF8&iwloc=&output=embed"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          style={{
            borderRadius: "var(--border-radius-lg)",
            boxShadow: "var(--shadow-md)",
            marginTop: "var(--spacing-xl)",
            filter: "contrast(1.05)"
          }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}
