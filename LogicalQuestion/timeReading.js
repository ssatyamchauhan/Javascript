var numberWords =  require('number-to-words')
var readline =  require('readline-sync')

var hour = parseInt(readline.question('enter the  hours'))
var minutes = parseInt(readline.question('enter the minutes'))

var hourWord=numberWords.toWords(hour)
var minutesWord=numberWords.toWords(minutes)
if (minutes<31){
    if(minutes==0){
        console.log(hourWord,"o' clock")
    }
    else if(minutes!==15){
        console.log(minutesWord,"minutes past",hourWord)
    }
    
    else{
        console.log("quarter past",hourWord)
    }
}
else{
    hour=hour+1;
    hourWord = numberWords.toWords(hour)
    if(minutes!=45){
        minutes=60-minutes
        var minutesWord=numberWords.toWords(minutes)
        console.log(minutesWord,"minutes to",hourWord)
    }
    else{
        console.log("quarter to",hourWord)
    }
};