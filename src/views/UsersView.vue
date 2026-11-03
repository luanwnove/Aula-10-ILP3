<template>
  <section>
    <div class="view-heading">
      <div><p class="eyebrow">GERENCIAMENTO</p><h1>Usuários</h1><p class="muted">Cadastre, consulte, edite e remova registros.</p></div>
      <button class="button ghost" :disabled="store.loading" @click="store.carregar(true)">↻ Atualizar pela API</button>
    </div>

    <div class="stats-grid">
      <article class="stat-card"><span>Total de usuários</span><strong>{{ store.total }}</strong></article>
      <article class="stat-card"><span>Ativos</span><strong>{{ store.ativos }}</strong></article>
      <article class="stat-card"><span>Inativos</span><strong>{{ store.inativos }}</strong></article>
    </div>

    <p v-if="store.loading" class="message info">Carregando usuários...</p>
    <p v-if="store.erro" class="message error">{{ store.erro }} <button class="inline-button" @click="store.carregar(true)">Tentar novamente</button></p>

    <UserForm :usuario-edicao="usuarioEdicao" @salvar="salvar" @cancelar="usuarioEdicao = null" />
    <UserTable
      :usuarios="store.usuarios"
      @editar="editar"
      @remover="remover"
      @detalhes="abrirDetalhes"
      @alternar-status="store.alternarStatus"
    />
  </section>
</template>

<script>
import { useUserStore } from '../stores/userStore'
import UserForm from '../components/UserForm.vue'
import UserTable from '../components/UserTable.vue'

export default {
  name: 'UsersView',
  components: { UserForm, UserTable },
  data() {
    return { usuarioEdicao: null }
  },
  setup() {
    const store = useUserStore()
    store.carregar()
    return { store }
  },
  methods: {
    async salvar(usuario) {
      if (usuario.id) await this.store.atualizar(usuario)
      else await this.store.adicionar(usuario)
      this.usuarioEdicao = null
    },
    editar(usuario) {
      this.usuarioEdicao = { ...usuario }
      window.scrollTo({ top: 0, behavior: 'smooth' })
    },
    async remover(id) {
      const user = this.store.porId(id)
      if (user && window.confirm(`Deseja realmente excluir ${user.name}?`)) {
        await this.store.remover(id)
        if (this.usuarioEdicao?.id === id) this.usuarioEdicao = null
      }
    },
    abrirDetalhes(id) {
      this.$router.push({ name: 'usuario-detalhe', params: { id } })
    }
  }
}
</script>