import Link from 'next/link';
import styles from './page.module.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata = {
  title: "Política de Privacidade | Redenção Transporte e Turismo",
  description: "Nossa política de privacidade e uso de dados detalhada em conformidade com a LGPD.",
};

export default function PoliticaPrivacidade() {
  return (
    <>
      <Header />
      <main className={styles.policyPage}>
        <div className={styles.policyHeader}>
          <div className="container">
            <h1 className={styles.title}>Política de Privacidade e Cookies</h1>
            <p className={styles.lastUpdated}>Última atualização: Abril de 2026</p>
          </div>
        </div>

        <div className={`container ${styles.policyContent}`}>
          <Link href="/" className={styles.homeLink}>
            &larr; Voltar para a página inicial
          </Link>

          <section className={styles.section}>
            <p className={styles.text}>
              A <strong>Redenção Transporte e Turismo LTDA</strong> valoriza a sua privacidade e está comprometida
              em proteger os dados pessoais que você compartilha conosco. Esta Política de Privacidade explica como
              coletamos, usamos e protegemos suas informações quando você acessa nosso site e utiliza
              nossos serviços, em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>1. Coleta de Informações</h2>
            <p className={styles.text}>
              Coletamos informações essenciais apenas para fornecer nossos serviços de transporte com excelência e para responder ativamente às suas solicitações. Estas informações podem incluir:
            </p>
            <ul className={styles.list}>
              <li><strong>Dados de Contato:</strong> Nome, telefone, e-mail e empresa quando você preenche nossos formulários de orçamento informativamente.</li>
              <li><strong>Dados de Navegação (Cookies):</strong> Endereço IP, tipo de navegador e páginas visitadas métricas para entender como os clientes usam nosso portal, via Google Analytics.</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>2. Como Usamos Seus Dados</h2>
            <p className={styles.text}>
              Nós não vendemos e não compartilhamos seus dados com terceiros para fins de marketing. Os dados coletados são usados exclusivamente para:
            </p>
            <ul className={styles.list}>
              <li>Formular e enviar orçamentos personalizados de fretamento;</li>
              <li>Entrar em contato via WhatsApp ou E-mail mediante a sua liberação prévia;</li>
              <li>Melhorar nossa plataforma monitorando o desempenho e tráfego através de cookies analíticos (você pode recusá-los no nosso banner lateral).</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>3. Proteção e Armazenamento</h2>
            <p className={styles.text}>
              Adotamos as melhores práticas técnicas e administrativas em plataformas confiáveis para assegurar que seus dados de comunicação não sofram acessos não autorizados. Seus dados são guardados em segurança somente durante o tempo estritamente necessário à prestação de nossos serviços e cumprimento de deveres legais.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>4. Uso de Cookies</h2>
            <p className={styles.text}>
              Cookies são pequenos arquivos instalados no seu computador que aprimoram a usabilidade da página web. Em nosso site usamos <strong>Cookies Necessários</strong> (para o site funcionar) e <strong>Cookies Analíticos</strong> (para acompanhar acessos). Você pode configurar seu navegador para não aceitar cookies e gerir os acessos usando nosso botão de consentimento que aparece na página principal.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>5. Seus Direitos (LGPD)</h2>
            <p className={styles.text}>
              De acordo com a Lei Geral de Proteção de Dados, você tem o direito garantido de requerer, a qualquer momento:
            </p>
            <ul className={styles.list}>
              <li>O acesso e confirmação à existência de tratamento de dados;</li>
              <li>A correção de dados incompletos ou inexatos;</li>
              <li>A anonimização, bloqueio ou eliminação de seus dados preenchidos no nosso cadastro;</li>
              <li>Interromper a comunicação de orçamentos e newsletter caso opte pelas mesmas.</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>6. Contato com o DPO (Encarregado)</h2>
            <p className={styles.text}>
              Em caso de dúvidas relacionadas à sua privacidade ou se desejar exercer seus direitos sob a LGPD, por favor, envie um e-mail com a solicitação para:
              <br/><strong>fretamento@redencaoonline.com.br</strong> ou fale no telefone: <strong>(85) 3494-4744</strong>.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
