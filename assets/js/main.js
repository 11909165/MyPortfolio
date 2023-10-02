/*=============== Show Menu =============== */
const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close');

/*===== Menu Show =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu');
    });
}

/*===== Hide Show =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu');
    });
}

/*=============== Remove Mobile Menu =============== */
const navLink = document.querySelectorAll('.nav__link');
function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    // On clicking any link , remove the show menu class
    navMenu.classList.remove('show-menu');
}
navLink.forEach((n)=> n.addEventListener('click', linkAction));

/*=============== Active Link =============== */
const navlink = document.querySelectorAll('.nav__link');
function activeLink(){
    navlink.forEach((a) => {
        a.classList.remove('active-link');
        this.classList.add('active-link');
    });
}
navlink.forEach((a)=> a.addEventListener('click', activeLink));

/*=============== Background Header =============== */
function scrollHeader(){
    const header = document.getElementById('header');
    // when the scroll is greater than 50vh, add scroll-header class to header tag
    if(this.scrollY >= 50) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

/*=============== Mixitup Filter =============== */
let mixerProjects = mixitup('.projects__container', {
    selectors: {
        target: '.project__item',
    },
    animation: {
        duration: 300,
    },
});

/*=============== Testimonials Swiper =============== */
var testiSwiper = new Swiper(".testimonial__container", {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
  });

/*=============== Contact Form =============== */
const contactForm = document.getElementById('contact-form'),
contactName = document.getElementById('contact-name'),
contactEmail = document.getElementById('contact-email'),
Message = document.getElementById('message'),
contactMessage = document.getElementById('contact-message');

const sendEmail=(e) => {
    e.preventDefault();

    // check if the fiels has value
    if(contactName.value ===  '' || contactEmail.value === "" || Message.value === ""){
     
        // show message
        contactMessage.textContent = "Write all the input fields";
    }
    else{
        // EmailJs serviceId - templateId- #formId -  publickey
        emailjs.sendForm('service_hc3yh3k','template_qnrufiu','#contact-form','X-3dKuz5ujoBiFaiB').then(()=>{
            // show message
            contactMessage.textContent = 'Message sent ✔';

            //remove message after 3 sec
           setTimeout(()=>{
            contactMessage.textContent = '';
           }, 3000);
        }, (error)=>{
            alert('OOPs! SOMETHING WENT WRONG...', error)
        });

        // clear input field
        contactName.value='';
        contactEmail.value='';
        Message.value='';
    }
};
contactForm.addEventListener('submit',sendEmail);

/*=============== Style Switcher =============== */
const styleSwitcherToggler = document.querySelector('.style__switcher-toggler');
const styleSwitcher = document.querySelector('.style__switcher');

styleSwitcherToggler.addEventListener('click', ()=>{
    styleSwitcher.classList.toggle('open');
})

/*=============== Hide Switcher on scroll =============== */
window.addEventListener('scroll', ()=>{
    if(styleSwitcher.classList.contains('open')){
        styleSwitcher.classList.remove('open');
    }
});

const alternateStyles = document.querySelectorAll('.alternate-style');
function setActiveStyle(color){
    alternateStyles.forEach((style) => {
        if(color === style.getAttribute('title')){
            style.removeAttribute('disabled');
        }
        else{
            style.setAttribute('disabled', 'true');
        }
    });
}