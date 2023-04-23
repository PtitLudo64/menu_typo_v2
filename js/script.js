// IntersectionObserver
const menuItem = document.querySelectorAll('.menu_item');
const options = {
    // choix du viewport
    root: null,
    // déclanche la callBack à 10% du bas du viewPort
    rootMargin : "-20% 0px",
    // seuil entre 0 et 1. 0 = haut de l'élément, 1 = bas de l'élément
    threshold : 0.1,
}
const observer = new IntersectionObserver(menuReveal, options);

function menuReveal(entries) {
    // console.log(entries);
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
        }
    });
}

menuItem.forEach(menu => {
    observer.observe(menu);
});




