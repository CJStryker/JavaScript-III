/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding is when 'this' is called outside of an object or a function it binds to the window.
* 2. Implicit binding means 'this' is whatever function or object above the one it is called within, or is to the 'left'.
* 3. New binding means that whenever you invoke the new function javascript will create a new object and call it 'this'.
* 4. Explicit binding means we are specifing what we want 'this' to be using the functions apply, call, and bind.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

console.log(this);
function speak(words) {
    "use strict";
    console.log(this);
    return `${words}`;
}
console.log(speak('HELLO!'));

// Principle 2

// code example for Implicit Binding

const troll = {
    name: 'William',
    age: 1000,
    food: 'People',
    cook: function () {
        return `${this.name} likes to cook ${this.food}`;
    }
}
console.log(troll.cook());

// Principle 3

// code example for New Binding

const box = new Box('param');
function Box(contents) {
  this.contents = contents;
  this.openup = function() {
    console.log(`This box contains ${this.contents}.`);
  }
}
const wivesGift = new Box('a gold ring');
console.log(wivesGift);
wivesGift.openup();

// Principle 4

// code example for Explicit Binding

const person = {
    name: 'Christopher'
}
const skills = ["Walk", "Run", "Drive", "Swim"];
const skill = "Fly";
function doStuff(thiss, that, thing, other) {
    "use strict";
    console.log(this);
    return `Hi I am ${this.name} and I can ${thiss}, ${that}, ${thing}, and ${other}. I cannot ${skill}`;
}
console.log(doStuff.apply(person, skills));
console.log(doStuff.call(person, skills[1], skills[0], skills[3], skills[2]));
const personStr = JSON.stringify(person);
console.log(personStr);
const personObj = JSON.parse(personStr);
console.log(personObj);
const personDoes = doStuff.bind(person, skills[1], skills[0], skills[3], skills[2]);
console.log(personDoes());