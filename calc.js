let firstnumber = document.getElementById("first-nb");
let secondnumber = document.getElementById("second-nb");
let result = document.getElementById("result");


function add(){
    result.textContent = Number(firstnumber.value) + Number(secondnumber.value);
}

function sub(){
    result.textContent = Number(firstnumber.value) - Number(secondnumber.value);
    
}

function mult(){
    result.textContent = Number(firstnumber.value) * Number(secondnumber.value);
    
}

function div(){
    result.textContent = Number(firstnumber.value) / Number(secondnumber.value);
}

