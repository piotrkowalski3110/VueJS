new Vue({
    el: '#app',
    data: {
        firstName: 'MATEUSZ',
        lastName: 'Kowalski',
        h1Style: 'color: red',
    },
    methods: {
        changeName: function (event) {
            this.firstName = event.target.value;
        },
        upperFirstName: function () {
            return this.firstName.toUpperCase();
        },
        dodajLiczby: function () {
            return this.firstName + "123123123"
        },
        changeColor: function () {
            if (this.h1Style == 'color:red') {
                this.h1Style = 'color:blue'
            } else {
                this.h1Style = 'color:red'
            }
        }
    }
})