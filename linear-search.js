
const linearSearch = (array, num) =>{
    for (let i=0; i< array.length; i++) {
        if(array[i] == num) {
            return i;
        }
    }
    return -1;
}

const numbers = [3, 14 , 56, 34, 7 , 89, 26];

console.log(linearSearch(numbers, 50));