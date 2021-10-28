<template>
  <div class="folders">
      <TreeFilesNode
          :data="json"
      />
  </div>
</template>

<script>
import TreeFilesNode from "./TreeFilesNode";
import KeyboardNavigationMixin from "../Mixins/KeyboardNavigationMixin";

export default {
  name: 'TreeFiles',
  props: {
    json: Object
  },
  mixins: [KeyboardNavigationMixin],
  mounted(){
    /**
     * проброс события клика по файлу/ссылке/папке в App.vue
     */
    this.$root.$on('changedNode', (component)=>{
      this.$emit('generatedBreadcrumbs', this.generateBreadcrumbs(component))
    });
  },
  methods:{
    /**
     * Генерация хлебных крошек по нажатому компоненту
     * Подъем по родителям вверх и рекурсивная отрисовка массива пути к файлу
     * @param component
     * @returns ['breadElem1', 'breadElem2', ...]
     */
    generateBreadcrumbs(component){
      let tagName = component.$options.name
      if(tagName === "TreeFilesNode") {
        let arr = this.generateBreadcrumbs(component.$parent);
        arr.push(component.data.name);
        return arr;
      } else {
        return [];
      }
    }
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
    padding-top: 10px;
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
