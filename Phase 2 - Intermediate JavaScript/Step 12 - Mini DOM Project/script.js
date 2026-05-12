let count = 0;

const countEl = document.getElementById("count");

document.getElementById("increase")
    .addEventListener("click", () => {

        count++;
        countEl.textContent = count;
    });

document.getElementById("decrease")
    .addEventListener("click", () => {

        count--;
        countEl.textContent = count;
    });