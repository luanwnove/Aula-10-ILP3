<template>
  <div class="app-shell">
    <header class="topbar">
      <RouterLink class="brand" to="/">
        <span class="brand-mark">ILP3</span>
        <span>Gestão de Usuários</span>
      </RouterLink>
      <nav aria-label="Navegação principal">
        <RouterLink to="/">Início</RouterLink>
        <RouterLink to="/usuarios">Usuários</RouterLink>
        <RouterLink to="/sobre">Sobre</RouterLink>
      </nav>
    </header>
    <main class="page">
      <RouterView />
    </main>
    <footer class="footer">Projeto didático — Vue 3, Vite, Vue Router, Pinia e Axios · Aulas 1–10</footer>
  </div>
</template>