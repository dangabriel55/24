
const formatBoard = board => {
    let result = [];
    for(let col=0; col< board.length; col++) {
        let newRow = new Array(board.length).fill('.');
        newRow[board[col]] = "Q";
        result.push(newRow.join(''));
    }
    return result;
}
var totalNQueens = function(n) {
    const result = [];
    const dfs = (i, n, slate) => {
        let lastQ = i-1;
        for(let preQ = 0; preQ< lastQ; preQ++){
            if(slate[preQ]=== slate[lastQ]) return; 

            let rowDiff = Math.abs(preQ-lastQ);
            let colDiff = Math.abs(slate[preQ]-slate[lastQ]);
            if(rowDiff === colDiff) return;
        }
        if (i=== n) {
            result.push(slate.slice());
            return;
        }
        for(let col= 0; col < n; col++) {
            slate.push(col);
            dfs(i+1,n,slate);
            slate.pop();
        }
    }
    dfs(0, n, []);
    return result.map(board => formatBoard(board));
}

console.log(totalNQueens(4));


