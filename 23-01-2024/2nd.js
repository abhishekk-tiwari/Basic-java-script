// // let user = {
// //     firstName: 'abhishek',
// //     lastName: 'tiwari',
// //     marks: 213,
// //     section: "A"
// //     ,
// //     sayHi() {
// //         let hello = () => {
// //             console.log(this.firstName)
// //             hello()
// //         }
// //     }
// // }

// // // user.sayHi()



// // let user1 = {
// //     age: 20
// // }
// // let user2 = {
// //     age: user1.age
// // }


// // user1.age = 'abhishek'

// // // console.log(user1.age)
// // // console.log(user2.age);

// // let a = {}
// // let b = {}
// // console.log(a == b)



// // // cloning
// // let userData = {
// //     name: 'abhishek',
// //     age: 21
// // }

// // let clone = {}

// // for (let i in userData) clone[i] = userData[i]

// // clone.name = 'clone'
// // console.log('User Data :', userData, 'Clone :', clone)


// // let user3 = { name: 'john' }

// // let permissison1 = { canView: true }
// // let permissison2 = { canEdit: false }

// // Object.assign(user3, permissison1,permissison2)

// // // console.log(user3);

// // // Constructor function

// function User(){
//     this.name = 'jack-'
//     this.isAdmin = false
// }


// let user =  new User()

// console.log(user)



// let user1 = new function(){
//   this.name = 'john'
//   this.isAdmin = false
// }


// let user = {
//     address: {
//         street: 'indore'
//     }
// };
// console.log(user.address? user.address.street : undefined)


// let user = {}
// console.log(user.address && user.address.street && user.address.street.name)



// let user = null;
// let x = 0
// user?.sayHi(x++)
// console.log(x)


// let str = 'hello'

// str.test = 5
// console.log(str.test)



// let billion = 1_000_000_000;
// console.log(typeof billion)


// let arr = new Array()
// arr = [1, 2, 3, 4, 5, 5, 6, 7]

// console.log(arr.at(-1))



let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// arr.pop()
// arr.push(2)
// arr.shift()
// arr.unshift(0)

// for (let number of arr) console.log(number);
// console.log(' ');
// for (let number in arr) console.log(arr[number]);

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
// console.log(matrix[1][1])

// console.log(arr)
// console.log(String(arr) === "1,2,3,4,5,6,7,8,9")  


// arr = ['a','b']

// arr.push(function(){
//     console.log(this)
// })

// arr[2]()

// let pop = arr.pop()
// console.log(pop)


// arr.splice(2, 2, 60, 68)



// let a = arr.slice(1, 3)

// console.log(a)

// let arr2 = [10, 11, 12, 13, 14, 15]

// let arr3 = arr.concat(10, 11,[12, 13])
// console.log(arr3)

// let objList = {
//     0: 'something',
//     length: 1,
//     arr: [1, 2, 3, 4, 5, 6, 7, 8, 9]
// }

// console.log(arr.concat(objList))

let arr2 = ['a', 'b', 'c', 'a', 'd', 'e', 'f', 'g']
// let u = []
// arr2.forEach((item, index, array) => {
//     u.push(item + index)
// })
// console.log(u)


// console.log(arr2.lastIndexOf('a'))

let userData = [
    { id: 1, name: 'abhi' },
    { id: 2, name: 'john' },
    { id: 3, name: 'mary' },
]

// let user = userData.find((i) => { return i.id == 1 })
// console.log(user)

// let someUsers = userData.filter(i => i.id < 3)
// console.log(someUsers)

const kvArray = [
    { key: 1, value: 10 },
    { key: 2, value: 20 },
    { key: 3, value: 30 },
];

// const reformattedArray = kvArray.map(({ key, value }) => ({ [key]: value }));
// console.log(reformattedArray);
// let a = arr.sort((a, b) => {
//     if (a < b) return -1;
//     if (a == b) return 0
//     if (a > b) return 1

// })

// let a = arr.sort( (a, b) => a - b );
// console.log(a)

// console.log(arr2.sort((a,b)=> a.localeCompare(b)))

// console.log(arr.reverse())

// let str = 'Hello World!! There is your new javaScript code'
// let array = str.split(' ')
// for(let item of array) console.log(item)

// let array = str.split(' ', 4)
// console.log(array)

// let a = arr2.join(' ')
// console.log(a)

// console.log(arr.reduce((a, b) => a + b
// ))


let str =''
for(let i =0; i<= 4; i++){
    for(let k = 0; k < 4  -i ;k++){
        str += ' '
    }



    for(let j = 0; j< i; j++){
        str =  str +'*'
    }
    str += '\n'
}
console.log(str)