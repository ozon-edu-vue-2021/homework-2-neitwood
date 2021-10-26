<template>
  <div class="node" >

    <div class="name" @click="openClose">
      <span class="type">
        {{node.type==='file'?'File':''}}
        {{node.type==='directory'?'Dir':''}}
      </span>
      {{ node.name }}
    </div>

    <div v-if="opened">
      <tree-files-node
          v-for="dir in node.contents"
          :key="dir.name"
          :node="dir"
      />
    </div>

  </div>
</template>

<script>
export default {
  name: "TreeFilesNode",
  props: {
    node: Object
  },
  data(){
    return{
      opened: false
    }
  },
  methods:{
    openClose(){
      this.opened = !this.opened;
    },

  }
}
</script>

<style scoped>
  .node{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    padding-left: 10px;
  }
  .type{
    color: blue;
  }
  .name{
    width: 100%;
    text-align: left;
    color: #bababb;
  }
</style>