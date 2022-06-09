

//indentifica o texto do html.
var currentNumberWrapper0 = document.getElementById('currentNumber1');
var currentNumberWrapper1 = document.getElementById('currentNumber2');
var currentNumberWrapper2 = document.getElementById('currentNumber3');
var cliquesWrapper = document.getElementById('cliques');
var currentNumber =[0,0,0];

var cliques = 0;
//interação com o clique!!
document.getElementById("add1").addEventListener("click",increment1);
document.getElementById("sub1").addEventListener("click",decrement1);
document.getElementById("add2").addEventListener("click",increment2);
document.getElementById("sub2").addEventListener("click",decrement2);
document.getElementById("add3").addEventListener("click",increment3);
document.getElementById("sub3").addEventListener("click",decrement3);
document.getElementById("Limpart").addEventListener("click",limpartudo);
document.getElementById("Limparcl").addEventListener("click",limparcli);
document.getElementById("Limparc").addEventListener("click",limparcont);

function totalc(){
    cliques = cliques + 1;
    cliquesWrapper.innerHTML = cliques;
}

function decrement1(){
    currentNumber[0] = currentNumber[0] - 1;
    currentNumberWrapper0.innerHTML = currentNumber[0];
    totalc()
}
function increment1(){
    currentNumber[0] = currentNumber[0] + 1;
    currentNumberWrapper0.innerHTML = currentNumber[0];   
    totalc()
}
function decrement2(){
    currentNumber[1] = currentNumber[1] - 1;
    totalc()
    if(currentNumber[1]==0){
        currentNumberWrapper1.innerHTML = currentNumber[1];
        currentNumberWrapper1.style.color = 'green';
    }else if(currentNumber[1] < 0){
        currentNumberWrapper1.innerHTML = currentNumber[1];
        currentNumberWrapper1.style.color = 'red';
    }else{
        currentNumberWrapper1.innerHTML = currentNumber[1];
    }
}
function increment2(){
    currentNumber[1] = currentNumber[1] + 1;
    totalc()
    if(currentNumber[1]==0){
        currentNumberWrapper1.innerHTML = currentNumber[1];
        currentNumberWrapper1.style.color = 'green';
    }else if (currentNumber[1] > 0) {
        currentNumberWrapper1.innerHTML = currentNumber[1];
        currentNumberWrapper1.style.color = 'white';
    }else{
        currentNumberWrapper1.innerHTML = currentNumber[1];
    }
}
function decrement3(){
    totalc()
    if(currentNumber[2] == -10){
        currentNumber[2] = currentNumber[2];
        alert("Limite de -10 !!");
    }else{
        currentNumber[2] = currentNumber[2] - 1;
        currentNumberWrapper2.innerHTML = currentNumber[2];
    }
}
function increment3(){
    totalc()
    if(currentNumber[2]==10){
        currentNumber[2] = currentNumber[2];
        alert("Limite de 10 !!");
    }else{
        currentNumber[2] = currentNumber[2] + 1;
        currentNumberWrapper2.innerHTML = currentNumber[2];
    }
}
function limpartudo(){
    currentNumber[0] = 0;
    currentNumber[1] = 0;
    currentNumber[2] = 0;
    cliques = 0;
    cliquesWrapper.innerHTML = cliques;
    currentNumberWrapper0.innerHTML = currentNumber[0]
    currentNumberWrapper1.style.color = 'green';
    currentNumberWrapper1.innerHTML = currentNumber[1]
    currentNumberWrapper2.innerHTML = currentNumber[2]
}
    function limparcli(){    
        cliques = 0;
        cliquesWrapper.innerHTML = cliques;
    }
    function limparcont(){    
        currentNumber[0] = 0;
        currentNumber[1] = 0;
        currentNumber[2] = 0;
        currentNumberWrapper0.innerHTML = currentNumber[0]
        currentNumberWrapper1.style.color = 'green';
        currentNumberWrapper1.innerHTML = currentNumber[1]
        currentNumberWrapper2.innerHTML = currentNumber[2]}


