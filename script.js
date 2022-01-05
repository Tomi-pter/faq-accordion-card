let btn = document.querySelectorAll(".button");
let btnFrame = document.querySelectorAll(".button-frame");

let btnArr = Array.from(btn);
console.log(btnArr);
btnArr.forEach((item) =>
    item.addEventListener("click", function() {
        console.log(item.className);
        if (item.classList.contains("clicked")) {
            item.classList.remove("clicked");
        } else {
            item.classList.add("clicked");
        }
    })
);