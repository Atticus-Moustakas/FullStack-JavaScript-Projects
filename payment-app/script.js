const submitBtn = document.getElementById("submit");
submitBtn.addEventListener("click", handleFormSubmit); //doesn't use "on" prefix

function handleFormSubmit(event) {
    event.preventDefault();
    window.alert("Thanks for the payment");
}