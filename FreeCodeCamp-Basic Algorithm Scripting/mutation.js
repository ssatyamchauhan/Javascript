function mutation(arr) {
  var a = arr[0].toLowerCase();
  var b = arr[1].toLowerCase();

  for (var i=0;i<b.length;i++){
    var c=0;
    for (var j=0;j<a.length;j++){
      if(b[i]==a[j]){c=c+1;}
    }
    if(c==0){return false}

  }
  return true;
}

mutation(["hello", "Hello"]);
