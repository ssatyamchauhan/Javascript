 function confirmEnding(str, target) {
   // "Never give up and good luck will find you."
   // -- Falcor
   var a=str.length-1;
   for(var i=target.length-1;i>=0;i--){
     if(str[a]==target[i]){
       var b=true;
       a-=1;
     }
     else{
       b=false;
       a-=1;
     }
   }

   return b;
 }

 confirmEnding("Bastian", "n");
