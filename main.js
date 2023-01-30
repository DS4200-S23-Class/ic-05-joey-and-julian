console.log("Hello World");

// constants
const myCourse = "DS4200";
console.log(myCourse);

let season = "Winter";
console.log(season);

season = "Spring";
console.log(season);

function tenTimes(num) {
    let result = num * 10;
    return result;
}

let ans = tenTimes(6);
console.log(ans);

function buttonClicked() {
    let buttonDiv = document.getElementById("button-div");
    let newText = "Button clicked!"
    buttonDiv.innerHTML = newText;
}