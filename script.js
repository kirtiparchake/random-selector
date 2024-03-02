
const tagcontainer = document.querySelector(".tags");
const textarea = document.querySelector("textarea");
let highlightInterval;

function textchange(ele) {
    const string = ele.target.value;
    const taskarray = string.split(',').filter(value => value.trim() !== "");

    tagcontainer.innerHTML = '';
    taskarray.forEach(value => {
        const taginput = document.createElement("div");
        taginput.classList.add("tag");
        taginput.innerHTML = value.trim();
        tagcontainer.appendChild(taginput);
    });

    if (ele.key === "Enter") {
        ele.target.value = '';
        clearInterval(highlightInterval);
        highlightInterval = setInterval(highlightRandomTag, 100);
        setTimeout(() => {
            clearInterval(highlightInterval);
            highlightRandomTag();
        }, 2000);
    }
1}

function highlightRandomTag() {
    const alltags = tagcontainer.querySelectorAll(".tag");
    alltags.forEach(tag => tag.classList.remove("highlight"));
    const randomIndex = Math.floor(Math.random() * alltags.length);
    const randomTag = alltags[randomIndex];
    randomTag.classList.add("highlight");
}

textarea.addEventListener("keyup", textchange);



