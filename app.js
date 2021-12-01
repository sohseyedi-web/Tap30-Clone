// for navbar toggle

const navToggle = document.querySelector('.navs-toggle');
const navItem = document.querySelector('.navs-link');
navToggle.addEventListener('click', () => {

    navItem.classList.toggle('active-link')
})

// for navbar toggle





// for services accordion
const accordionItems = document.querySelectorAll('.accordion-container__item');
accordionItems.forEach((item) => {
    const accordionHeader = item.querySelector('.accordion-container__item-header');

    accordionHeader.addEventListener('click', () => {
        const openItem = document.querySelector('.accordion-open')
        toggleItem(item);

        if (openItem && openItem !== item) {
            toggleItem(openItem);
        }
    })
})


const toggleItem = (item) => {
    const accordionBody = item.querySelector('.accordion-container__item-body');
    const accordionIcon = item.querySelector('.fa')


    if (item.classList.contains('accordion-open')) {
        accordionBody.removeAttribute('style');
        item.classList.remove('accordion-open')
        accordionIcon.classList.remove('accordion-open__icon')

    } else {
        accordionBody.style.height = accordionBody.scrollHeight + 'px'
        item.classList.add('accordion-open');
        accordionIcon.classList.add('accordion-open__icon')
    }


}

// for services accordion


// for plan tabline

const planItem = document.querySelectorAll('.plan-box__item');

planItem.forEach((plan) => {
    plan.addEventListener('click', () => {
        planItem.forEach((p) => p.classList.remove('item-active'));

        plan.classList.add('item-active');
    })
})


// for plan tabline



console.log('The complete design belongs to Saheb Mohammadi and this file has been designed with a few changes');
console.log('https://tap30-demo-4yec1av4v-fronthooks.vercel.app/');