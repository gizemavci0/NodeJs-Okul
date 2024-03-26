const tasks = {
    tasks : [
        {
            text : "Alışveriş",
            completed : true
        },
        {
            text : "Temizlik",
            completed : false
        },
        {
            text : "Ödev",
            completed : false
        }

    ],
    getTasksToDo : function (){
        return this.tasks.filter((tasks) => tasks.completed === false)
    }
}



console.log(tasks.getTasksToDo())

