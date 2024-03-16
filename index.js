

document.addEventListener("DOMContentLoaded", function() {
    const decrementButton = document.getElementById("btn1");
    const incrementButton = document.getElementById("btn2");
    const clearButton = document.getElementById("btn3");
    const middleDiv = document.getElementById("middle");
    const errorDiv = document.getElementById("error");

    let count = 0;
    let str = "Your count is:"

    function updateCountDisplay() {
        middleDiv.innerHTML =str + count;

        if (count === 0) {
            clearButton.style.display = "none";
            errorDiv.style.display = "block";
            decrementButton.disabled = true;
        } else {
            clearButton.style.display = "block";
            errorDiv.style.display = "none";
            decrementButton.disabled = false;
        }
    }

    updateCountDisplay();

    incrementButton.addEventListener("click", function() {
        count++;
        updateCountDisplay();
    });

    decrementButton.addEventListener("click", function() {
        if (count > 0) {
            count--;
            updateCountDisplay();
        }
    });

    clearButton.addEventListener("click", function() {
        count = 0;
        updateCountDisplay();
    });
});
