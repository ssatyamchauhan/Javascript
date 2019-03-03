function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  arr.sort(function(a, b) {
  return a - b;
});
for (var i=0;i<arr.length;i++){
  if (arr[i]==num){
    return i;
  }
  else if(arr[i]>num){
    return i;
  }
}
if (num>arr[arr.length-1]){return i;}
return 0;
}

getIndexToIns([2, 20, 10], 19);
