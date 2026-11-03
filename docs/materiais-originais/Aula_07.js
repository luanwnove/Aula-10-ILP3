npm install vue-router@4

_

import { createRouter, createWebHistory } from 'vue-router'

// Importa as páginas (views)
import HomeView from '../views/HomeView.vue'
import UsersView from '../views/UsersView.vue'
import UserDetailView from '../views/UserDetailView.vue'

// Define as rotas da aplicação
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/usuarios',
    name: 'usuarios',
    component: UsersView
  },
  {
    path: '/usuarios/:id',
    name: 'usuario-detalhe',
    component: UserDetailView,
    props: true // permite receber params como props
  }
]

// Cria o router
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

_

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App)
  .use(router) // registra o Vue Router
  .mount('#app')

_

<template>
  <div class="container">
    <header>
      <h1>ILP3 — Vue Router</h1>

      <!-- Navegação declarativa -->
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/usuarios">Usuários</router-link>
      </nav>
    </header>

    <!-- Aqui o Vue Router renderiza a página atual -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
nav {
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
}

.router-link-active {
  font-weight: bold;
  text-decoration: underline;
}
</style>

_

<template>
  <section>
    <h2>Home</h2>
    <p>Bem-vindo à aplicação Vue com múltiplas páginas.</p>
    <p>Use o menu para navegar.</p>
  </section>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>

_

<template>
  <section>
    <h2>Lista de Usuários</h2>

    <ul>
      <li v-for="usuario in usuarios" :key="usuario.id">
        {{ usuario.nome }}

        <!-- Link dinâmico com parâmetro -->
        <router-link
          :to="`/usuarios/${usuario.id}`"
        >
          Ver detalhes
        </router-link>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'UsersView',

  data() {
    return {
      usuarios: [
        { id: 1, nome: 'Ana' },
        { id: 2, nome: 'Bruno' },
        { id: 3, nome: 'Carlos' }
      ]
    }
  }
}
</script>

_

<template>
  <section>
    <h2>Detalhes do Usuário</h2>

    <p><strong>ID:</strong> {{ id }}</p>
    <p><strong>Nome:</strong> {{ usuario.nome }}</p>

    <!-- Navegação programática -->
    <button @click="voltar">
      Voltar
    </button>
  </section>
</template>

<script>
export default {
  name: 'UserDetailView',

  // Recebe o parâmetro como prop (configurado no router)
  props: ['id'],

  data() {
    return {
      usuario: {}
    }
  },

  mounted() {
    // Simula busca por ID (API fake)
    const dados = {
      1: { nome: 'Ana' },
      2: { nome: 'Bruno' },
      3: { nome: 'Carlos' }
    }

    this.usuario = dados[this.id]
  },

  methods: {
    voltar() {
      // Navegação programática
      this.$router.push('/usuarios')
    }
  }
}
</script>

_

path: '/usuarios/:id'

_

{
  path: '/:pathMatch(.*)*',
  component: NotFoundView
}
