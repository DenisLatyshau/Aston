/* 3. Создать объект Person несколькими способами, после создать объект Person2, чтобы в нём были доступны методы объекта Person. Добавить метод logInfo чтоб он был доступен всем объектам. */

const person1 = {
    voice() {
        console.log('Hello 1')
    }
}

const person2 = new Object({
    voice() {
        console.log('Hello 2')
    }
})


const person3 = Object.create({}, {
    voice: {
        value: function() {console.log('Hello 3')}
    }
})

const person4 = Object.assign({}, {voice() {console.log('Hello 4')}})

class Person5 {
    constructor() {}
    voice() {console.log('Hello 4')}
}
const person5 = new Person5()




const Person2 = Object.create(person1, {})

const Person22 = {}
Object.setPrototypeOf(Person22, person1)


Object.prototype.logInfo = function() {console.log('LogInfo')}

// ------------------------------------------------------------------

// 4 Создать класс PersonThree c get и set для поля name и конструктором, сделать класс наследник от класса Person.

class PersonThree {
    name  // 

    constructor(name) {
        this.name = name
    }

    get name() {
        console.log(this.name)
    }
    set name(value) {
        this.name = value
    }
}

class PersonFour extends PersonThree {
    constructor(name) {
        super(name)
    }
}


