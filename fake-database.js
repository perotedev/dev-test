db.pessoa.insert({
    name:'Salomão Netto',
    age:36,
    class: '311A'
})

db.pessoa.insertMany([
    {
        name:'João Melo',
        age:35,
        class: '333B'
    },
    {
        name:'Thiago Melo',
        age:35,
        class: '333B'
    },
    {
        name:'Carlos Melo',
        age:35,
        class: '333B'
    }
])