let slideIndex = 0;

window.addEventListener('load', function () {
    initCSS()

    initHeader()
    initFooter()

    showSlides(slideIndex);
});

function initHeader() {
    fetch("fragments/header.html")
        .then(response => {
            return response.text()
        })
        .then(data => {
            document.querySelector("header").innerHTML = data;
        });
}

function initFooter() {
    fetch("fragments/footer.html")
        .then(response => {
            return response.text()
        })
        .then(data => {
            document.querySelector("footer").innerHTML = data;
        });
}

function initCSS() {
    var head = document.getElementsByTagName('head')[0];

    var resetCssLink = document.createElement('link');
    resetCssLink.rel = 'stylesheet';
    resetCssLink.type = 'text/css';
    resetCssLink.href = 'css/reset.css';
    resetCssLink.media = 'all';
    head.appendChild(resetCssLink);

    var commonCssLink = document.createElement('link');
    commonCssLink.rel = 'stylesheet';
    commonCssLink.type = 'text/css';
    commonCssLink.href = 'css/common.css';
    commonCssLink.media = 'all';

    head.appendChild(commonCssLink);
}

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 5000); 
}