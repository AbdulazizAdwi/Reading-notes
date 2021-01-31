// THIS IS A JS COMMENT 

/*




*/ 

function getName(){

    var userName = prompt('Enter your name:');
   console.log(userName);
   console.log(typeof prompt);
   for(var i=0; i < 10; i++){
      console.log(i);
   }
}

getName(); 
// a and b are the input
var getsum = function(a,b){
var c = a + b;
// c is the output 
    return c; 

};

var sum = getsum(10 ,  4);

console.log(sum);
