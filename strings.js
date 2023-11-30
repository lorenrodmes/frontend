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
