const axios = require('axios')
const fs =  require('fs')
var rl=require('readline-sync')
if(fs.exists("courses.json",(exists)=> {
    if (exists) {
        let fileData = fs.readFileSync("courses.json");
        fileData = fileData.toString();
        let courses = JSON.parse(fileData);
        var availableCourses=courses.availableCourses
        for(var i=0;i<availableCourses.length;i++){
            console.log(i,availableCourses[i]["name"])
        }
        var inputs=rl.question("hello enter your inpuut")
        var id = availableCourses[inputs]["id"]
        console.log(id)
        axios
        .get('http://saral.navgurukul.org/api/courses/'+id+'/exercises')
        .then(json => {
            let index=0
            // var maincontent=json.data
            // console.log(maincontent)
            var exercise=json.data.data
            console.log(exercise)
            if(exercise.length==0){console.log("you have no data")}
            else{
            for(var j of exercise){
                console.log(index,j.name)
                index+=1
                var childexercise=j.childExercises
                let childIndex=1
                if(childexercise.length>0){
                    for(var i of childexercise){
                        console.log("    ",index-1+"."+childIndex,i.name,i.parentExerciseId)
                        childIndex+=1;
                    }
                }
            }
            var input = rl.question("enter the number of exercise for content")
            input=input.split('.')
            console.log(input)
            if(input.length>1){
                var slug=(exercise[input[0]].childExercises[input[1]-1].slug)
                    axios.get("http://saral.navgurukul.org/api/courses/"+id+"/exercise/getBySlug?slug="+slug)
                    .then(response=>{
                        console.log(response.data)
                })
            }else{
                var slug=exercise[input[0]]["slug"]
                console.log(slug)
                axios.get("http://saral.navgurukul.org/api/courses/"+id+"/exercise/getBySlug?slug="+slug)
                .then(response=>{
                    console.log(response.data)
                    })
                }     
            }  
        })   
    }
    else{
        axios
        .get('http://saral.navgurukul.org/api/courses')
        .then(json => {
        // console.log(json.data)
        fs.writeFileSync(__dirname+"/courses.json",JSON.stringify(json.data,null,2))
        })
        .catch(error => console.log(error.response.status))
        }
}));