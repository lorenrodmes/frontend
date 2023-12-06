// Social media Profile

// 1. User Information
const username='codingAdventurer'
const fullName='Lorena Rodriguez'
const age=27
const isStudent=true

//2. Address
const address={
    street:'P. Sherman, calle wallaby 42',
    city:'Sydney',
    state:'Australia',
    zipCode:54321
}
 //3. Hobbies

const hobbies=['Swiming','Reading','Gaming']

// Generating personalized bio
const personalizedBio=`Hi, I'm ${fullName}.
I'm ${age} years old.
I live in ${address.city}.
I love ${hobbies.join(', ')}.
Follow me for coding adventures!`
console.log(personalizedBio)
