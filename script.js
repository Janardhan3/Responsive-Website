const form = document.getElementById("form");
        const Email = document.getElementById("Email");
        const Password1 = document.getElementById("Password1");
        const Password2 = document.getElementById("Password2");
        //error message
        function showError(input, message) {
            const formControl = input.parentElement;
            formControl.className = 'formcontrols Error';
            const small = formControl.querySelector("small");
            small.innerText = message;
        }
        //show success
        function showSuccess(input) {
            formControl = input.parentElement;
            formControl.className = "formcontrols success";
        }


        //event list
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            checkInputs();
        });

        function checkInputs() {
            const Emailvalue = Email.value.trim();
            const Password1value = Password1.value.trim();
            const Password2value = Password2.value.trim();


            //username 1 and 2
         
            //Email
            if (Emailvalue === '') {
                showError(Email, 'Email cannot be blank');
            }
            else {
                showSuccess(Email);
            }

            //Password 
            if (Password1value=== '') {
                showError(Password1, 'Password is required');
            }
            else if (Password1value.length < 5) {
                showError(Password1, 'Password atleast 5 character');
            }
            else {
                showSuccess(Password1);
            }

            if (Password2value === '') {
                showError(Password2, 'Password is required');
            }
            else if (Password1value !== Password2value) {
                showError(Password2, 'Password does not match');
            }

            else {
                showSuccess(Password2);
            }

        }