var pokemon ={name:'Pikachu'}
var stats={hp:40,attack:60,defense:45}

//Se quiere unir estas variables en una sola

//bad
pokemon['hp']=pokemon.hp
pokemon['attack']=pokemon.attack
pokemon['defense']=pokemon.defense

//better

//Assign
var var0= Object.assign(pokemon,stats)
//Spread Syntax
var var1={...pokemon,...stats}

console.log(var0)

//#########  ARRAY  ####
var pokemones =['Pikachu','Rattata','Charizard']

//bad
pokemones.push("charmander")
pokemones.push("vaporeon")

console.log(`bad array syntax ${pokemones}`)


//better
var pokemones =['Pikachu','Rattata','Charizard']
pokemones=["charmander","vaporenon",...pokemones]

console.log(`better array syntax ${pokemones}`)