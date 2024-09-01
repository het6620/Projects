document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav ul li a');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        });
    });
});
document.addEventListener('scroll',()=>{
    let about = document.getElementById('services')
    setTimeout(() => {
        about.classList.remove('hidden');
        about.classList.add('visible');
    }, 1500);
})
document.addEventListener('scroll',()=>{
    let about = document.getElementById('about')
    setTimeout(() => {
        about.classList.remove('hidden');
        about.classList.add('visible');
    }, 3000);
})
document.addEventListener('scroll',()=>{
    let about = document.getElementById('contact')
    setTimeout(() => {
        about.classList.remove('hidden');
        about.classList.add('visible');
    }, 4000);
})

window.addEventListener('DOMContentLoaded',()=>{
    const target = document.getElementById("home")
    const targetPosition = target.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (targetPosition < screenPosition) {
        target.classList.add('active');
    } else {
        target.classList.remove('active');
    }
})

window.addEventListener('scroll',()=>{
    const target = document.getElementById("services")
    const targetPosition = target.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (targetPosition < screenPosition) {
        target.classList.add('active');
    } else {
        target.classList.remove('active');
    }
})
window.addEventListener('scroll',()=>{
    const target = document.getElementById("about")
    const targetPosition = target.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (targetPosition < screenPosition) {
        target.classList.add('active');
    } else {
        target.classList.remove('active');
    }
})
window.addEventListener('scroll',()=>{
    const target = document.getElementById("contact")
    const targetPosition = target.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (targetPosition < screenPosition) {
        target.classList.add('active');
    } else {
        target.classList.remove('active');
    }
})
