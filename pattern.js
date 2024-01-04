// print
//      1
//    1   2
//   1     3
//  1       4
// 1 2  3  4 5

y = [[0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0] ]


console.log(y);
console.log("------------------");


for (let i = 0; i<6; i++){
    for( let j = 0; j<9; j++)
    {
        if( i+4 == j){     //1     // 1 2 3 4 5
            y[i][j] = i+1
        }

        if(i+j == 4)               // 1 //2
        {
            y[i][j]=1;
        }
        if (i == 4 && (0 == j%2))    // 2 3 4 5  //3
        {
            y[i][j] = (j+2)/2;
        }
    }
}
console.log(y);
console.log("------------------");


for(i = 0; i<5; i++){
    a= "";
    for(j = 0; j<9; j++){
        if (y[i][j] == 0)
        {
            y[i][j] = " ";
        }
        a = a + y[i][j];
    }
    console.log(a);
}

console.log("---------------------------------")

console.log(y);

// function specificHollowPyramid(n) {
//     for (let i = 1; i <= n; i++) {
//       let spaces = " ".repeat(n - i);
//       let numbers = "";
  
//       for (let j = 1; j <= i; j++) {
//         numbers += j + (j === i ? "" : "  ");  // Add spaces after numbers except for the last in each row
//       }
  
//       console.log(spaces + numbers);
//     }
//   }

//   console.log('_______');
//   console.log(" ".repeat(5 - 0));
//   console.log('_______');
  
//   // Example usage:
//   specificHollowPyramid(5);