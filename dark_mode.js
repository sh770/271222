// build a js script using JQuery to add a toggle botton that changes any page to dark-mode when pressed.
// try your "dark-mode.js" on index1.html, index2.html and index3.html without changing the html files!

     
let bscript = document.createElement("script");
bscript.setAttribute("src", "https://code.jquery.com/jquery-3.6.3.js");
bscript.setAttribute("integrity", "sha256-nQLuAZGRRcILA+6dMBOvcRh5Pe310sBpanc6+QBmyVM=");
bscript.setAttribute("crossorigin", "anonymous");
bscript.setAttribute("defer", "");
    
document.head.appendChild(bscript);

let dscript = document.createElement("script");
dscript.setAttribute("src","dark_mode2.js");
dscript.setAttribute("defer", "");

document.head.appendChild(dscript);


