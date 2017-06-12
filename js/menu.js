function getMenuType() {
    var x = document.getElementById("navMenu");
    if (x.className == "") {
        x.className = "responsive";
    } else {
        x.className = "";
    }
}
