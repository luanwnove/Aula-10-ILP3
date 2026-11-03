<template>
  <section>
    <RouterLink class="back-link" to="/usuarios">← Voltar para usuários</RouterLink>
    <div v-if="usuario" class="detail-card">
      <div class="detail-avatar">{{ iniciais }}</div>
      <p class="eyebrow">DETALHES DO REGISTRO</p>
      <h1>{{ usuario.name }}</h1>
      <p class="muted">{{ usuario.email }}</p>
      <span class="status" :class="usuario.ativo === false ? 'inactive' : 'active'">{{ usuario.ativo === false ? 'Inativo' : 'Ativo' }}</span>
      <dl class="detail-list">
        <div><dt>ID</dt><dd>{{ usuario.id }}</dd></div>
        <div><dt>Telefone</dt><dd>{{ usuario.phone || 'Não informado' }}</dd></div>
        <div><dt>Website</dt><dd>{{ usuario.website || 'Não informado' }}</dd></div>
        <div><dt>Empresa</dt><dd>{{ usuario.company?.name || 'Não informada' }}</dd></div>
      </dl>
      <button class="button primary" @click="$router.push('/usuarios')">Voltar à listagem</button>
    </div>
    <div v-else class="panel empty-state"><strong>Usuário não encontrado.</strong><p>O registro pode ter sido removido ou o endereço é inválido.</p><RouterLink class="button primary" to="/usuarios">Ver usuários</RouterLink></div>
  </section>
</template>

<script>
import { useUserStore } from '../stores/userStore'

export default {
  name: 'UserDetailView',
  props: { id: { type: String, required: true } },
  computed: {
    usuario() {
      return useUserStore().porId(this.id)
    },
    iniciais() {
      return String(this.usuario?.name || '?').split(' ').filter(Boolean).slice(0, 2).map(p => p[0].toUpperCase()).join('')
    }
  }
}
</script>