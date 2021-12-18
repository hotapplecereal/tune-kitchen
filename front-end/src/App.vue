<template>
  <div id="app">
    <div id="page">
      <!-- Boostrap Menu -->
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <!-- Logo -->
        <a class="navbar-brand" href="#">
          <router-link to="/"><img src="/images/earth.png" width="30" height = "30"/></router-link>
        </a>
        <!-- Toggable Collapsable List -->
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <!-- List of Items -->
          <ul class="navbar-nav">
            <!-- Item -->
            <li class="nav-item active">
              <router-link to="/tags"><a class="nav-link" href="/index.html">Tags<span class="sr-only">(current)</span></a></router-link>
            </li>
            <li class="nav-item">
              <router-link to="/song"><a class="nav-link" href="/pages/about.html">Song</a></router-link>
            </li>
          </ul>
        </div>
      </nav>
      <router-view />
      <!-- Footer -->
      <div class=footer><a href=https://github.com/hotapplecereal/tune-kitchen>Github Repository</a></div>
    </div>
  </div>
</template>

<style>
/* nice default settings */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  font-family: 'Work Sans', sans-serif;
  font-weight: 300;
  font-size: 13pt;
  margin: 0px 200px;
}

/* Boostrap Menu */
.bg-dark {
  background-color: #008000!important;
}

.navbar-dark .navbar-nav .nav-link:focus, .navbar-dark .navbar-nav .nav-link:hover {
  color: #333!important;
}

.navbar-dark .navbar-nav .nav-link {
  color: #fff!important;
}

/* Footer */
.footer {
  height: 30px;
  text-align: center;
  vertical-align: middle;
  position: fixed;
  width: 100%;
  bottom: 0px;
  background-color: #fff;
}

/* page to make footer work. Should contain the rest of everything. */
.page {
  width: 100%;
  padding-bottom: 30px;
}
</style>
