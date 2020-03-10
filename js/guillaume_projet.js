
/*boutons jeux
var btns = document.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName(" active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";

    });
}

/*boutons personnages
var circles = document.getElementsByClassName("cercle");
for (var i = 0; i < circles.length; i++) {
    circles[i].addEventListener("click", function() {
        var current = document.getElementsByClassName(" active_cercle");
        current[0].className = current[0].className.replace(" active_cercle", "");
        this.className += " active_cercle";
    });
}


/*boutons jeux Rebirth----------------------------------------------------------------------------
var headerR = document.getElementById("btnR_jeux");
var btnsR = headerR.getElementsByClassName("btn");
for (var ir = 0; ir < btnsR.length; ir++) {
    btnsR[ir].addEventListener("click", function() {
        var currentR = document.getElementsByClassName(" active_R");
        currentR[0].className = currentR[0].className.replace(" active_R", "");
        this.className += " active_R";
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
var btns=$("[name='btn']");
    function suppr()
    {
        btns=$("[name='btn']");
        for (let i=0;i<3;i++)
        {
            btns[i].removeClass("active activeR activeW");
        }
    }

    function class_active(id)
    {

        suppr();
        if (id=="btnrebirth")
        {
            btns[0].addClass("active_R");
        }
        else if (id=="btnafterbirth")
        {
            btns[1].addClass("active");
        }
        else
        {
            btns[2].addClass("active_W");
        }
    };
    btns[0].on("click",function(){class_active("btnwotl");});
    btns[1].on("click",function(){class_active("btnrebirth");});
    btns[2].on("click",function(){class_active("btnafterbirth");});

