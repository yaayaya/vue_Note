new Vue({
    el: '#vue-app',
    data: {
        available: false,
        nearby: true
    },
    methods: {

    },
    computed: {
        // 綁一捆css 
        compClasses: function () {
            return {
                available: this.available,
                nearby: this.nearby
            }
        }
    }
})