# Consolidação das Aulas 1 a 10

Este documento registra a correspondência entre os materiais originais e a implementação integrada. A aplicação não substitui eventuais instruções adicionais dadas oralmente pelo professor.

## Aulas 1 e 2 — Fundamentos e template

O projeto usa Vue 3 com Vite. `main.js` cria e monta a aplicação, `App.vue` é o componente raiz e os templates usam interpolação, diretivas, binding, formulários reativos e renderização de listas/condições.

## Aulas 3, 4 e 5 — Componentização e reatividade

`UserForm.vue` e `UserTable.vue` são componentes reutilizáveis. A view passa dados por props e recebe eventos por `emits`. A tabela permite editar, excluir e alternar o status. O formulário observa `usuarioEdicao` por `watch`. Os totais são derivados por getters Pinia.

## Aula 6 — Ciclo de vida

O carregamento de usuários é assíncrono e apresenta estado de carregamento. O ciclo de vida de componentes Vue é gerenciado pelo framework; a aplicação não mantém timers artificiais permanentes, pois a necessidade central do mini projeto é o carregamento da API.

## Aulas 7 e 8 — Navegação e API

Vue Router define as rotas `/`, `/usuarios`, `/usuarios/:id` e `/sobre`. Axios é centralizado em `services/api.js`. A store chama a API com `async/await` e trata falhas com mensagens adequadas.

## Aula 9 — Estado global

Pinia centraliza a lista, os estados de carregamento e erro, getters e ações. As views não mantêm cópias independentes da lista.

## Aula 10 — Mini projeto

O CRUD inclui:
- Create: cadastro pelo formulário.
- Read: listagem e página de detalhes.
- Update: edição pelo formulário reutilizável.
- Delete: remoção com confirmação.
- Navegação SPA com Vue Router.
- Estado global com Pinia.
- API REST de demonstração via Axios.

## Limitações explícitas

JSONPlaceholder não persiste operações de escrita no servidor. A aplicação persiste localmente no navegador. Não há backend próprio nem banco de dados. A hospedagem pública precisa ser configurada após publicar o repositório.
