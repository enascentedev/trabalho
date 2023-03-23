<script>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>
    <header>
      <!-- <img alt="Vue logo" class="logo" src="@/assets/logowebglobal.svg" width="125" height="125" /> -->
      <!-- <img class="h-200 w-200" src="https://webglobal.com.br/carreiras/wp-content/uploads/2022/09/logo-webglobal.png" alt=""> -->

      <div class="wrapper">
        
        <!-- <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/contato">Contato</RouterLink>
        </nav> -->
      
      </div>
    </header>

    <RouterView />
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 500vh;
  z-index: 5;
}

.logo {
  /* display; */
  margin-left: 0px;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
text-decoration: none;
color: rgb(10, 54, 189);
transition: 0.4s;
}

nav a {
  display: inline-block;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: 100%;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;

  }

  nav {
    text-align: left;
    margin-left: -0rem;
    font-size: 3rem;

    padding: 2rem 0;
    margin-top: 1rem;
  }
}
</style>
<!--  -->
