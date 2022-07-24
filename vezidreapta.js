 
 function mode(arr) {
     const arrObj = {};

     arr.forEach((elem) => {
         //if (!arrObj[elem]) arrObj[elem]= 0;
         arrObj[elem]++;
     });
     return arrObj;
 }

 const arr = [1,2,34,3,1,1,1,2,3,4,5];
 console.log(mode(arr));
