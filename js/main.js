

//var elForm = document.querySelector('.js__form') 
//var elInp = document.querySelector('.js__inp')  
//var elSpan = document.querySelector('.js__span')  
//var elSpanjon = document.querySelector('js__spanjon') 


//var cars = [ 'laseti', 'spark', 'damas', 'Nexia'];  

//elSpan.textContent = cars;  

//elForm.addEventListener('submit', function(evt) { 

// evt.preventDefault(); 

// elSpan.textContent = cars[elInp.value -1]; 
//})

var elForm = document.querySelector('.js__form')
var elInp1 = document.querySelector('.js__inp1')
var elInp2 = document.querySelector('.js__inp2')
var elBtn1 = document.querySelector('.btn1')
var elBtn2 = document.querySelector('.btn2')
var elSpan1 = document.querySelector('.span1')
var elSpan2 = document.querySelector('.span2')

var cars = ['BMW', 'LBJ', 'BUG', 'TES'];

elSpan2.textContent = cars;

console.log(elSpan2)

elForm.addEventListener('submit', function (evt) {

    evt.preventDefault();

    var input1 = elInp1.value;
    var input2 = elInp2.value;

    cars.unshift(input1)
    cars.push(input2)
    elSpan2.textContent = cars;
})

elBtn1.addEventListener('click', function () {


    cars.shift()
    elSpan2.textContent = cars;
})

elBtn2.addEventListener('click', function () {


    cars.pop()
    elSpan2.textContent = cars;
})


