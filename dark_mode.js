// build a js script using JQuery to add a toggle botton that changes any page to dark-mode when pressed.
// try your "dark-mode.js" on index1.html, index2.html and index3.html without changing the html files!

$(document).ready(function() {
    $("button").click(function() {
        $("h1").css({"color": "white"});
        $("body").css({"background-color": "black"});
        // $("h1").toggle(1000, function(){
        // });
    });
});