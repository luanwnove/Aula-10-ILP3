<template>
  <section class="panel">
    <div class="panel-heading">
      <div>
        <p class="eyebrow">REGISTROS</p>
        <h2>Usuários cadastrados</h2>
      </div>
      <span class="count-pill">{{ usuarios.length }} registro(s)</span>
    </div>

    <div v-if="usuarios.length === 0" class="empty-state">
      <span class="empty-icon">◎</span>
      <strong>Nenhum usuário cadastrado</strong>
      <p>Use o formulário acima para adicionar o primeiro registro.</p>
    </div>

    <div v-else class="table-wrap">
      <table>
        <thead>
          <tr><th>Usuário</th><th>Status</th><th class="actions-col">Ações</th></tr>
        </thead>
        <tbody>
          <tr v-for="user in usuarios" :key="user.id">
            <td>
              <div class="user-cell">
                <span class="avatar">{{ iniciais(user.name) }}</span>
                <span><strong>{{ user.name }}</strong><small>{{ user.email }}</small></span>
              </div>
            </td>
            <td><span class="status" :class="user.ativo === false ? 'inactive' : 'active'">{{ user.ativo === false ? 'Inativo' : 'Ativo' }}</span></td>
            <td>
              <div class="row-actions">
                <button class="text-button" @click="$emit('detalhes', user.id)">Detalhes</button>
                <button class="text-button" @click="$emit('editar', user)">Editar</button>
                <button class="text-button danger-text" @click="$emit('remover', user.id)">Excluir</button>
                <button class="text-button" @click="$emit('alternar-status', user.id)">{{ user.ativo === false ? 'Ativar' : 'Inativar' }}</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script>
export default {
  name: 'UserTable',
  props: {
    usuarios: { type: Array, required: true }
  },
  emits: ['detalhes', 'editar', 'remover', 'alternar-status'],
  methods: {
    iniciais(name) {
      return String(name || '?').split(' ').filter(Boolean).slice(0, 2).map(part => part[0].toUpperCase()).join('')
    }
  }
}
</script>