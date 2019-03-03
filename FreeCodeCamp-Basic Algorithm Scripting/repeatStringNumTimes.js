function repeatStringNumTimes(str, num) {
  // repeat after me
  var b ="";
  if(num>0){
    for (var i=0;i<num;i++){
      b=str+b;
    }
    return b;
  }
  return "";
}

repeatStringNumTimes("abc", 3);
