class Presentation {
    constructor() {
        this.curSlide = 0;
        this.slides = [];
    }

    addSlide(slide) {
        this.slides.push(slide);
    }

    nextSlide() {
        if(this.curslide < this.slides.length) {
            this.curSlide++;
            this.render();
        }
    }

    render() {
        let root = document.querySelector('#slide');
        let slideTitle = root.querySelector('#slide-title');

        let titleElt = document.createElement('H2');
        titleElt.appendChild(document.createTextNode(this.slides[this.curSlide].slideTitle));
        slideTitle.appendChild(titleElt);

        for(let i = 0; i < this.slides[this.curSlide].elements.length; i++) {
            let e = document.createElement(this.slides[this.curSlide].elements[i].type);
            e.appendChild(document.createTextNode(this.slides[this.curSlide].elements[i].content));
            root.appendChild(e);
        }
    }
}

class Slide {
    constructor(index, title) {
        this.slideNr = index;
        this.slideTitle = title;
        this.elements = [];
    }

    addElement(e) {
        this.elements.push(e);
    }
}

class Element {
    constructor(type, text) {
        this.type = type;
        this.content = text;
    }
}