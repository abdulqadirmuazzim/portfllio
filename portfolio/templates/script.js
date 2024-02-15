const checkbox = document.getElementById('toggle');

checkbox.addEventListener('change', function () {
    // Check if the checkbox is checked
    const isChecked = checkbox.checked;
    console.log(isChecked)

    // Change background color of body
    document.body.style.background = isChecked ? 'linear-gradient(45deg, #00264d, #000)' : ''

    // Change background color of other elements
    const content = document.querySelector('.container');
    content.style.background = isChecked ? 'transparent' : '';
    content.style.border = isChecked ? ".5px solid #fff" : ''
    content.style.borderRadius = isChecked ? "10px" : ''

})
