// db.pessoa.insert({
//     name:'Salomão Netto',
//     age:36,
//     class: '311A'
// })

db.pessoa.insertMany([
    {
        _id: ObjectId("60d8ad29967c095068fb5179"),
        nome:'João Melo',
        nascimento:35,
        rg: '333B'
    },
    {
        _id: ObjectId("60d8ad29967c095068fb5180"),
        nome:'Thiago Melo',
        nascimento:35,
        rg: '333B'
    },
    {
        _id: ObjectId("60d8ad29967c095068fb5181"),
        nome:'Carlos Melo',
        nascimento:35,
        rg: '333B'
    }
])