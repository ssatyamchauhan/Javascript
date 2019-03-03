function findElement(arr, func) {
  let num;
  for (var i =0;i<arr.length;i++){
    if (arr[i]%2===0){
      return arr[i]
    }
  }
  return num

}

findElement([1, 2, 3, 4], num => num % 2 === 0);
