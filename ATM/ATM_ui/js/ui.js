var modal=document.querySelector('.loginpage');
var modal2=document.querySelector('.log');
var account_number=[12345,67890];
var password=[0000,1111];
var balance=[10000,15000];
var useraccount;
var userpassword;
var modal3=document.querySelector('#vijay');
var modal4=document.querySelector('.ui');
var modal5=document.querySelector('.Withdraw-btn');
var modal6=document.querySelector('.withdrawRequest');
var modal7=document.querySelector('.deposit-btn');
var modal8=document.querySelector('.depositRequest');



modal.addEventListener("click",function(){
modal2.style.display='block';
document.querySelector('.contain').style.display='none';
});



function loginValidation(){
   useraccount=document.querySelector('#username').value;
   userpassword=document.querySelector('#password').value;
   
    
     if(account_number[0]==useraccount && password[0]==userpassword ||account_number[1]==useraccount && password[1]==userpassword)
     {     
     alert('welcome to your account');
     }
     else{
     alert('Re-enter your details');
     }     
     
  }  

modal3.addEventListener("click",function(){
modal4.style.display='block';
modal2.style.display='none';
});


modal5.addEventListener("click",function(){
modal6.style.display='block';

});
modal7.addEventListener("click",function(){
modal8.style.display='block';

});
