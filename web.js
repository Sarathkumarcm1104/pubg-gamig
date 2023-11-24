$(document).ready(function () {
    // Initially hide the about and contact sections
    $('.about').hide();
    $('.contact-form').hide();

    // Handle click event for 'About' link
    $('#aboutli').click(function (e) {
        e.preventDefault();
        $('.about').show();
        $('#sarath').hide();
        $('.contact-form').hide();
        $('#feature').hide();
    });

    // Handle click event for 'About' link
    $('#aboutliMobile').click(function (e) {
        e.preventDefault();
        $('.about').show();
        $('#sarath').hide();
        $('.contact-form').hide();
        $('#feature').hide();
    });

    $('.morebtn').click(function (e) {
        e.preventDefault();
        $('.about').show();
        $('#sarath').hide();
        $('.contact-form').hide();
        $('#feature').hide();
    });

    // Handle click event for 'Contact' link
    $('#contectli').click(function (e) {
        e.preventDefault();
        $('.contact-form').show();
        $('#sarath').hide();
        $('.about').hide();
        $('#feature').hide();
    });

    $('#contectliMobile').click(function (e) {
        e.preventDefault();
        $('.contact-form').show();
        $('#sarath').hide();
        $('.about').hide();
        $('#feature').hide();
    });

    $('#abcontact').click(function (e) {
        e.preventDefault();
        $('.contact-form').show();
        $('#sarath').hide();
        $('.about').hide();
        $('#feature').hide();
    });

    $('#confoot').click(function (e) {
        e.preventDefault();
        $('.contact-form').show();
        $('#sarath').hide();
        $('.about').hide();
        $('#feature').hide();
    });

    // Handle click event for 'Home' link
    $('#homeli').click(function (e) {
        e.preventDefault();
        $('#sarath').show();
        $('.about').hide();
        $('.contact-form').hide();
        $('#feature').show();
    });

    $('#homeliMobile').click(function (e) {
        e.preventDefault();
        $('#sarath').show();
        $('.about').hide();
        $('.contact-form').hide();
        $('#feature').show();
    });

    $('#logformli').click(function (e) {
        e.preventDefault();
        $('#signlogform').show();
        $('#sarath').hide();
        $('.about').hide();
        $('.contact-form').hide();
        $('#feature').hide();
        $('#headerhome').hide();
        $('#footerhome').hide();
    });

    $('#logformliMobile').click(function (e) {
        e.preventDefault();
        $('#signlogform').show();
        $('#sarath').hide();
        $('.about').hide();
        $('.contact-form').hide();
        $('#feature').hide();
        $('#headerhome').hide();
        $('#footerhome').hide();
    });

    $('#midlogin').click(function (e) {
        e.preventDefault();
        $('#signlogform').show();
        $('#sarath').hide();
        $('.about').hide();
        $('.contact-form').hide();
        $('#feature').hide();
        $('#headerhome').hide();
        $('#footerhome').hide();
    });

    $('#loginbtnsign').on('click', function () {
        $('#formsignup').hide();
        $('#formlogin').show();
    });

    $('#signupbtnlog').on('click', function () {
        $('#formlogin').hide();
        $('#formsignup').show();
    });

    $('#showhidesign').on('click', function (e) {
        e.preventDefault();
        var passwordField = $('#ispass');
        passwordField.toggleClass('ispasssign');
        var passwordFieldType = passwordField.attr('type');
        if (passwordFieldType === 'password') {
            passwordField.attr('type', 'text');
            $(this).html('<i class="far fa-eye-slash"></i> Hide');
        } else {
            passwordField.attr('type', 'password');
            $(this).html('<i class="far fa-eye"></i>Show');
        }
    });

    $('#showhidelog').on('click', function (e) {
        e.preventDefault();
        var passwordField = $('#ilpass');
        passwordField.toggleClass('ilpasslog');
        var passwordFieldType = passwordField.attr('type');
        if (passwordFieldType === 'password') {
            passwordField.attr('type', 'text');
            $(this).html('<i class="far fa-eye-slash"></i> Hide');
        } else {
            passwordField.attr('type', 'password');
            $(this).html('<i class="far fa-eye"></i>Show');
        }
    });

    $('#cshowhidesign').on('click', function (e) {
        e.preventDefault();
        var passwordField = $('#cispass');
        passwordField.toggleClass('cispasssign');
        var passwordFieldType = passwordField.attr('type');
        if (passwordFieldType === 'password') {
            passwordField.attr('type', 'text');
            $(this).html('<i class="far fa-eye-slash"></i> Hide');
        } else {
            passwordField.attr('type', 'password');
            $(this).html('<i class="far fa-eye"></i>Show');
        }
    });

    $("#subbtnsign").click(function (event) {
        // Prevent the form from submitting by default
        event.preventDefault();

        // Validation logic
        var fname = $("#isfname").val();
        var lname = $("#islname").val();
        var email = $("#isemail").val();
        var dob = $("#isdob").val();
        var gender = $("input[name='gender']:checked").val();
        var hobbies = $("#hob").val();
        var religion = $("#religionsign").val();
        var password = $("#ispass").val();
        var confirmPassword = $("#cispass").val();
        var firstNamePattern = /^[A-Za-z\w\s]+$/;
        var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        var passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        // Validation checks
        if (fname === "") {
            $("#firstnameerror").text("Please enter First Name");
            return;
        } else if (!firstNamePattern.test(fname)) {
            $("#firstnameerror").text("please check the name");
            return;
        } else {
            $("#firstnameerror").hide();
        }

        if (lname === "") {
            $("#lastnameerror").text("Please enter Last Name");
            return;
        } else {
            $("#lastnameerror").hide();
        }

        if (email === "") {
            $("#emailerror").text("Please enter Email");
            return;
        } else if (!emailPattern.test(email)) {
            $("#emailerror").text("please match the email pattern");
            return;
        } else {
            $("#emailerror").hide();
        }

        if (dob === "") {
            $("#doberror").text("Please enter Date of Birth");
            return;
        } else {
            $("#doberror").hide();
        }

        if (!gender) {
            $("#genderror").text("Please select Gender");
            return;
        } else {
            $("#genderror").hide();
        }

        if (password === "") {
            $("#passerror").text("Please enter Password");
            return;
        } else if (!passwordPattern.test(password)) {
            $("#passerror").text("Password must contain at least 8 characters, including uppercase, lowercase letters, numbers, and special characters");
            $("#passerror").css('font-size', '10px')
            return;
        } else {
            $("#passerror").hide();
        }

        if (confirmPassword === "") {
            $("#cpasserror").text("Please enter confirm Password");
            return;
        } else if (!passwordPattern.test(confirmPassword)) {
            $("#cpasserror").text("Password must contain at least 8 characters, including uppercase, lowercase letters, numbers, and special characters");
            $("#cpasserror").css('font-size', '10px')
            return;
        }

        if (password !== confirmPassword) {
            $("#cpasserror").text("Passwords do not match");
            return;
        } else {
            $("#cpasserror").hide();
        }

        var storedData = localStorage.getItem('formData');
        var formDataArray = storedData ? JSON.parse(storedData) : [];

        // Create a new object to store the current form data
        var formData = {
            firstName: fname,
            lastName: lname,
            email: email,
            dob: dob,
            gender: gender,
            hobbies: hobbies,
            religion: religion,
            password: password,
        };

        // Add the current form data to the array
        formDataArray.push(formData);

        // Update the stored data in localStorage
        localStorage.setItem('formData', JSON.stringify(formDataArray));

        // Optionally, you can clear the form fields after storing data
        // $("#yourFormId")[0].reset();

        // Inform user or perform any additional action after successful storage
        alert('Sign up successfully new user created!');
        $('#formsignup').hide();
        $('#formlogin').show();

    });

    $('#subbtnlog').click(function (e) {
        e.preventDefault(); // Prevent the default form submission

        // Get the values of email and password fields
        var email = $('#ilemail').val();
        var password = $('#ilpass').val();

        // Regular expression for email validation
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Check if the email and password fields are not empty and meet validation criteria
        if (email.trim() === '' || !emailRegex.test(email)) {
            $('#emaillogerror').text('Please enter a valid email address.');
            return;
        } else {
            $('#emaillogerror').text('');
        }

        if (password.trim() === '') {
            $('#passlogerror').text('Please enter a password.');
            return;
        } else {
            $('#passlogerror').text('');
        }
        var email = $('#ilemail').val();
        var password = $('#ilpass').val();

        // Retrieve stored data from localStorage
        var storedData = localStorage.getItem('formData');
        var formDataArray = storedData ? JSON.parse(storedData) : [];

        // Find if the email and password exist in stored data
        var user = formDataArray.find(function (user) {
            return user.email === email && user.password === password;
        });

        // Check if user exists or not
        if (user) {
            // Login successful, navigate to the home page or perform any action
            localStorage.setItem('loggedIn', 'true');
            alert('Login successful!');
            showLoggedInUI();
            // Update UI for logged-in user
            $('#sarath').show();
            $('.about').hide();
            $('.contact-form').hide();
            $('#signlogform').hide();
            $('#feature').show();
            $('#headerhome').show();
            $('#footerhome').show();
            $('#loginli').hide();
            $('#logoutli').show();
            $('#loginliMobile').hide();
            $('#logoutliMobile').show();
            $('#midlogin').hide();
            $('#midplay').show();

        } else {
            // Invalid email or password, show error message
            $('#passlogerror').text('Invalid email or password.');
            // $('#ilpass').val('');
            // $('#ilemail').val('');
        }
    });


    function logoutUser() {
        $('#logoutli').hide();
        $('#loginli').show();
        $('#midlogin').show();
        $('#midplay').hide();

        alert('Logged out successfully!');
    }

    // Click event for the logout button
    $('#logoutBtn').click(function (e) {
        e.preventDefault(); // Prevent default link behavior

        // Show a confirmation prompt
        var confirmLogout = confirm('Are you sure you want to log out?');

        if (confirmLogout) {

            logoutUser();
            localStorage.removeItem('loggedIn');
            showLoggedOutUI();
        }

    });

    $('#logoutBtnMobile').click(function (e) {
        e.preventDefault(); // Prevent default link behavior

        // Show a confirmation prompt
        var confirmLogout = confirm('Are you sure you want to log out?');

        if (confirmLogout) {

            logoutUser();
            localStorage.removeItem('loggedIn');
            showLoggedOutUI();
            // Call the logout function
        }

    });

    function closesignlogpage() {
        $('#signlogform').hide();
        $('#sarath').show();
        $('.about').hide();
        $('.contact-form').hide();
        $('#feature').show();
        $('#headerhome').show();
        $('#footerhome').show();

    }

    $('#exitxlogin').click(function (e) {
        e.preventDefault();
        // Show a confirmation prompt
        var confirmLogout = confirm("Are you sure you don't want to log in?");

        if (confirmLogout) {

            closesignlogpage(); // Call the logout function
        }
    });

    $('#exitxsignup').click(function (e) {
        e.preventDefault();
        var confirmLogout = confirm("Are you sure you don't want to sign up?");

        if (confirmLogout) {

            closesignlogpage(); // Call the logout function
        }
    });

    $('.menu-icon').click(function () {
        $('.mobnav-items').toggleClass('active');
    });

    $('.mobnav-items').on('click', '.close-icon', function () {
        $('.mobnav-items').removeClass('active');
    });


    $('#logoutli', '#logoutliMobile').click(function (e) {
        e.preventDefault();
        // Clear logged-in status and update UI for logged-out user
        localStorage.removeItem('loggedIn');
        showLoggedOutUI();
    });


});
function showLoggedInUI() {
    $('#sarath').show();
    $('.about').hide();
    $('.contact-form').hide();
    $('#signlogform').hide();
    $('#feature').show();
    $('#headerhome').show();
    $('#footerhome').show();
    $('#loginli').hide();
    $('#logoutli').show();
    $('#loginliMobile').hide();
    $('#logoutliMobile').show();
    $('#midlogin').hide();
    $('#midplay').show();
}

function showLoggedOutUI() {
    $('#sarath').show();
    $('.about').hide();
    $('.contact-form').hide();
    $('#signlogform').hide();
    $('#feature').show();
    $('#headerhome').show();
    $('#footerhome').show();
    $('#loginli').show();
    $('#logoutli').hide();
    $('#loginliMobile').show();
    $('#logoutliMobile').hide();
    $('#midlogin').show();
    $('#midplay').hide();
}

// Check if the user is already logged in
var isLoggedIn = localStorage.getItem('loggedIn');

if (isLoggedIn) {
    showLoggedInUI();
} else {
    showLoggedOutUI();
}
