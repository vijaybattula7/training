      var account1=12345,account2=67890,pwsd1=0000,pwsd2=1111;
      var accountbal;
      var deposit;
      var withdraw;
      var ac;
      var pw;
      var flag;
      function atm()
      {   
      login();
       if(account1==ac)
          {
            accountbal=10000;
            alert("account1 logged in");
          }
          else if(account2==ac){
             accountbal=20000;
              alert("account2 logged in");
               }
               else{
               atm();
               }
               option();
                atm();
        
      }
               
               
     //switch          
               
         function option(){      
          flag=prompt(" choose any one option \n \n1.Account Balance\n2.Deposit\n3.Withdraw\n4.exit");
                 switch (flag) {
                 case "1":checkbalance(); 
                 case "2":deposit(); 
  		 case "3":withdraw(); 
  		 case "4":  exit();break;option();
  		 default:alert("enter the correct option");
          }
          }

      
    
   //login
      function login(){
      ac=prompt("Enter Your Account Number");
      if(ac==""){
      alert("account number not be empty");
      }
       if(account1==ac || account2==ac){
       pw=prompt("Enter Your Password");
         if(account1==ac && pwsd1==pw ||account2==ac && pwsd2==pw){
             alert("welcome to your Account  ");
             alert("1.Account Balance\n2.Deposit\n3.Withdraw\n4.exit");
        }
          else{
            alert("you entered wrong password\n \nRe-enter your Account number");
            atm();
               }
         }
          else{
          alert("you entered wrong account number");    
              }
     }
     
     //check balance
     
     function checkbalance()
     {
     alert("your account balance is :"+accountbal);
     }
     
     //deposit
     
     function deposit()
     {
        deposit=parseInt(prompt("enter your deposit amount"));
        accountbal=accountbal+deposit;
        alert("total balance is:"+accountbal);
     }
     
     //withdraw
     
     function withdraw(){
      withdraw=parseInt(prompt("enter your  withdraw amount"));
                                if( withdraw>accountbal)
                                {
                                alert("insufficient balance");
                                }else
                                {
                                accountbal=accountbal-withdraw;
                                alert("remaining balance :"+accountbal);
                                }
                        }

    //exit
  
    function exit()
    {
     alert("4.exit");
    }
  
     
