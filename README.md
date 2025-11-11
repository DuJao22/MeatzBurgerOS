# Meatz Burger - Sistema de Gerenciamento (Frontend Moderno)

Este é o novo frontend modernizado para o sistema de gerenciamento da hamburgueria BurgerLoft, construído com Vite, Tailwind CSS e JavaScript puro.

## Funcionalidades

O projeto foi reestruturado para separar o frontend do backend. Este repositório agora contém apenas a aplicação frontend.

### Para Clientes
- **Landing Page** moderna e responsiva com animações.
- **Cardápio** visual com filtros interativos.

### Para Administradores
- **Dashboard** com visualização de dados (métricas e gráficos).
- **Tela de Login** segura e elegante.

## Tecnologias

- **Framework**: Vite
- **Estilização**: Tailwind CSS
- **JavaScript**: ES6+ (Módulos)
- **Gráficos**: Chart.js
- **Ícones**: Lucide Icons

## Configuração

1.  **Instale as dependências:**
    Use o `yarn` para instalar os pacotes necessários.
    ```bash
    yarn install
    ```

2.  **Execute o servidor de desenvolvimento:**
    Isso iniciará o servidor Vite em `http://localhost:5173`.
    ```bash
    yarn run dev
    ```

3.  **Para build de produção:**
    Este comando irá gerar os arquivos estáticos otimizados na pasta `dist/`.
    ```bash
    yarn run build
    ```

## Estrutura do Projeto

```
.
├── dist/                  # Arquivos de produção (gerados pelo build)
├── public/                # Arquivos estáticos (imagens, fontes)
├── src/                   # Código fonte do frontend
│   ├── css/
│   │   └── style.css      # Arquivo CSS principal
│   └── js/
│       ├── main.js        # Ponto de entrada JS
│       ├── layout.js      # Módulo para navbar/footer
│       └── animations.js  # Módulo para animações
├── index.html             # Página Inicial
├── menu.html              # Página do Cardápio
├── admin-dashboard.html   # Página do Dashboard
├── login.html             # Página de Login
├── package.json           # Dependências e scripts
├── tailwind.config.js     # Configuração do Tailwind
└── vite.config.js         # Configuração do Vite
```
