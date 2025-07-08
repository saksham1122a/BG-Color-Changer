const randomColor = function(){
    const hex = '123456789ABCDEF';
    let color = '#';           // colors are in the form of #
    for(let i=0; i< 6; i++){
        color +=  hex[Math.floor(Math.random() * 16)];   // We are having total of 16 letter from 0 to F
    }
    return color;
}
let IntervalId
 const startChangingColor = function() {
    if(!IntervalId){
        IntervalId = setInterval(changeBgColor, 1000);
    }
    function changeBgColor(){
        document.body.style.backgroundColor = randomColor();
    }
 }
 const stopChangingColor = function(){
    clearInterval(IntervalId);
    IntervalId = null;
 }

document.querySelector('.start').addEventListener('click', startChangingColor);
document.querySelector('.stop').addEventListener('click', stopChangingColor);
