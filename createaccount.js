function data()
{
    var a=document.getElementById("name").value;
    var b=document.getElementById("number").value;
    var c=document.getElementById("password").value;
    var d=document.getElementById("confirmpassword").value;
    if (a==""||  b==""||  c==""||  d=="")
    {
        alert("All fields are mandatory");
        return false;
    }
    else if (b.length<10||b.length>10)
    {
      alert("number should be of 10 digit! please enter valid nuber");
      return false;
    }
    else if (isNaN(b))
    {
        alert("Only Numbers allowed ! please enter valid number ");
        return false;
    }
    else if (c!=d)
    {
        alert(" password and confirmed password should be same! please recheck the password");
        return false;
    }
    else{
        true;
    }
   
}