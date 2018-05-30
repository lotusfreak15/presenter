class Presentation {
    constructor() {
        this.curSlide = 0;
        this.slides = [];
    }

    addSlide(slide) {
        this.slides.push(slide);
    }

    render() {
        let root = document.querySelector('#slide-content');
        let slideTitle = document.querySelector('#slide-title');

        root.innerHTML = "";
        slideTitle.innerHTML = "";

        let titleElt = document.createElement('H2');
        titleElt.appendChild(document.createTextNode(this.slides[this.curSlide].slideTitle));
        slideTitle.appendChild(titleElt);

        for(let i = 0; i < this.slides[this.curSlide].elements.length; i++) {
            let e = document.createElement(this.slides[this.curSlide].elements[i].type);
            if(this.slides[this.curSlide].elements[i].type == "IMG") {
                e.src = this.slides[this.curSlide].elements[i].content;
            } else {
                e.appendChild(document.createTextNode(this.slides[this.curSlide].elements[i].content));
            }
            root.appendChild(e);
        }
    }

    nextSlide() {
        if(this.curSlide < this.slides.length) {
            this.curSlide++;
            return true;
        } else {
            return false;
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