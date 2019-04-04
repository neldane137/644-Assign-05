/*eslint-env browser*/
var $ = function (id) {
    "use strict";
    return window.document.getElementById(id);
};

function enter(event) {
    "use strict";
    var resultBox = $("result");
    if (event.target.value !== "=") {
        resultBox.value += event.target.value;
    } else {
        resultBox.value = eval(resultBox.value);
    }
}

function init() {
    "use strict";
    window.document.getElementsByTagName("body")[0].addEventListener("click", enter);
}

window.addEventListener("load", init);

