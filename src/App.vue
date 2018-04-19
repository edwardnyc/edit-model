<template>
  <div id="app">
    <router-view ></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

ul, li, ol ,dl {
  list-style: none;
}

a {
  text-decoration: none;
  color: inherit;
}
</style>
