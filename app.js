const express = require('express' )
const app = express()
const port = 3000


app.use(express.json()) 



app.get('/',(req,res)=>res.send('Hello World!!!!!!!!!!!!!!!!!!!!!!!!'))

// /pokemons -> list all pokemon http://localhost;3000/pokemon

let pokemons=[
    {name:'Pikachu',type:'Electric'},
    {name:'Paras',type:'Bug'}
]
app.get('/pokemons',(req,res) => res.send('pokemons'))
// POST /pokemons -> add pokemon to list

app.post('/pokemons',(req,res)=>{
    pokemons.push(req.body)
    res.sendStatus(201)




})

app.listen(port,()=> console.log(`Example app listening on port ${port}!`))




