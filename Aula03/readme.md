## Aula03 - Mongo
- Instalação do MongoDB - Baixar o Community Server
- Instalação do Mongo Compass

`https://www.mongodb.com/try/download/community`

### Comandos vistos em aula

#### Criando e acessando uma base de dados
```
use <nome>
```
*Caso você crie uma base e não a utilize, na próxima execução a base será removida.*

#### Criando Collection (tabela)
A criação de uma collection é executada quando houver o primeiro INSERT
```
db.aluno.insert({
  "aluno": "74000190",
  "nome_completo": "Rodrigo Escobar",
  "cursos": [
      { 
        "curso": "Ciencia da Comp.",
        "ano_f": 2004
      },
      {
        "pos": "Especialização em GE",
        "ano": 2008
      }
  ]
})
```
ou
```
db.joaoSilva.insert({ "nome": "Roberval" })
```

#### Consultando dados
- Equivalente ao `SELECT * FROM aluno`
```
db.aluno.find()
```
- Equivalente ao `SELECT * FROM aluno WHERE ra=12`
```
db.aluno.find({ ra: 12 })
```