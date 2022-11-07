import './index'

describe('Array mymethods test', () => {
    describe('map', () => {
        it('should call fn on array elements with element, index and array', () => {
            const fn = jest.fn()
            [1].myMap(fn);
            expect(fn).toBeCalledWith(1, 0, [1])
        })

        it('if an identity function is passed, it must return the same array', () => {
            const arr = [1, 2, 3]
            expect(arr.myMap(e => e)).toEqual(arr)
        })

        it('the original array must not be changed', () => {
            const arr = [1, 2, 3]
            const newArr = arr.myMap(e => e = 3)
            expect(newArr).not.toEqual(arr)
        })

        test.each([
            [[1, 2], e => e + 1, [2, 3]],
            [[123, 123, 123], String, ['123', '123', '123']],
            [[1, 2, 3], (e, _, arr) => arr.reduce((acc, el) => acc + el, e), [7, 8, 9]],            
        ])('should apply function on every element', (array, func, result) => {
            expect(array.myMap(func)).toEqual(result)
        })
    })

    describe('every', () => {
        it('should call fn on array elements with element, array and index', () =>{
            const fn = jest.fn();
            [1].myEvery(fn)
            expect(fn).toBeCalledWith(1, 0, [1])
        })

        test.each([
            [[1, 2, 3], e => !!e, true],
            [['a', 'aaa', 'anvb'], str => /.*\a/g.test(str), true],
       ]) ('should return true if fn return true on every element', (arr, fn, result) => {
        expect(arr.every(fn)).toEqual(result)
       })

       test.each([
        [[1, 2, NaN], e => !!e, false],
        [['a', 'aaa', 'nvb'], str => /.*\a/g.test(str), false],       
       ])('should return false if fn return false one at least one element', (arr, fn, result) => {
        expect(arr.every(fn)).toEqual(result)
       })
    })

    describe('filter', () => {
        it('should return same if true constant functuion is passed', function () {
            expect([1, 2].myFilter(() => true)).toEqual([1, 2])
        })

        it('should call fn on array elements with element, index and array', () => {
            const fn = jest.fn();
            [1].myFilter(fn)
            expect(fn).toBeCalledWith(1, 0, [1])
        })
    
        it('should return same array if identity function is passed', () => {
            const arr = [1, 2, 3]
            expect(arr.myFilter(e => e)).toEqual(arr)
        })
    
        it('should not mutate initial array', () => {
            const arr = [1, 2, 3]
            const newArr = arr. myFilter(e => e > 1)
            expect(newArr).not.toEqual(arr)
        })
    
        test.each([
            [['', undefined, false, 'pease'], e => !!e, ['pease']],
            [[3, 3, 3], e => e === 3, [3, 3, 3]],
            [[{a: 'a'}, {a: 'b'}, {a: 'a'}], e => e.a === 'a' [{a: 'a'}, {a: 'a'}]],
        ])('should return filtered array', (array, fn, result) => {
            expect(array.myFilter(fn)).toEqual(result)
        })
    })

    describe('find', () => { 
        it('should call fn on array elements wwith element, index and array', () => {
            const fn = jest.fn();
            [1].myFind(fn)
            expect(fn).toBeCalledWith(1, 0, [1])
        })

        test.each([
            [[2, 4, 1], e => e % 2, 1],
            [['str', 'a', 'b'], e => e.length === 1, 'a'],
            [[true, false, true], e => !e, false],            
        ])('should return first found element', (arr, func, result) => {
            expect(arr.myFind(func)).toEqual(result)
        })
    })

    describe('some', () => {
        it('should call fn on array elemens', () => {
            const fn = jest.fn();
            [1, 2].mySome(fn)
            expect(fn).toBeCalled()
        })

        it('sould call fn on array elements with element, index and array', () => {
            const fn = jes.fn();
            [1].mySome(fn)
            expect(fn).toBeCalledWith(1, 0, [1])
        })

        test.each([
            [[1, 2, 3], e => !!e, true],
            [['a', 'aaa', 'asdf'], str => /.*\a/g.test(str), true],
            [[1, 2, NaN], e => !!e, true],
            [['a', 'aaa', 'sdf'], str => /.*\a/g.test(str), true],
        ])('should return true if fn return true on at least one element', (arr, fn, result) => {
          expect(arr.mySome(fn)).toEqual(result)
        })

        test.each([
            [[Nan, NaN, Nan], e => !!e, false],
            [['b', 'bbbbb', 'sdf'], str => /.*\a/g.test(str), false],
        ])('should return false if fn return on all elements', (arr, fn, result) => {
            expect(arr.mySome(fn)).toEqual(result)
        })
    })

})