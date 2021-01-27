var toysType=prompt('write please what you want to buy:)');
var toysCount=prompt('how many toys do you want to order?');

var result0; 


if(toysCount >= 1  &&  toysCount  < 5 ){

result0 = "thank you your discount is 1%";


}else if(toysCount > 3  && toysCount <= 5){

    result0 = "thank you your discount is 15%";

}else if(toysCount ==  10 || toysCount >10 ){

result0 = "thank you and congrats you will have a ticket to the <u>island mistry  </u> please have fun ";

}else{

    result0 = "sorry  you  have a wrong information please try again :)";
}

document.write(result0);
document.getElementById('items0').innerText=toysType;
document.getElementById('count0').innerText=toysCount; 
confirm('are you happy with pur servis?');
alert("thanks to visit toys shop :)");

