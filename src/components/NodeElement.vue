<template>
  <div class="node-element">
    <FolderSvg
        v-if="node.type==='directory'"
        class="icon"
    />
    <div class="caption">
      {{ node.name }}
    </div>
  </div>
</template>

<script>
import FolderSvg from '../../public/static/folder.svg';

export default {
  name: "NodeElement",
  props: {
    node: Object
  },
  components: {
    FolderSvg
  }
}
</script>

<style scoped>
  .node-element{
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 2px;
  }
  .caption{
    text-align: left;
    color: #eaeaea;
    font-family: sans-serif;
    font-size: 14px;
    font-weight: lighter;
    padding-left: 5px;
  }
  .icon{
    fill: #86929a;
  }
</style>