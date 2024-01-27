import { Hero } from './classes/Hero';
import { genericFunction, printObject } from './generics/generics';
// import { Hero as SuperHero, Hero2 } from './classes/Hero';
// import * as HeroClasses from './classes/Hero';


// const ironman = new SuperHero('Ironman', 1, 55);
const ironman = new Hero('Ironman', 10, 55);

console.log( ironman );
console.log( ironman.power );

printObject("Hola")

console.log(genericFunction(15.456).toFixed(0));





