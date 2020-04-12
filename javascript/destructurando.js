const pikachu = {
    number: 25,
    peso: "6 kilos",
    hp: 25,
    attack: 55,
    salud: 5
}

//bad code

function data(pokemon) {
    return `Es el número ${pokemon.number} del pokedex pesa ${pokemon.peso} su hp es de ${pokemon.hp} y su attack de ${pokemon.attack}`
}

console.log(data(pikachu))


//better code
//Nos ahorramos utilizar el nombre del objeto
function data({ number, peso, hp, attack }) {
    return `Es el número ${number} del pokedex pesa ${peso} su hp es de ${hp} y su attack de ${attack}`
}

console.log(data(pikachu))

//Or
function data(pokemon) {
    const { number, peso, hp, attack } = pokemon;
    return `Es el número ${number} del pokedex pesa ${peso} su hp es de ${hp} y su attack de ${attack}`
}

console.log(data(pikachu))



//Anidando templates
//isFine es un tag en terminos de templates 
//str es un array con los textos enviados
//salud es la primera variable enviada
function isFine(str, salud) {
    const saludStr = salud < 50 ? "mal estado" : "buen estado"

    return `${str[0]}${salud} lo que es considearo como ${saludStr}`
}

console.log(isFine`Su salud es de ${pikachu.salud}`)