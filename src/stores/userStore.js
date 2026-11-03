
import { defineStore } from 'pinia'
import api from '../services/api'

const STORAGE_KEY = 'ilp3-usuarios-v1'

function readSavedUsers() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved ? JSON.parse(saved) : []
  } catch {
    return []
  }
}

function saveUsers(users) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(users))
  } catch (error) {
    console.warn('Não foi possível salvar os dados localmente:', error)
  }
}

export const useUserStore = defineStore('userStore', {
  state: () => ({
    usuarios: readSavedUsers(),
    loading: false,
    erro: '',
    carregado: false
  }),

  getters: {
    total: state => state.usuarios.length,
    ativos: state => state.usuarios.filter(user => user.ativo !== false).length,
    inativos: state => state.usuarios.filter(user => user.ativo === false).length,
    porId: state => id => state.usuarios.find(user => user.id === Number(id))
  },

  actions: {
    persistir() {
      saveUsers(this.usuarios)
    },

    async carregar(force = false) {
      if (this.loading || (this.carregado && !force)) return
      this.loading = true
      this.erro = ''

      try {
        if (this.usuarios.length === 0 || force) {
          const response = await api.get('/users')
          this.usuarios = response.data.map(user => ({
            ...user,
            ativo: true
          }))
          this.persistir()
        }
        this.carregado = true
      } catch {
        this.erro = 'Não foi possível carregar os usuários da API. Verifique a conexão e tente novamente.'
      } finally {
        this.loading = false
      }
    },

    async adicionar(dados) {
      const novo = {
        ...dados,
        id: Date.now(),
        ativo: true
      }

      try {
        await api.post('/users', novo)
      } catch {
        // Mantém o cadastro local se a API estiver indisponível.
      }

      this.usuarios.unshift(novo)
      this.persistir()
      return novo
    },

    async atualizar(usuarioAtualizado) {
      const index = this.usuarios.findIndex(
        user => user.id === Number(usuarioAtualizado.id)
      )

      if (index === -1) return false

      try {
        await api.put(
          `/users/${usuarioAtualizado.id}`,
          usuarioAtualizado
        )
      } catch {
        // Mantém a alteração local.
      }

      this.usuarios[index] = { ...usuarioAtualizado }
      this.persistir()
      return true
    },

    async remover(id) {
      try {
        await api.delete(`/users/${id}`)
      } catch {
        // Mantém a remoção local.
      }

      this.usuarios = this.usuarios.filter(
        user => user.id !== Number(id)
      )
      this.persistir()
    },

    alternarStatus(id) {
      const user = this.porId(id)
      if (!user) return

      user.ativo = user.ativo === false
      this.persistir()
    }
  }
})
