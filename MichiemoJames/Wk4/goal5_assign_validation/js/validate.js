/*
     Developed by the JavaScript team at Fullsail
     Date: 1306
     Name: James Michiemo
*/

(function(){

    myform.onsubmit = function(e){

        //Below is one example of the validateField call with an argument.
        //You must dynamically retrieve the ID name from the DOM/HTML.
        var username = document.querySelector('#f_username'),
            email = document.querySelector('#f_email'),
            phone = document.querySelector('#f_phone'),
            ssn = document.querySelector('#f_ssn'),
            password = document.querySelector('#f_password');
        
        validateField(username);  //id = is the form input field ID
        validateField(email);
        validateField(phone);
        validateField(ssn);
        validateField(password);


        e.preventDefault();
        return false;
    };


    var validateField = function(inputName){

        if (inputName.name === 'f_username'){
            var pattern = /^

            //You will need to create an else-if statement for each input field id.  The
            //      format will be similar to the above IF statement.


        }else if (inputName.name === 'f_email'){
        }else if (inputName.name === 'f_phone'){
        }else if (inputName.name === 'f_ssn'){
        }else if (inputName.name === 'f_password'){
        };
          


        var pass = 'the RegEx .test statement is needed here';
        var errorMsg = inputName.nextSibling.nextSibling.nextSibling.nextSibling;

        if (!pass || inputName.value.length < 2){
            errorMsg.style.display='block';
            inputName.style.backgroundColor = 'red';
        } else if (pass && inputName.value.length > 5){
            errorMsg.style.display='none';
            inputName.style.backgroundColor = 'green';
        } else {
            errorMsg.style.display='none';
            inputName.style.backgroundColor = 'white';
        };
    };

})();  // end wrapper



