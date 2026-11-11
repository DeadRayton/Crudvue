<template>
  <header>
    <nav>
      <router-link to="/">Usuarios</router-link> | 
      <router-link to="/posts">Publicaciones y Comentarios</router-link>
    </nav>
  </header>

  <main>
    <router-view/>
  </main>
</template>

<style scoped>
nav {
  padding: 1rem;
  background-color: #f4f4f4;
  margin-bottom: 2rem;
}
a {
  margin: 0 10px;
  text-decoration: none;
  color: #42b883;
}
</style>