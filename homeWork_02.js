// Задание 1 – Создать объект counter всеми возможными способами;
const counter1 = {count: 1}

const counter2 = new Object({count: 2})

function CounterFunc(count) {
    this.count = count
}
const counter3 = new CounterFunc(3)

class CounterClass {
    constructor(count) {
        this.count = count
    }
}
const counter4 = new CounterClass(4)

const counter5 = Object.create({}, {
    count: {
        value: 5,
        writable: true,
        configurable: true,
        enumerable: true
    }
})

const counter6 = Object.assign({}, counter1)

const entries = [['count', 7]]
const counter7 = Object.fromEntries(entries)

//Proxy... не совсем создается объект... скорее делается обертка... но решил написать

const counter8 = new Proxy(counter1, {
    get(target, prop) {
        console.log(`get Proxy prop`)
        return target[prop]
    },
    set(target, prop, value) {
        if (prop in target) {
            console.log(`set Proxy prop`)
            target[prop] = value
        } else {
            console.error('Error')
        }
    },
    has(target, prop) {
        console.log('has Proxy prop')
        return ['count'].includes(prop)
    },
    deleteProperty(target, prop) {
        console.log('delete Proxy prop')
        delete target[prop]
        return true
    }
})


//Задание 2 – Скопировать объект counter всеми возможными способами;

const newCounter1 = {...counter1}
const newCounter2 = Object.assign({}, counter2)

import _ from 'lodash'
const newCounter3 = _.clone(counter3)
const newCounter4 = _.cloneDeep(counter4)

const newCounter5 = JSON.parse(JSON.stringify(counter5))

function copyObject(obj) {
    const copyObject = {...obj}
    Object.keys(copyObject).forEach(key => {
        if (typeof copyObject[key] ==='object') {
            copyObject[key] = copyObject(obj[key])
        } else {
            copyObject[key] = obj[key]
        }
    })
    return copyObj
} 
const newCounter6 = copyObject(counter1)

const newCounter7 = structuredClone(counter7)

// Задание 3 – Создать функцию makeCounter всеми описанными и возможными способами;
function makeCounter1(count) {
    return count + 1
}

const makeCounter2 = function(count) {
    return count + 1
}

const makeCounter3 = count => count + 1

const makeCounter4 = function makeCounte(count) {
    return count + 1
}

function makeCounter5(makeCounter1) {
    return makeCounter1
}