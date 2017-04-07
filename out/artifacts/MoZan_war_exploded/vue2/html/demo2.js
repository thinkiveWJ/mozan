Vue.component('list-item', {
    props:['todow12323'],
    template: "<li>{{todo['name']}}</li>"
});
var vm = new Vue({
    el: "#app",
    data: {
        items: [
            {
                name: "bob"
            },
            {
                name: "job"
            }
        ]
    }
});