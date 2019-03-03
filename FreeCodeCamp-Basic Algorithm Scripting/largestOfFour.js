function largestOfFour(arr) {
   // You can do this!
   var amax=[];
   for (var i=0;i<arr.length;i++){
     var a=arr[i];
     var b =Math.max(...a);
     amax.push(b);
   };
 };
