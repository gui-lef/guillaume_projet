
/*boutons jeux*/
var header = document.getElementById("btn_jeux");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

/*boutons personnages*/
var select = document.getElementById("select_persos");
var circles = select.getElementsByClassName("cercle");
for (var i1 = 0; i1 < circles.length; i1++) {
    circles[i1].addEventListener("click", function() {
        var current1 = document.getElementsByClassName(" active_cercle");
        current1[0].className = current1[0].className.replace(" active_cercle", "");
        this.className += " active_cercle";
    });
}


/*boutons jeux Rebirth----------------------------------------------------------------------------*/
var headerR = document.getElementById("btnR_jeux");
var btnsR = headerR.getElementsByClassName("btnR");
for (var ir = 0; ir < btnsR.length; ir++) {
    btnsR[ir].addEventListener("click", function() {
        var currentR = document.getElementsByClassName(" active");
        currentR[0].className = currentR[0].className.replace(" active", "");
        this.className += " active";
    });
}

/*boutons personnages Rebirth
var selectR = document.getElementById("select_persosR");
var circlesR = selectR.getElementsByClassName("cercleR");
for (var ir1 = 0; ir1 < circlesR.length; ir1++) {
    circlesR[ir1].addEventListener("click", function() {
        var currentR1 = document.getElementsByClassName(" active_cercle_R");
        currentR1[0].className = currentR1[0].className.replace(" active_cercle_R", "");
        this.className += " active_cercle_R";
    });
}


/*boutons jeux Wotl----------------------------------------------------------------------------
var header_W = document.getElementById("btnW_jeux");
var btns_W = header_W.getElementsByClassName("btnW");
for (var iw = 0; iw < btnsR.length; iw++) {
    btns_W[iw].addEventListener("click", function() {
        var currentR = document.getElementsByClassName(" active_W");
        currentR[0].className = currentR[0].className.replace(" active_W", "");
        this.className += " active_W";
    });
}*/
