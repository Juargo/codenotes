const orders =[500,30,99,15,223]

var total=0;
var conimpuestos=[];
var highValue=[];

//bad
for(i=0;i<orders.length;i++){
    
    //Reduce
    total+=orders[i]

    //Map
    conimpuestos.push(orders[i]*1.19)

    //Filter
    if (orders[i]>100){
        highValue.push(orders[i])
    }
}

console.log(`Bad syntax Total: ${total} Con Impuestos:${conimpuestos}  Valores Mayores a 100: ${highValue}`)

//BETTER

//REDUCE
// array.reduce(function(total, currentValue))
//total	Required. The initialValue, or the previously returned value of the function
//currentValue	Required. The value of the current element
var total = orders.reduce((acc,cur)=>acc+cur) 

//Map
//array.map(function(currentValue))
//currentValue	Required. The value of the current element
var conimpuestos = orders.map(v=>v*1.19)

//Filter
//array.map(function(currentValue))
//currentValue	Required. The value of the current element
//la función retorna la condición para el filtro
var highValue=orders.filter(v=>v>100)

console.log(`Better syntax Total: ${total} Con Impuestos:${conimpuestos}  Valores Mayores a 100: ${highValue}`)




//######### Test loops ##########
const mil=1000000;
const arr= Array(mil)

console.time('for')

for(let i=0;i<mil;i++){}

console.timeEnd('for')

console.time('of')

for (const v of arr){}

console.timeEnd('of')

console.time('foreach')

arr.forEach(element => null);

console.timeEnd('foreach')

console.time('map')

arr.map(v=>null)

console.timeEnd('map')