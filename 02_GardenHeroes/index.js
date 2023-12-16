const formName = document.querySelector('#form-name')
const formEmail = document.querySelector('#form-email')
const formMessage = document.querySelector('#form-message')

const contactName = document.querySelector('#contact-name')
const contactEmail = document.querySelector('#contact-email')
const contactMessage = document.querySelector('#contact-message')

const svgSunMoon = document.querySelectorAll('.sun-moon')
const body = document.querySelector('body')

function submitForm() {
    formName.textContent = contactName.value
    formEmail.textContent = contactEmail.value
    formMessage.textContent = contactMessage.value
    contactName.value = "";
    contactEmail.value = "";
    contactMessage.value = "";
    showPopup();
  }
  
  function showPopup() {
    document.getElementById('popup').style.display = 'block';
  }
  
  function closePopup() {
    document.getElementById('popup').style.display = 'none';
  }

// Toggle dark-theme function and eventListener
function toggleDarkTheme() {
    body.classList.toggle('dark')
}

svgSunMoon.forEach(icon => {
    icon.addEventListener('click', toggleDarkTheme)
})


  