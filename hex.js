// const hex =[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
const button=document.getElementById("btn");
const color =document.querySelector(".color");

const numbers="1234567890";
const letters="ABCDEF";


function getRandomNumber() {
    return numbers[Math.floor(Math.random() * numbers.length)];
}

function getRandomLetter(){
    return letters[Math.floor(Math.random() * letters.length)]
}

function getRandom(){
    let arr=[];
    arr.push(getRandomNumber());
    arr.push(getRandomLetter());

    return arr[Math.floor(Math.random()*arr.length)]
}


btn.addEventListener("click",function(){
 let hex="#"
 for(let i=0;i<6;i++){
     hex+=getRandom();
 }
document.body.style.backgroundColor=hex;
color.textContent=hex;

});