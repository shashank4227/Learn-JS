let button = document.querySelector("button");

let code = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];


button.addEventListener("click", () => {
    let colorCode = "#"
    for(let i = 0; i < 6; i++) {
        colorCode += code[Math.floor(Math.random() * 16)]
    }

    document.body.style.backgroundColor = colorCode;
})