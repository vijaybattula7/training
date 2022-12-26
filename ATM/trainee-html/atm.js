 function validatelogin(){  
             var USER_NAME=document.getElementById("username").value;  
             var PASSWORD=document.getElementById("pswd").value;   
  	     
             if (USER_NAME=="vijaydq" && PASSWORD=="12345" ||USER_NAME=="vj" && PASSWORD=="12" ){  
       
                confirm("Are You Sure");
                alert("successfully login");   
              }else {  
                alert("incorrect login credentials");  
                document.getElementById("username").focus();
               var pass=prompt("Re-enter Your Password");
  	        return false;         
                    }  
                 }  
