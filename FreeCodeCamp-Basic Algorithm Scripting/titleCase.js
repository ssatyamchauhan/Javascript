function titleCase(str) {
  var c=str.toLowerCase();
  var b = c.split(' ');
  var s="";
  for (var i=0;i<b.length;i++){
    var a=b[i].slice(0,1).toUpperCase();
    var s=s+a+b[i].slice(1)+" ";
  }
  return s.slice(0,s.length-1);
}

titleCase("sHoRt AnD sToUt");
