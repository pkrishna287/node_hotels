const packageex = require('./packageex')
//different type of function creation 
/*function add(a,b){
    return a+b;
}*/
/*var add = function(a,b){
    return a+b
}*/

//arrow function
//var add = (a,b) => {return a+b}
/*var add = (a,b) => a+b
var ans = add(19,49)
console.log(ans)

(function(){
    console.log('krishna')
})();*/

//Callback function

/*function callback(){
    console.log('We are using callback function')
};*/
const add = function(a,b,callback){
    var result = a+b;
    console.log(result)
    callback();
}

add(3,67,()=> console.log('completed'))