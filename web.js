$(document).ready(function () {
    $('.about').hide();
    $('.contact-form').hide();

    // Handle click event for 'About' link
    $('#aboutli').click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('#about').offset().top
          }, 'slow');
        $('.about').show();
        $('#sarath').hide();
        $('#afterloginuser').hide();
        $('#afterlogingamescard').hide();
        $('.contact-form').hide();
        $('#feature').hide();
    });

    // Handle click event for 'About' link
    $('#aboutliMobile').click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('#about').offset().top
          }, 'slow');
        $('.about').show();
        $('#sarath').hide();
        $('.contact-form').hide();
        $('#afterloginuser').hide();
        $('#feature').hide();
        $('#afterlogingamescard').hide();
    });

    $('.morebtn').click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('#about').offset().top
          }, 'slow');
        $('.about').show();
        $('#sarath').hide();
        $('.contact-form').hide();
        $('#afterloginuser').hide();
        $('#feature').hide();
        $('#afterlogingamescard').hide();
    });

    // Handle click event for 'Contact' link
    $('#contectli').click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('#about').offset().top
          }, 'slow');
        $('.contact-form').show();
        $('#afterloginuser').hide();
        $('#sarath').hide();
        $('.about').hide();
        $('#feature').hide();
        $('#afterlogingamescard').hide();
    });

    $('#contectliMobile').click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('#about').offset().top
          }, 'slow');
        $('.contact-form').show();
        $('#afterloginuser').hide();
        $('#sarath').hide();
        $('.about').hide();
        $('#feature').hide();
        $('#afterlogingamescard').hide();
    });

    $('#abcontact').click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('#about').offset().top
          }, 'slow');
        $('.contact-form').show();
        $('#afterloginuser').hide();
        $('#sarath').hide();
        $('.about').hide();
        $('#feature').hide();
        $('#afterlogingamescard').hide();
    });

    $('#confoot').click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('#about').offset().top
          }, 'slow');
        $('.contact-form').show();
        $('#afterloginuser').hide();
        $('#sarath').hide();
        $('.about').hide();
        $('#feature').hide();
        $('#afterlogingamescard').hide();
    });

    // Handle click event for 'Home' link
    $('#homeli').click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('#about').offset().top
          }, 'slow');
          var isLoggedIn = localStorage.getItem('loggedIn');

          if (isLoggedIn) {
            $('#sarath').hide();
            $('.about').hide();
            $('#afterloginuser').show();
            $('#afterlogingamescard').show();
            $('.contact-form').hide();
            $('#feature').show();
          } else {
            $('#sarath').show();
            $('.about').hide();
            $('#afterloginuser').show();
            $('#afterlogingamescard').hide();
            $('.contact-form').hide();
            $('#feature').show();
          }  
     
    });

    $('#homeliMobile').click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('#about').offset().top
          }, 'slow');
          var isLoggedIn = localStorage.getItem('loggedIn');

          if (isLoggedIn) {
            $('#sarath').hide();
            $('.about').hide();
            $('#afterloginuser').show();
            $('#afterlogingamescard').show();
            $('.contact-form').hide();
            $('#feature').show();
          } else {
            $('#sarath').show();
            $('.about').hide();
            $('#afterloginuser').show();
            $('#afterlogingamescard').hide();
            $('.contact-form').hide();
            $('#feature').show();
          }  
    });

    $('#logformli').click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('#about').offset().top
          }, 'slow');
        $('#signlogform').show();
        $('#sarath').hide();
        $('.about').hide();
        $('#afterloginuser').hide();
        $('#afterlogingamescard').hide();
        $('.contact-form').hide();
        $('#feature').hide();
        $('#headerhome').hide();
        $('#footerhome').hide();
    });

    $('#logformliMobile').click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('#about').offset().top
          }, 'slow');
        $('#signlogform').show();
        $('#formlogin').show();
        $('#formsignup').hide();
        $('#afterloginuser').hide();
        $('#afterlogingamescard').hide();
        $('#sarath').hide();
        $('.about').hide();
        $('.contact-form').hide();
        $('#feature').hide();
        $('#headerhome').hide();
        $('#footerhome').hide();
    });

    $('#midlogin').click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('#about').offset().top
          }, 'slow');
        $('#signlogform').show();
        $('#formlogin').show();
        $('#formsignup').hide();
        $('#afterloginuser').hide();
        $('#afterlogingamescard').hide();
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
        e.preventDefault();

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
            localStorage.setItem('userName', user.firstName);

            alert('Login successful!');
            showLoggedInUI();
            // Update UI for logged-in user
            $('#sarath').hide();
            $('#afterloginuser').show();
            $('#afterlogingamescard').show();
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
            var firstName = user.firstName;
            $('#wecomeuser').text('Welcome ' + firstName);
            $('.containers').css({
                'width': '100%',
                'background': '#ee47588c',
                'background-image': 'url("IMG/pubg-48230.png")',
                'background-repeat': 'no-repeat',
                'background-size': 'cover',
                'background-position': 'center'
              });

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
        e.preventDefault();

        // Show a confirmation prompt
        var confirmLogout = confirm('Are you sure you want to log out?');

        if (confirmLogout) {

            logoutUser();
            localStorage.removeItem('loggedIn');
            var userName = localStorage.getItem('userName');
            $('#wecomeuser').text('welcome to SARATH Gaming');
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
            var userName = localStorage.getItem('userName');
            $('#wecomeuser').text('welcome to SARATH Gaming');
            showLoggedOutUI();
            // Call the logout function
        }

    });

    function closesignlogpage() {
        $('#signlogform').hide();
        $('#sarath').show();
        $('#afterloginuser').show();
        $('#afterlogingamescard').hide();
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
        var userName = localStorage.getItem('userName');
        $('#wecomeuser').text('welcome to SARATH Gaming');
        showLoggedOutUI();
    });


});
function showLoggedInUI() {
    $('#sarath').hide();
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
    $('#afterlogingamescard').show();
    $('.containers').css({
        'width': '100%',
        'background': '#ee47588c',
        'background-image': 'url("IMG/pubg-48230.png")',
        'background-repeat': 'no-repeat',
        'background-size': 'cover',
        'background-position': 'center'
      });
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
    $('#afterlogingamescard').hide();
    $('.containers').css({
        'width': '100%',
        'background': '#ffffff',
        'background-image': 'url("IMG/pubg-48230.png")',
        'background-repeat': 'no-repeat',
        'background-size': 'cover',
        'background-position': 'center'
      });
    $('#midlogin').show();
    $('#midplay').hide();
}

// Check if the user is already logged in
var isLoggedIn = localStorage.getItem('loggedIn');

if (isLoggedIn) {
    var userName = localStorage.getItem('userName');
    $('#wecomeuser').text('Welcome ' + userName);
    showLoggedInUI();
} else {
    var userName = localStorage.getItem('userName');
    $('#wecomeuser').text('welcome to SARATH Gaming');
    showLoggedOutUI();
}
