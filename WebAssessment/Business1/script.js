document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".btn-primary");
    buttons.forEach((button) => {
        button.addEventListener("click", function () {
            const productName = this.parentElement.querySelector(".card-title").textContent;
            alert(`You selected ${productName}`);
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        const name = form.querySelector("#name").value;
        const email = form.querySelector("#email").value;
        const password = form.querySelector("#password").value;
        const confirmPassword = form.querySelector("#confirm-password").value;

        if (!name || !email || !password || !confirmPassword) {
            alert("Please fill all the required fields");
            event.preventDefault();
        }

        if (password !== confirmPassword) {
            alert("Password and confirm password do not match");
            event.preventDefault();
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        const name = form.querySelector("#name").value;
        const age = form.querySelector("#age").value;
        const email = form.querySelector("#email").value;
        const mobile = form.querySelector("#mobile").value;

        if (!name || !/^[a-zA-Z\s]+$/.test(name)) {
            alert("Name must be a letter or contain only letters and spaces");
            event.preventDefault();
        }

        if (!age || isNaN(age) || age < 0 || age > 120) {
            alert("Age must be a number between 0 and 120");
            event.preventDefault();
        }

        if (!email || !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
            alert("Email must be a valid email address");
            event.preventDefault();
        }

        if (!mobile || isNaN(mobile) || mobile.length !== 10) {
            alert("Mobile must be a 10 digit number");
            event.preventDefault();
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        const address = form.querySelector("#address").value;

        if (!address || address.trim() === "") {
            alert("Address must not be empty");
            event.preventDefault();
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        const dob = form.querySelector("#dob").value;
        const password = form.querySelector("#password").value;
        const confirmPassword = form.querySelector("#confirm-password").value;
        const occupation = form.querySelector("#department").value;
        const income = form.querySelector("#income").value;
        const gender = form.querySelector("input[name='gender']:checked");
        const idProof = form.querySelector("#idProof").value;

        if (!dob || isNaN(Date.parse(dob))) {
            alert("Date of Birth must be a valid date");
            event.preventDefault();
        }

        if (!password || password.length < 8) {
            alert("Password must not be empty and must at least 8 characters");
            event.preventDefault();
        }

        if (password !== confirmPassword) {
            alert("Password and confirm password do not match");
            event.preventDefault();
        }

        if (!occupation || occupation === "") {
            alert("Occupation must not be empty");
            event.preventDefault();
        }

        if (!income || isNaN(income) || income < 0) {
            alert("Income must be a non-negative number");
            event.preventDefault();
        }

        if (!gender) {
            alert("Gender must be selected");
            event.preventDefault();
        }

        if (!idProof || idProof.trim() === "") {
            alert("ID Proof must not be empty");
            event.preventDefault();
        }
    });
});
