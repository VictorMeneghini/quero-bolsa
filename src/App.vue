<template>
  <div id="app">
    <app-header />
    <home />
    <app-footer />
  </div>
</template>

<script>
import AppHeader from '@/components/commom/AppHeader';
import AppFooter from '@/components/commom/AppFooter';
import Home from '@/pages/Home';

export default {
  name: 'App',
  components: {
   AppHeader,
   AppFooter,
   Home
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

html, body {
  height: 100%;
}

body {
  background: $grey;
  font-family: 'Montserrat', sans-serif;
}

#app {
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>
