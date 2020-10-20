function isNotEmpty(value, label) {
    if (value == null || value=="") {
        alert("Missing " + label);
        return false;
    }
    else { return true;}
}

function passTest(value) {
    if (value == "four" || value == "4") {
        return true;
    }
    else {
        alert("Human test failed!");
        return false;
    }
}

function checkName(value) {
    if (value.indexOf(' ') >=1) {
        return true;
    }
    else {
        alert('Please enter first and last name.');
        return false;
    }
}

function checkPhone(value) {
    if (/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(value)) {
        return true;
    }
    else {
        alert('Phone number is invalid');
        return false;
    }
}

function allIsWell() {
    if(!isNotEmpty(document.forms["myForm"]["name"].value, "Name")) return false;
    if(!checkName(document.forms["myForm"]["name"].value, "Name")) return false;
    if(!isNotEmpty(document.forms["myForm"]["street"].value, "Street")) return false;
    if(!isNotEmpty(document.forms["myForm"]["city"].value, "City")) return false;
    if(!isNotEmpty(document.forms["myForm"]["state"].value, "State")) return false;
    if(!isNotEmpty(document.forms["myForm"]["zip"].value, "Zip Code")) return false;
    if(!isNotEmpty(document.forms["myForm"]["phone"].value, "Phone Number")) return false;
    if(!checkPhone(document.forms["myForm"]["phone"].value, "Phone Number")) return false;
    if(!passTest(document.forms["myForm"]["test"].value)) return false;
    return true;
}