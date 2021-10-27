<template>
  <div
      :class="['node-element', {
        active: isActive
      }]"
      @click="isNotFolder"
  >
    <FolderSvg
        v-if="node.type==='directory'"
        class="icon"
    />
    <FileSvg
        v-if="node.type==='file'"
        class="icon"
    />
    <LinkSvg
      v-if="node.type==='link'"
      class="icon"
    />
    <div class="caption">
      {{ node.name }}
    </div>
  </div>
</template>

<script>
import FolderSvg from '../../public/static/folder.svg';
import FileSvg from '../../public/static/file.svg';
import LinkSvg from '../../public/static/link.svg';

export default {
  name: "NodeElement",
  props: {
    node: Object,

  },
  data(){
    return{
      isActive: false
    }
  },
  methods: {
    isNotFolder(){
        if(this.node.type==='file' || this.node.type==='link'){
          this.isActive = !this.isActive;
        }
        this.$emit('click');
    }
  },
  components: {
    FolderSvg,
    FileSvg,
    LinkSvg,
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
    font-size: 12px;
    font-weight: lighter;
    padding-left: 3px;
  }
  .icon{
    fill: #86929a;
  }
  .active .caption{
    color: #4b7bc2;
  }
  .active .icon{
    fill: #4b7bc2;
  }
</style>