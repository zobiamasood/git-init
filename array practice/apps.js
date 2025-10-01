 /*var array = [1,2,2,3,4,3,3,5]
for ( var i=0; i<array.length; i++) {
    console.log (i)
    console.log("array :" +array[i])
}
question 5
var array = [10,20,30,40,50]
console.log("array : " + array)
array.reverse(array)
console.log("reverse array : "+array ) 

question 6 
var fruits = ["apple","banana","mango","pineapple"]
var longest = "";
for (var i=0; i<fruits.length; i++) {
    if(fruits[i].length > longest.length) {
        longest = fruits[i];
    }
}
console.log("longest : "+longest) 
var things = ["toys","mouse","fridge","ac","remote"]
var longest = [];
var smallest = things[0];
for(var i=0; i<things.length; i++) {
    if(things[i].length>longest.length) {
        longest = things[i]
    }
     if (things[i].length<smallest.length) {
        smallest= things[i]
    }
}
console.log("array : " + things)
console.log("longest : "+longest)
console.log("smallest : "+smallest)
var array = ["a","e","i","o","u"]
var array = [2,4,2,5,6,4,7]
uniquearr = [];
for(var i=0; i<array.length; i++) {
    duplicate = false
    for(var j=0; j<uniquearr.length; j++ ) {
        if (array[i]===uniquearr[j]) {
            duplicate = true;
            break

        }
    }
if(!duplicate) {
    uniquearr.push(array[i])
}
}
console.log("original array : "+array)
console.log("unique array :" +uniquearr)*/
function  myfunction(a) {a
    var word =["web","developement"]
    var longest = "";
    for (var i=0; i<word.length; i++) {
        if (word.length>longest.length) {
            longest= word[i]
        }
    }
    

}
 console.log((myfunction("web developement")))


