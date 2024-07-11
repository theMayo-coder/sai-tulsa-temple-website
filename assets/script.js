
window.addEventListener("scroll", setScrollVar);
window.addEventListener("resize", () => {

    setScrollVar();
    setClientHeight();
    setClientWidth();

});

function setScrollVar() {
    const htmlElement = document.documentElement;
    const percentScrolled = htmlElement.scrollTop / htmlElement.clientHeight;
    //console.log(percentScrolled*100);
    htmlElement.style.setProperty(
        "--scroll",
        (percentScrolled*100) + 0.000001
    );
}

function setClientHeight() {
    const htmlElement = document.documentElement;
    htmlElement.style.setProperty(
        "--client-height",
        htmlElement.clientHeight
    );
}

function setClientWidth() {
    const htmlElement = document.documentElement;
    htmlElement.style.setProperty(
        "--client-width",
        htmlElement.clientWidth
    );
    var s = htmlElement.style.getPropertyValue("--client-width");
    console.log(s);
}

setScrollVar();
setClientHeight();
setClientWidth();

//------------------------------------------------------------------------------

//creating functionality for each of the a
$(document).ready(function() {

    console.log("page is ready");

    //home button link
    $('.home-button').on('click', function() {
        console.log(window.location.href.replace(/\/[^\/]*$/, '/index.html'));
        console.log(window.location);
        window.location.href = "/index.html";
    });

    $('.about-us-button').on('click', function() {
        window.location.href = "/about_us.html";
    });

    $('.temple-services-button').on('click', function() {
        window.location.href = "/temple_services.html";
    });

    $('.events-button').on('click', function() {
        window.location.href = "/events.html";
    });

    $('.contact-us-button').on('click', function() {
        window.location.href = "/contact_us.html";
    });

});