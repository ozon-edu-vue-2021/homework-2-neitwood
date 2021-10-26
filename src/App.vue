<template>
  <div id="app">
    <TreeFiles :json="json"/>
  </div>
</template>

<script>
import json from '../public/static/node_modules.json'
import TreeFiles from "./components/TreeFiles";

export default {
  name: 'App',
  data(){
    return{
      json: json
    }
  },
  components: {
    TreeFiles
  }
}
</script>

<style>
  body{
    margin:0;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
