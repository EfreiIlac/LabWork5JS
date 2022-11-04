var userSubmit = document.getElementById("user-submit");
userSubmit === null || userSubmit === void 0 ? void 0 : userSubmit.addEventListener("click", userForm);
var submitCalculation = document.getElementById("submit-calculation");
submitCalculation === null || submitCalculation === void 0 ? void 0 : submitCalculation.addEventListener("click", calculate);
function userForm(e) {
    e.preventDefault();
    var firstname = document.getElementById("first-name");
    var lastname = document.getElementById("last-name");
    var email = document.getElementById("email");
    var address = document.getElementById("address");
    var city = document.getElementById("city");
    var province = document.getElementById("province");
    var membership = document.getElementsByName("membership");
    var output = document.getElementById("output");
    // get the checked membership
    var checkedMembership = "";
    for (var i = 0; i < membership.length; i++) {
        if (membership[i].checked) {
            checkedMembership = membership[i].value;
        }
    }
    var result = "\n    <span class=\"result-category\">Full Name:</span> <span id=\"name-result\">".concat(firstname.value, " ").concat(lastname.value, "</span><br/>\n    <span class=\"result-category\">Email:</span> <span id=\"email-result\">").concat(email.value, "</span><br/>\n    <span class=\"result-category\">Address:</span> <span id=\"address-result\">").concat(address.value, " ").concat(city.value, ", ").concat(province.value, "</span><br/>\n    <span class=\"result-category\">Membership:</span> <span id=\"membership-result\">").concat(checkedMembership, "</span><br/>\n  ");
    output.innerHTML = result;
}
function calculate(e) {
    // we won't return false to avoid the refresh, the better way is to use e.preventDefault()
    e.preventDefault();
    var numbers = document.getElementById("numbers");
    // we will not do as says in the assignment, we don't want to have a lot of code in an els method, we will just return if the input is empty
    if (numbers.value === "") {
        alert("Please enter some numbers");
        return;
    }
    // Now as we can see, it's much easier to read and understand
    var numbs = numbers.value.split(" ").map(function (num) { return parseInt(num); }).filter(function (e) { return !isNaN(e); });
    var action = document.getElementsByName("operation");
    var checkedAction = "";
    for (var i = 0; i < action.length; i++) {
        if (action[i].checked) {
            checkedAction = action[i].value;
        }
    }
    var result = 0;
    switch (checkedAction) {
        case "sum":
            result = numbs.reduce(function (a, b) { return a + b; }, 0);
            break;
        case "average":
            result = numbs.reduce(function (a, b) { return a + b; }, 0) / numbs.length;
            break;
        case "max":
            result = Math.max.apply(Math, numbs);
            break;
        case "min":
            result = Math.min.apply(Math, numbs);
            break;
        default:
            break;
    }
    var resultElement = document.getElementById("result");
    resultElement.innerText = result.toString();
}
