 let numbers = [1000, 900, 500, 400, 100, 90, 50 ,40 , 10, 5, 4, 1];

 const cov = {
     1: 'I',
     4: 'IV',
     5: 'V',
     9: 'IX',
     10: 'X',
     40: 'XL',
     50: 'L',
     90: 'XC',
     100: 'C',
     400: 'CD',
     500: 'D',
     900: 'CM',
     1000: 'M'
 };
 
const covertToRoman = (num) => {
    let output ='';
    let i = 0;
    while (num > 0) {
        const subtract = numbers[i];
        if (subtract > num) {
            i++;
        } else {
            num -= subtract;
            output += cov[subtract];
        }
    }
    return output;
}
/*subtract = 1000
subtract = 900
subtract = 500 400 40  
10     26    X   */


console.log(covertToRoman(36));