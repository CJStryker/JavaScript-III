/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/

function GameObject(gameAttribs) {
    this.createdAt = gameAttribs.createdAt;
    this.name = gameAttribs.name;
    this.dimensions = gameAttribs.dimensions;
};

GameObject.prototype.destroy = function () {
    return `${this.name} was removed from the game.`;
};

/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

//CharacterStats.prototype.destroy = Object.create(GameObject.prototype.destroy);
CharacterStats.prototype = Object.create(GameObject.prototype);

function CharacterStats(charAttribs) {
    this.healthPoints = charAttribs.healthPoints;
    GameObject.call(this, charAttribs);
};

CharacterStats.prototype.takeDamage = function () {
    return `${this.name} took damage.`;
};

/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/

// Humanoid.prototype.takeDamage = Object.create(CharacterStats.prototype.takeDamage);
Humanoid.prototype = Object.create(CharacterStats.prototype);

function Humanoid(humanAttribs) {
    CharacterStats.call(this, humanAttribs);
    this.team = humanAttribs.team;
    this.weapons = humanAttribs.weapons;
    this.language = humanAttribs.language;
};

Humanoid.prototype.greet = function() {
    return `${this.name} offers a greeting in ${this.language}.`;
};
 
/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:


  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.


  // Stretch task: 
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villain and one a hero and fight it out with methods!

Villain.prototype = Object.create(Humanoid.prototype);

function Villain(villainAttribs) {
    Humanoid.call(this, villainAttribs);
}

Villain.prototype.shoot = function () {
    if (Math.random() > 0.5) {
        if (chris.healthPoints > 0) {
            chris.healthPoints -= 5;
            return `${this.name} shoots his ${this.weapons[0]} at ${chris.name} for 5 hit points!`;
        } else if (chris.healthPoints <= 0) {
            console.log(chris.destroy());
            return `${this.name} has slain ${chris.name}`;
        }
    } else {
        return `${this.name} shoots his ${this.weapons[0]} and misses.`;
    }
}

Hero.prototype = Object.create(Humanoid.prototype);

function Hero(heroAttribs) {
    Humanoid.call(this, heroAttribs);
}

Hero.prototype.swing = function () {
    if (Math.random() > 0.5) {
        if (joe.healthPoints > 0) {
            joe.healthPoints -= 5;
            return `${this.name} swings his ${this.weapons[0]} at ${joe.name} for 5 hit points!`;
        } else if (joe.healthPoints <= 0) {
            console.log(joe.destroy());
            return `${this.name} has slain ${joe.name}`;
        }
    } else {
        return `${this.name} swings his ${this.weapons[0]} and misses.`;
    }
}

const chris = new Hero({
    createdAt: new Date(),
    dimensions: {
        length: 2,
        width: 1,
        height: 1,
    },
    healthPoints: 20,
    name: 'Christopher',
    team: 'The Round Table',
    weapons: [
        'Giant Sword',
        'Shield',
    ],
    language: 'Common Tongue',
});

const joe = new Villain({
    createdAt: new Date(),
    dimensions: {
        length: 2,
        width: 1,
        height: 1,
    },
    healthPoints: 15,
    name: 'Joseph',
    team: 'Forest Kingdom',
    weapons: [
        'Bow',
        'Dagger',
    ],
    language: 'Elvish',
});

function battle() {
    if (chris.healthPoints > 0) {
        console.log(chris.swing());
        console.log(joe.shoot());
    } else {
        console.log(`${chris.name} is dead and can't do anything.`)
    }
}

for (i = 0; i < 10; i++) {
    battle();
} 