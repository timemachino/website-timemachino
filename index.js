const navLinks = document.getElementsByClassName('nav-links')[0];
const links = navLinks.querySelectorAll("a")

function onToggleMenu(){
    navLinks.classList.toggle('top-[0]')
}

for(let link of links) {
    link.addEventListener('click',()=>{
        onToggleMenu()
    })
}