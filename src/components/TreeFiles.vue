<template>
  <div class="folders">
      <TreeFilesNode
          :data="json"
          :depth="0"
      />
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
    position: fixed;
    flex-direction: column;
    align-items: flex-start;
    width: 300px;
    height: 100vh;
    overflow: scroll;
    padding-left: 10px;
    background-color: #3c3f41;
    box-sizing: border-box;
  }

  /* Custom Scrollbar*/
  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
    width: 100%;
  }

  ::-webkit-scrollbar-track:hover {
    background: rgba(100,100,100,0.3);
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
    border: 1px solid #444646;
  }
</style>
