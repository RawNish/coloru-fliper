const colors =["green","yellow","rgba(133,122,200)","#f15025"];
const btn =document.getElementById("btn");
const color = document.querySelector(".color")

btn.addEventListener('click',function(){
//get a rnadom number between 0 and 3 for choosing a colour from the array colors//

    const randomNumber=getRandomNumber();
    document.body.style.backgroundColor=colors[randomNumber];
    color.textContent=colors[randomNumber]
});
function getRandomNumber(){
    return Math.floor(Math.random()*colors.length);
}