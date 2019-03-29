const cheerio = require('cheerio');
const rp = require('request-promise')
const fs = require('fs')

let ratingList=[]
rp("https://www.imdb.com/india/top-rated-indian-movies/?ref_=nv_mv_250_in")
.then((data)=>{
    const s = cheerio.load(data)
  
    var td = s('.titleColumn').text();
    var links=[];
    s('.titleColumn').find('a').each(function(index,element){
      links.push("https://www.imdb.com" + s(element).attr('href'))
    })
    // console.log(links)


    var rating=s('.ratingColumn').text()
    var ratingdata=rating.split("\n")
    for (var i of ratingdata){
      if(i.includes(".")){
        ratingList.push(i.trim())
      }
    }
    var data = td.split('\n')
    // console.log(data)
    var finalList=[];
    var j = 0;
    for (var i=1;i<data.length;i+=4){
      var movieposition=data[i].trim()
      var moviename=data[i+1].trim()
      var movieyear=data[i+2].trim()
      movieDic = {}
      movieDic["position"]=movieposition;
      movieDic["name"]=moviename
      movieDic["year"]=movieyear.slice(1,5)
      movieDic["rating"]=ratingList[j]
      movieDic["url"]=links[j]
      j+=1;
      finalList.push(movieDic)
      
    }
    fs.writeFileSync("task1.json",JSON.stringify(finalList,null,2))
    // console.log(finalList) 
    // return finalList;  
  })
.catch(err=>{
  console.log("error")
});

/////////////////////////////// task2 //////////////////////////////////
let movies=fs.readFileSync('task1.json');
movies=JSON.parse(movies)
let movieYear=[]
console.log(movies)
for(var i of movies){
    if(movieYear.includes(i.year)){
      continue;
    }
    else{
      movieYear.push(i.year)
    }
}
let same_movie_year_dic={};
for(var i of movieYear){
  let sameYear=[]
  for(var j of movies){
    if(i==j.year){
      sameYear.push(j)
    }
  }
  same_movie_year_dic[i]=sameYear;
}
console.log(same_movie_year_dic)
fs.writeFileSync("task2.json",JSON.stringify(same_movie_year_dic,null,2))
console.log(same_movie_year_dic)



////////////////////////////// task3 ////////////////////////////////////////////////
let decade_movie_dic={}
for(var i=1950;i<2020;i+=10){
  let decadeMovie=[]
  for(var j=i;j<i+10;j++){
    for(var k of movies){
      if(k.year==j){
        decadeMovie.push(k)
      }
    }
  }
  decade_movie_dic[i]=decadeMovie
}
fs.writeFileSync("task3.json",JSON.stringify(decade_movie_dic,null,2))
// console.log(decade_movie_dic)






