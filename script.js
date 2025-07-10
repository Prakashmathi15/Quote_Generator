const textarea = document.getElementById("message");
const counter = document.getElementById("counter");
const maxLength = 100;

textarea.addEventListener("input", () => {
    const length = textarea.value.length;


    counter.textContent = `${length} / ${maxLength}`;

    if (length > maxLength) {
        counter.style.color = "red";
        counter.textContent += " ☠️ Too long!";
    } else if (length > 90) {
        counter.style.color = "orange";
        counter.textContent += " 🙅❗";
    } else {
        counter.style.color = "green";
         counter.textContent += " 🚀";
    }
});