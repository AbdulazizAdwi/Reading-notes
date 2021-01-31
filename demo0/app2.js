
// simple msg will display on screen 

     var  num1 = parseInt( prompt('Enter number 1:') ); //'2'
    var num2 = parseInt( prompt('Enter number 2:')); //'3'

    // sum codes 
 
var getSum = function (num1, num2) {

    var c = num1 + num2;
    return c; //'23'

};





var sum = getSum(num1, num2);

// display the sum in alert mode 
alert(sum);

// display the sum in html  

document.getElementById('result0').innerHTML = sum;
 // in case to call a function just put the name of function func(); 