
function createPokemon(name,type){
    let p = new pokemon(name, type)
    p.id = generateNewId(pokemon.length)
    return p
}
function isPokemonExisted(id){
    return pokemons[id-1] !== undefined &&  pokemons[id-1] !== null
}
function update(pokemon){
    pokemons[pokemon.id-1] = pokemon
    return true
}
module.exports.savePokemon = this.savePokemon
module.exports.isPokemonExisted = this.isPokemonExisted
module.exports.createPokemon = this.createPokemon
