function test(number) {

    let num = ''
    for (let i = 0; i <= number; i++) {
        for (let j = 0; j <= i; j++) {
            num += '*'
        }
        num += '\n'
    }
    console.log(num)
}


function testTwo(number) {
    let num = ''
    for (let i = 0; i <= number; i++) {
        for (let j = 0; j < number - i; j++) {
            num += ' '
        }
        for (let k = 0; k < i; k++) {
            num += '*'
        }
        num = num + '\n'
    }
    console.log(num)
}


function testThree(number) {
    let num = ''
    for (let i = 0; i < number; i++) {
        for (let j = 0; j < number - i; j++) {
            num += '*'
        }
        num += '\n'
    }
    console.log(num)
}


function testFour(number) {
    let num = ''
    for (let i = 0; i < number; i++) {
        for (let j = 0; j < i; j++) {
            num += ' '
        }
        for (let k = 0; k < number - i; k++) {
            num += '*'
        }
        num += '\n'
    }
    console.log(num)
}



function testNumberOne(number) {
    let num = ''
    for (let i = 1; i <= number; i++) {
        for (let j = 1; j <= i; j++) {
            num += j
        }
        num += '\n'
    }
    console.log(num)
}

function testNumberTwo(number) {
    let num = ''
    for (let i = 1; i <= number; i++) {
        for (let j = 1; j <= number - i; j++) {
            num += ' '
        }
        for (let k = 1; k <= i; k++) {
            num += k
        }
        num += '\n'
    }
    console.log(num)
}


function testNumberThree(number) {
    let num = ''
    for (let i = 0; i <= number; i++) {
        for (let j = 1; j <= number - i; j++) {
            num += j
        }
        num += '\n'
    }
    console.log(num)
}


function testNumberFour(number) {
    let num = ''
    for (let i = 0; i <= number; i++) {
        for (let j = 0; j <= i; j++) {
            num += ' '
        }
        for (let k = 1; k <= number - i; k++) {
            num += k
        }
        num += '\n'
    }
    console.log(num)
}


function testTableOfTwo(number) {
    let num = ''
    let count = 1
    for (let i = 1; i <= number; i++) {
        for (let j = 1; j <= i; j++) {
            num += `${count * 2} `
            count++
        }
        num += '\n'
    }
    console.log(num);
}

function callAll() {
    test(5)
    testTwo(5)
    testThree(5)
    testFour(5)
    testNumberOne(5)
    testNumberTwo(5)
    testNumberThree(5)
    testNumberFour(5)
    testTableOfTwo(5)

}

// callAll();


let obj ={

    name : 'abhishek',
    "last name": 'tiwari'
}

console.log(obj[last name])