// db.pessoa.insert({
//     name:'Salomão Netto',
//     age:36,
//     class: '311A'
// })

db.students.insertMany([
    {
        _id: ObjectId("60d8ad29967c095068fb5172"),
        matricula: "2019025996",
    },
    {
        _id: ObjectId("60d9ad29967c095068fb5172"),
        matricula: "2019025096",
    }
])