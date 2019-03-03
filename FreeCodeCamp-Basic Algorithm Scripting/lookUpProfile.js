function lookUpProfile(name, prop){
// Only change code below this line

for (var i =0;i<contacts.length;i++){
  var k=contacts[i];
  var f=k["firstName"];
  if (f==name){
    if(k.hasOwnProperty(prop)){
      return k[prop];
    }
    else{
      return "No such property";
    }
    }
  }
  if (i==contacts.length){
    return "No such contact"
  }
  // return "No such contact";

// Only change code above this line
}

// Change these values to test your function
lookUpProfile("Akira", "likes");
