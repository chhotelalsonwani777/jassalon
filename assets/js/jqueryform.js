

$(document).ready(function () {
    let currentStep = 1;
    const totalSteps = 4;

    $('#nextBtn').attr('disabled', true);

    // Validate Step 1 (Personal Details)
    $('#fullName, #phoneNumber, #email').on('input', function () {
        validateStep1();
        showReviewData();
    });

    // Validate Step 2 (Location of Interest)
    $('#location').on('change', function () {
        validateStep2();
        showReviewData();
    });

    // Validate Step 3 (Investment Capacity)
    $('#investment').on('change', function () {
        validateStep3();
        showReviewData();
    });

    $('#nextBtn').click(function () {
        if (currentStep < totalSteps) {
            currentStep++;
            updateStepper();
        } else if (currentStep === totalSteps) {
            showReviewData();


            $('#successModal').modal('show');

            return false;
        }
    });

    $('#prevBtn').click(function () {
        if (currentStep > 1) {
            currentStep--;
            updateStepper();
        }
    });

    function updateStepper() {
        $('.step').removeClass('active');
        $('.form-section').removeClass('active');

        $(`.step[data-step="${currentStep}"]`).addClass('active');
        $(`#step-${currentStep}`).addClass('active');

        if (currentStep === 1) {
            $('#prevBtn').addClass('disabled').attr('disabled', true);
        } else {
            $('#prevBtn').removeClass('disabled').attr('disabled', false);
        }

        if (currentStep === totalSteps) {
            $('#nextBtn').text('Submit');
        } else {
            $('#nextBtn').text('Next');
        }

        if (currentStep === 1) {
            validateStep1();
        } else if (currentStep === 2) {
            validateStep2();
        } else if (currentStep === 3) {
            validateStep3();
        } else {
            $('#nextBtn').attr('disabled', false);
        }

        // Dynamically show data on step change
        showReviewData();
    }

    // Validation for Step 1
    function validateStep1() {
        const name = $('#fullName').val().trim();
        const phone = $('#phoneNumber').val().trim();
        const email = $('#email').val().trim();

        if (name !== '' && phone !== '' && email !== '') {
            $('#nextBtn').attr('disabled', false);
        } else {
            $('#nextBtn').attr('disabled', true);
        }
    }

    // Validation for Step 2
    function validateStep2() {
        const location = $('#location').val();

        if (location !== null) {
            $('#nextBtn').attr('disabled', false);
        } else {
            $('#nextBtn').attr('disabled', true);
        }
    }

    // Validation for Step 3
    function validateStep3() {
        const investment = $('#investment').val();

        if (investment !== null) {
            $('#nextBtn').attr('disabled', false);
        } else {
            $('#nextBtn').attr('disabled', true);
        }
    }

    // Show data dynamically
    function showReviewData() {
        const name = $('#fullName').val();
        const phone = $('#phoneNumber').val();
        const email = $('#email').val();
        const location = $('select#location').find(":selected").text();
        const investment = $('select#investment').find(":selected").text();



        const formData = {
            fullName: name || 'N/A',
            phoneNumber: phone || 'N/A',
            emailAddress: email || 'N/A',
            preferredLocation: location || 'N/A',
            investmentCapacity: investment || 'N/A'
        };

        // Update review data in real-time
        $('#reviewName').text(name || 'N/A');
        $('#reviewPhone').text(phone || 'N/A');
        $('#reviewEmail').text(email || 'N/A');
        $('#reviewLocation').text(location || 'N/A');
        $('#reviewInvestment').text(investment || 'N/A');


        // Log the object to the console
        console.log("Form Data: ", formData);

        // Log the form data in the console
        // console.log("Full Name: ", name);
        // console.log("Phone Number: ", phone);
        // console.log("Email Address: ", email);
        // console.log("Preferred Location: ", location);
        // console.log("Investment Capacity: ", investment);


    }
});

$('.close, .btn-warning').click(function () {
    $('#successModal').modal('hide');
});






$(document).ready(function(){
    // Smooth scrolling for all links with class 'scroll-link'
    $('.scroll-link').on('click', function(e) {
        e.preventDefault(); // Prevent default anchor behavior
        
        // Get the target section's position from top
        var target = $($(this).attr('href')).offset().top;
        
        // Animate the scroll to the target section
        $('html, body').animate({
            scrollTop: target
        }, 500); 
    });
});