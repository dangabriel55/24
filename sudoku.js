
const rows = [
    [ 5, 3, 4,  6, 7, 9,  8, 2, 2 ],
    [ 6, 7, 2,  1, 9, 5,  3, 4, 7 ], 
    [ 6, 9, 8,  3, 4, 2,  7, 6, 5 ],
  
    [ 8, 5, 9,  7, 6, 1,  4, 2, 1 ],
    [ 4, 2, 6,  8, 5, 3,  7, 8, 1 ],
    [ 7, 1, 3,  9, 2, 4,  8, 5, 6 ],
  
    [ 9, 6, 1,  5, 3, 7,  2, 8, 4 ],
    [ 2, 8, 7,  4, 1, 9,  6, 3, 5 ],
    [ 3, 4, 5,  2, 8, 6,  1, 8, 8 ],
  ];

  const rowSet = new Set()
  const columnSet= new Set()

  for (i=0; i<rows.length; i++) {
        const row= rows[i];
        for (j=0; j<row.length; j++) {
          const rowNumber = row[j] 
          const columnNumber = rows[j][i]

            if (rowNumber !== '.') {
                if (columnSet.has(rowNumber)) return false
                columnSet.add(rowNumber)
            }

          if(rowNumber !== '.') {
              if (rowSet.has(rowNumber)) return false
              rowSet.add(rowNumber)
          }
       }

   rowSet.clear()
   columnSet.clear()
  }
