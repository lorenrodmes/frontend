//Paso por referencia.
let x=1
let y='Hola'
let z=null
let a=x
let b=y
let c=z
console.log(x,y,z,a,b,c)
a=12
b='Platzi'
c=undefined
let fruticas=['manzana']
fruticas.push('pera')
console.log(fruticas)

let panes=['🥐']
let copiaDePanes=panes
panes.push('🥖')
console.log(panes,copiaDePanes)

let frutas={naranja:'🍊'}
let vegetales=frutas
vegetales.naranja='🥦'
console.log(frutas)

let ropa={blusa:'👚'}
ropa.pantalon='👖'
console.log(ropa)
