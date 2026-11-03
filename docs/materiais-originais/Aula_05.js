<template>
  <main class="container">
    <h1>ILP3 — Vue.js Aula 5</h1>

    <!-- Dados derivados via computed -->
    <p>
      Total de usuários: <strong>{{ totalUsuarios }}</strong> |
      Ativos: <strong>{{ usuariosAtivos }}</strong> |
      Inativos: <strong>{{ usuariosInativos }}</strong>
    </p>

    <UserForm
      @salvar="adicionarUsuario"
      :modo-edicao="modoEdicao"
      :usuario-edicao="usuarioEdicao"
    />

    <UserList
      :usuarios="usuarios"
      @alternar-status="alternarStatus"
      @remover="removerUsuario"
      @editar="editarUsuario"
    />
  </main>
</template>

<script>
import UserForm from './components/UserForm.vue'
import UserList from './components/UserList.vue'

export default {
  name: 'App',

  components: { UserForm, UserList },

  data() {
    return {
      usuarios: [],
      proximoId: 1,

      // Controle de edição
      modoEdicao: false,
      usuarioEdicao: null
    }
  },

  /* ======================
     COMPUTED PROPERTIES
     ====================== */
  computed: {
    totalUsuarios() {
      return this.usuarios.length
    },

    usuariosAtivos() {
      return this.usuarios.filter(u => u.ativo).length
    },

    usuariosInativos() {
      return this.usuarios.filter(u => !u.ativo).length
    }
  },

  methods: {
    adicionarUsuario(dados) {
      // Atualiza ou cria usuário
      if (this.modoEdicao && this.usuarioEdicao) {
        Object.assign(this.usuarioEdicao, dados)
        this.modoEdicao = false
        this.usuarioEdicao = null
        return
      }

      this.usuarios.push({
        id: this.proximoId++,
        ...dados
      })
    },

    alternarStatus(id) {
      const usuario = this.usuarios.find(u => u.id === id)
      if (usuario) usuario.ativo = !usuario.ativo
    },

    removerUsuario(id) {
      this.usuarios = this.usuarios.filter(u => u.id !== id)
    },

    editarUsuario(usuario) {
      this.modoEdicao = true
      this.usuarioEdicao = usuario
    }
  }
}
</script>


_

<template>
  <section class="card">
    <h2>{{ modoEdicao ? 'Editar Usuário' : 'Novo Usuário' }}</h2>

    <input v-model="nome" placeholder="Nome" />
    <input v-model="email" placeholder="Email" />

    <button @click="salvar">
      {{ modoEdicao ? 'Atualizar' : 'Salvar' }}
    </button>

    <!-- Feedback reativo -->
    <p v-if="mensagem" class="info">{{ mensagem }}</p>
  </section>
</template>

<script>
export default {
  name: 'UserForm',

  props: {
    modoEdicao: Boolean,
    usuarioEdicao: Object
  },

  data() {
    return {
      nome: '',
      email: '',
      mensagem: ''
    }
  },

  /* ======================
     WATCHERS
     ====================== */
  watch: {
    // Observa mudança no usuário em edição
    usuarioEdicao: {
      immediate: true,
      handler(usuario) {
        if (usuario) {
          this.nome = usuario.nome
          this.email = usuario.email
        }
      }
    },

    // Observa o campo nome
    nome(novoValor) {
      this.mensagem = novoValor.length < 3
        ? 'Nome muito curto'
        : ''
    }
  },

  methods: {
    salvar() {
      this.$emit('salvar', {
        nome: this.nome,
        email: this.email,
        ativo: true
      })

      this.nome = ''
      this.email = ''
      this.mensagem = ''
    }
  }
}
</script>

<style scoped>
.info {
  margin-top: 10px;
  color: #f57c00;
}
</style>

_

usuariosAtivos() {
  return this.usuarios.filter(u => u.ativo).length
}

_

watch: {
  nome(valor) {
    if (valor.length < 3) ...
  }
}

_

watch: {
  usuarios(novaLista) {
    if (novaLista.length > 5) {
      alert('Muitos usuários cadastrados!')
    }
  }
}
