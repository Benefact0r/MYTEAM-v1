document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".about").forEach(element => {
        element.addEventListener("click", function () {
            window.location.href = "about.html";
        });
    });
    document.querySelectorAll(".home").forEach(element => {
        element.addEventListener("click", function () {
            window.location.href = "index.html";
        });
    });
    document.querySelectorAll(".myteam").forEach(element => {
        element.addEventListener("click", function () {
            window.location.href = "index.html";
        });
    });
    document.querySelectorAll(".top-right").forEach(element => {
        element.addEventListener("click", function () {
            window.location.href = "contact.html";
        });
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

    // --------------------------------------------------------------local storage
    const form = document.querySelector(".registration-form");
    const submitBtn = document.getElementById("submit");

    const savedData = JSON.parse(localStorage.getItem("contactData"));
    if (savedData) {
        document.getElementById("name").value = savedData.name || "";
        document.getElementById("email").value = savedData.email || "";
        document.getElementById("comp-name").value = savedData.company || "";
        document.getElementById("title").value = savedData.title || "";
        document.getElementById("message").value = savedData.message || "";
    }

    const loaddData = JSON.parse(localStorage.sav("contactData"));
    if (savedData) {
        document.getElementById("name").value = savedData.name || "";
        document.getElementById("email").value = savedData.email || "";
        document.getElementById("comp-name").value = savedData.company || "";
        document.getElementById("title").value = savedData.title || "";
        document.getElementById("message").value = savedData.message || "";
    }

    submitBtn.addEventListener("click", function (event) {
        event.preventDefault(); 

        const formData = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            company: document.getElementById("comp-name").value,
            title: document.getElementById("title").value,
            message: document.getElementById("message").value
        };

        localStorage.setItem("contactData", JSON.stringify(formData)); 

        form.reset();

        alert("Your message has been saved!"); 
    });    
    // function saveContactInfo() {
    //     document.getElementById('submit').addEventListener('click', function () {
    //         event.preventDefault();
    //         let data = {
    //             name: document.getElementById('name').value,
    //             email: document.getElementById('email').value
    //         };
    //         localStorage.setItem('formData', JSON.stringify(data));
    //         alert("Data saved")
    //     })
    // }
    // function loadContactInfo() {
    //     let savedData = localStorage.getItem('formData');
    //     if (savedData) {
    //         let data = JSON.parse('savedData');
    //         document.getElementById('name').value = data.name;
    //         document.getElementById('email').value = data.email;
    //     } else {
    //         alert("No data found")
    //     }
    // }
    // function clearContactInfo() {
    // }
});

// ---------------------------------------------------burger-menu
const burMenu = this.document.querySelector(".menu");
const mobMenu = document.querySelector(".mobile-menu");
const shadow = document.querySelector(".shadow");

burMenu.addEventListener("click", () => {
    burMenu.classList.toggle("active");
    mobMenu.classList.toggle("active");
    shadow.classList.toggle("active");
});