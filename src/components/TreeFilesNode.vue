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
    /**
     * Проброс текущего компонента наверх для отрисовки Breadcrumbs
     * @param node
     */
    openClose(node) {
      this.$root.$emit('changedNode', this);
      this.currentData = node;
      this.opened = !this.opened;
    },
  },
  watch: {
    /**
     * Сортировка содержимого нажатой папки
     * @param val
     */
    currentData: function (val) {
      if('contents' in val){
        this.currentData = val.contents.sort((a,b)=> {
              if (a.type < b.type)
                return -1;
              return 0;
            }
        );
      }
    },
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
