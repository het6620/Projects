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
