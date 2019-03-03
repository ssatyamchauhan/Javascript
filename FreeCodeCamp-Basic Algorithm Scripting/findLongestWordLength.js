function findLongestWordLength(str) {
  var a=0;
  var c =0;
  var b="";
  for (var i =0;i<str.length;i++){
    if (str[i]==" "){
      b=""
      if (c<a){
        c=a;
        a=0;
      }else{
        a=0;
        continue;
      }
    }
    else{
      a+=1;
      b+=str[i];
    }
  }
  if (a>c){
    return a;
  }
  return c;

}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
