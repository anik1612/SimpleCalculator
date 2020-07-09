function add() {
    var x =  document.getElementById("n1").value;
    var y =  document.getElementById("n2").value;
    var result = Number(x) + Number(y);
    document.getElementById("result").innerText = "Result = " + result;
}

function sub() {
    var x =  document.getElementById("n1").value;
    var y =  document.getElementById("n2").value;
    var result = Number(x) - Number(y);
    document.getElementById("result").innerHTML = "Result = " + result;
}

function mul() {
    var x =  document.getElementById("n1").value;
    var y =  document.getElementById("n2").value;
    var result = Number(x) * Number(y);
    document.getElementById("result").innerHTML = "Result = " + result;
}

function div() {
    var x =  document.getElementById("n1").value;
    var y =  document.getElementById("n2").value;
    var result = Number(x) / Number(y);
    document.getElementById("result").innerHTML = "Result = " + result;
}