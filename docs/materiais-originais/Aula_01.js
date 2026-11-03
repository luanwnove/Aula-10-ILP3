node -v
npm -v

_

npm create vite@latest ilp3-vue-aula1 -- --template vue

_

cd ilp3-vue-aula1
npm install

_

npm run dev

_

{
  "scripts": {
    "dev": "vite",        // Sobe ambiente local de desenvolvimento
    "build": "vite build",// Gera build para produção
    "preview": "vite preview" // Prévia do build local
  }
}

_

// Importa a função createApp do Vue.
// createApp cria a "instância" da aplicação Vue.
import { createApp } from 'vue'

// Importa o componente raiz (App.vue).
// Esse App é o "topo" da árvore de componentes.
import App from './App.vue'

// Cria a aplicação Vue a partir do componente App
// e monta (renderiza) dentro do elemento #app do index.html.
createApp(App).mount('#app')

_


<!doctype html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>ILP3 - Vue Aula 1</title>
  </head>
  <body>
    <!--
      Este é o "container" onde o Vue vai inserir a aplicação.
      Repare que o main.js faz mount('#app').
    -->
    <div id="app"></div>

    <!--
      Importa o ponto de entrada do projeto.
      type="module" permite usar import/export (ES Modules).
    -->
    <script type="module" src="/src/main.js"></script>
  </body>
</html>

_

<template>
  <!--
    TEMPLATE (VIEW):
    Aqui é o HTML que será renderizado.
    No Vue, você pode interpolar dados com {{ }}.
  -->
  <main class="container">
    <h1>{{ titulo }}</h1>

    <p>
      Este contador demonstra a reatividade do Vue:
      quando <strong>contador</strong> muda, a UI atualiza automaticamente.
    </p>

    <section class="card">
      <button @click="decrementar">-</button>

      <!-- Interpolação do estado -->
      <span class="counter">{{ contador }}</span>

      <button @click="incrementar">+</button>
    </section>

    <p class="hint">
      Dica: abra o DevTools do navegador e veja o Hot Reload do Vite funcionando.
    </p>
  </main>
</template>

<script>
// SCRIPT (VIEWMODEL):
// Aqui vive a lógica do componente.
// Nesta primeira aula, vamos usar a Options API (mais didática para começar).
export default {
  name: 'App',

  // data() define o estado reativo do componente
  data() {
    return {
      titulo: 'ILP3 — Vue.js Aula 1 (Vite + Vue 3)',
      contador: 0
    }
  },

  // methods define funções que podem ser chamadas por eventos no template
  methods: {
    incrementar() {
      // altera o estado (contador)
      // Vue detecta a mudança e atualiza a interface automaticamente
      this.contador++
    },
    decrementar() {
      this.contador--
    }
  }
}
</script>

<style scoped>
/*
  scoped:
  garante que este CSS afete apenas este componente (App.vue),
  evitando "vazar" estilos para outros componentes.
*/
.container {
  font-family: Arial, sans-serif;
  max-width: 820px;
  margin: 40px auto;
  padding: 20px;
}

.card {
  display: flex;
  gap: 16px;
  align-items: center;
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 10px;
  width: fit-content;
}

button {
  width: 44px;
  height: 44px;
  font-size: 18px;
  cursor: pointer;
}

.counter {
  min-width: 40px;
  text-align: center;
  font-size: 20px;
}

.hint {
  margin-top: 20px;
  color: #555;
}
</style>

_

<input
  v-model="nome"
  placeholder="Digite seu nome..."
/>
<p>Olá, {{ nome }}</p>

_

nome: ''

_

