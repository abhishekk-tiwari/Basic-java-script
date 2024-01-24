/*
1. Move all negative numbers to beginning and positive to end with constant extra space
2. Find whether an array is subset of another array
3. Given a boolean 2D array, where each row is sorted. Find the row with the maximum number of 1s.
4. Find the smallest positive number missing from an unsorted array
5. Given a sorted array and a number x, find the pair in array whose sum is closest to x 
*/

// 1. Move all negative numbers to beginning and positive to end with constant extra space

let arraySort = [1, 2, -1,8,5, -7, -5]
// arr.sort((a, b) => a - b)
function sortArray(arr) {
    for (let i = 0; i <= arr.length; i++) {
        for (let j = 0; j <= arr.length - i; j++)
            if (arr[j] > arr[j + 1]) {
                // let temp = arr[j]
                // arr[j] = arr[j + 1]
                // arr[j + 1] = temp
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
    }
    return arr.join(' , ')
}
console.log(sortArray(arraySort))
// Output :~  -8 , -7 , -6 , -5 , -1 , 1 , 2 , 5 , 7 , 8

// --------------------------------------------------------------------------------------------------------------

// 2. Find whether an array is subset of another array
let mainArray = [1, 2, 3, 4, 5, 6];
let subSetMaybe1 = [1, 2];
let subSetMaybe2 = [1, 2, 8];
function isSubset(array1, array2) {
    for (let i = 0; i < array1.length -1 ; i++) {
        if (!array2.includes(array1[i])) {
            console.log(`is not a sub set: ${array2}`)
            return false;
        }
    }
    console.log(`is a sub set: ${array1}`)
    return true;
}
// console.log(isSubset(subSetMaybe1, mainArray))

// --------------------------------------------------------------------------------------------------------------

// 3. Given a boolean 2D array, where each row is sorted. Find the row with the maximum number of 1s.

let findOne = [
    [1, 1],
    [2, 3],
    [4, 5],
    [6, 1]
]
let data = 1
let count = 0

for (let i = 0; i < findOne.length; i++) {
    for (let j = 0; j < findOne.length - i; j++) {
        if (data == findOne[i][j]) {
            // console.log(`${i} , ${j} here`)
            count++
        }
    }
}


// --------------------------------------------------------------------------------------------------------------

// 4. Find the smallest positive number missing from an unsorted array
arraySort = [1, 2, 2, 5, 7, 8, -1, -8, -6, -5, -7]

function smallestPositive(arr) {
    let b = arr.filter((items) => items > 0)
    sortArray(arr)
    let smallPositive = b[0]
    console.log(smallPositive)
}
smallestPositive(arraySort)

// Output :~ 1

// --------------------------------------------------------------------------------------------------------------

// 5. Given a sorted array and a number x, find the pair in array whose sum is closest to x
let arr = [1, 2, 3, 4, 5, 6]

function pairFinder(arr, sum) {
    let pair1;
    let pair2;
    sortArray(arr)
    for (let i = 0; i <= arr.length; i++) {
        for (let j = 0; j <= arr.length - i; j++) {
            if (sum === arr[j + 1] + arr[j]) {
                pair1 = arr[j + 1]
                pair2 = arr[j]
            }
        }
    }
    console.log(pair1, pair2)
}
pairFinder(arr, 5)

// Output :-   [3, 2]

// --------------------------------------------------------------------------------------------------------------

/*
Dry run
let arr = [1, 2, 2, 3, 4, 5, 6]

i
{
    i = 0
    0 <= 4
    -----------
    i = 1
    1 <= 4
}

j
{
    j = 0
    0 <= 4 -1
    0 <= 3

    condi:-
    if 5 !=== 2 + 1;
    false
------------------------------------------   
    j = 1
    1 <= 3

    condi :-
    if 5 === 2 + 2;
    false
------------------------------------------
    j = 2
    2 <= 3

    condi :-
    if 5 === 3 + 2;
}

*/


