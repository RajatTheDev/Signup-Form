const firstName = document.querySelector("#first_name");

const pswd = document.querySelector("#password");
const cpswd = document.querySelector("#confirm_password");
const checker = document.querySelector("#checker");
const form = document.querySelector("form");

cpswd.addEventListener("input", () => {
    if(cpswd.value == pswd.value) {
        checker.textContent = "Password Match!";
        checker.style.color = "green";
    } else {
        checker.textContent = "Password does not Match!";
        checker.style.color = "red";
    }
});

form.addEventListener("submit", (e) => {
    if(checker.textContent != "Password Match!") {
        e.preventDefault();
    } else {
        window.open("https://github.com/rajatthedev");
    }
})