let boxes= document.querySelectorAll(".box");
let reset=document.querySelector(".reset");

let turn0=true;

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]
];
let click=0;
boxes.forEach((box)=>{ //box is just another variable
    box.addEventListener("click",()=>{

        if(turn0){
        
            box.innerText="O";
            turn0=false;
            click++;
        }
        else{
            box.innerText="X";
            turn0=true;
            click++;
            
        }

    box.disabled=true;
    checkWinner();
    })
});

const checkWinner = () => {
    for (let pattern of winPatterns) {
      let pos1Val = boxes[pattern[0]].innerText;
      let pos2Val = boxes[pattern[1]].innerText;
      let pos3Val = boxes[pattern[2]].innerText;
  
      if(pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val);
                isWinner = true;
                break;
            }
        }
    }

// Check if the click counter has reached 9 and there's no winner
    if (!isWinner && clickCounter === 9) {
        showDraw();
        return true;
    }
    
};

// let boxes = document.querySelectorAll(".box");
// let reset = document.querySelector(".reset"); // Use # for id

// let turnIndex = 0;
// const names = ["Jai", "Shree", "Ram"];

// const winPatterns = [
//     [0, 1, 2],
//     [0, 3, 6],
//     [0, 4, 8],
//     [1, 4, 7],
//     [2, 4, 6],
//     [2, 5, 8],
//     [3, 4, 5],
//     [6, 7, 8]
// ];

// boxes.forEach((box) => {
//     box.addEventListener("click", () => {
//         // Prevent changing the text if the box already has text
//         if (box.innerText.trim() === '') {
//             console.log("Box was clicked");
//             box.innerText = names[turnIndex];

//             // Increment turnIndex and reset if it exceeds the length of names array
//             turnIndex = (turnIndex + 1) % names.length;
//         }
//     });
// });

// reset.addEventListener("click", () => {
//     boxes.forEach((box) => {
//         box.innerText = '';
//     });
//     turnIndex = 0; // Reset the turnIndex
// });