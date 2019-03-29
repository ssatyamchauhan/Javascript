// a="racecar";
// // b=a.split('')
// // console.log(b);
// b="";
// for (i=a.length-1;i>=0;i--){
//   b+=a[i]
// }
// if (b==a){
//   console.log("yes it is palindrome");
// }else{
//   console.log("no it is not");
// }

a="malayalam";
b=a.split("")
len=0;
console.log(b);
for (i=a.length-1;i>=0;i--){
  if (b[i]===b[len]){
    len+=1
  }else{
    console.log("It is not a Palindrome");
    break
  }
}
if (len===b.length){
  console.log("yes it is Palindrome");
}
