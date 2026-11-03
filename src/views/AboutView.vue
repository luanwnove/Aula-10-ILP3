<template>
  <section>
    <div class="view-heading"><div><p class="eyebrow">DOCUMENTAÇÃO</p><h1>Sobre o projeto</h1></div></div>
    <article class="panel prose">
      <h2>Mini Projeto Vue.js — Aulas 1 a 10</h2>
      <p>Aplicação didática de gerenciamento de usuários, estruturada para reunir os conteúdos apresentados ao longo do módulo.</p>
      <h3>Arquitetura utilizada</h3>
      <ul>
        <li><strong>Views:</strong> páginas associadas às rotas.</li>
        <li><strong>Components:</strong> interface reutilizável e comunicação por props e eventos.</li>
        <li><strong>Stores:</strong> estado global e regras de gerenciamento com Pinia.</li>
        <li><strong>Router:</strong> navegação SPA e parâmetros de URL.</li>
        <li><strong>Services:</strong> comunicação HTTP centralizada com Axios.</li>
      </ul>
      <h3>Fonte de dados e persistência</h3>
      <p>A aplicação consulta a API pública JSONPlaceholder. Essa API é demonstrativa: operações POST, PUT e DELETE simulam respostas e não persistem no servidor. Para que os registros criados e alterados permaneçam disponíveis neste navegador, o estado também é salvo no localStorage.</p>
      <h3>Como executar</h3>
      <pre>npm install
npm run dev</pre>
      <p>Os materiais originais das aulas estão na pasta <code>docs/materiais-originais</code>.</p>
    </article>
  </section>
</template>

<script>
export default { name: 'AboutView' }
</script>