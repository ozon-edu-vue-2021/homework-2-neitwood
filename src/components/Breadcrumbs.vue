<template>
  <div class="breadcrumbs">
     <div class="element" v-for="el in breadcrumbs" :key="el">
       <div class="name-wrapper">
        <span class="name">{{el}}</span>
       </div>
       <span class="arrow">></span>
     </div>
  </div>
</template>

<script>
export default {
  name: "Breadcrumbs",
  props: {
    breadcrumbs: Array
  }
}
</script>

<style scoped>
  .breadcrumbs{
    display: flex;
    flex-direction: row;
    height: 30px;
    border-bottom: 1px solid #464648;
    padding-left: 25px;
    font-family: sans-serif;
    font-size: 12px;
    font-weight: lighter;
  }
  .element{
    display: flex;
    align-items: center;
    color: white;
  }
  .name, .arrow{
    padding: 5px;
  }
  .element:last-of-type .arrow{
    display: none;
  }
</style>