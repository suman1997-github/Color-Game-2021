let numberOfSquares=6;
let colors=[];
let pickedColor;


// let colors=["rgb(255, 0, 0)",
//             "rgb(0, 255, 0)",
//             "rgb(0, 0, 255)",
//             "rgb(255, 0, 255)",
//             "rgb(255, 255, 0)",
//             "rgb(0, 255, 255)"
// ]

let h1tag=document.querySelector("h1")
let colorDisplay=document.getElementById("colorDisplay");
colorDisplay.textContent=pickedColor;
let squares=document.querySelectorAll(".square")
let messageDisplay=document.querySelector("#message")
let resetButton=document.querySelector("#reset")
// let easyBtn=document.querySelector("#easyBtn");
// let hardBtn=document.querySelector("#hardBtn");
let modeButtons=document.querySelectorAll(".mode");


init();
function init(){
        // modeBUtton eventListners
    setupModeButtons();
    setupSquares();
    reset();
}

function setupModeButtons(){
    for(let i=0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click",function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent==="Easy" ? numberOfSquares = 3: numberOfSquares=6;
            // if(this.textContent==="Easy"){
            //     numberOfSquares=3;
            // }else{
            //     numberOfSquares=6;
            // }
            reset();
        })
    }
}

function setupSquares(){
    for(var i=0; i < squares.length; i++){    
        // add click listners to square
        squares[i].addEventListener("click",function(){
            
            // grab color of clicked square
            let clickedColor =this.style.backgroundColor;
        
            // compare color to pickedColor
            // console.log(clickedColor,pickedColor)
            if(clickedColor === pickedColor){
                messageDisplay.textContent="Correct";
                resetButton.textContent="-Play Again?-"
                changeColors(clickedColor);
                h1tag.style.backgroundColor=clickedColor;
            }else{
                this.style.backgroundColor="#232323"
                messageDisplay.textContent="Try Again"
            }
        })
    }
}



function reset(){
    colors=generateRandomColors(numberOfSquares);
    // pick a new random colors from array
    pickedColor = pickColor();
    // change colorDisplay to match picked color
    colorDisplay.textContent=pickedColor;
    resetButton.textContent="New Colors"

    messageDisplay.textContent="";
    // change colors of square
    for(let i=0; i< squares.length; i++){
        if(colors[i]){
            squares[i].style.display="block";
            squares[i].style.backgroundColor=colors[i];
        }else{
            squares[i].style.display="none";
        }
    }
    h1tag.style.background="steelblue";
}


// easyBtn.addEventListener("click",function(){
//     hardBtn.classList.remove("selected");
//     easyBtn.classList.add("selected");
//     numberOfSquares=3;
//     colors=generateRandomColors(numberOfSquares);
//     pickedColor=pickColor();
//     colorDisplay.textContent=pickedColor;
//     for(let i=0; i<squares.length; i++){
//         if(colors[i]){
//             squares[i].style.backgroundColor=colors[i];
//         }else{
//             squares[i].style.display="none";
//         }
//     }
    
// })
// hardBtn.addEventListener("click",function(){
//     // alert("hard hard hard hard hard !!!!")
//     hardBtn.classList.add("selected")
//     easyBtn.classList.remove("selected");
//     numberOfSquares=6;
//     colors=generateRandomColors(numberOfSquares);
//     pickedColor=pickColor();
//     colorDisplay.textContent=pickedColor;
//     for(let i=0; i<squares.length; i++){
        
//             squares[i].style.backgroundColor=colors[i];
//             squares[i].style.display="block";
//     }
// })

resetButton.addEventListener("click",function(){
    // // generate all new colors
    // colors=generateRandomColors(6);
    // // pick new random colors from array
    // pickedColor=pickColor();
    // // change colorDisplay to match picked color
    // colorDisplay.textContent=pickedColor;
    // this.textContent="New Colors"
    // messageDisplay.textContent="";
    // // change colors of squares
    // for (let i = 0; i < squares.length; i++) {
    //     squares[i].style.backgroundColor=colors[i];
    // }
    //     h1tag.style.background="steelblue";
    reset();
})

for(var i=0; i < squares.length; i++){
    // add initial colors to square
    // squares[i].style.backgroundColor=colors[i]

    // add click listners to square
    squares[i].addEventListener("click",function(){
        
        // grab color of clicked square
        let clickedColor =this.style.backgroundColor;
    
        // compare color to pickedColor
        // console.log(clickedColor,pickedColor)
        if(clickedColor === pickedColor){
            messageDisplay.textContent="Correct";
            resetButton.textContent="-Play Again?-"
            changeColors(clickedColor);
            h1tag.style.backgroundColor=clickedColor;
        }else{
            this.style.backgroundColor="#232323"
            messageDisplay.textContent="Try Again"
        }
    })
}

function changeColors(color){
    // loop through all square
    for(var i=0; i<colors.length; i++){
        squares[i].style.backgroundColor=color;
    }
    // change each color to match given color
}
function pickColor(){
   let random=Math.floor(Math.random()*colors.length );
   return colors[random];
}
function generateRandomColors(num){
    // make an array
    let arr=[];
    // repeat num times
    for(var i=0; i<num; i++){
        // get random color and push into arr
        arr.push(randomColor());

    }
    // return that array
    return arr;
}
function randomColor(){
    // pick a "red" from 0 - 255
    let r= Math.floor(Math.random()*256);
    // pick a "green" from 0 - 255
    let g=Math.floor(Math.random()*256);
    // pick a "blue" from 0 - 255
    let b=Math.floor(Math.random()*256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}