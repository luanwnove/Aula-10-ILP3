<template>
  <main class="container">
    <h1>ILP3 — Vue.js Aula 4</h1>

    <UserForm @salvar="adicionarUsuario" />

    <!-- Escuta eventos vindos da lista -->
    <UserList
      :usuarios="usuarios"
      @alternar-status="alternarStatus"
      @remover="removerUsuario"
    />
  </main>
</template>

<script>
import UserForm from './components/UserForm.vue'
import UserList from './components/UserList.vue'

export default {
  name: 'App',

  components: {
    UserForm,
    UserList
  },

  data() {
    return {
      usuarios: [],
      proximoId: 1
    }
  },

  methods: {
    adicionarUsuario(dados) {
      this.usuarios.push({
        id: this.proximoId++,
        ...dados
      })
    },

    alternarStatus(id) {
      const usuario = this.usuarios.find(u => u.id === id)
      if (usuario) {
        usuario.ativo = !usuario.ativo
      }
    },

    removerUsuario(id) {
      this.usuarios = this.usuarios.filter(u => u.id !== id)
    }
  }
}
</script>

_

<template>
  <section class="card">
    <h2>Novo Usuário</h2>

    <input v-model="nome" placeholder="Nome" />
    <input v-model="email" placeholder="Email" />

    <!-- Evento nativo do botão -->
    <button @click="salvar">
      Salvar
    </button>
  </section>
</template>

<script>
export default {
  name: 'UserForm',

  data() {
    return {
      nome: '',
      email: ''
    }
  },

  methods: {
    salvar() {
      // Emissão de evento customizado
      this.$emit('salvar', {
        nome: this.nome,
        email: this.email,
        ativo: true
      })

      this.nome = ''
      this.email = ''
    }
  }
}
</script>

_

<template>
  <section class="card">
    <h2>Usuários</h2>

    <p v-if="usuarios.length === 0">
      Nenhum usuário cadastrado.
    </p>

    <ul v-else>
      <UserItem
        v-for="usuario in usuarios"
        :key="usuario.id"
        :usuario="usuario"

        <!-- Escuta eventos do item -->
        @alternar-status="$emit('alternar-status', usuario.id)"
        @remover="$emit('remover', usuario.id)"
      />
    </ul>
  </section>
</template>

<script>
import UserItem from './UserItem.vue'

export default {
  name: 'UserList',

  components: {
    UserItem
  },

  props: {
    usuarios: {
      type: Array,
      required: true
    }
  }
}
</script>

_

<template>
  <li class="item">
    <strong>{{ usuario.nome }}</strong>
    — {{ usuario.email }}

    <span
      class="status"
      :class="{ ativo: usuario.ativo }"
    >
      {{ usuario.ativo ? 'Ativo' : 'Inativo' }}
    </span>

    <!-- Eventos customizados -->
    <button @click="$emit('alternar-status')">
      {{ usuario.ativo ? 'Inativar' : 'Ativar' }}
    </button>

    <button @click="$emit('remover')">
      Remover
    </button>
  </li>
</template>

<script>
export default {
  name: 'UserItem',

  props: {
    usuario: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.item {
  margin-bottom: 10px;
}

.status {
  margin: 0 10px;
  padding: 3px 6px;
  border-radius: 6px;
  background: #ccc;
}

.status.ativo {
  background: #4caf50;
  color: white;
}
</style>


_

<button @click="salvar" />

_

this.$emit('alternar-status')

