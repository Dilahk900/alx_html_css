
const navlinks = document.getElementById('nav-links');
const hamburger = document.getElementById('hamburger')

hamburger.addEventListener('click',() => {

    navlinks.classList.toggle('active');

    if(hamburger.textContent.trim() === '☰'){
        hamburger.textContent = '✖'
    } else {
        hamburger.textContent = '☰';
    } 
});

const headerscroll = document.getElementById('headerS');

headerscroll.addEventListener('scroll', () =>{
    if(window.scrollY > 50){
        headerscroll.classList.add('scrolled');
    } else {
        headerscroll.classList.remove('scrolled');
    } 
});