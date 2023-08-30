document.getElementById("script2_add").onclick = function() {
    var num1 = document.getElementById("script2_input_1").value;
    var num2 = document.getElementById("script2_input_2").value;
    var decplace = document.getElementById("script2_input_3").value;

    var output = Number(num1) + Number(num2);
    output = output.toFixed(Number(decplace));
    document.getElementById("script2_output").innerHTML = num1 + " + " + num2 + " = " + output;
}

document.getElementById("script2_sub").onclick = function() {
    var num1 = document.getElementById("script2_input_1").value;
    var num2 = document.getElementById("script2_input_2").value;
    var decplace = document.getElementById("script2_input_3").value;

    var output = Number(num1) - Number(num2);
    output = output.toFixed(Number(decplace));
    document.getElementById("script2_output").innerHTML = num1 + " - " + num2 + " = " + output;
}

document.getElementById("script2_div").onclick = function() {
    var num1 = document.getElementById("script2_input_1").value;
    var num2 = document.getElementById("script2_input_2").value;
    var decplace = document.getElementById("script2_input_3").value;

    var output = Number(num1) / Number(num2);
    output = output.toFixed(Number(decplace));
    document.getElementById("script2_output").innerHTML = num1 + " / " + num2 + " = " + output;
}

document.getElementById("script2_mult").onclick = function() {
    var num1 = document.getElementById("script2_input_1").value;
    var num2 = document.getElementById("script2_input_2").value;
    var decplace = document.getElementById("script2_input_3").value;

    var output = Number(num1) * Number(num2);
    output = output.toFixed(Number(decplace));
    document.getElementById("script2_output").innerHTML = num1 + " * " + num2 + " = " + output;
}

document.getElementById("script2_exp").onclick = function() {
    var num1 = document.getElementById("script2_input_1").value;
    var num2 = document.getElementById("script2_input_2").value;
    var decplace = document.getElementById("script2_input_3").value;

    var output = Number(num1) ** Number(num2);
    output = output.toFixed(Number(decplace));
    document.getElementById("script2_output").innerHTML = num1 + " ^ " + num2 + " = " + output;
}