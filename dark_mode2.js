$(document.body).click(function () {
    $("body").each(function (i) {
        if (this.style.color !== "white" && this.style.background !== "black") {
            this.style.color = "white", this.style.background = "black";
            $("button").text("Light Mode 🌕");
        } else {
            this.style.color = "", this.style.background = "";
            $("button").text("Dark Mode 🌑");
        }

    });
});

$(document).ready(function() {
    $('<button class="btn">Dark Mode</button>').appendTo('body');
});