<template>
  <div
      class="node"
      @click="openClose"
  >

<!--      <NodeElement-->
<!--          class="name"-->
<!--          :data="data"-->
<!--          :active="opened"-->
<!--      />-->
      {{data.name}}

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
// import NodeElement from "./NodeElement";

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
  created() {
  },
  methods: {
    /**
     * Проброс текущего компонента наверх для отрисовки Breadcrumbs
     * @param node
     */
    openClose() {
      this.currentData = this.data;
      this.opened = !this.opened;
      this.$root.$emit('changedNode', this);
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
    // NodeElement,
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
