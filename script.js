const output = document.querySelector(".text");
const output2 = document.querySelector(".text2");
const buttonList = document.querySelectorAll("button");

let numOne;
let numTwo;

let isNumeOne;

buttonList.forEach((item) => {
    if(item.className.includes("AC")){
        item.addEventListener("click", function(){
            output.textContent = "0"; 
            output2.textContent = ""; 
            isNumeOne = false; 
            numOne = 0;
            numTwo = 0;
        });
    }else if(item.className.includes("1")){
        item.addEventListener("click", function(){
            removeZero()
            output.textContent = output.innerText + 1});
    }else if(item.className.includes("2")){
        item.addEventListener("click", function(){
            removeZero()
            output.textContent = output.innerText + 2});
    }else if(item.className.includes("3")){
        item.addEventListener("click", function(){
            removeZero()
            output.textContent = output.innerText + 3});
    }else if(item.className.includes("4")){
        item.addEventListener("click", function(){
            removeZero()
            output.textContent = output.innerText + 4});
    }else if(item.className.includes("5")){
        item.addEventListener("click", function(){
            removeZero()
            output.textContent = output.innerText + 5});
    }else if(item.className.includes("6")){
        item.addEventListener("click", function(){
            removeZero()
            output.textContent = output.innerText + 6});
    }else if(item.className.includes("7")){
        item.addEventListener("click", function(){
            removeZero()
            output.textContent = output.innerText + 7});
    }else if(item.className.includes("8")){
        item.addEventListener("click", function(){
            removeZero()
            output.textContent = output.innerText + 8});
    }else if(item.className.includes("9")){
        item.addEventListener("click", function(){
            removeZero()
            output.textContent = output.innerText + 9});
    }else if(item.className.includes("0")){
        item.addEventListener("click", function(){
            removeZero()
            output.textContent = output.innerText + 0});
    }else if(item.className.includes("+")){
        item.addEventListener("click", function(){
            removeZero()
            add()});
    }else if(item.className.includes("-")){
        item.addEventListener("click", function(){
            removeZero()
            output.textContent = output.innerText + "-"});
    }else if(item.className.includes("x")){
        item.addEventListener("click", function(){
            removeZero()
            output.textContent = output.innerText + "x"});
    }else if(item.className.includes("/")){
        item.addEventListener("click", function(){
            removeZero()
            output.textContent = output.innerText + "/"});
    }else if(item.className.includes("1")){
        item.addEventListener("click", function(){
            removeZero()
            output.textContent = output.innerText + 1});
    }else if(item.className.includes("1")){
        item.addEventListener("click", function(){
            removeZero()
            output.textContent = output.innerText + 1});
    }else if(item.className.includes("1")){
        item.addEventListener("click", function(){
            removeZero()
            output.textContent = output.innerText + 1});
    }else if(item.className.includes("1")){
        item.addEventListener("click", function(){
            removeZero()
            output.textContent = output.innerText + 1});
    }
});




function removeZero(){
    if(output.innerText ==0){
        output.textContent = "";}
    if(numOne > 0 && isNumeOne){
        isNumeOne = false;
        output.textContent = "";
    }
}

function add(){
    if(numOne >0){
        numTwo = parseInt(output.innerText);
        output.textContent = numOne + numTwo;
        console.log("hi");
    }
    numOne = parseInt(output.innerText)
    isNumeOne = true;
    output2.textContent = output.innerText + " +";

}

function subtract(numOne, numTwo){
    sum = numOne + numTwo;
    return sum;
}

function multiply(numOne, numTwo){
    sum = numOne + numTwo;
    return sum;
}

function divide(numOne, numTwo){
    sum = numOne + numTwo;
    return sum;
}