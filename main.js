const app = Vue.createApp({
    data: function(){
        return {
            product: 'to do list',
            image: 'assets/images/calendar.jpg',
            todos: [
                { id: 1, task:'Stofzuigen'},
                { id: 2, task: 'Dweilen'}, 
                { id: 3, task: 'Bed opmaken'}
            ]
        }
    }
})