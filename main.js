function getP1() {
    var inputs= [];

    for(var i=1; i<=4; i++)
     {
        inputs.push(document.getElementById("p1_input" + i).value);
    }
    document.getElementById("ShowP1").innerHTML = inputs.join(". ");
}

function getP2() {
    var inputs= [];

    for(var i=1; i<=4; i++)
     {
        inputs.push(document.getElementById("p2_input" + i).value);
    }
    document.getElementById("ShowP2").innerHTML = inputs.join(". ");
}