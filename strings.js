// Creacion de strings
const primeraOpcion='Comillas simples'
const segundaOpcion="Comillas simples"
const terceraOpcion=`Comillas simples`

// Concatenacion : Opcion de +
const direccion='calle Wallaby way42 '
const ciudad='Syndey'
const direccionCompleta='Mi dirección completa es '+direccion+ciudad
console.log(direccionCompleta)
const direccionCompletaConEspacio='Mi dirección completa es '+direccion+' '+ciudad
console.log(direccionCompletaConEspacio)

// Concatenacion : Opcion de  Literal templates
const nombre='Lorenita'
const pais='🏳️‍🌈'
const presentacion=`Hola, soy ${nombre} de ${pais}`
console.log(presentacion)

// Concatenacion : Opcion de  Join ()
const primeraParte='Me encanta'
const segundaParte='la gente de'
const terceraParte='🏳️‍⚧️'
const pensamiento=[primeraParte,segundaParte,terceraParte]
console.log(pensamiento.join(' 🍆 '))

// Concatenacion : Opcion de concat
const hobbie1='nadar'
const hobbie2='hornear'
const hobbie3='estudiar'
const hobbies='Mis hobbies son: '.concat(hobbie1,', ',hobbie2,', ',hobbie3,'.')
console.log(hobbies)

// Caracteres de Scape

const escapeAlternativo="I'm Software Engineer"
const escapeBarraInvertida='I\'m Software Engineer'
const escapeComillaInvertida=`I'm Software Engineer`
const poema='Las rosas son rojas,\n'+
'Las violetas son azules,\n'+
'Caracter inesperado,\n'+
'En la li­nea 86.'
console.log(poema)
const poema2='Las rosas son rojas,\n\
Las violetas son azules,\n\
Caracter inesperado,\n\
En la li­nea 86.'
console.log(poema2)
const poema3=`Las rosas son rojas,
Las violetas son azules,
Caracter inesperado,
En la li­nea 86.`
console.log(poema3)

// CLASE DE MANIPULACION DE STRINGS
// String primitivos

const stringPrimitivo = 'Soy un string primitivo'
console.log(typeof stringPrimitivo)

const stringPrimitivoTambien = String('Soy un string primitivo tambien')
console.log(typeof stringPrimitivoTambien)

// String objeto
const stringObjeto = new String('Soy un string objeto')
console.log(typeof stringObjeto)

// Acceder a caracteres

const saludo = 'Hola. ¿Cómo estás?'

console.log(saludo[2])
console.log(saludo.charAt(2))
console.log(saludo.indexOf('o'))
console.log(saludo.indexOf('Cómo'))
console.log(saludo.indexOf('como'))
console.log(saludo.lastIndexOf('o'))
console.log(saludo.slice(3, 5))
console.log(saludo.length)
console.log(saludo.toLocaleUpperCase())
console.log(saludo.toLocaleLowerCase())

const saludoDividido = saludo.split(' ')
console.log(saludoDividido)
console.log(saludoDividido[1])

const saludoConEspacios = ' Hola Mundo '
const saludoSinEspacios = saludoConEspacios.trim()
console.log(saludoSinEspacios)

const saludoOriginal = 'Hola Mundo'
const nuevoSaludo = saludoOriginal.replace('Mundo', '🖖🏻')
console.log(nuevoSaludo)


