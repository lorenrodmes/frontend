const entero=42
const decimal=3.14
console.log(typeof entero,typeof decimal)
const cientifico=5e3
const infinito=Infinity
const noEsUnNumero=NaN
const suma=3+4
const resta=4-4
const mutiplicacion=4*7
const division=16/2
const modulo=15%8
const exponenciacion=2**3
const resultado=0.1+0.2
console.log(resultado)
console.log(resultado.toFixed(1))
console.log(resultado===0.3)
const raizCuadrada=Math.sqrt(16)
const valorAbsoluto=Math.abs(-7)
const aleatorio=Math.random()
console.log(raizCuadrada)
console.log(valorAbsoluto)
console.log(aleatorio)

//Clase de tipo de datos boolean

const isActive=true
const hasPermisson=false
const result=5>3
console.log(result)
const name='Platzi'
console.log(!!name)
const value=0
const otherValue=-24
const explicitBoolean=Boolean(otherValue)
console.log(explicitBoolean)

//Tipos de datos primitivos: null, undefined, symbol y bigint

const snoopy=null
console.log(snoopy)
console.log(typeof snoopy)

//undefined
let nombre
console.log (nombre)

//Symbol 
const uniqueId=Symbol('id')
const symbol1=Symbol(1)
const symbol2=Symbol(1)
console.log(symbol1===symbol2)

const ID=Symbol('id')
let user={}
user[ID]='1234'
console.log(user)

//BigInt
const bigNumber=109823746783982764567847654782374n
console.log(bigNumber)
const numberOfParticlesInTheUniverse=10000000000000000000n
console.log(numberOfParticlesInTheUniverse)


