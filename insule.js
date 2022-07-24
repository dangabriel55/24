
const insule =(grid) =>{
    const visited= grid.map(row=>row.map(cell=>false));
    let islandCount= 0;

    for(let i=0; i < grid.length; i++){
        for(let j=0; j<grid[i].length; j++){
            if(dfs(i, j, grid, visited)) islandCount++;
        }
    }




    return islandCount;
}


const info = [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"],
];

console.log(insule(info));
