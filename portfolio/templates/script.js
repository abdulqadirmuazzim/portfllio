// Bismillah
// When the checkbox is clicked/checked
const checkbox = document.getElementById('toggle');

checkbox.addEventListener('change', function () {
    // Check if the checkbox is checked
    const isChecked = checkbox.checked;
    console.log(isChecked)

    // Change background color of body
    // document.body.style.background = isChecked ? 'linear-gradient(45deg, #00264d, #000)' : ''

    // Change text & color of heading
    const head = document.querySelector("h2")
    head.style.color = isChecked ? "#fff" : ""

    const links = document.querySelectorAll("a")
    links.forEach(element => {
        element.style.color = isChecked ? "#fff" : ""
    });

    // Change background color of container elements
    const content = document.querySelectorAll('.container');
    content.forEach(element => {
        element.style.background = isChecked ? 'linear-gradient(45deg, #00264d, #000)' : '';
        element.style.border = isChecked ? ".5px solid #fff" : ''
        element.style.borderRadius = isChecked ? "10px" : ''
    })


})
// Header scrolling effect

let value = 0
const header = document.getElementById("head")

window.addEventListener("scroll", () => {
    if (window.scrollY > value) {
        // Scrolling down
        header.classList.add("scroll-up");
    }
    else {
        // Scrolling up
        header.classList.remove("scroll-up");
    }
    value = window.scrollY
});