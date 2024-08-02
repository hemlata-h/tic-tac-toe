let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let div1 = document.createElement("div");
div1.classList.add("myclass");
let turnO = true;
let arr = [" "," "," "," "," "," "," "," "," "];

boxes.forEach( function (box,index) {
    box.addEventListener("click" , () => {
        if(turnO === true &&  arr[index] === " ") {
           box.innerHTML = "O";
           arr[index] = "O";
           turnO = false;
        }
        else if(arr[index] === " "){
            box.innerHTML = "X";
            arr[index] = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
    
});
let winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];
function checkWinner(){
for(let i=0 ; i<winPatterns.length ; i++){
    const [a,b,c] = winPatterns[i];
    if(arr[a] !==" " && arr[a] === arr[b] && arr[b] === arr[c]){
        //    alert(`player ${arr[a]} wins!!`);
        
           disabledAllBoxes();
           div1.innerText = `congratulation player ${arr[a]}`;
           document.body.append(div1);
    }
}
}
function disabledAllBoxes() {
boxes.forEach( box => {
    box.disabled = true;
});
}
function enableAllBoxes() {
    boxes.forEach( box => {
        box.disabled = false;
    });
    }



function initializeGame() {
    turnO = true;
    arr = ["", "", "", "", "", "", "", "", ""];
    enableAllBoxes();
    boxes.forEach(function(box,index){
        box.innerHTML = index+1;
    });
    mainGamer();
    
    }
reset.addEventListener("click", initializeGame) ;
function mainGamer(){
    boxes.forEach( function (box,index) {
        box.addEventListener("click" , () => {
            if(turnO === true &&  arr[index] === " ") {
               box.innerHTML = "O";
               arr[index] = "O";
               turnO = false;
            }
            else if(arr[index] === " "){
                box.innerHTML = "X";
                arr[index] = "X";
                turnO = true;
            }
            box.disabled = true;
            checkWinner();
        });
        
    });
}
