// Slider
class Slider {
    constructor (rangeElement, valueElement, budget) {
    this.rangeElement = rangeElement
    this.valueElement = valueElement
    this.budget = budget

    this.rangeElement.addEventListener('input', this.updateSlider.bind(this)) // по клику будет срабатывать updateSlider
    }

    init() {
    this.rangeElement.setAttribute('min', budget.min)
    this.rangeElement.setAttribute('max', budget.max)
    this.rangeElement.value = budget.current

    this.updateSlider()
    }

    asMoney(value) {
        return '$' + parseFloat(value)
        .toLocaleString('en-US', { maximumFractionDigits: 2 })
    }

    generateBackground(rangeElement) {   
    if (this.rangeElement.value === this.budget.min) {
        return
    }

    let percentage =  (this.rangeElement.value - this.budget.min) / (this.budget.max - this.budget.min) * 100
    return 'background: linear-gradient(to right, #25aae1, #3f86ed ' + percentage + '%, #d3edff ' + percentage + '%, #dee1e2 100%)'
    }

    updateSlider (newValue) {
    this.valueElement.innerHTML = this.asMoney(this.rangeElement.value)
    this.rangeElement.style = this.generateBackground(this.rangeElement.value)
    }
}

let rangeElement = document.querySelector('.range [type="range"]')
let valueElement = document.querySelector('.range .range__value span') 

let budget = {
    min: 500,
    max: 10000, 
    current: 500
}

if (rangeElement) {
    let slider = new Slider(rangeElement, valueElement, budget)

    slider.init()
}


// Carousel
let index = 0

function showImage(n) {
    index += n

    let images = document.getElementsByClassName('image')
    let dots = document.getElementsByClassName('dot')

    for(let i = 0; i < images.length; i++) {
        images[i].style.display = 'none'
    }

    for(let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '')
    }
    
    if(index > images.length - 1) {
        index = 0
    }

    if(index < 0) {
        index = images.length - 1
    }

    images[index].style.display = 'block'

    dots[index].className += ' active'
}

showImage(index)

// Gamburger Menu  
let menu = document.querySelector('.nav-toggle')
let nav = document.querySelector('.nav')

menu.addEventListener('click', function(event) {
    event.preventDefault()
    nav.classList.toggle('activeMenu')
    menu.classList.toggle('activeMenu')
})

// Scroll
const anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()
        const blockID = anchor.getAttribute('href').substr(1)
        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}


// Accordion
let accordion = document.getElementById('accordion')

accordion.addEventListener('click', change)

function change(event) {
    let target = event.target
    if(target.tagName !== 'H3') return
    if(target.classList.contains('select')) {
        hideAll()
    } else {
        hideAll()
        target.classList.add('select')
        showText(target.nextElementSibling)
    }
}

function hideAll() {
    let h3Elem = accordion.querySelectorAll('h3')
    let divElem = accordion.querySelectorAll('div')
    for(let i = 0; i < h3Elem.length; i++) {
        h3Elem[i].classList.remove('select')
    }
    for(let i = 0; i <divElem.length; i++) {
        divElem[i].style.height = '0'
    }
}

function showText(textEl) {
    textEl.style.height = textEl.scrollHeight + 'px'
}
