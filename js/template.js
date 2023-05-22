window.addEventListener('load', function () {
    initCSS()

    initHeader()
    initFooter()
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

function setUI() {
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            alert(1)
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }
}