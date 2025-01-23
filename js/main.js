// ------------------------Завдання 1------------------------------
// Cтворити масив Arr1 за значеннями: 1, 5, “4”, “hello” ; і Arr2 зі значеннями: true,2, {}, [“a”], 222 . Вивести в консоль 2-гий елемент (по індексу) кожного з масивів і їх суму.

// const arr1 = [1,5,"4","hello"];
// const arr2 = [true,2,{},["a"],222];
// console.log(arr1[1]);
// console.log(arr2[3][0]);
// console.log(arr1[1] + arr2[3][0]);



// ------------------------Завдання 2------------------------------
// Створіть масив рядків. Виведіть в консоль значення першого елементу. Змініть значення останнього елементу.

// const list = ['1','gg','hello','']
// console.log(list[0])
// list[3] = 'a'
// list[list.length] = ';444'
// console.log(list)




// const numbersArr = [5, 7, 13, 33, 50];
// for (let i = 0; i < numbersArr.length; i++) {
//     console.log('Елемент масиву ' + numbersArr[i])
// }
// for(let element of numbersArr){
//     console.log('Елемент масиву ' + element)
// }

// ------------------------Завдання 1------------------------------
console.log('---------Завдання 1-------------')
let numberList = [1,2,3];
numberList[1] = 10
console.log(numberList)

// ------------------------Завдання 2------------------------------
console.log('---------Завдання 2-------------')
let wordsList = ['My', 'name', 'is']
wordsList[wordsList.length] = 'Taras'
console.log(wordsList)

// ------------------------Завдання 3------------------------------
console.log('---------Завдання 3-------------')

numberList = [1, 22, 333, 4444];
const sum = numberList.reduce((sum,num) => sum + num,0)
console.log(`Сума чисел в масиві: ${sum}`);

// ------------------------Завдання 4------------------------------
console.log('---------Завдання 4-------------')
numberList = [1, 2, 3, 4, 5];
for(numberss of numberList) {
    console.log(numberss)
}

// ------------------------Завдання 5------------------------------
console.log('---------Завдання 5-------------')
wordsList = ['helloo', 'hi', 'leason', 'number', 'fly'];
for(let i=0; i<wordsList.length;i++) {
    if(wordsList[i].length <= 5) {
        continue
    }
    console.log(wordsList[i])
}

// ------------------------Завдання 6------------------------------
console.log('---------Завдання 6-------------')
numberList = [1,22,100,4,17,14,65,8,90,52];
let maxnum = numberList[0]
for(let i=0; i<numberList.length; i++) {
    if(numberList[i] > maxnum) {
        maxnum = numberList[i];
    }
}
console.log(maxnum)
// let maxnum = Math.max(...numberList)
// console.log(maxnum)

// ------------------------Завдання 7------------------------------
console.log('---------Завдання 7-------------')
numberList = [1,22,100,4,17,14,65,8,90,52];
for(i=0; i<numberList.length; i++) {
    if(numberList[i] % 2 !== 0) {
        continue
    }
    console.log(numberList[i])
}