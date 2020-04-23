// ex 1--------------------------------------------

let array = [6, 78, "n", 0, 1]
let array1 = [5]
let array2 = []

function remove(arr, i = 0, length = arr.length - 1) {

    if (arr.length === 1) {
        return []
    }
    arr[i] = arr[i + 1]

    i++

    length--

    if (length === 0) {
        arr.pop()
        return arr
    } else return remove(arr, i, length)

}

console.log(remove(array))
console.log(remove(array1))
console.log(remove(array2))

//// ex 2----------------------------------------

let object = {
    a: "1",
    b: "2"
}

let object1 = {
    a: "1",
    b: "2",
    c: "3"
} // `=`> { 1: ‘a’,  2: [‘b’, ‘c’] }

let object2 = {
    a: "1",
    b: '2',
    c: '2',
    d: '2'
} // => { 1: ‘a’, 2: [‘b’, ‘c’, ‘d’] }

function invert(obj) {

    for (let key in obj) {
        if (obj.hasOwnProperty(obj[key])) {
            let a = obj[obj[key]]
            if (!Array.isArray(a)) {
                obj[obj[key]] = [a]
            }
            obj[obj[key]].push(key)
        } else {
            obj[obj[key]] = key
        }
        delete obj[key]
    }
    return obj
}

console.log(invert(object2))




//// ex 3----------------------------------------

let array = [{
        book: "Catcher in the Rye",
        readStatus: true,
        percent: 40
    },
    {
        book: "Animal Farm",
        readStatus: true,
        percent: 20
    },
    {
        book: "Solaris",
        readStatus: false,
        percent: 90
    },
    {
        book: "The Fall",
        readStatus: true,
        percent: 50
    },
    {
        book: "White Nights",
        readStatus: false,
        percent: 60
    },

    {
        book: "After Dark",
        readStatus: true,
        percent: 70
    }
];

function filter(arr) {

    let sorted = arr.sort((a, b) => {
        if (a.percent > b.percent) {
            return 1
        }
        if (a.percent < b.percent) {
            return -1
        }
        if (a.percent === b.percent) {
            return 0
        }
    })
    let books = []
    for (let i = 0; i < sorted.length; i++) {
        if (sorted[i].readStatus === true) {
            books.push(sorted[i].book)
        }
    }
    return books
}

console.log(filter(array))


//// ex 4 ----------------------------------------


let array = ["a", "b", "c", "d", "e", "f", "g", "h"] //==> [‘d’, ‘e’, ‘f’, ‘g’, ‘h’, ‘a’, ‘b’, ‘c’]
let number = 3
let array1 = ["a", "b", "c", "d", "e", "f", "g", "h"] //=> [‘g’, ‘h’, ‘a’, ‘b’, ‘c’, ‘d’, ‘e’, ‘f’]
let number1 = -2

function rotation(arr, num) {

    if (num < 0) {
        let el = arr.pop()
        arr.unshift(el)
        num = num + 1
    } else {
        let el = arr.shift()
        arr.push(el)
        num = num - 1
    }

    if (num === 0) {
        return arr
    } else return rotation(arr, num)
}

console.log(rotation(array, number))
console.log(rotation(array1, number1))

//// ex 5 ----------------------------------------

let treeNodes = [{
        parent: null,
        id: 0
    },
    {
        parent: 0,
        id: 1
    },
    {
        parent: 0,
        id: 2
    },
    {
        parent: 1,
        id: 3
    },
    {
        parent: 1,
        id: 4
    },
    {
        parent: 2,
        id: 5
    },
    {
        parent: 4,
        id: 6
    },
];


////// This one has a huge bug in it, I havn't figure out how to properly solve this. 

function getTree(arr, result = {}, a = 0) {
    if (arr.length === 0) {
        return result;
    }
    if (arr[0].parent === null) {
        result[arr[0].id] = {};
        arr.shift();
        return getTree(arr, result, )
    }
    if (result[arr[0].parent]) {
        result[arr[0].parent][arr[0].id] = {};
        arr.shift();
        return getTree(arr, result)
    }
    if (result[0].hasOwnProperty(arr[0].parent)) {
        result[a][arr[0].parent][arr[0].id] = {}

        arr.shift()
        return getTree(arr, result)
    }
    a++
    if (result[0][a].hasOwnProperty(arr[0].parent)) {

        result[0][a][arr[0].parent][arr[0].id] = {}

        arr.shift()
    }
    if (arr.length === 0) {
        return result;
    } else return getTree(arr, result, a);
}


console.log(getTree(treeNodes))



    //// ex 6 ----------------------------------------

    -

    //// ex 7------------------------------------------


    function ObjCons() {
        this.map = function map(fn) {
            let result = {};
            for (let key in this) {
                if (typeof this[key] !== "function") {
                    result[key] = fn(this[key]);
                }
            }
            return result
        }
    }

let myObj = new ObjCons()

myObj.num = 9

myObj.mun1 = 10

myObj.string = "str"

let j = myObj.map(el => el * 2)