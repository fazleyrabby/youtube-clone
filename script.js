const navButton = document.getElementById('navbtn');
const body = document.getElementsByTagName('body')[0];
const sidebar = document.querySelector('.sidebar');
const navButtonMobile = document.getElementById('navbtn_mobile');
const root = document.documentElement;

window.onresize = resize;

function resize(){
    if (window.innerWidth < 550) {
        root.style.setProperty("--margin-left", '0');
    }
    else{
        root.style.setProperty("--margin-left", '270px');
    }
}

navButton.addEventListener('click', e=>{
    if (window.innerWidth > 550) {
        sidebar.classList.toggle('side-trigger');
    }
    else{
        sidebar.classList.toggle('mobile');
        body.classList.toggle('overlay');
    }

    if (sidebar.classList.contains('side-trigger')) {
        root.style.setProperty("--margin-left", '100px');
    }
    else if(sidebar.classList.contains('mobile')){
        root.style.setProperty("--margin-left", '0');
    }
    else{
        root.style.setProperty("--margin-left", '270px');
    }
})

navButtonMobile.addEventListener('click', e =>{
    sidebar.classList.toggle('mobile');
    body.classList.toggle('overlay');
})

body.addEventListener('click', e =>{
    if (e.target.classList.contains('overlay')) {
        sidebar.classList.toggle('mobile');
        body.classList.toggle('overlay');
    }
})