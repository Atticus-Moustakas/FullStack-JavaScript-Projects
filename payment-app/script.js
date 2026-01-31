const submitBtn = document.getElementById("submit");
submitBtn.addEventListener("click", handleFormSubmit); //doesn't use "on" prefix

function handleFormSubmit(event) {
    event.preventDefault();

    const month = document.getElementById("month").value;
    const year = document.getElementById("year").value;

    if (new Date() > new Date(year, month - 1)) {
        window.alert("Your card is expired");
        return;
    }

    const cvv = document.getElementById("cvv").value;
    if (!/^[0-9]{3,4}$/.test(cvv)) {
        window.alert("Invalid CVV, must be 3 or 4 digits.");
        return;
    }
    
    window.alert("Thanks for your payment!");
}

function isValid(cnumber) {
    return true;
}