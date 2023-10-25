class Hamster {
    constructor(name) {
        this.owner = ''
        this.name = name
        this.price = 15
    }
    wheelRun() {
        console.log('squeak squeak')
    }
    eatFood() {
        console.log('nibble nibble')
    }
    getPrice() {
        return this.price
    }
}

class Person {
    constructor(name) {
        this.name = name
        this.age = 0
        this.height = 0
        this.weight = 0
        this.mood = 0
        this.hamster = []
        this.bankAccount = 0
    }
    getName() {
        return this.name
    }
    getAge() {
        return this.age
    }
    getWeight() {
        return this.weight
    }
    greet(personName) {
        console.log(`Greetings ${personName}`)
    }
    eat(times) {
        this.weight += times
        this.mood += times
    }
    excercise(times) {
        this.weight -= times
    }
    ageUp(increment) {
        this.age += increment
        this.height += increment
        this.weight += increment
        this.mood += increment
        this.bankAccount += (10 * increment)
    }
    buyHamster(newHamster) {
        this.hamster.push(newHamster)
        this.mood += 10
        this.bankAccount = this.bankAccount - (newHamster.getPrice())
    }
}

const person = new Person('Timmy')
// person.ageUp(5)
person.eat(5)
person.excercise(5)
person.ageUp(9)

// console.log(person)

const hamster = new Hamster('Gus')
hamster.owner = 'Timmy'
console.log(hamster)

person.buyHamster(hamster)
console.log(person)
