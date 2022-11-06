
//Написать свою реализацию функций: map, filter, find, some, every.
//Попробывать для функций написать unit-тесты.


Array.prototype.myMap = function (callback) {
    let newArr = [];
    for (let i = 0; i < this.length; i++) {
        newArr[i] = callback(this[i], i, this)
    }
    return newArr
}

Array.prototype.myEvery = function (f) {
    for (let i = 0; i < this.length; ++i) {
        if (!f(this[i], i, this)) {
            return false
        }
    }
    return true
}

Array.prototype.myFilter = function (f) {
    const newArr = []
    for (let i = 0; i < this.length; ++i) {
        if (f(this[i], i, this)) {
            newArr.push(this[i])
        }
    }
    return newArr
}

Array.prototype.myFind = function (f) {
    for (let i = 0; i < this.length; ++i) {
        if (f(this[i], i, this)) {
            return this[i]
        }
    }
}

Array.prototype.mySome = function (f) {
    for (let i = 0; i < this.length; ++i) {
        if (f(this[i], i, this)) {
            return true
        }
    }
    return false
}