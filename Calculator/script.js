let button = document.querySelectorAll(".box");
let input = document.querySelector(".input1");

for(let i = 0; i<button.length; i++){
    button[i].addEventListener("click", () =>{

        const buttonValue = button[i].textContent;
    console.log(buttonValue);
    if(button === "C"){
        clearResult();
    }
    else if(button === "="){
        calculateResult();
    }
    else{
        appendValue(button);
    };

    })
    
};

function clearResult(){
    input.value = "" ;
};

function calculateResult(){
    input.value = eval(input.value);
}

function appendValue (button){
    input.value += button; 
}
  
