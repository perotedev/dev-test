db.tasks.insertMany([
    {
        _id: ObjectId("60d8ad29967c095068fb5169"),
        description:'Tarefa 1',
        completed: true,
        student_id: ObjectId("60d8ad29967c095068fb5172")
    },
    {
        _id: ObjectId("60d8ad29967c095068fb5170"),
        description:'Tarefa 2',
        completed: false,
        student_id: ObjectId("60d8ad29967c095068fb5172")
    },
])