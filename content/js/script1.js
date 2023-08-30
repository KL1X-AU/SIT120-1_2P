document.getElementById("script1_button").onclick = function() {
    var firstName = document.getElementById("script1_firstname").value;
    var lastName = document.getElementById("script1_lastname").value;

    document.getElementById("script1_table_firstname").innerHTML = firstName;
    document.getElementById("script1_table_firstname_length").innerHTML = firstName.length;

    document.getElementById("script1_table_lastname").innerHTML = lastName;
    document.getElementById("script1_table_lastname_length").innerHTML = lastName.length;

    var userName = firstName.concat(".",lastName);
    document.getElementById("script1_table_username_lower").innerHTML = userName.toLowerCase();
    document.getElementById("script1_table_username_upper").innerHTML = userName.toUpperCase();

    document.getElementById("script1_table_initials").innerHTML = firstName.slice(0,1).toUpperCase() + lastName.slice(0,1).toUpperCase();
}