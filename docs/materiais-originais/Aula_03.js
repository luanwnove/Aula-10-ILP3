<template>
  <main class="container">
    <h1>ILP3 — Vue.js Aula 3</h1>

    <!-- Componente filho recebendo função e dados -->
    <UserForm @salvar="adicionarUsuario" />

    <!-- Passagem de dados do pai para o filho via props -->
    <UserList :usuarios="usuarios" />
  </main>
</template>

<script>
// Importa os componentes filhos
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
    adicionarUsuario(dadosUsuario) {
      // Recebe dados do filho e atualiza o estado
      this.usuarios.push({
        id: this.proximoId++,
        ...dadosUsuario
      })
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 900px;
  margin: 40px auto;
  font-family: Arial, sans-serif;
}
</style>


_

<template>
  <section class="card">
    <h2>Cadastro de Usuário</h2>

    <input
      v-model="nome"
      type="text"
      placeholder="Nome"
    />

    <input
      v-model="email"
      type="email"
      placeholder="Email"
    />

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
      // Emite evento para o componente pai
      this.$emit('salvar', {
        nome: this.nome,
        email: this.email,
        ativo: true
      })

      // Limpa o formulário
      this.nome = ''
      this.email = ''
    }
  }
}
</script>

<style scoped>
.card {
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
}

input {
  display: block;
  width: 100%;
  margin-bottom: 10px;
  padding: 8px;
}
</style>

_

<template>
  <section class="card">
    <h2>Usuários</h2>

    <!-- Renderização condicional -->
    <p v-if="usuarios.length === 0">
      Nenhum usuário cadastrado.
    </p>

    <ul v-else>
      <!-- Passa cada usuário como prop para outro componente -->
      <UserItem
        v-for="usuario in usuarios"
        :key="usuario.id"
        :usuario="usuario"
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

  // Props recebidas do pai (App.vue)
  props: {
    usuarios: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.card {
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 10px;
}
</style>

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
  </li>
</template>

<script>
export default {
  name: 'UserItem',

  // Tipagem e validação de props
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
  margin-bottom: 8px;
}

.status {
  margin-left: 10px;
  padding: 2px 6px;
  border-radius: 6px;
  background: #ccc;
  font-size: 12px;
}

.status.ativo {
  background: #4caf50;
  color: white;
}
</style>

_

props: {
  usuario: {
    type: Object,
    required: true
  }
}

_

<UserList :usuarios="usuarios" />


_

props: {
  total: Number
}
