let count;

document.getElementById ("roll").onclick = function () {
    count = Math.floor(Math.random () * 1000) + 1; 
    document.getElementById ("number").innerHTML = count;
}