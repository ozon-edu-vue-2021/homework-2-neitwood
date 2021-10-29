export default {
    created() {
      document.addEventListener('click', this.isClickOutside);
    },
    destroyed () {
      document.removeEventListener('click', this.isClickOutside)
    },
    methods: {

      isClickOutside(event){
        let el = this.$refs.node;
        let target = event.target;
        if (el !== target && !el.contains(target)){
          this.isActive = false;
        }
      }
    },
}
