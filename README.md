# Redenção Transporte e Turismo - Website Oficial 🚌

Bem-vindo ao repositório oficial do website da **Redenção Transporte e Turismo**. Este projeto consiste em uma Landing Page moderna, institucional e responsiva que detalha os serviços de fretamento, viagens e excursões da empresa, além de fornecer um canal direto de contato via WhatsApp.

## 💻 Sobre o Projeto

A Redenção Transporte e Turismo atua no transporte rodoviário, oferecendo soluções confiáveis de fretamento contínuo, eventual e turístico. Este site moderno tem o principal objetivo de otimizar conversões de clientes corporativos e grupos em busca de transporte executivo, oferecendo uma experiência premium e de fácil navegação.

### ✨ Funcionalidades Principais

- **Apresentação Impactante (Hero Section)**: Banners dinâmicos e profissionais destacando o conforto e segurança.
- **Portfólio da Frota (Carousel)**: Um carrossel interativo (`react-owl-carousel` ou scroll horizontal nativo) apresentando os veículos (Leito Turismo, Executivo e Micro-ônibus) com detalhes técnicos e galeria de fotos reais das áreas internas e externas.
- **Serviços Oferecidos**: Descrição detalhada dos modais de Fretamento (Eventual, Contínuo, Corporativo e Excursões).
- **Sobre a Empresa**: História, missão e valores de segurança, pontualidade e conforto.
- **Formulário de Contato Direto & WhatsApp**: Componente fixo (Float Button) para mensagens automáticas encaminhadas diretamente ao WhatsApp da área comercial.
- **LGPD Legal**: Página totalmente dedicada à Política de Privacidade e Cookies, acompanhada de um Cookie Banner.

---

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído utilizando as melhores práticas modernas para web:

- **Framework:** [Next.js](https://nextjs.org/) (App Router, Versão 16+)
- **React:** Componentização Funcional com bibliotecas modernas e React Hooks.
- **Estilização:** CSS Vanilla e CSS Modules (Design Customizado, Flexbox, Grid, Animações e Variáveis CSS globais).
- **Fontes:** Google Fonts (Montserrat e Inter) importados via `next/font`.
- **Animações / Interações:** Transições suaves CSS, componentes interativos.
- **Integração de Ícones:** Phosphor Icons / FontAwesome ou assets SVG nativos.
- **Deploy Otimizado:** Preparado para Vercel ou outras plataformas serverless, com alto desempenho (Lighthouse focado).

---

## 📂 Estrutura de Pastas e Componentes

A organização segue a arquitetura de projetos Next.js (App Directory):

```text
📦 redencao-site
 ┣ 📂 public/              # Assets estáticos (Imagens da frota, Logos, Favicon)
 ┣ 📂 src/
 ┃ ┣ 📂 app/               # Rotas e Layout (App Router)
 ┃ ┃ ┣ 📜 globals.css      # Variáveis de CSS e Reset Global
 ┃ ┃ ┣ 📜 layout.js        # Root Layout com Header, Footer e Metadados
 ┃ ┃ ┣ 📜 page.js          # Página Principal (Home / Landing Page)
 ┃ ┃ ┗ 📂 politica-de-privacidade/ # Rota de Política de Privacidade
 ┃ ┣ 📂 components/        # Componentes Reutilizáveis (UI)
 ┃ ┃ ┣ 📜 Header.js        # Menu de Navegação Global
 ┃ ┃ ┣ 📜 Hero.js          # Banner e Call-To-Action principa
 ┃ ┃ ┣ 📜 Fleet.js         # Carrossel da Frota
 ┃ ┃ ┣ 📜 Services.js      # Detalhamento de Serviços Base
 ┃ ┃ ┣ 📜 ContactForm.js   # Formulário de Lead / Contato
 ┃ ┃ ┣ 📜 Footer.js        # Rodapé e Informações da Empresa
 ┃ ┃ ┣ 📜 CookieBanner.js  # Banner de Aceite de Privacidade e Cookies
 ┃ ┃ ┗ 📜 WhatsAppButton.js# Botão Flutuante de comunicação
```

---

## 🚀 Como Executar o Projeto Localmente

Siga o passo-a-passo abaixo para rodar o projeto na sua máquina de desenvolvimento.

### 1. Pré-Requisitos

Certifique-se de possuir o [Node.js](https://nodejs.org/) (versão `18.x` ou superior) instalado em seu ambiente.

### 2. Instalação

Clone o repositório e baixe as dependências:

```bash
# Clone o projeto (via HTTPS ou SSH)
git clone https://github.com/cilasmiguel-git/projeto_redencao_site.git

# Acesse o diretório do projeto
cd projeto_redencao_site/redencao-site

# Instale as dependências via npm
npm install
```

### 3. Rodando o Servidor Local

Após a instalação, abra o site para edição no modo de desenvolvimento:

```bash
npm run dev
```

Acesse em seu navegador o link correspondente: [http://localhost:3000](http://localhost:3000)

As alterações em componentes dentro de `src/` refletirão instantaneamente devido ao Hot Reload do Next.js.

### 4. Build de Produção

Caso necessite compilar os arquivos e validar a versão otimizada final que irá para a nuvem, rode:

```bash
# Compile a aplicação
npm run build

# Inicie o servidor em modo de produção
npm run start
```

---

## 📝 Licença

Desenvolvido para **Redenção Transporte e Turismo**. Todos os direitos reservados.
Este projeto tem design e arquitetura exclusivos da empresa.
