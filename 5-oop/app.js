'use strict'

const Character = function (race, name, language) {
  this.race = race;
  this.name = name;
  this.language =language;
}

Character.prototype.speak = function (phrase) {
  console.log(`${this.name} сказал ${phrase} на языке ${this.language}`);
}

const Orc = function (name) {
  this.race = 'orc';
  this.name = name;
  this.language = 'orcs';
}

Orc.prototype.create = new Character(this.race, this.name, this.language);
Orc.prototype.weapon = 'Топор';
Orc.prototype.hit = function() {
  console.log(`${this.name} ударил оружием ${this.weapon}`);
}

const Elf = function (name) {
  this.race = 'elf';
  this.name = name;
  this.language = 'elven';
}

Elf.prototype.create = new Character(this.race, this.name, this.language);
Elf.prototype.weapon = 'Лечение';
Elf.prototype.spell = function() {
  console.log(`${this.name} использовал заклинание ${this.weapon}`);
}

const orc1 = new Orc('name1');
console.log(orc1);
orc1.hit();

const elf1 = new Elf('Галадриель');
console.log(elf1);
elf1.spell();