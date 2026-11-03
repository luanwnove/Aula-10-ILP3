npm install pinia

_

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

const app = createApp(App)

// cria a instância do Pinia
const pinia = createPinia()

app
  .use(pinia)   // registra Pinia
  .use(router)
  .mount('#app')

_

import { defineStore } from 'pinia'
import api from '../services/api'

export const useUserStore = defineStore('userStore', {
  // ======================
  // STATE (dados globais)
  // ======================
  state: () => ({
    usuarios: [],
    loading: false,
    erro: ''
  }),

  // ======================
  // GETTERS (derivados)
  // ======================
  getters: {
    totalUsuarios: (state) => state.usuarios.length,

    usuarioPorId: (state) => {
      return (id) => state.usuarios.find(u => u.id === Number(id))
    }
  },

  // ======================
  // ACTIONS (lógica)
  // ======================
  actions: {
    async carregarUsuarios() {
      this.loading = true
      this.erro = ''

      try {
        const response = await api.get('/users')
        this.usuarios = response.data
      } catch (e) {
        this.erro = 'Erro ao carregar usuários.'
      } finally {
        this.loading = false
      }
    }
  }
})

_

<template>
  <section>
    <h2>Usuários</h2>

    <p>Total: {{ userStore.totalUsuarios }}</p>

    <p v-if="userStore.loading">Carregando...</p>
    <p v-else-if="userStore.erro" class="error">
      {{ userStore.erro }}
    </p>

    <ul v-else>
      <li v-for="u in userStore.usuarios" :key="u.id">
        {{ u.name }}
        <router-link :to="`/usuarios/${u.id}`">
          Detalhes
        </router-link>
      </li>
    </ul>

    <button @click="userStore.carregarUsuarios">
      Recarregar
    </button>
  </section>
</template>

<script>
import { useUserStore } from '../stores/userStore'

export default {
  name: 'UsersView',

  setup() {
    // acesso à store
    const userStore = useUserStore()

    // carrega dados ao entrar na página
    if (userStore.usuarios.length === 0) {
      userStore.carregarUsuarios()
    }

    return { userStore }
  }
}
</script>

<style scoped>
.error {
  color: #c62828;
}
</style>

_

<template>
  <section>
    <h2>Detalhes do Usuário</h2>

    <p v-if="!usuario">Usuário não encontrado.</p>

    <div v-else>
      <p><strong>Nome:</strong> {{ usuario.name }}</p>
      <p><strong>Email:</strong> {{ usuario.email }}</p>
      <p><strong>Telefone:</strong> {{ usuario.phone }}</p>
    </div>
  </section>
</template>

<script>
import { useUserStore } from '../stores/userStore'

export default {
  name: 'UserDetailView',

  props: ['id'],

  setup(props) {
    const store = useUserStore()

    const usuario = store.usuarioPorId(props.id)

    return { usuario }
  }
}
</script>

_

data() {
  return { usuarios: [] }
}

_

const userStore = useUserStore()
