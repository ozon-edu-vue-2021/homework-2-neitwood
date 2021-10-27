<template>
  <div
      :class="['node-element', {
        active: isActive
      }]"
      @click="isNotFolder"
      ref="node"
  >
    <FolderSvg
        v-if="data.type==='directory'"
        class="icon"
    />
    <FileSvg
        v-if="data.type==='file'"
        class="icon"
    />
    <LinkSvg
      v-if="data.type==='link'"
      class="icon"
    />
    <div class="caption">
      {{ data.name }}
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
    data: Object,

  },
  data(){
    return{
      isActive: false
    }
  },
  created() {
    document.addEventListener('click', this.isClickOutside);
  },
  destroyed () {
    document.removeEventListener('click', this.isClickOutside)
  },
  methods: {
    isNotFolder(){
        if(this.data.type==='file' || this.data.type==='link'){
          this.isActive = !this.isActive;
        }
        this.$emit('click', this);

    },
    isClickOutside(event){
      let el = this.$refs.node;
      let target = event.target;
      if (el !== target && !el.contains(target)){
        this.isActive = false;
      }
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