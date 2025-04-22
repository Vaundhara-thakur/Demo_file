

document.addEventListener("DOMContentLoaded", function () {
   
    const signupBtn = document.querySelector(".signup-btn");
    const googleBtn = document.querySelector(".google-btn");
    const emailInput = document.querySelector('input[name="email"]');
    const passwordInput = document.querySelector('input[name="password"]');
    const signinBtn = document.querySelector(".signin-btn");

    googleBtn.addEventListener("click", function () {
        alert("Google Sign In functionality abhi implement nahi hai.");
    });

    signupBtn.addEventListener("click", function (e) {
        e.preventDefault(); 
        const email = emailInput.value.trim(); 
        const password = passwordInput.value.trim();

        if (!email || !password) {
            alert("Please fill out all fields.");
            return;
        }

        if (password.length < 6) {
            alert("Password must be at least 6 characters.");
            return;
        }

        alert("Sign up successful! 🎉");
        
        emailInput.value = "";
        passwordInput.value = "";
    });

    signinBtn.addEventListener("click", function () {
        alert("Thank you for visiting 😊");
    });
});
