var list = [];

document.getElementById("script3_add").onclick = function() {
    var item = document.getElementById("script3_input").value;
    list.push(item);
    printList();
}

document.getElementById("script3_remove").onclick = function() {
    if (list.length == 0) {
        return;
    }
    else {
        list.pop();
        printList();
    }
}

document.getElementById("script3_remove_select").onclick = function() {
    if (list.length == 0) {
        return;
    }
    else {
        var target = prompt("Choose number to remove:");
        list.splice(Number(target)-1,1);
        printList();
    }
}

document.getElementById("script3_clear").onclick = function() {
    list = [];
    printList();
}

function printList() {
    var output;
    output = "<ol>";
    for(let i = 0; i < list.length; i++) {
        output += "<li>" + list[i] + "</li>";
    }
    output += "</ol>";

    document.getElementById("script3_list").innerHTML = output;
}