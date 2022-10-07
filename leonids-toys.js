const toys = [
{
    id: 1,
    name: "GIJOE",
    costOfToy: 15.99,
    inStock: true,
    numberInStock: 12,
    manufacturer: "Hasbro",
    size: "3.5 inches"
    
},
{
    id: 2,
    name: "Rainbow Brite",
    costOfToy: 20.99,  
    inStock: false,
    numberInStock: 0,
    manufacturer: "Mattel",
    size: "16 inches"
},
{
    id: 3,
    name: "Game Boy",
    costOfToy: 69.99,  
    inStock: true,
    numberInStock: 8,
    manufacturer: "Nintendo",
    size: "5.8 inches"
}
]
// Create 2 new toy objects after the initial array is created. Give each one a unique id property value.
const teenageMutantNinjaTurtles = {
    id: 4,
    name: "Teenage Mutant Ninja Turtles",
    costOfToy: 12.99,  
    inStock: true,
    numberInStock: 25,
    manufacturer: "Playmates Toys Inc.",
    size: "3.5 inches" 
}
const rollerSkates = {
    id: 5,
    name: "Fisher Price Roller Skates",
    costOfToy: 10.99,  
    inStock: true,
    numberInStock: 12,
    manufacturer: "Fisher Price",
    size: "13.78 inches" 
}
// Use the push() array method twice to add each object to the initial array.
toys.push(teenageMutantNinjaTurtles)
toys.push(rollerSkates)
// for (const toy of toys){
//     console.log(toy.name)
//     console.log(`I have the following toys:\n ${toy.name}, and the cost is ${toy.costOfToy}.\n`)
//     console.log(`The Manufacturer of ${toy.name} is ${toy.manufacturer}`)
   
//     console.log(`The cost of ${toy.name} is ${toy.costOfToy}`)
//     console.log(`I have the following toys ${toy.name} in stock ${toy.inStock}`)
// }
// Run your code with node leonids-toys.js in the terminal.
// You should now see two new values being displayed in the terminal.

for (const toy of toys){
    toy.costOfToy = toy.costOfToy * 1.05
    console.log(`The ${toy.name} is ${toy.costOfToy}`)
}
//Above is what the exercise wants.
//Below is something that I wanted to try. I have a key that is inStock and I want to only present the in stock toys
// for (const toy of toys){
//     if(toy.inStock === true){
//         console.log(`the ${toy.name} is ${toy.costOfToy}`)
//     } else {
//         console.log(`We are currently out of ${toy.name}, but it is normally ${toy.costOfToy}`)
//     }
// }
