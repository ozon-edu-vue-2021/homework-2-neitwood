<template>
  <div class="node">

    <div class="name" @click="openClose(node)">
      <NodeElement :node="node"/>
    </div>

    <div v-if="opened">
      <tree-files-node
          v-for="dir in currentNode"
          :key="dir.name"
          :node="dir"
      />
    </div>

  </div>
</template>

<script>
import NodeElement from "./NodeElement";

export default {
  name: "TreeFilesNode",
  props: {
    node: Object
  },
  data() {
    return {
      opened: false,
      currentNode: null
    }
  },
  methods: {
    openClose(node) {
      this.currentNode = node;
      this.opened = !this.opened;
    },
  },
  watch: {
    currentNode: function (val) {
      this.currentNode = val.contents.sort((a,b)=> {
            if (a.type < b.type)
              return -1;
            return 0;
          }
      );
    },
  },
  computed: {

  },
  components: {
    NodeElement,
  },
}
</script>

<style scoped>
.node{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding-left: 15px;
  cursor: pointer;
}
.type{
  color: blue;
}
.name{
  width: 100%;
}
</style>
