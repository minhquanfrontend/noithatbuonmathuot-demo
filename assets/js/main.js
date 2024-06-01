
// Scroll menu
window.addEventListener("scroll",function(){
    var nav = document.querySelector("nav");
    nav.classList.toggle("sticky",window.scrollY > 0);
})

// Scroll Up
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')

}
window.addEventListener('scroll',scrollUp);

// var userName
// userName = prompt('Mời cụ nhập tên : ');
// alert('Chào mừng: ' + userName + ' đến với website Nội Thất')
// confirm ('Bấm OK để loading vào website')

// Scroll reveal animation
const sr = ScrollReveal({
    origin:'top',
    distance: '60px',
    duration: 2500,
    delay:400,
})
sr.reveal(`.container__heading` ,{delay:600})
