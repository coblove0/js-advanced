class Character {
  constructor (race, name, language) {
    this.race = race;
    this.name = name;
    this.language =language;
  }
  speak(phrase) {
    console.log(`${this.name} сказал ${phrase} на языке ${this.language}`);
  }
}

class Orc extends Character {
  weapon = 'Топор';
  constructor (name) {
    super('orc', name, 'orcs');
  }

  hit() {
    console.log(`${this.name} ударил оружием ${this.weapon}`);
  }
  speak(phrase) {
    console.log(`${this.name} грозно прорычал ${phrase} на языке ${this.language}`);
  }
}

class Elf extends Character {
  weapon = 'Лечение';
  constructor (name) {
    super('elf', name, 'elven');
  }

  spell() {
    console.log(`${this.name} использовал заклинание ${this.weapon}`);
  }
  speak(phrase) {
    console.log(`${this.name} прошептал почти слышно ${phrase} на языке ${this.language}`);
  }
}

const orc1 = new Orc('name1');
console.log(orc1);
orc1.speak('ЗА ОРДУ!')
orc1.hit();

const elf1 = new Elf('Галадриель');
console.log(elf1);
elf1.speak('WESoiofd;J')
elf1.spell();