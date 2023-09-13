import { Pet } from './Pets'

class Animal implements Pet {
  constructor (public id: number, public name: string, public happiness: number, public feeding: number) {
  }

  eat (): void {
    console.log(`${this.name} esta comiendo!`)
    this.feeding += 10
    this.feeding = Math.min(this.feeding, 100)
  }

  play (): void {
    console.log(`${this.name} esta jugando!`)
    this.happiness += 20
    this.happiness = Math.min(this.happiness, 100)
  }

  care (): void {
    if (this.feeding < 10) {
      console.log(`${this.name} no quiere pasear debido a que tiene hambre.`)
      return
    } else if (this.happiness < 10) {
      console.log(`${this.name} no quiere pasear debido a que se siente triste :(`)
      return
    }

    console.log(`${this.name} esta paseando jiji!`)
    this.happiness += 30
    this.happiness = Math.min(this.happiness, 100)
  }
}

class Dog extends Animal {
  bark () {
    console.log(this.name + ' esta ladrando')
  }
}

class Cat extends Animal {
  meow () {
    console.log(this.name + ' esta maullando')
  }
}

const myDog = new Dog(1, 'rodo', 9, 9)
const myCat = new Cat(1, 'mishu', 30, 45)

myDog.eat()
myDog.care()

myCat.care()
console.log(myDog)
myDog.play()
