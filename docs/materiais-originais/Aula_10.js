import { defineStore } from 'pinia'
import api from '../services/api'

export const useUserStore = defineStore('userStore', {
  state: () => ({
    usuarios: [],
    loading: false,
    erro: ''
  }),

  getters: {
    total: (state) => state.usuarios.length,
    porId: (state) => (id) =>
      state.usuarios.find(u => u.id === Number(id))
  },

  actions: {
    async carregar() {
      this.loading = true
      try {
        const res = await api.get('/users')
        this.usuarios = res.data
      } catch {
        this.erro = 'Erro ao carregar usuários'
      } finally {
        this.loading = false
      }
    },

    adicionar(usuario) {
      this.usuarios.push({
        id: Date.now(),
        ...usuario
      })
    },

    atualizar(usuarioAtualizado) {
      const index = this.usuarios.findIndex(u => u.id === usuarioAtualizado.id)
      if (index !== -1) this.usuarios[index] = usuarioAtualizado
    },

    remover(id) {
      this.usuarios = this.usuarios.filter(u => u.id !== id)
    }
  }
})

_

<template>
  <section>
    <h2>Usuários</h2>

    <p>Total: {{ store.total }}</p>

    <UserForm
      :usuario-edicao="usuarioEdicao"
      @salvar="salvar"
    />

    <UserTable
      :usuarios="store.usuarios"
      @editar="editar"
      @remover="store.remover"
    />
  </section>
</template>

<script>
import { useUserStore } from '../stores/userStore'
import UserForm from '../components/UserForm.vue'
import UserTable from '../components/UserTable.vue'

export default {
  components: { UserForm, UserTable },

  setup() {
    const store = useUserStore()
    store.carregar()

    return {
      store,
      usuarioEdicao: null
    }
  },

  methods: {
    salvar(usuario) {
      usuario.id
        ? this.store.atualizar(usuario)
        : this.store.adicionar(usuario)
      this.usuarioEdicao = null
    },
    editar(usuario) {
      this.usuarioEdicao = { ...usuario }
    }
  }
}
</script>

_

<template>
  <form @submit.prevent="salvar">
    <input v-model="form.name" placeholder="Nome" required />
    <input v-model="form.email" placeholder="Email" required />
    <button>Salvar</button>
  </form>
</template>

<script>
export default {
  props: { usuarioEdicao: Object },

  data() {
    return {
      form: { id: null, name: '', email: '' }
    }
  },

  watch: {
    usuarioEdicao: {
      immediate: true,
      handler(u) {
        if (u) this.form = { ...u }
      }
    }
  },

  methods: {
    salvar() {
      this.$emit('salvar', { ...this.form })
      this.form = { id: null, name: '', email: '' }
    }
  }
}
</script>

_

<template>
  <table>
    <tr v-for="u in usuarios" :key="u.id">
      <td>{{ u.name }}</td>
      <td>{{ u.email }}</td>
      <td>
        <button @click="$emit('editar', u)">Editar</button>
        <button @click="$emit('remover', u.id)">Excluir</button>
      </td>
    </tr>
  </table>
</template>

<script>
export default {
  props: {
    usuarios: {
      type: Array,
      required: true
    }
  }
}
</script>

_

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UsersView from '../views/UsersView.vue'
import UserDetailView from '../views/UserDetailView.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomeView },
    { path: '/usuarios', component: UsersView },
    { path: '/usuarios/:id', component: UserDetailView, props: true }
  ]
})

_

