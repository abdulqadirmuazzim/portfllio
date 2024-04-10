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
    head.style.color = isChecked ? "#000000" : ""

    const links = document.querySelectorAll("a")
    links.forEach(element => {
        element.style.color = isChecked ? "#fff" : ""
    });

    // Change background of home
    const back_home = document.getElementById('backgound')
    back_home.src = isChecked ? 'static/black.mp4' : ''


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

// animate on scroll effect for porgress bar

// skills div
const skills = document.querySelector(".skills")

// progress bar fill
const bar = document.querySelectorAll(".pro")

window.addEventListener("scroll", () => {

    const ele_pos = skills.getBoundingClientRect().y

    const window_pos = window.innerHeight

    if (ele_pos < window_pos) {
        bar.forEach(element => {
            element.style.width = '100%'
            element.style.transition = '2.3s'
            // element.style.animation = 'progress 2.5s 1'
        })
    }
    else {
        bar.forEach(element => {
            element.style.width = '0%'
            element.style.transition = '1.3s'
        })
    }
})
