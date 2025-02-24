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



document.getElementById("submit").addEventListener("click", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name.length < 2) {
        alert("Name must be at least 2 characters long.");
        return;
    }

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    if (message.length > 0 && message.length < 10) {
        alert("Message must be at least 10 characters long.");
        return;
    }

    alert("Form submitted successfully!");
    document.querySelector(".registration-form").submit();
});
