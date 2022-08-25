## Aula 04

- Comandos utilizados na base Mongo 
```
//Mostrar bases de dados
show dbs

//Conectar na base
use admin

//Mostrar todas as collections da base
show tables (nao funcionou)

//Criando uma tabela e inserindo um dado
db.aluno.insert(
  {
    nome: "Rodrigo Escobar",
    idade: 41,
    telefone: "13213213213"
  }
)

//Buscando todos os dados
db.aluno.find()
//6306c04baf190234f2e2ce1c
 
//Insertindo vários dados
db.aluno.insertMany(
[
  {
    nome: "Escobar",
    idade: 29,
    telefone: "11111111"
  },
  {
    nome: "Cléversu",
    idade: 31,
    telefone: "2222"
  }
]  
)

//WHERE simples
db.aluno.find(
  { 
    _id: ObjectId("6306c04baf190234f2e2ce1c") 
  }
)

//WHERE com AND
db.aluno.find(
  { 
    "nome": "Rodrigo Escobar", 
    idade: 42 
  }
)

// WHERE com OR
db.aluno.find(
  { 
    $or : [
      {
        nome: "Rodrigo Escobar"
      },
      {
        telefone: "2222"
      }
    ]
  }
)

//LIKE '%Escobar%'
db.aluno.find({ nome: /Escobar/ })

//LIKE '%Escobar'
db.aluno.find({ nome: /^ersu/ })

//LIKE 'Escobar%'
db.aluno.find({ nome: /ersu$/ })

```