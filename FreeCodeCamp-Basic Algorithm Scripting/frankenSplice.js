function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
 var b=arr2.slice();
 for (var i=arr1.length-1;i>=0;i--){
      b.splice(n,0,arr1[i]);
}
return b;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
