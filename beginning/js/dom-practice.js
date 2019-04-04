/*eslint-env browser*/

//STEP 1

function onclickOne() {
    "use strict";
    window.alert("I have been clicked.");
}



//STEP 2
var $ = function (id) {
    "use strict";
    return window.document.getElementById(id);
};
function onclickTwo() {
    "use strict";
    window.alert("I have been clicked.");
}

window.addEventListener("load", function () {
    "use strict";
    $("stepTwo").addEventListener("stepTwo", onclickTwo);
});



//STEP 3
/*
function onclickThree() {
    "use strict";
    var clickMe = window.document.getElementById("stepThree");
    clickMe.addEventListener("click", onclickOne);
}
window.addEventListener("load", onclickThree);
*/


//STEP 4

function onclickFour() {
    "use strict";
    var clickMe = window.document.getElementById("stepThree");
    clickMe.addEventListener("click", function () {
        window.alert("I have been clicked.");
    });
}
window.addEventListener("load", onclickFour);


//STEP 5
//same as script as STEP 4 


//STEP 6

function onclickSix() {
    "use strict";
    var redirectLink = window.document.getElementById("redirect");
    redirectLink.addEventListener("click", function () {
        window.alert("You clicked the Google link!");
    });
}
window.addEventListener("load", onclickSix);


//STEP 7
function onclickSeven() {
    "use strict";
    var sevenBtn;
    sevenBtn = window.document.getElementById("step7_btn");
    
    sevenBtn.addEventListener("click", function () {
        var sevenText = window.document.getElementById("step7_text");
        sevenBtn.disabled = true;
        window.alert(sevenText.value);
    });
}
window.addEventListener("load", onclickSeven);


//STEP 8

function stepEight() {
    "use strict";
    var newPage = window.document.getElementById("newpage");
    //POP-UP on Click of the newpage
    newPage.addEventListener("click", function () {
        window.open("newpage.html", "newpage", "width=300, height=300");
        
    });
}

window.addEventListener("load", stepEight);


//STEP 9

function display() {
    "use strict";
    window.console.log("Learning JavaScript is fun!");
}
function start() {
    "use strict";
    var displaytext;
    displaytext = window.setInterval(function () {display()}, 2000);
    
}
function stop() {
    "use strict";
    window.clearInterval(displaytext);
}


//STEP 10

function stepTen() {
    "use strict";
    var selectBtn, menuItems;
    selectBtn = window.document.getElementById("select_btn");
    menuItems = window.document.getElementById("drop_down");
    selectBtn.addEventListener("click", function () {

        window.alert(menuItems.options[menuItems.selectedIndex].innerHTML);
        
    });
}

window.addEventListener("load", stepTen);