=======

//indentifica o texto do html.
var currentNumberWrapper0 = document.getElementById('currentNumber1');
var currentNumberWrapper1 = document.getElementById('currentNumber2');
var currentNumberWrapper2 = document.getElementById('currentNumber3');
var cliquesWrapper = document.getElementById('cliques');
var currentNumber =[0,0,0];

var cliques = 0;
//interação com o clique!!
document.getElementById("add1").addEventListener("click",increment1);
document.getElementById("sub1").addEventListener("click",decrement1);
document.getElementById("add2").addEventListener("click",increment2);
document.getElementById("sub2").addEventListener("click",decrement2);
document.getElementById("add3").addEventListener("click",increment3);
document.getElementById("sub3").addEventListener("click",decrement3);
document.getElementById("Limpart").addEventListener("click",limpartudo);
document.getElementById("Limparcl").addEventListener("click",limparcli);
document.getElementById("Limparc").addEventListener("click",limparcont);

function totalc(){
    cliques = cliques + 1;
    cliquesWrapper.innerHTML = cliques;
}

function decrement1(){
    currentNumber[0] = currentNumber[0] - 1;
    currentNumberWrapper0.innerHTML = currentNumber[0];
    totalc()
}
function increment1(){
    currentNumber[0] = currentNumber[0] + 1;
    currentNumberWrapper0.innerHTML = currentNumber[0];   
    totalc()
}
function decrement2(){
    currentNumber[1] = currentNumber[1] - 1;
    totalc()
    if(currentNumber[1]==0){
        currentNumberWrapper1.innerHTML = currentNumber[1];
        currentNumberWrapper1.style.color = 'green';
    }else if(currentNumber[1] < 0){
        currentNumberWrapper1.innerHTML = currentNumber[1];
        currentNumberWrapper1.style.color = 'red';
    }else{
        currentNumberWrapper1.innerHTML = currentNumber[1];
    }
}
function increment2(){
    currentNumber[1] = currentNumber[1] + 1;
    totalc()
    if(currentNumber[1]==0){
        currentNumberWrapper1.innerHTML = currentNumber[1];
        currentNumberWrapper1.style.color = 'green';
    }else if (currentNumber[1] > 0) {
        currentNumberWrapper1.innerHTML = currentNumber[1];
        currentNumberWrapper1.style.color = 'white';
    }else{
        currentNumberWrapper1.innerHTML = currentNumber[1];
    }
}
function decrement3(){
    totalc()
    if(currentNumber[2] == -10){
        currentNumber[2] = currentNumber[2];
        alert("Limite de -10 !!");
    }else{
        currentNumber[2] = currentNumber[2] - 1;
        currentNumberWrapper2.innerHTML = currentNumber[2];
    }
}
function increment3(){
    totalc()
    if(currentNumber[2]==10){
        currentNumber[2] = currentNumber[2];
        alert("Limite de 10 !!");
    }else{
        currentNumber[2] = currentNumber[2] + 1;
        currentNumberWrapper2.innerHTML = currentNumber[2];
    }
}
function limpartudo(){
    currentNumber[0] = 0;
    currentNumber[1] = 0;
    currentNumber[2] = 0;
    cliques = 0;
    cliquesWrapper.innerHTML = cliques;
    currentNumberWrapper0.innerHTML = currentNumber[0]
    currentNumberWrapper1.style.color = 'green';
    currentNumberWrapper1.innerHTML = currentNumber[1]
    currentNumberWrapper2.innerHTML = currentNumber[2]
}
    function limparcli(){    
        cliques = 0;
        cliquesWrapper.innerHTML = cliques;
    }
    function limparcont(){    
        currentNumber[0] = 0;
        currentNumber[1] = 0;
        currentNumber[2] = 0;
        currentNumberWrapper0.innerHTML = currentNumber[0]
        currentNumberWrapper1.style.color = 'green';
        currentNumberWrapper1.innerHTML = currentNumber[1]
        currentNumberWrapper2.innerHTML = currentNumber[2]}



