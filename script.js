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

    submitBtn.addEventListener("click", function (event) {
        event.preventDefault();
        let isValid = true;

        const nameInput = document.getElementById("name");
        const name = nameInput.value.trim();
        const nameMessage = document.getElementById("text-error");
        const emailInput = document.getElementById("email");
        const email = emailInput.value.trim();
        const errorMessage = document.getElementById("email-error");
        const companyInput = document.getElementById("comp-name");
        const company = companyInput.value.trim();
        const companyMessage = document.getElementById("name-error");
        const title = document.getElementById("title").value.trim();
        const message = document.getElementById("message").value.trim();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (name === "") {
            nameInput.classList.add("error");
            nameMessage.style.display = "block";
            isValid = false;
        } else {
            nameInput.classList.remove("error");
            nameMessage.style.display = "none";
            isValid = true;
        }

        if (email === "") {
            emailInput.classList.add("error");
            errorMessage.style.display = "block";
            isValid = false;
        } else {
            emailInput.classList.remove("error");
            errorMessage.style.display = "none";
            isValid = true;
        }

        if (company === "") {
            companyMessage.style.display = "block";
            isValid = false;
        } else {
            companyMessage.style.display = "none";
            isValid = true;
        }

        if (!emailRegex.test(email)) {
            isValid = false
            errorMessage.style.display = "block";
        } else {
            errorMessage.style.display = "none";
        }

        if (isValid) {
            const formData = {
                name: name,
                email: email,
                company: company,
                title: title,
                message: message
            };
            savedData.push(formData);
            localStorage.setItem("contactData", JSON.stringify(savedData));
            form.reset();
            alert("Your message has been saved!");

        }
    });
});

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
        const currencies_EUR = data[0].currencies.filter(currency => currency.code === 'EUR');

        if (currencies_EUR.length > 0) {
            const rate_EUR = currencies_EUR[0].rate;
            document.querySelector('.exchange-rate').innerText = `Currently EUR/GEL = ${rate_EUR}`;

            document.getElementById("convert-btn").addEventListener("click", function () {
                const amount = parseFloat(document.getElementById("amount").value);

                if (!isNaN(amount) && amount > 0) {
                    const convertedValue = (amount * rate_EUR).toFixed(2);
                    document.querySelector('.converted-value').innerText = `${amount} EUR = ${convertedValue} GEL`;
                } else {
                    alert("Please enter a valid amount!");
                }
            });
        } else {
            document.querySelector('.exchange-rate').innerText = "Exchange rate not available.";
        }
    })
    .catch(error => console.log(error));
