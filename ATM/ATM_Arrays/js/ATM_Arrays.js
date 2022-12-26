      var accountNum=['12345','234567','345678'];
      var password=['0000','1111','2222'];
      var accountBalance=[1000,2000,1500];
      var deposit,withdraw,flag;
      var i,type,amount,recipt="",transactions=[];
     
      function atm()
      {   
             login();     
             option();
             checkTransactions();
             
             atm(); 
        
      }
               
               
     //switch          
               
         function option(){      
          flag=prompt(" choose any one option \n \n1.Account Balance\n2.Deposit\n3.Withdraw\n4.Transaction\n5.exit");
                 switch (flag) {
                 case "1":checkbalance(); option();
                 case "2":depositA(); option(); 
  		 case "3":withdraw();option();
  		 case "4":checkTransactions(); option();
  		 case "5":exit(); atm();break;
  		 default:alert("enter the correct option");option();
          }
          }

 function login(){
    var useraccount=prompt("enter your account number:");
      if(accountNum.includes(useraccount))
        {
        i=accountNum.indexOf(useraccount);
       var userpassword=prompt("enter your password :");
  if( password.includes(userpassword))
  {
  if( accountNum.indexOf(useraccount)==password.indexOf(userpassword))
  {
    option();
  }
  else
  {
   alert("login credentials doesn't match");
    login();
  }
  }
  else
  {
  alert("Incorrect password");
  login();
  }
  }
  else
  {
  alert("Incorrect account number");
   login();
  }
  }
     //check balance
     
     function checkbalance()
     {
     alert("your account balance is :"+accountBalance[i]);
     
     
     }
     
     //deposit
     
     function depositA()
     {
        deposit=parseInt(prompt("enter your deposit amount"));
        accountBalance[i]=accountBalance[i]+deposit;
        alert("total balance is:"+accountBalance[i]);
        transactions.push({type:"deposit",amount:+deposit});
        
     }
     
     //withdraw
     
     function withdraw(){
      withdraw=parseInt(prompt("enter your  withdraw amount"));
                                if( withdraw>accountBalance)
                                {
                                alert("insufficient balance");
                                }else
                                {
                                accountBalance[i]=accountBalance[i]-withdraw;
                                alert("remaining balance :"+accountBalance[i]);
                                
                               transactions.push({type:"withdraw",amount:+withdraw});
                                
                        }}

    //exit
  
    function exit()
    {
     alert("4.exit");
     alert("Thank You...") ;
    }
  
  
  //new login
  function checkTransactions()
{
for(var j=0;j<transactions.length;j++)
	{
	recipt += (`  \n ${transactions[j].type}-${transactions[j].amount}`);
	 }
	 alert(" previous transactions are:"+recipt);
	 }
	 

  
  

  
  
  
  
  
     
