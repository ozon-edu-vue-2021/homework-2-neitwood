<template>
  <div class="node">

      <NodeElement
          class="name"
          @click="openClose(data)"
          :data="data"
      />

    <div v-if="opened && data.type!=='file' && data.type!=='link'">
      <tree-files-node
          v-for="el in currentData"
          :key="el.name"
          :data="el"
      />
    </div>

  </div>
</template>

<script>
import NodeElement from "./NodeElement";

export default {
  name: "TreeFilesNode",
  props: {
    data: Object,
    depth: Number
  },
  data() {
    return {
      opened: false,
      currentData: null,
    }
  },
  methods: {
    openClose(node) {
      this.currentData = node;
      this.opened = !this.opened;
    },
  },
  watch: {
    currentData: function (val) {
      this.currentData = val.contents.sort((a,b)=> {
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
.name{
  width: 100%;
}
</style>
