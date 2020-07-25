function validation()
{


   var name=document.contactForm.name.value;
   var email=document.contactForm.email.value;  
   var firstpassword=document.contactForm.password.value;
   var secondpassword=document.contactForm.password2.value; 
   var age= document.contactForm.age.value;
   var url=document.contactForm.url.value;
   var error_message=document.getElementById("errormessagee");


   if (name==null || name==""){  
    document.getElementById("nameErr").innerHTML = "Name can't be blank"; 
   
    return false;  
  }else if(name.length<4){  
    document.getElementById("nameErr").innerHTML = "Name must be at least 5 characters long."; 
    return false;  
    }  

  

var x=document.contactForm.email.value;  
var atposition=x.indexOf("@");  
var dotposition=x.lastIndexOf(".");  
if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
    document.getElementById("emailErr").innerHTML = "Please enter a valid e-mail address \n atpostion:"+" @ "+"\n dotposition:"+" . ";  
  return false;  
  } 

  if(firstpassword==secondpassword){  
    document.getElementById("passErr").innerHTML = "Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters!"; 
return true;  
}  
else{  
    document.getElementById("cpassErr").innerHTML = "password must be same!";  
return false;  
} 

if (isNaN(age) || age < 1 || age > 18)
{
    document.getElementById("ageErr").innerHTML = "age must be above 18 years or moer!";  

    return false;
}




alert("Form submitted successfully!")
return true;
    
} 