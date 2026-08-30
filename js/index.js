// ==========================================
// TRAVELMATE - SIGN UP & SIGN IN JAVASCRIPT
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    // ==========================================
    // PASSWORD SHOW / HIDE
    // ==========================================

    const passwordInput = document.getElementById("password");
    const confirmPasswordInput =
        document.getElementById("confirmPassword");

    const togglePassword =
        document.getElementById("togglePassword");

    const toggleConfirmPassword =
        document.getElementById("toggleConfirmPassword");

    if (togglePassword && passwordInput) {
        togglePassword.addEventListener("click", function () {

            if (passwordInput.type === "password") {
                passwordInput.type = "text";
                togglePassword.textContent = "Hide";
            } else {
                passwordInput.type = "password";
                togglePassword.textContent = "Show";
            }

        });
    }

    if (toggleConfirmPassword && confirmPasswordInput) {
        toggleConfirmPassword.addEventListener("click", function () {

            if (confirmPasswordInput.type === "password") {
                confirmPasswordInput.type = "text";
                toggleConfirmPassword.textContent = "Hide";
            } else {
                confirmPasswordInput.type = "password";
                toggleConfirmPassword.textContent = "Show";
            }

        });
    }


    // ==========================================
    // SIGN UP
    // ==========================================

    const signupForm = document.getElementById("signupForm");

    if (signupForm) {

        signupForm.addEventListener("submit", function (event) {

            event.preventDefault();

            // Get values
            const fullName =
                document.getElementById("fullName").value.trim();

            const email =
                document.getElementById("email").value.trim();

            const phone =
                document.getElementById("phone").value.trim();

            const location =
                document.getElementById("location").value.trim();

            const password =
                document.getElementById("password").value;

            const confirmPassword =
                document.getElementById("confirmPassword").value;


            // Error elements
            const fullNameError =
                document.getElementById("fullNameError");

            const emailError =
                document.getElementById("emailError");

            const phoneError =
                document.getElementById("phoneError");

            const locationError =
                document.getElementById("locationError");

            const passwordError =
                document.getElementById("passwordError");

            const confirmPasswordError =
                document.getElementById("confirmPasswordError");

            const signupSuccess =
                document.getElementById("signupSuccess");


            // Clear previous messages
            fullNameError.textContent = "";
            emailError.textContent = "";
            phoneError.textContent = "";
            locationError.textContent = "";
            passwordError.textContent = "";
            confirmPasswordError.textContent = "";
            signupSuccess.textContent = "";


            let valid = true;


            // ==========================================
            // FULL NAME VALIDATION
            // ==========================================

            const namePattern = /^[A-Za-z ]+$/;

            if (fullName === "") {

                fullNameError.textContent =
                    "Please enter your full name.";

                valid = false;

            } else if (!namePattern.test(fullName)) {

                fullNameError.textContent =
                    "Name should contain only alphabets.";

                valid = false;
            }


            // ==========================================
            // EMAIL VALIDATION
            // ==========================================

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (email === "") {

                emailError.textContent =
                    "Please enter your email address.";

                valid = false;

            } else if (!emailPattern.test(email)) {

                emailError.textContent =
                    "Please enter a valid email address.";

                valid = false;
            }


            // ==========================================
            // PHONE VALIDATION
            // ==========================================

            const phonePattern = /^[0-9]{10}$/;

            if (phone === "") {

                phoneError.textContent =
                    "Please enter your phone number.";

                valid = false;

            } else if (!phonePattern.test(phone)) {

                phoneError.textContent =
                    "Phone number must contain exactly 10 digits.";

                valid = false;
            }


            // ==========================================
            // LOCATION VALIDATION
            // ==========================================

            const locationPattern = /^[A-Za-z ]+$/;

            if (location === "") {

                locationError.textContent =
                    "Please enter your location.";

                valid = false;

            } else if (!locationPattern.test(location)) {

                locationError.textContent =
                    "Location should contain only alphabets.";

                valid = false;
            }


            // ==========================================
            // PASSWORD VALIDATION
            // ==========================================

            if (password === "") {

                passwordError.textContent =
                    "Please enter a password.";

                valid = false;

            } else if (password.length < 8) {

                passwordError.textContent =
                    "Password must be at least 8 characters.";

                valid = false;

            } else if (!/[A-Z]/.test(password)) {

                passwordError.textContent =
                    "Password must contain at least one uppercase letter.";

                valid = false;

            } else if (!/[a-z]/.test(password)) {

                passwordError.textContent =
                    "Password must contain at least one lowercase letter.";

                valid = false;

            } else if (!/[0-9]/.test(password)) {

                passwordError.textContent =
                    "Password must contain at least one number.";

                valid = false;
            }


            // ==========================================
            // CONFIRM PASSWORD
            // ==========================================

            if (confirmPassword === "") {

                confirmPasswordError.textContent =
                    "Please confirm your password.";

                valid = false;

            } else if (password !== confirmPassword) {

                confirmPasswordError.textContent =
                    "Passwords do not match.";

                valid = false;
            }


            // ==========================================
            // STOP IF INVALID
            // ==========================================

            if (!valid) {
                return;
            }


            // ==========================================
            // SAVE USER
            // ==========================================

            const user = {
                fullName: fullName,
                email: email,
                phone: phone,
                location: location,
                password: password
            };


            // Save user
            localStorage.setItem(
                "travelMateUser",
                JSON.stringify(user)
            );

            // Also save using the key used by TravelApp
            localStorage.setItem(
                "travelUser",
                JSON.stringify(user)
            );


            // ==========================================
            // SUCCESS MESSAGE
            // ==========================================

            signupSuccess.textContent =
                "Account created successfully! 🎉";


            // Clear form
            signupForm.reset();


            // Go to Sign In page
            setTimeout(function () {

                window.location.href = "SignIn.html";

            }, 1500);

        });
    }


    // ==========================================
    // SIGN IN
    // ==========================================

    const signinForm = document.getElementById("signinForm");

    if (signinForm) {

        signinForm.addEventListener("submit", function (event) {

            event.preventDefault();


            // Get inputs
            const signinEmailElement =
                document.getElementById("signinEmail") ||
                document.getElementById("email");

            const signinPasswordElement =
                document.getElementById("signinPassword") ||
                document.getElementById("password");


            const email =
                signinEmailElement.value.trim();

            const password =
                signinPasswordElement.value;


            // Messages
            const signinError =
                document.getElementById("signinError");

            const signinSuccess =
                document.getElementById("signinSuccess");


            signinError.textContent = "";
            signinSuccess.textContent = "";


            // ==========================================
            // CHECK INPUTS
            // ==========================================

            if (email === "") {

                signinError.textContent =
                    "Please enter your email address.";

                return;
            }


            if (password === "") {

                signinError.textContent =
                    "Please enter your password.";

                return;
            }


            // ==========================================
            // GET SAVED USER
            // ==========================================

            let savedUser =
                localStorage.getItem("travelMateUser");


            // Fallback to travelUser
            if (!savedUser) {
                savedUser =
                    localStorage.getItem("travelUser");
            }


            if (!savedUser) {

                signinError.textContent =
                    "No registered account found. Please create an account first.";

                return;
            }


            // Convert saved data to object
            let user;

            try {

                user = JSON.parse(savedUser);

            } catch (error) {

                signinError.textContent =
                    "There is a problem with the saved account.";

                return;
            }


            // ==========================================
            // CHECK EMAIL & PASSWORD
            // ==========================================

            if (
                email === user.email &&
                password === user.password
            ) {

                // Save logged-in user
                localStorage.setItem(
                    "travelUser",
                    JSON.stringify(user)
                );


                // SUCCESS MESSAGE
                signinSuccess.textContent =
                    "Sign in successful! Welcome " +
                    user.fullName +
                    " 🎉";


                // ==========================================
                // REDIRECT TO TRAVEL APP
                // ==========================================

                setTimeout(function () {

                    window.location.href = "travelapp.html";

                }, 1000);


            } else {

                signinError.textContent =
                    "Invalid email or password.";

            }

        });
    }

});

