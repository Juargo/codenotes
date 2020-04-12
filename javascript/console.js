const mu = {casa:'Aries', status:'dead',edad:20}
const afrodita = {casa:'Picis', status:'dead',edad:22}
const camus = {casa:'Acuario', status:'dead',edad:20}


//bad code
console.log(mu)
console.log(afrodita)
console.log(camus)

//better code
console.log({mu,afrodita,camus}) //Lo despliega con los nombres agrupados
console.table([mu,afrodita,camus]) //Lo despliega como tabla


//Rastreo
const rastreado = () =>console.trace('se ejecutó')

rastreado()
rastreado()