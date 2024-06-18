const input = document.getElementById("DepositWithdrawInput");
const inputButton = document.getElementById("DepositWithdrawBtn");
input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        inputButton.click();
    }
});