# ILP3 — Mini Projeto Vue.js (Aulas 1 a 10)

Aplicação SPA de gerenciamento de usuários construída com Vue 3 + Vite. Este repositório reúne em um único projeto progressivo os conteúdos e entregas descritos nos materiais das Aulas 1 a 10.

## Requisitos

- Node.js LTS (20 ou 22)
- npm
- VS Code (recomendado)

## Executar no VS Code

1. Extraia o ZIP.
2. Abra a pasta `ILP3_Vue_Aulas_01_a_10` no VS Code.
3. Abra **Terminal > New Terminal**.
4. Confira as versões:

   ```bash
   node -v
   npm -v
   ```

5. Instale as dependências:

   ```bash
   npm install
   ```

6. Inicie a aplicação:

   ```bash
   npm run dev
   ```

7. Abra o endereço local mostrado no terminal (normalmente `http://localhost:5173`).

## Verificação antes de publicar

```bash
npm test
npm run build
```

Os testes validam a função de validação do formulário. O build verifica a compilação de produção.

## Funcionalidades

- SPA com navegação por Vue Router: Início, Usuários, Detalhes e Sobre.
- Cadastro, listagem, edição, remoção e ativação/inativação de usuários.
- Formulário reutilizável com `v-model`, validação, `props`, `watch` e eventos (`$emit`).
- Estado global centralizado no Pinia (`state`, `getters` e `actions`).
- Consumo da API REST JSONPlaceholder via Axios, com `async/await`, `try/catch/finally`, loading e mensagem de erro.
- Persistência local no navegador por `localStorage`.
- Testes automatizados com Vitest.
- GitHub Actions para executar testes e build em push e pull request.

## Organização

```text
src/
  assets/       estilos globais
  components/   UserForm.vue e UserTable.vue
  router/       rotas da SPA
  services/     instância Axios
  stores/       estado global Pinia
  utils/        validação e teste
  views/        páginas da aplicação
docs/
  materiais-originais/  PDFs e arquivos JS fornecidos nas Aulas 1–10
```

## Relação com as aulas

| Aula | Conteúdo do material | Onde aparece no projeto |
|---|---|---|
| 1 | Vue 3, Vite, SPA, MVVM, estrutura e reatividade | `src/main.js`, `src/App.vue`, `vite.config.js`, Home |
| 2 | Interpolação, diretivas, `v-model`, `v-if`, `v-for`, `v-bind` | Formulário, tabela e estados vazios |
| 3 | Componentes, props e comunicação pai/filho | `UserForm.vue`, `UserTable.vue`, `UsersView.vue` |
| 4 | Eventos customizados, alternar status e remover | Eventos emitidos pela tabela e tratados na view |
| 5 | Computed, watch e edição | Getters Pinia, `watch` do formulário e fluxo de edição |
| 6 | Lifecycle hooks, loading e limpeza de recursos | Carregamento assíncrono da store; `mounted` nas views/componentes quando aplicável |
| 7 | Vue Router, rotas, parâmetros e navegação | `src/router/index.js`, views e rota `/usuarios/:id` |
| 8 | API REST, Axios, async/await e erros | `src/services/api.js` e `store.carregar()` |
| 9 | Pinia, state, getters e actions | `src/stores/userStore.js` |
| 10 | Mini projeto CRUD integrado | `UsersView`, `UserForm`, `UserTable`, `UserDetailView` |

## Observações importantes

- A API JSONPlaceholder é pública e demonstrativa. Ela permite consultar usuários e simula respostas de `POST`, `PUT` e `DELETE`, mas não grava essas alterações permanentemente no servidor.
- Para que o CRUD seja utilizável durante a demonstração, as alterações são mantidas no estado Pinia e persistidas no `localStorage` do navegador.
- Os materiais originais foram copiados para `docs/materiais-originais`. Eles são referências fornecidas no ZIP; o código executável consolidado está em `src/`.
- O projeto não declara integração com backend próprio, autenticação, banco de dados ou deploy já realizado.

## Publicar no GitHub

Crie um repositório público vazio no GitHub. No terminal do VS Code, dentro desta pasta, execute:

```bash
git init
git add .
git commit -m "Projeto integrado Vue.js - Aulas 1 a 10"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git
git push -u origin main
```

Substitua a URL pelo endereço do repositório que você criou. Depois, abra a aba **Actions** no GitHub e confira se o workflow **Vue CI** terminou com sucesso.

## Entrega ao professor

Envie o link público do repositório, por exemplo:

`https://github.com/SEU-USUARIO/SEU-REPOSITORIO`

Não envie o endereço local `localhost`. O repositório público permite ao professor consultar o código, os materiais e a execução do workflow. Para acessar a aplicação no navegador por um link público, é necessário configurar hospedagem (por exemplo, GitHub Pages); isso é separado da publicação do código.
