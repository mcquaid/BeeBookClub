    window.onload = initAll;
    function initAll() {
      document.getElementById('form_join_submit').onclick = validate_form_join
    }

    function validate_form_join() {

        if(document.getElementById("name").value.length == 0)
        {
          window.alert("Please Enter your Firstname");
          document.getElementById("name").focus();
          return false;
        }
                   
        if(document.getElementById("email").value.length == 0)
        {
          window.alert("Please Enter your Email Address");
          document.getElementById("email").focus();
          return false;
        }

        if(document.getElementById("password").value.length == 0)
        {
          window.alert("Please Enter Your Password");
          document.getElementById("password").focus();
          return false;
        }

		if(document.getElementById("confpwd").value.length == 0)
        {
          window.alert("Please Confirm Your password");
          document.getElementById("confpwd").focus();
          return false;
        }
		
		
        if(document.getElementById("password").value != document.getElementById("confpwd").value)
        {
          window.alert("Your Passwords doesn't Match. Please check Passwords Entered");
          document.getElementById("password").focus();
          return false;
        }

        return true;
    }
