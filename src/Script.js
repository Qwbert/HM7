function odds(n) {
    let res = new Array(n).fill(0);
    res.forEach((_, i, arr) => arr[i] = 2*i+1);
    return res;
  }
  
  console.log(odds(8));
  
  function even(n) {
  let result = new Array(n).fill(0);
    result.forEach((_, i, arr) => arr[i] = 1*i+1);
    return result;
  }
  console.log(even(8));
  
  var arr1 = [1,2,3,[1,2,3,4, [2,3,4]]];
  
  var arr1 = [1,2,3,[1,2,3,4, [2,3,4]]];
  
  function flattenDeep(arr1) {
     return arr1.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val), []);
  }
  flattenDeep(arr1);