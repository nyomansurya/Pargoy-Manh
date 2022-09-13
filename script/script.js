const main = document.getElementById("main")
const button = document.getElementById("button");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const title = document.getElementById("title");
let count = document.getElementById("count")

const thankYou = document.createElement("p");
thankYou.innerText = "Thans for saving my life!";
thankYou.setAttribute("id", "thankYou")

function increament () {
    count.innerText++
    console.log(count);

    if (count.innerText % 2 == 1) {
        image1.hidden = true;
        image2.hidden = false;
    } 
    if (count.innerText % 2 == 0) {
        image1.hidden = false;
        image2.hidden = true;
    }

    if (count.innerText > 14) {
        image1.hidden = true;
        image2.hidden = true;
        image3.hidden = false;
        button.hidden = true;
        main.appendChild(thankYou);
        title.hidden = true;

        const newTitle = document.createElement("h1");
        newTitle.innerText = "Congrats, Nate was saved by you!";

        main.insertBefore(newTitle, title);
    }
}



button.addEventListener("click", increament);

