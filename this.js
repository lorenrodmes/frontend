
// Enlace implicito =  implicit binding
const house={
dogName:'Fido',
dogGreeting:function(){
    console.log(`Hi, I'm ${this.dogName}`)
}
}
house.dogGreeting()

// Enlace explicito  = Explicit Binding
function dogGreeting(){
console.log(`Hi, I'm ${this.dogName}`)
}

const newHouse={dogName:'Coconut',}
dogGreeting.call(newHouse)
function newDogGreeting(owner,address){

console.log(`Hi, I'm ${this.dogName} and I live with ${owner} on ${address}`)
}
const owner='Lucy'
const address='Avenue 123'
newDogGreeting.call(newHouse,owner,address)

// Clase Métodos bind, call y apply

const owner1='pepe'
const address1='calle18'

function dogGreeting(owner1, address1){
    console.log(`Hi, I'm ${this.dogName} and I live with ${owner1} on ${address1}`)
}

const theNewHouse={dogName:'Coconut'}
dogGreeting.call(theNewHouse,owner1,address1)

const necessaryValues=[owner1,address1]
dogGreeting.apply(theNewHouse,necessaryValues)

const bindingWithBind=dogGreeting.bind(theNewHouse,owner1,address1)
bindingWithBind()
