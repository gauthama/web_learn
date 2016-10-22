
function sayHello()
{
	document.write("Hello World!"); 
}

function sayName(name, age)
{
	document.write(name + " is " + age + " years old.");
}

function concatenate(first, last)
{
	var full;
	full = first + last;
	return full;
}

function check_DOM_compatibility()
{
	if (document.getElementById) 
	{
		// If the W3C method exists, use it
		return "W3C";
	}
	else if (document.all) 
	{
		// If the all[] array exists, use it
		return "IE";
	}
	else 
	{
		// Otherwise use the legacy DOM
		return "legacy";
	}
}

//-------------------------------------------
function test_exception_handling(b)
{
	var a = 10;
    {
        try 
		{
               alert("Value of variable a/b is : " + a/b );
        } 
        catch ( e ) 
		{
			// FIXME BLOCK NOT GETTING EXECUTED for eg divide by zero
			document.write("Inside catch block.");
            alert("Error: " + e.description );
        }
		finally 
		{
                  alert("Finally block will always execute!" );
        }
    }
	
	  
    try{
        if ( b == 0 ){
            throw( "Divide by zero error." ); 
        }
        else
        {
            var c = a / b;
        }
    }           
    catch ( e ) {
        alert("Error: " + e );
    }
}

//------------------------------------------------------
function form_input_validation()
{
	if( document.myForm.Name.value == "" ) 
	{
		alert( "Please provide your name!" );
		document.myForm.Name.focus() ;
		return false;
    }
         
	if( document.myForm.EMail.value == "" ) 
	{
		alert( "Please provide your Email!" );
		document.myForm.EMail.focus() ;
		return false;
	}
         
	if( document.myForm.Zip.value == "" ||
		isNaN( document.myForm.Zip.value ) ||
		document.myForm.Zip.value.length != 5 ) 
	{
		alert( "Please provide a zip in the format #####." );
		document.myForm.Zip.focus() ;
		return false;
	}
         
	if( document.myForm.Country.value == "-1" )
	{
		alert( "Please provide your country!" );
		return false;
	}
	
    return( true );
}

function validate_email()
{
	var emailID = document.myForm.EMail.value;
	atpos = emailID.indexOf("@");
	dotpos = emailID.lastIndexOf(".");     
	// Min email-id: a@b.c 
	// Min '@' position is 1. Min '.' position is 3. Min (length - dotpos) is 5-3 == 2
	if (atpos < 1 || dotpos < 3 || ( emailID.length - dotpos < 2)) 
	{
		alert("Please enter correct email ID")
		document.myForm.EMail.focus() ;
		return false;
	}
	return( true );
}
//---------------------------------------------------------
