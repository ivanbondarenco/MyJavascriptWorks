num = 0;

const increaseBtn = document.getElementById("increaseButton");
const resetButton = document.getElementById("resetButton");
const decreaseButton = document.getElementById("decreaseButton")

increaseBtn.onclick = function(){
    num++;
    document.getElementById("myH1").textContent = `${num}`;
}

resetButton.onclick = function(){
    num = 0;
    document.getElementById("myH1").textContent = `${num}`;
}

decreaseButton.onclick = function(){
    num--;
    document.getElementById("myH1").textContent = `${num}`;
}