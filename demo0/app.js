var order = prompt('what toys you want to buy bear , dog , cat , cow');

while(order !== 'bear' && order !== 'dog' && order != 'cat' && order != 'cow' ){

     order = prompt('what toys you want to buy bear , dog , cat , cow');
  

}

var itemOrder = '';

if(order === 'bear'){
  
 itemOrder = '<img  " src="img/bear.png"width="300"height="300"/>'; 
  
 

}else if(order === 'dog'){

    itemOrder = '<img  " src="img/dog0.png"width="300"height="300"/>'; 
     
}else if(order === 'cow'){
    itemOrder = '<img  " src="img/cow.jpg"width="300"height="300"/>'; 
    
     
}else if(order === 'cat'){

    itemOrder = '<img  " src="img/cat.jpg"width="300"height="300"/>'; 
    
}

var ToysNum = prompt('how many Toys do you want?');
var result = '';

for(var i = 0; i < ToysNum; i++){

result = result + itemOrder

}
document.write(result);
 