var order = prompt('please chice  one  of these toys bear or dog or cow or cat you will get one for free:');


while(order !==  'bear'  && order !== 'dog' && order !== 'cow' && order !== 'cat'){

    order = prompt('please chice  one  of these toys bear or dog or cow or cat you will get one for free:');


}


var itemOrder = '';

if(order ===  'dog'){

itemOrder = '<img src="img/dog.png"width="60" height="60"/>';
document.write(itemOrder);


}else if(order == 'bear'){

itemOrder = '<img src="img/bear.png"width="60" height="60"/>';
document.write(itemOrder);


}else if(order == 'cow'){

    itemOrder = '<img src="img/cow.jpg"width="60" height="60"/>';
   document.write(itemOrder);
}else if(order == 'cat'){

    itemOrder = '<img src="img/cat.jpg"width="60"height="60"/>';
   document.write(itemOrder);
}


var noToys = prompt('how many Toys do you want?');

var result = ''; 


for(var i = 0; i < noToys; i ++){


    result = result + itemOrder; 


}

document.write(result);