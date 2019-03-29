
function encryption(s){
    var sent=s.replace(/\s/g, "");
    // console.log(sent)
    var length=sent.length;
    var sqrt=(Math.sqrt(length))
    var roundoff2=Math.ceil(sqrt)
    // console.log(roundoff2)
    let k=0;
    let list1=[];
    let count=0;
    let string='';
    for(var i=0;i<roundoff2;i++){
        for(var j=k;j<k+roundoff2;j++){
          if(j<sent.length){string+=sent[j]}
        }
        k=j
        if(string.length>0){list1.push(string)}
        string='';
    }
    
    var j = 0
    k = 0;
    var mainString = '';
    var i = 0
    while (i < list1.length) {
        if (i == list1.length - 1) {
            if (j < list1[0].length * list1[0].length) {
                j = j + i
                if (k < list1[i].length) { string = string + list1[i][k] }

                mainString = mainString + string + ' ';
                string = ''
                k = k + 1
                i = 0;
                continue;
            }
            else {
                break
            }
        }
        else {
            if (k > list1.length || string=='undefined') { break }
            string = string + list1[i][k]
        }
        i = i + 1

    }
    return mainString;
    }
console.log(encryption("a"))
