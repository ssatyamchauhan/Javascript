function chunkArrayInGroups(arr, size) {
  // Break it up.
  var monkey=[];
  for(var i =0;arr.length>0;i++){
      var chunky=arr.splice(0,size);
      monkey.push(chunky);
  }
  return monkey;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3);
