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
})

    // --------------------------------------------------------------local storage
    document.addEventListener("DOMContentLoaded", function () {
        const form = document.querySelector(".registration-form");
        const submitBtn = document.getElementById("submit");
    
        if (!form || !submitBtn) {
            return;
        }
    
        let savedData = JSON.parse(localStorage.getItem("contactData")) || [];
    
        if (!Array.isArray(savedData)) {
            savedData = [];
        }
    
        form.addEventListener("submit", function (event) {
            event.preventDefault();
    
            let isValid = true;
    
            const name = document.getElementById("name");
            const email = document.getElementById("email");
            const company = document.getElementById("comp-name");
            const title = document.getElementById("title");
            const message = document.getElementById("message");
    
            if (name.value.trim() === "") {
                isValid = false;
                alert("Please fill in the Name field.");
            }
            if (email.value.trim() === "") {
                isValid = false;
                alert("Please fill in the Email field.");
            }
            if (company.value.trim() === "") {
                isValid = false;
                alert("Please fill in the Company Name field.");
            }
    
            if (isValid) {
                const formData = {
                    name: name.value.trim(),
                    email: email.value.trim(),
                    company: company.value.trim(),
                    title: title.value.trim(),
                    message: message.value.trim()
                };
    
                savedData.push(formData);
                localStorage.setItem("contactData", JSON.stringify(savedData));
    
                form.reset();
                alert("Your message has been saved!");
            }
        });
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

fetch("https://nbg.gov.ge/gw/api/ct/monetarypolicy/currencies/ka/json")
    .then(response => response.json())
    .then(data => {
        data.forEach(currency => {
            const currencies_EUR = currency.currencies.filter(currency => currency.code === 'EUR');

            if (currencies_EUR) {
                const rate_EUR = currencies_EUR[0].rate
                const containerinner = document.querySelector('.data-from-api')
                containerinner.innerText = "Currently EUR/GEL = " + rate_EUR;
            } else {
                containerinner.innerText = "Value not defined";
            }
        });
    })
    .catch(error => console.log(error));
