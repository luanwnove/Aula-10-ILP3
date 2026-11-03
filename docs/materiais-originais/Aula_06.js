<template>
  <main class="container">
    <h1>ILP3 — Vue.js Aula 6</h1>

    <button @click="mostrar = !mostrar">
      {{ mostrar ? 'Desmontar' : 'Montar' }} Componente
    </button>

    <!-- Montagem condicional -->
    <UserDashboard v-if="mostrar" />
  </main>
</template>

<script>
import UserDashboard from './components/UserDashboard.vue'

export default {
  name: 'App',

  components: { UserDashboard },

  data() {
    return {
      mostrar: true
    }
  }
}
</script>

_

<template>
  <section class="card">
    <h2>Dashboard de Usuários</h2>

    <!-- Simulação de carregamento -->
    <p v-if="loading">Carregando dados...</p>

    <ul v-else>
      <li v-for="usuario in usuarios" :key="usuario.id">
        {{ usuario.nome }}
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'UserDashboard',

  data() {
    return {
      usuarios: [],
      loading: true,
      timer: null
    }
  },

  /* ======================
     LIFECYCLE HOOKS
     ====================== */

  created() {
    console.log('[created] Componente criado')
  },

  mounted() {
    console.log('[mounted] Componente montado no DOM')

    // Simula chamada de API com delay
    this.timer = setTimeout(() => {
      this.usuarios = [
        { id: 1, nome: 'Ana' },
        { id: 2, nome: 'Bruno' },
        { id: 3, nome: 'Carlos' }
      ]
      this.loading = false
      console.log('[mounted] Dados carregados')
    }, 2000)
  },

  updated() {
    console.log('[updated] Componente atualizado')
  },

  unmounted() {
    console.log('[unmounted] Componente desmontado')

    // Limpeza para evitar memory leak
    if (this.timer) {
      clearTimeout(this.timer)
    }
  }
}
</script>

<style scoped>
.card {
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 10px;
  margin-top: 20px;
}
</style>

_

updated() {
  this.atualizacoes++
}
