// Bismillah
// When the checkbox is clicked/checked
const checkbox = document.getElementById('toggle');

checkbox.addEventListener('change', function () {
    // Check if the checkbox is checked
    const isChecked = checkbox.checked;
    console.log(isChecked)

    // Change text & color of heading
    const head = document.querySelector("#head h2")
    head.style.color = isChecked ? "#fff" : ""

    const links = document.querySelectorAll("a")
    links.forEach(element => {
        element.style.color = isChecked ? "#fff" : ""
    });

    // Change background of home
    const back_home = document.getElementById('background')
    back_home.src = isChecked ? './static/black.mp4' : './static/white.mp4'

    var text = document.querySelectorAll('span')

    text.forEach(element => {
        element.style.color = isChecked ? 'lavender' : ''
    })

    var text2 = document.querySelectorAll('.percent')

    text2.forEach(element => {
        element.style.color = isChecked ? 'lavender' : ''
    })

    var bar = document.querySelectorAll('.pro')

    bar.forEach(element => {
        element.style.background = isChecked ? '#1ad1ff' : ''
    })

    var outerbar = document.querySelectorAll('.progress-bar')

    outerbar.forEach(element => {
        element.style.background = isChecked ? '#49526b' : ''
    })

    // about
    var body = document.getElementById("about")
    body.style.backgroundColor = isChecked ? "#161616" : ''


    var desc = document.querySelector(".description")
    desc.style.backgroundColor = isChecked ? "#393939" : ""
    desc.style.border = isChecked ? "1px solid #fff" : ""


    var desch1 = document.querySelector(".description h1")
    desch1.style.color = isChecked ? "#cccccc" : ""

    var descp = document.querySelector(".description p")
    descp.style.color = isChecked ? "#fff" : ""

    // works
    var works = document.getElementById("works")
    works.style.background = isChecked ? "linear-gradient(240deg, #000000, #737374, #000000)" : ''


    var page = document.querySelector(".page")
    page.style.backgroundColor = isChecked ? "#2b2b2b" : ''


    var title = document.querySelector(".header1")
    title.style.color = isChecked ? "#ffffb3" : ''


    var swiper = document.querySelectorAll('swiper-slide')

    swiper.forEach(element => {
        // element.style.background = isChecked ? '#49526b' : ''
        if (isChecked) {
            element.addEventListener('mouseenter', () => { element.classList.add('text_shadow') })
            element.addEventListener('mouseleave', () => { element.classList.remove('text_shadow') })
        } else {
            element.classList.remove("text_shadow")
        }
    })
    // contact
    let background = document.querySelector('#contact .container')
    background.style.background = isChecked ? "#161616" : ""


    let wrap2h1 = document.querySelectorAll('.wrap2 h1, .success')
    wrap2h1.forEach(element => {
        element.style.color = isChecked ? "#cccccc" : ""
    })


    let wrap2h4 = document.querySelector('.wrap2 h4')
    wrap2h4.style.color = isChecked ? "#fff" : ""


    let form = document.querySelectorAll('input, textarea')
    form.forEach(e => {
        e.style.color = isChecked ? "#fff" : ''
        e.style.border = isChecked ? "1px solid #fff" : ''
    })

    let icons = document.querySelectorAll('i, h4')
    icons.forEach(e => {
        e.style.color = isChecked ? "#fff" : ''
    })

    let footer = document.querySelector('footer')
    footer.style.background = isChecked ? "#000" : ""
    footer.style.color = isChecked ? "#cccccc" : ""

})
// Header scrolling effect

let value = 0
const header = document.getElementById("head")
var headclass2 = document.querySelector('.colorit')

window.addEventListener("scroll", () => {
    if (window.scrollY > value) {
        // Scrolling down
        header.classList.add("scroll-up");
    }
    else {
        // Scrolling up
        header.classList.remove("scroll-up");
    }
    // if we scroll down
    if (window.scrollY != 0) {
        // header.classList.add('colorit')
        headclass2.style.background = 'gray'
        // if we scroll to the top
    } else {

        headclass2.style.background = 'transparent'
    }
    value = window.scrollY
});

// ANIMATE ON SCROLL FOR PROGRESS BAR

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

// SLIDER ANIMATION
const swiperEl = document.querySelector('swiper-container');

const params = {
    centeredSlides: false,
    slidesPerGroupSkip: 1,
    grabCursor: true,
    keyboard: {
        enabled: true,
    },
    breakpoints: {
        769: {
            slidesPerView: 3,
            slidesPerGroup: 1,
        },
    },
    scrollbar: false,
    navigation: true,
    pagination: {
        clickable: true,
    },
};

Object.assign(swiperEl, params)

swiperEl.initialize();