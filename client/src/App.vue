<template>
  <div id='app'>
    <div class='ui inverted vertical masthead center aligned segment'>
      <div class='ui container'>
        <div class='ui large secondary inverted pointing menu'>
          <div class='right item'>
            <a class='ui inverted button'>Log in</a>
          </div>
        </div>
      </div>

      <div class='ui text container'>
        <h1 class='ui inverted header'>
          Nuestras recetas!
        </h1>
        <h2>Listado con todas nuestras recetas.</h2>
      </div>
    </div>
    <div class='ui container vertical segment stripe'>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
body {
  margin: 0;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
