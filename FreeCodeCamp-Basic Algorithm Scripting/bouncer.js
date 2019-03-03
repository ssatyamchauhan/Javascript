function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  var a=[false, null, 0, "", undefined];
  var b=[];
  for (var i=0;i<arr.length;i++){
    var c=0;
    for (var j =0;j<a.length;j++){
      if(arr[i]===a[j]){
        c+=1;
      }
    }
    if(c>0){
      continue
    }
    else if(Number.isNaN(arr[i])){continue;}
    b.push(arr[i]);

  }
  return b;
}

bouncer([7, "ate", "", false, 9]);
