/* Создайте класс Car у которого есть марка, модель и пробег (все свойства приватные, задаются в конструкторе). 

Сделайте для него возможность менять пробег через get и set.
Добавьте метод info, который выводит в консоль марку, модели и пробег. */

class Car {
  #mark;
  #model;
  #odometr;

  constructor(mark, model, odometr) {
    this.#mark = mark;
    this.#model = model;
    this.#odometr = odometr;
  }
  
  get odometr() {
    return this.#odometr;
  }

  set odometr(odo) {
    this.#odometr = odo;
  }

  info() {
    console.log(`Информация об автомобиле. Марка: ${this.#mark}, модель: ${this.#model}, пробег: ${this.#odometr}`);
  }
}

const tesla = new Car('Tesla', 'Cybertruck', 1000);
console.log(tesla.odometr);
tesla.odometr = 2000;
tesla.info();
