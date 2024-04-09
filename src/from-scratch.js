// Question 1//
const measureRain = (inch) => {
  if (inch === 0) {
    console.log('drought')
  } else if (inch < 2) {
    console.log('dry')
  } else if (inch < 4) {
    console.log('average')
  } else if (inch < 6){
    console.log('rainy')
  } else if (inch >= 6) {
    console.log('flood')
  }
};
measureRain(1.4)
measureRain(6)


// Question 2 //
const snake = 'snake'; // these string constants prevent typos
const cat = 'cat';
const dog = 'dog';
const happyBirthdayPet = (breed, age) => {
  if (breed === snake && age >= 0) {
    console.log('Hiss hiss!')
  } else if (breed === cat && age < 5) {
    console.log('Mew mew!')
  } else if (breed === cat && age >= 5) {
    console.log('Meow meow!')
  } else if (breed === dog && age < 5) {
    console.log('Arf arf!')
  } else if (breed === dog && age >= 5 && age < 10) {
    console.log('Woof woof!')
  } else if (breed === dog && age >= 10) {
    console.log('Boof!')
  } else {
    console.log('Happy birthday!')
  }
};
happyBirthdayPet(snake, 0);
happyBirthdayPet(snake, 9);
happyBirthdayPet(cat, 3.7);
happyBirthdayPet(cat, 5);
happyBirthdayPet(cat, 6);
happyBirthdayPet(dog, 4.3);
happyBirthdayPet(dog, 5);
happyBirthdayPet(dog, 10);
happyBirthdayPet(dog, 11);
happyBirthdayPet("fish", 11);

// Question 3 //
const funTypes = (jsType) => {
  if (Number.isNaN(jsType)) {
    console.log("Well, now you're just showing off.")
  } else if (typeof jsType === "string"){
    console.log("That's just some text.") // string
  } else if (typeof jsType === 'number'){
    console.log( "That's a good number.")  // number
  } else if (typeof jsType === 'boolean') {
    console.log("To bool, or not to bool?") // boolean (true/false)
  } else if (typeof jsType === 'undefined') {
    console.log("Nothing, but I didn't set that.") // undefined
  } else if (jsType === null) {
    console.log("Nothing, and I did set that.") // null
  } else if (Array.isArray(jsType)) {
    console.log("I order you to be indexed.")
  } else if (typeof jsType === 'object') {
    console.log("Anybody got the key?") // object
  };
};

funTypes("hello")
funTypes(1000)
funTypes(true)
funTypes(false)
funTypes(undefined)
funTypes(null)
funTypes({})
funTypes(["a", "b"])
funTypes(NaN)

// Question 4 //
const rounder = (float, roundingSetting) => {
  if (roundingSetting === 'up') {
    return Math.ceil(float)
  } else if (roundingSetting === 'down') {
    return Math.floor(float)
  } else if (roundingSetting === 'honest') {
    return Math.round(float)
  } else {
    return "INVALID : pick a valid number"
  }
};

console.log(rounder(4.4, 'down'))
console.log(rounder(4.5, 'up'))
console.log(rounder(4.4, 'honest'))
console.log(rounder(4.5, 'honest'))

// Question 5 //
const fizzBuzzish = (num) => {
  if (num % 3 === 0 && num % 5 === 0) {
    console.log('fizzBuzz!')
  } else if (num % 3 === 0) {
    console.log("fizz")
  } else if (num % 5 === 0) {
    console.log('buzz')
  } else {
    console.log(num)
  }
};

fizzBuzzish(15)
fizzBuzzish(3)
fizzBuzzish(5)
fizzBuzzish(2)


module.exports = {
  measureRain,
  happyBirthdayPet,
  funTypes,
  rounder,
  fizzBuzzish,
};
