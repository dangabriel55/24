
const selectionSort = (array) =>{

    for (let i=0; i<= array.length - 1; i++){
        let minIndex = i;
        for (let j = i+1; j< array.length; j++){
         if (array[j] < array[minIndex]){
             minIndex = j;
         }
         }
         const temp = array[i];
         array[i] = array[minIndex];
         array[minIndex] = temp;
        }
         
    return array
}



console.log(selectionSort([4, 8, 1 , 888, 45 , 34 , 48 ,2]))