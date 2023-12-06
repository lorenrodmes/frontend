/*
function calculateDiscountedPrice(price,discountPercentage){const discount=(price*discountPercentage)/100
const priceWithDiscount=price-discount
return priceWithDiscount}
const originalPrice=1000
const discountPercentage=15
const finalPrice=calculateDiscountedPrice(originalPrice,discountPercentage)
console.log('Original Price: $'+originalPrice)
console.log('Discount: '+discountPercentage+'%')
console.log('Price with discount: $'+finalPrice)

// Capacidades que tiene las funciones al igual que otros objetos

//1. Pasar funciones como argumentos -> Callback
function a (){}
function b (a){}
b(a)

 // Retornar funciones
function a () {
function b () {}
return b
}

// Asignar funciones a Variables

const a = function  () {}
function a() {}
const obj={}
a.call(obj)
function a(){function b(){function c(){}
c()}
b()}
a()
*/
// Es posible almacenar funciones en objetos:


const rocket= {
    name: 'Falcon 9',
    launchMessage:function () {
    console.log('🔥') 
}
  }

rocket.launchMessage()





