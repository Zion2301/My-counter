let dalabel = document.getElementById("lab");
// let daincrease = document.getElementById("increase");
// let dadecrease = document.getElementById("decrease");
let count = 0;

function myDecrease() {
    // do {
    //     count--
    //     dalabel.textContent=count
    // } while (count < 0);
    count--
    dalabel.textContent = count
}

function myIncrease() {
    count++;
    dalabel.textContent = count;
}
function myReset() {
    count = 0;
    dalabel.textContent = count
}