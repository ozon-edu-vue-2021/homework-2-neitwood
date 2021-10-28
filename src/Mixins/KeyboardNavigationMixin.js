export default {
    created() {
        window.addEventListener('keydown', this.keyPress);
    },
    destroyed () {
        window.removeEventListener('keydown', this.keyPress)
    },
    methods: {
        keyPress(e){
            switch(e.key) {
                case "ArrowDown":
                    console.log('Вниз')
                    break;
                case "ArrowUp":
                    console.log('Вверх')
                    break;
                case "ArrowLeft":
                    console.log('Влево')
                    break;
                case "ArrowRight":
                    console.log('Вправо')
                    break;
            }
        }
    }

}