let presentation;

document.addEventListener('DOMContentLoaded', init);

function init() {
    presentation = new Presentation();

    document.title = presentationData.slides[0].slideTitle;

    loadPresentation();
    presentation.render();

    document.body.addEventListener('keyup', (e) => {
        if(e.keyCode == 32) {
            next();
        } else if(e.keyCode == 13) {
            next();            
        } else if(e.keyCode == 39) {
            next();            
        } else if(e.keyCode == 37) {
            previous();
       }
    });

    document.addEventListener('contextmenu', rightClick);
}

function loadPresentation() {
    for(let i = 0; i < presentationData.slides.length; i++) {
        let slide = new Slide(i, presentationData.slides[i].slideTitle);

        for(let j = 0; j < presentationData.slides[i].elts.length; j++) {
            let elt = new Element(presentationData.slides[i].elts[j].eltType, presentationData.slides[i].elts[j].eltContent);
            slide.addElement(elt);
        }

        presentation.addSlide(slide);
    }
}

function next() {
    if(presentation.nextSlide()) {
        presentation.render();
    }
}

function previous() {
    if(presentation.previousSlide()) {
        presentation.render();
    }
}

function rightClick(e) {
    e.preventDefault();
    console.log(e);
}