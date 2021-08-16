module.exports = function towelSort (matrix) {
   if (!matrix || !matrix.length) return [];
   let result = [];
   let temp = [];
   for (let i in matrix) {
     for (let z in matrix[i]) {
       temp = [...matrix][i];
       if (!temp) return [];
       if (i % 2 !== 0) result.push(temp[temp.length-1-z]) 
       else result.push(temp[z]);
     }
   }
   return result;
}
