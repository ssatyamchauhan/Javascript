function shapeArea(n) {
    var a = 0;
    var c=1;
    if (n===1){
        return n;
    }
    else{
        for (i=1;i<n;i++){
            a+=4;
            c+=a;

        }
        return c
    }
}
console.log(shapeArea(3));
