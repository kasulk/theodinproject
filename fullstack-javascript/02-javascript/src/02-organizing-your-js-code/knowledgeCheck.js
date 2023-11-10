// 1. Write an object constructor and instatiate the object

function Hero(name, level) {
  this.name = name;
  this.level = level;
  this.laugh = function () {
    console.log("hahahaha");
  };
}

const icke = new Hero("icke", 7);

console.log(icke);
console.log(icke instanceof Hero);
console.log(Object.getPrototypeOf(Hero.prototype));
icke.laugh();

// 2. Describe what a prototype is and how it can be used
// --> The prototype is another object that the original object inherits from, and has access to all of its prototype's methods and properties

// 3. Explain prototypal inheritance
// 4. Understand the basic do's and don't's of prototypal inheritance
// 5. Explain what 'Object.create' does.
// 6. How does 'this' behave in different situation?
