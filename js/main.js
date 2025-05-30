function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.remove('element-hide');
            change.target.classList.add('element-show');
        } else {
            change.target.classList.remove('element-show');
            change.target.classList.add('element-hide');
        }
    });
}

let options = { threshold: 0.5 };

let observer = new IntersectionObserver(onEntry, options);

function observeElements(elements) {
    elements.forEach(elm => observer.observe(elm));
}

const allSelectors = [
    '.main-title', '.line--1', '.line--2', '.line--3', '.line--4', '.line--5', '.line--6',
    '.skills-one', '.skills-two', '.mockup--1', '.mockup--2', '.mockup--3', '.mockup--6',
    '.using', '.using--2', '.using--3', '.about__main-img', '.about__main-text', '.about__descr'
];

allSelectors.forEach(selector => {
    const elements = document.querySelectorAll(selector);
    observeElements(elements);
});

// Обробка кнопок
const button1 = document.querySelector('.button--1');
if (button1) {
    button1.addEventListener('click', () => {
        window.open("https://julyturbai.github.io/John-Doe", "_blank");
    });
}

document.querySelectorAll('.button--2').forEach(btn => {
    btn.addEventListener('click', () => {
        window.open("https://cozy-house-react.turbays.pp.ua/", "_blank");
    });
});

const button3 = document.querySelector('.button--3');
if (button3) {
    button3.addEventListener('click', () => {
        window.open("https://finalprojectreact.turbays.pp.ua/", "_blank");
    });
}


    
