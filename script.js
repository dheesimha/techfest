function validate() {
    let text = document.getElementById("usn").value;
    let patt1 = /\b1DS(18|19)(CS|IS)\d/
    if (text.match(patt1)) {
        alert("Form submitted.You are successfuly registered.")
    }

    else {
        alert("This event is open for CS and IS Departments only.Registation failed!")
    }
}


