// db.pessoa.insert({
//     name:'Salomão Netto',
//     age:36,
//     class: '311A'
// })

db.pessoa.insertMany([
    {
        _id: ObjectId("60d8ad29967c095068fb5169"),
        nome:'João Melo',
        nascimento:35,
        rg: '333B'
    },
    {
        _id: ObjectId("60d8ad29967c095068fb5170"),
        nome:'Thiago Melo',
        nascimento:35,
        rg: '333B'
    },
    {
        _id: ObjectId("60d8ad29967c095068fb5171"),
        nome:'Carlos Melo',
        nascimento:35,
        rg: '333B'
    }
])