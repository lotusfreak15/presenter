let presentation;

document.addEventListener('DOMContentLoaded', init);

function init() {
    presentation = new Presentation();
    loadPresentation();
    presentation.render();
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