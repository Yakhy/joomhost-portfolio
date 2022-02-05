let body = document.getElementsByTagName('body')[0];

let btn1 = document.getElementById('btn1');

btn1.addEventListener('click', function(){
    body.classList.toggle('lightblue');
 
})

let btn2 = document.getElementById('btn2');

btn2.addEventListener('click', function(){
    body.classList.toggle('lightgreen');
 
})
let btn3 = document.getElementById('btn3');

btn3.addEventListener('click', function(){
    body.classList.toggle('yellow');
 
})