<template>
  <section>
    <div class="hero">
      <div>
        <p class="eyebrow">PROJETO INTEGRADOR · ILP3</p>
        <h1>Um lugar simples para <span>gerenciar usuários.</span></h1>
        <p class="hero-copy">Mini aplicação SPA construída progressivamente com os conceitos das Aulas 1 a 10 de Vue.js.</p>
        <RouterLink class="button primary" to="/usuarios">Acessar gerenciamento <span aria-hidden="true">→</span></RouterLink>
      </div>
      <div class="hero-visual" aria-hidden="true">
        <div class="visual-card"><span class="visual-dot"></span><span class="visual-line long"></span><span class="visual-line"></span><div class="visual-bars"><i></i><i></i><i></i><i></i><i></i></div></div>
        <div class="visual-badge">Vue 3 <b>+</b> Pinia</div>
      </div>
    </div>

    <div class="section-heading"><div><p class="eyebrow">VISÃO GERAL</p><h2>O que foi consolidado</h2></div></div>
    <div class="feature-grid">
      <article class="feature-card"><span class="feature-number">01</span><h3>Interface reativa</h3><p>Componentes, formulários, diretivas e ciclo de vida.</p></article>
      <article class="feature-card"><span class="feature-number">02</span><h3>Navegação SPA</h3><p>Rotas, parâmetros e navegação sem recarregar a página.</p></article>
      <article class="feature-card"><span class="feature-number">03</span><h3>Dados integrados</h3><p>Axios para API REST e Pinia para estado compartilhado.</p></article>
      <article class="feature-card"><span class="feature-number">04</span><h3>CRUD completo</h3><p>Cadastro, listagem, edição, remoção e detalhes.</p></article>
    </div>
  </section>
</template>

<script>
export default { name: 'HomeView' }
</script>