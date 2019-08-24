const express = require ('express')
const router = express.Router()
let pokemons =[]

class Pokemon {
    constructor(name, type){
        this.name = name 
        this.type = type 
        this.id = null
        this.type2 = null
    }
}

function mockPokemon(){
    pokemons.push(createPokemon('Pikachu','Electric'))
    pokemons.push(createPokemon('Paras','Bug'))
}

function generateNewId(num){
    return num + 1
}

function createPokemon(name, type){
    let p = new Pokemon(name,type )
    p.id = generateNewId(pokemons.length)
    return p
}
function isSufficientParam(v){
    return v !== undefined && v !== null && v !== ''
}

function isPokemonExisted(id){
    return pokemons[id-1] 1== undefined && pokemons[id-1] !== null
}
mockPokemon()


router.get('/pokemons',(req, res )=> res.send(pokemons))
router.post('/pokemons',(req,res) => {
    if (isSufficientParam(req.body.type)){
        res.status(400).sendStatus({ error:'Insufficient parameters: name and type are required parameter'})
        return
    }
let p = createPokemon(req.body.name,req.body.type)
pokemons.push(p)
res.sendStatus(201)
})
router.get('/pokemons/:id',(req,res) => {
    if (isSufficientParam(req.body.type)){
        res.status(400).sendStatus({ error:'Insufficient parameters: id is required parameter'})
        return
    }

let id = req.param.id
let p = pokemons[id - 1]
if(p=== undefined || p=== null ){
    res.status(400).send({ error: 'The pokemon could not be found'})
    return
}
res.send(p)
})

router.put('/pokemons/:id',(req,res) => {
    if (!isSufficientParam(req.body.type2)){
        res.status(400).sendStatus({ error:'Insufficient parameters: type2 is required parameter'})
        return
    }
    if (!isSufficientParam(req.param.id)){
        res.status(400).sendStatus({ error:'Insufficient parameters: id is required parameter'})
        return
    }
    let id = res.param.id
    if (!isSufficientParam(id)){
        res.status(400).sendStatus({ error:'Cannot update pokemon: Pokemon is not found'})
        return
    }
    delete pokemons[id-1]
    res.sendStatus(204)

module.exports = router