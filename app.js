Vue.component('greeting', {
    template: '<p>I am {{name}} . <button @click="changeName">Change name </button> </p>',
    data() {
        return {
            name: "YA_01"
        }
    },
    methods: {
        changeName() {
            this.name = "YA_02"
        }
    }
})

new Vue({
    el: '#vue-app-one',

});

new Vue({
    el: '#vue-app-two',

});