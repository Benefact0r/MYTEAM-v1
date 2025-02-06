document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".about").addEventListener("click", function () {
        window.location.href = "About.html";
    });

    document.querySelector(".home").addEventListener("click", function () {
        window.location.href = "index.html";
    });
    document.querySelector(".myteam").addEventListener("click", function () {
        window.location.href = "index.html";
    });

    document.querySelector(".top-right").addEventListener("click", function () {
        window.location.href = "Contact.html";
    });

    document.querySelectorAll(".button").forEach(button => {
        button.addEventListener("click", function () {
            let svg = button.querySelector("svg");
            const targetSlide = document.querySelector(`#${button.getAttribute('data-target')}`);

            if (button.classList.contains("pink")) {
                button.classList.remove("pink");
                button.classList.add("blue");
                if (svg) svg.style.visibility = "hidden";
            } else {
                button.classList.remove("blue");
                button.classList.add("pink");
                if (svg) svg.style.visibility = "visible";
            }
            if (targetSlide) {
                targetSlide.classList.toggle('show');
            }
        });
    });
});