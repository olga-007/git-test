/* eslint-disable no-console */
// see https://javascript.info/array-methods#tasks

// Translate border-left-width to borderLeftWidth
function task1() {
    function camelize(str) {
        const result = str.split('-').map((item, index) => {
            if (index !== 0 && item) {
                return item[0].toUpperCase() + item.slice(1).toLowerCase();
            }
            return item.toLowerCase();
        }).join('');
        return result;
    }

    console.log(camelize('background------color'));
    console.log(camelize('list-style-IMaGe'));
    console.log(camelize('-----webkit-transition'));
}

// Filter range
function task2() {
    function filterRange(arr, min, max) {
        return arr.filter((item) => item >= min && item <= max);
    }
    const arr = [5, 3, 8, 1];
    const filtered = filterRange(arr, 1, 4);

    console.log(`filtered array: ${filtered}`); // 3,1 (matching values)
    console.log(`original array: ${arr}`); // 5,3,8,1 (not modified)
}

// Filter range "in place"
function task3() {
    function filterRangeInPlace(arr, min, max) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < min || arr[i] > max) {
                arr.splice(i, 1);
            }
        }
    }
    const arr = [5, 3, 8, 1];
    filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

    console.log(`filtered in place: ${arr}`); // [3, 1]
}

// Sort in decreasing order
function task4() {
    const arr = [5, 2, 10, -10, 8];
    arr.sort((a, b) => b - a);

    console.log(arr); // 10, 8, 5, 2, -10
}

// Copy and sort array
function task5() {
    function copySorted(arr) {
        // return Array.from(arr).sort();
        return arr.slice().sort();
    }
    const arr = ['HTML', 'JavaScript', 'CSS'];
    const sorted = copySorted(arr);

    console.log(`sorted: ${sorted}`); // CSS, HTML, JavaScript
    console.log(`original: ${arr}`); // HTML, JavaScript, CSS (no changes)
}

// TASK 6, Extendable calculator
// TODO: implement

// Map to names
function task7() {
    const john = { name: 'John', age: 25 };
    const pete = { name: 'Pete', age: 30 };
    const mary = { name: 'Mary', age: 28 };
    const users = [john, pete, mary];

    const names = users.map((item) => item.name);

    console.log(`names: ${names}`); // John, Pete, Mary
}

// Map to objects
function task8() {
    const john = { name: 'John', surname: 'Smith', id: 1 };
    const pete = { name: 'Pete', surname: 'Hunt', id: 2 };
    const mary = { name: 'Mary', surname: 'Key', id: 3 };
    const users = [john, pete, mary];

    // note that we have to use an additional pair of braces ()
    const usersMapped = users.map((item) => ({
        fullName: `${item.name} ${item.surname}`,
        id: item.id,
    }));

    /*
    usersMapped = [
        { fullName: "John Smith", id: 1 },
        { fullName: "Pete Hunt", id: 2 },
        { fullName: "Mary Key", id: 3 }
    ]
    */
    console.log(usersMapped);
}

// Sort users by age
function task9() {
    function sortByAge(arr) {
        return arr.sort((a, b) => a.age - b.age);
    }
    const john = { name: 'John', age: 25 };
    const pete = { name: 'Pete', age: 30 };
    const mary = { name: 'Mary', age: 28 };
    const arr = [pete, john, mary];

    sortByAge(arr);

    console.log(arr[0].name); // John
    console.log(arr[1].name); // Mary
    console.log(arr[2].name); // Pete
}

// Shuffle an array
function task10() {
    function shuffleSort(arr) {
        // Because the sorting function is not meant to be used this way,
        // not all permutations have the same probability.
        return arr.sort(() => Math.random() - 0.5);
    }

    // using Fisher-Yates algorithm
    function shuffleBetter(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const k = Math.floor(Math.random() * (i + 1));
            // swap array elements using destructuring assignment syntax
            [arr[i], arr[k]] = [arr[k], arr[i]];
        }
        return arr;
    }

    function shuffle(arr, shuffleFn) {
        console.log(shuffleFn.name);
        for (let i = 0; i < 5; i++) {
            shuffleFn(arr);
            console.log(arr);
        }
    }

    shuffle([1, 2, 3], shuffleSort);

    shuffle([1, 2, 3], shuffleBetter);
}

// Get average age
function task11() {
    function getAverageAge(arr) {
        return arr.reduce((sum, item) => sum + item.age, 0) / arr.length;
    }
    const john = { name: 'John', age: 25 };
    const pete = { name: 'Pete', age: 30 };
    const mary = { name: 'Mary', age: 29 };
    const arr = [john, pete, mary];

    console.log(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28
}

// Filter unique array members
function task12() {
    function unique(arr) {
        const newArr = [];

        arr.forEach((element) => {
            if (!newArr.includes(element)) {
                newArr.push(element);
            }
        });

        return newArr;
    }

    const strings = ['Hare', 'Krishna', 'Hare', 'Krishna',
        'Krishna', 'Krishna', 'Hare', 'Hare', ':-O',
    ];

    console.log(unique(strings)); // Hare, Krishna, :-O
}

// Create keyed object from array
function task13() {
    function groupByIdIterate(arr) {
        const usersById = {};

        arr.forEach((element) => {
            usersById[element.id] = element;
        });

        return usersById;
    }
    function groupByIdReduce(arr) {
        return arr.reduce((usersById, current) => {
            usersById[current.id] = current;
            return usersById;
        }, {});
    }
    const users = [
        { id: 'john', name: 'John Smith', age: 20 },
        { id: 'ann', name: 'Ann Smith', age: 24 },
        { id: 'pete', name: 'Pete Peterson', age: 31 },
    ];

    /*
    {
      john: {id: 'john', name: "John Smith", age: 20},
      ann: {id: 'ann', name: "Ann Smith", age: 24},
      pete: {id: 'pete', name: "Pete Peterson", age: 31},
    }
    */
    console.log(groupByIdIterate(users));
    console.log(groupByIdReduce(users));
}
