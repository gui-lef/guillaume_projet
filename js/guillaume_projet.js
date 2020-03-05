/*
$('#btnAfterbirth').click(function(e) {
    $('.btnAfterbirth').not(this).removeClass('active');
    $(this).toggleClass('active');
    e.preventDefault();
}); */
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
for (var i = 0; i < circles.length; i++) {
    circles[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}