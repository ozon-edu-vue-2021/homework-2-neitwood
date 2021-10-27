<template>
  <div id="app">
    <Breadcrumbs
        :breadcrumbs="breadcrumbs"
    />
    <TreeFiles
        :json="json"
        @generatedBreadcrumbs="setBreadcrumbs"
    />
  </div>
</template>

<script>
import json from '../public/static/node_modules.json';
import TreeFiles from "./components/TreeFiles";
import Breadcrumbs from "./components/Breadcrumbs";

export default {
  name: 'App',
  data(){
    return{
      json: json,
      breadcrumbs: []
    }
  },
  methods:{
    setBreadcrumbs(data){
      this.breadcrumbs.splice(0);
      this.breadcrumbs = data;
    }
  },
  components: {
    TreeFiles,
    Breadcrumbs
  }
}
</script>

<style>
  body{
    margin:0;
    background: #313336;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
