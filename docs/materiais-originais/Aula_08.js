https://jsonplaceholder.typicode.com/users

_

npm install axios

_

import axios from 'axios'

// Cria uma instância do Axios
const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 5000 // evita requisições travadas
})

// Interceptor simples (opcional)
api.interceptors.response.use(
  response => response,
  error => {
    console.error('Erro na API:', error)
    return Promise.reject(error)
  }
)

export default api

_

<template>
  <section>
    <h2>Usuários (API Externa)</h2>

    <!-- Loading -->
    <p v-if="loading">Carregando usuários...</p>

    <!-- Erro -->
    <p v-else-if="erro" class="error">
      {{ erro }}
    </p>

    <!-- Lista -->
    <ul v-else>
      <li v-for="user in usuarios" :key="user.id">
        <strong>{{ user.name }}</strong>
        — {{ user.email }}
      </li>
    </ul>
  </section>
</template>

<script>
import api from '../services/api'

export default {
  name: 'UsersView',

  data() {
    return {
      usuarios: [],
      loading: false,
      erro: ''
    }
  },

  async mounted() {
    // Hook ideal para carregar dados visuais
    this.loading = true

    try {
      const response = await api.get('/users')
      this.usuarios = response.data
    } catch (error) {
      this.erro = 'Erro ao carregar usuários. Tente novamente.'
    } finally {
      this.loading = false
    }
  }
}
</script>

<style scoped>
.error {
  color: #c62828;
}
</style>

_


const response = await api.get('/users')

_

try { ... } catch { ... } finally { ... }

_

if (error.response?.status === 404) {
  this.erro = 'Recurso não encontrado.'
}
