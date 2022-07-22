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
let index = 0;

function showImage(n) {
    index += n;

    let images = document.getElementsByClassName('image');
    let dots = document.getElementsByClassName('dot');

    for(let i = 0; i < images.length; i++) {
        images[i].style.display = 'none';
    }

    for(let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '');
    }
    
    if(index > images.length - 1) {
        index = 0;
    }

    if(index < 0) {
        index = images.length - 1
    }

    images[index].style.display = 'block';

    dots[index].className += ' active';
}

showImage(index);

// Gamburger Menu