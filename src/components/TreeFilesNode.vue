<template>
  <div class="node" :style="indent">

<!--    <div class="name" @click="openClose(node)">-->
      <NodeElement
          class="name"
          @click="openClose(node)"
          :node="node"/>
<!--    </div>-->

    <div v-if="opened && node.type!=='file' && node.type!=='link'">
      <tree-files-node
          v-for="dir in currentNode"
          :key="dir.name"
          :node="dir"
          :depth="depth+1"
      />
    </div>

  </div>
</template>

<script>
import NodeElement from "./NodeElement";

export default {
  name: "TreeFilesNode",
  props: {
    node: Object,
    depth: Number
  },
  data() {
    return {
      opened: false,
      currentNode: null,
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
    indent() {
      // return 1;
      return { 'padding-left': `${this.depth * 15}px` }
    }
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
  /*padding-left: 15px;*/
  cursor: pointer;
}
.type{
  color: blue;
}
.name{
  width: 100%;
}
</style>
