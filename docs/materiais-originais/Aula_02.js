<template>
  <main class="container">
    <h1>ILP3 — Vue.js Aula 2</h1>

    <!-- ============================= -->
    <!-- FORMULÁRIO COM TWO-WAY BINDING -->
    <!-- ============================= -->
    <section class="card">
      <h2>Cadastro de Usuário</h2>

      <!-- v-model cria ligação direta input <-> estado -->
      <input
        v-model="form.nome"
        type="text"
        placeholder="Nome"
      />

      <input
        v-model="form.email"
        type="email"
        placeholder="Email"
      />

      <button
        @click="adicionarUsuario"
        :disabled="!form.nome || !form.email"
      >
        Adicionar
      </button>

      <!-- Renderização condicional -->
      <p v-if="erro" class="error">
        {{ erro }}
      </p>
    </section>

    <!-- ============================= -->
    <!-- LISTAGEM DINÂMICA -->
    <!-- ============================= -->
    <section class="card">
      <h2>Usuários Cadastrados</h2>

      <!-- Condição para lista vazia -->
      <p v-if="usuarios.length === 0">
        Nenhum usuário cadastrado.
      </p>

      <!-- v-for para lista dinâmica -->
      <ul v-else>
        <li
          v-for="usuario in usuarios"
          :key="usuario.id"
        >
          <strong>{{ usuario.nome }}</strong>
          — {{ usuario.email }}

          <!-- Exemplo de v-bind com classe dinâmica -->
          <span
            class="status"
            :class="{ ativo: usuario.ativo }"
          >
            {{ usuario.ativo ? 'Ativo' : 'Inativo' }}
          </span>
        </li>
      </ul>
    </section>

    <!-- ============================= -->
    <!-- CONTROLE CONDICIONAL -->
    <!-- ============================= -->
    <section class="card">
      <h2>Controle</h2>

      <button @click="alternarVisibilidade">
        {{ mostrarLista ? 'Ocultar' : 'Mostrar' }} Lista
      </button>

      <!-- v-if controla renderização do bloco -->
      <div v-if="mostrarLista" class="info">
        Total de usuários: {{ usuarios.length }}
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'App',

  data() {
    return {
      // Estado do formulário
      form: {
        nome: '',
        email: ''
      },

      // Lista dinâmica de usuários
      usuarios: [],

      // Controle de erro
      erro: '',

      // Controle de renderização
      mostrarLista: true,

      // Simples gerador de ID
      proximoId: 1
    }
  },

  methods: {
    adicionarUsuario() {
      // Validação simples
      if (!this.form.nome || !this.form.email) {
        this.erro = 'Preencha todos os campos.'
        return
      }

      // Adiciona novo usuário na lista
      this.usuarios.push({
        id: this.proximoId++,
        nome: this.form.nome,
        email: this.form.email,
        ativo: true
      })

      // Limpa formulário e erro
      this.form.nome = ''
      this.form.email = ''
      this.erro = ''
    },

    alternarVisibilidade() {
      this.mostrarLista = !this.mostrarLista
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

.card {
  border: 1px solid #ddd;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
}

input {
  display: block;
  margin-bottom: 10px;
  padding: 8px;
  width: 100%;
}

button {
  padding: 8px 14px;
  cursor: pointer;
}

.error {
  color: #c62828;
  margin-top: 10px;
}

ul {
  padding-left: 20px;
}

li {
  margin-bottom: 8px;
}

.status {
  margin-left: 10px;
  padding: 2px 6px;
  border-radius: 6px;
  font-size: 12px;
  background: #ccc;
}

.status.ativo {
  background: #4caf50;
  color: white;
}

.info {
  margin-top: 10px;
  font-weight: bold;
}
</style>

_

{{ usuario.nome }}
{{ usuarios.length }}

_

<input v-model="form.nome" />

_

<button @click="usuario.ativo = !usuario.ativo">
  {{ usuario.ativo ? 'Inativar' : 'Ativar' }}
</button>
