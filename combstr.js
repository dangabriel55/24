
function marcel (str) {
    var comb = [];

    for( var i=0 ; i<str.length; i++) {
        for (var j = i+1; j<str.length+ 1; j++){
            comb.push(str.slice(i,j))
        }
    }
    return comb;
}

console.log(marcel('abc'));
