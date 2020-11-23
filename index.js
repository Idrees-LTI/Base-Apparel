var input = document.querySelector("input");
var button = document.querySelector("button");
var error = document.querySelector(".error");
var errorMsg = document.querySelector(".errorMsg");
var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


button.addEventListener ('click', function (e) {
    
    if (error.style.display === "none",
        errorMsg.style.display = "none",
        input.value === "",
        !input.value.match(mailformat)) {
        error.style.display = "block",
        errorMsg.style.display = "block"
    }
    else if (input.value.match(mailformat)) {
        alert("Thank you for subscribing!");
    }
    else {
        error.style.display = "none",
        errorMsg.style.display = "none"
    }

})





