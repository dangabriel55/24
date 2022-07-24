

 /*function dan (numar) {
    console.log('ana')
    return numar +numar
    
 }


 console.log(dan(4));
*/

/*let a=1;
let b=2;

temp = a ;
a =b;
b=temp;  */

 try {

let a=1;
let b=2 ;
[a,b] = [b, a];

console.log(a);
console.log(b);
 }
 catch(ex){
    console.error(ex);
 }