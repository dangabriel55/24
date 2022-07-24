  const s = "["
var isValid = function(s) {

const pairBrkts = {
    "{": "}",
    "(": ")",
    "[": "]"
}
    
 let stk = [];
 let arr = s.toString().split("");

 for (let i = 0; i < arr.length; i++) {
     let br = arr[i];
     if(pairBrkts[br]){
         stk.push(br);
     }
     else{
         let chkBr = str.pop();
         if(pairBrkts[chkBr] != br){
             return false;     
        }
       }
     }
    if(stk.length > 0){
        return false;
    }
    return true;
 };


 isValid("{}");