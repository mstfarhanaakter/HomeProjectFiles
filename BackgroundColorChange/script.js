// black and white color changer

// let modeBtn = document.querySelector("#change");
// let currMode = "Light"; // light mood
// let body = document.querySelector("body");

// modeBtn.addEventListener("click", ()=>{
//     if (currMode === "Light"){
//         currMode = "Dark";
//         body.style.backgroundColor = "black";
//         document.querySelector("#text").style.color = "white";
//         body.classList.add("Dark");
//         body.classList.remove("Light");
//         change.style.backgroundColor = "white";
//         change.style.color = "black"

//     }else{
//         currMode = "Light";
//         body.style.backgroundColor = "white"
//         document.querySelector("#text").style.color = "black";
//         body.classList.add("Light");
//         body.classList.remove("Dark")
//         change.style.backgroundColor = "black";
//         change.style.color = "white"
//     }

//     console.log(currMode);
// });

// multi-color background Changer


let button = document.getElementById("change");

let randomNum = () => {
    return Math.floor(Math.random() * 256);
};

let changeColor = () => {
    let randomColor = `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`
    document.body.style.backgroundColor = randomColor;
};
change.addEventListener("click", changeColor);
// window.addEventListener("load", changeColor); // it happens with load page 