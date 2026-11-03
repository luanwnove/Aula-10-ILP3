<template>
  <section class="panel">
    <div class="panel-heading">
      <div>
        <p class="eyebrow">{{ usuarioEdicao ? 'EDIÇÃO' : 'CADASTRO' }}</p>
        <h2>{{ usuarioEdicao ? 'Editar usuário' : 'Novo usuário' }}</h2>
      </div>
      <span class="step-tag">{{ usuarioEdicao ? 'Atualizar' : 'Adicionar' }}</span>
    </div>

    <form class="form-grid" @submit.prevent="salvar">
      <label>
        Nome completo
        <input v-model.trim="form.name" type="text" placeholder="Ex.: Ana Silva" required maxlength="80" />
      </label>
      <label>
        E-mail
        <input v-model.trim="form.email" type="email" placeholder="ana@email.com" required maxlength="120" />
      </label>
      <p v-if="erro" class="message error full">{{ erro }}</p>
      <div class="form-actions full">
        <button class="button primary" type="submit">{{ usuarioEdicao ? 'Salvar alterações' : 'Cadastrar usuário' }}</button>
        <button v-if="usuarioEdicao" class="button ghost" type="button" @click="cancelar">Cancelar edição</button>
      </div>
    </form>
  </section>
</template>

<script>
import { validateUser } from '../utils/userValidation'

export default {
  name: 'UserForm',
  props: {
    usuarioEdicao: { type: Object, default: null }
  },
  emits: ['salvar', 'cancelar'],
  data() {
    return {
      form: { id: null, name: '', email: '' },
      erro: ''
    }
  },
  watch: {
    usuarioEdicao: {
      immediate: true,
      handler(user) {
        this.form = user
          ? { id: user.id, name: user.name, email: user.email }
          : { id: null, name: '', email: '' }
        this.erro = ''
      }
    }
  },
  methods: {
    salvar() {
      this.erro = validateUser(this.form)
      if (this.erro) return
      this.$emit('salvar', { ...this.form })
      if (!this.usuarioEdicao) this.form = { id: null, name: '', email: '' }
    },
    cancelar() {
      this.$emit('cancelar')
    }
  }
}
</script>