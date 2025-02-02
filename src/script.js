document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".about").addEventListener("click", function () {
        window.location.href = "about.html";
    });
    
    document.querySelector(".home").addEventListener("click", function () {
        window.location.href = "indexHome.html";
    });
    
    document.querySelector(".contact").addEventListener("click", function () {
        window.location.href = "contact.html";
    });
    
    document.querySelectorAll(".button").forEach(button => {
        button.addEventListener("click", function () {
            let svg = button.querySelector("svg");

            if (button.classList.contains("pink")) {
                button.classList.remove("pink");
                button.classList.add("blue");
                if (svg) svg.style.visibility = "hidden"; 
            } else {
                button.classList.remove("blue");
                button.classList.add("pink");
                if (svg) svg.style.visibility = "visible"; 
            }
        });
    });
});