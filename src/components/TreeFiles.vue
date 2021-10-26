<template>
  <div class="folders">
      <TreeFilesNode :node="json"></TreeFilesNode>
  </div>
</template>

<script>
import TreeFilesNode from "./TreeFilesNode";

export default {
  name: 'TreeFiles',
  props: {
    json: Object
  },
  components: {
    TreeFilesNode
  }
}
</script>

<style scoped>
  .folders{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 400px;
    height: 100vh;
    overflow-y: scroll;
    padding-left: 10px;
    background-color: #3c3f41;
  }
</style>
