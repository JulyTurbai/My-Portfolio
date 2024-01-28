'use strict'

function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.remove('element-hide');
            change.target.classList.add('element-show');
        } else {
            change.target.classList.remove('element-show');
            change.target.classList.add('element-hide');
        }
    })
}

let options = {
    threshold: [0.5] };

    let observer = new
    IntersectionObserver(onEntry, options);

    let title = 
    document.querySelectorAll('.main-title');
    
    let heroLine1 = 
    document.querySelectorAll('.line--2');
  
    let skillsLine1 = 
    document.querySelectorAll('.line--1');

    let skillsLine2 = 
    document.querySelectorAll('.line--2');

    let skillsLine3 = 
    document.querySelectorAll('.line--3');

    let skillsLine4 = 
    document.querySelectorAll('.line--4');

    let skillsOne = 
    document.querySelectorAll('.skills-one');

    let skillsTwo = 
    document.querySelectorAll('.skills-two');
    
    let mockup1 = 
    document.querySelectorAll('.mockup--1');

    let mockup2 = 
    document.querySelectorAll('.mockup--2');

    let mockup3 = 
    document.querySelectorAll('.mockup--3');

    let mockup6 = 
    document.querySelectorAll('.mockup--6');

    let using = 
    document.querySelectorAll('.using');

    let using2 = 
    document.querySelectorAll('.using--2');

    let using3 = 
    document.querySelectorAll('.using--3');

    let line1 = 
    document.querySelectorAll('.line--1');

    let line2 = 
    document.querySelectorAll('.line--2');

    let line5 = 
    document.querySelectorAll('.line--5');

    let img = 
    document.querySelectorAll('.about__main-img');

    let text = 
    document.querySelectorAll('.about__main-text');
    
    let descr = 
    document.querySelectorAll('.about__descr');

    for(let elm of title) {
        observer.observe(elm);
    }

    for(let elm of heroLine1) {
        observer.observe(elm);
    }

    for(let elm of skillsLine1) {
        observer.observe(elm);
    }

    for(let elm of skillsLine2) {
        observer.observe(elm);
    }

    for(let elm of skillsLine3) {
        observer.observe(elm);
    }

    for(let elm of skillsLine4) {
        observer.observe(elm);
    }

    for(let elm of skillsOne) {
        observer.observe(elm);
    }

    for(let elm of skillsTwo) {
        observer.observe(elm);
    }
    for(let elm of mockup1) {
        observer.observe(elm);
    }

    for(let elm of mockup2) {
        observer.observe(elm);
    }

    for(let elm of mockup3) {
        observer.observe(elm);
    }

    for(let elm of mockup6) {
        observer.observe(elm);
    }

    for(let elm of using) {
        observer.observe(elm);
    }
    
    for(let elm of using2) {
        observer.observe(elm);
    }

    for(let elm of using3) {
        observer.observe(elm);
    }

    for(let elm of line1) {
        observer.observe(elm);
    }

    for(let elm of line2) {
        observer.observe(elm);
    }

    for(let elm of line5) {
        observer.observe(elm);
    }

    for(let elm of img) {
        observer.observe(elm);
    }

    for(let elm of text) {
        observer.observe(elm);
    }
    for(let elm of descr) {
        observer.observe(elm);
    }


    
