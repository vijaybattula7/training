var account_number=["12345","67890"];
var password=["0000","1111"];
var accountBalance=[10000,15000];
var useraccount;
var userpassword;
var deposit;
var withdraw;
var transactions=[[],[]];
var i,type,amount,balance,recipt="";
var login_page=document.querySelector('.contain');
var login_btn=document.querySelector('.loginpage');
var accPswdLogin=document.querySelector('.log');
var accPswdLogin_btn=document.querySelector('#vijay');
var atm_ui=document.querySelector('.ui');
var atm_ui_withdrawBtn=document.querySelector('.Withdraw-btn');
var ui_withdraw=document.querySelector('.withdrawRequest');
var atm_ui_depositBtn=document.querySelector('.deposit-btn');
var ui_deposit=document.querySelector('.depositRequest');
var tableTrans=document.querySelector('.transaction');
var TransData=document.querySelector('.trans');
var modal=document.getElementById("myModal");
var span=document.getElementsByClassName("close")[0];
var tcol=document.getElementsByTagName('tr');
var transactions_btn=document.querySelector(".transactions_btn");


 function my() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}



function loginValidation(){
 useraccount=document.querySelector('#username').value;   
 userpassword=document.querySelector('#password').value;       
  if(account_number.indexOf(useraccount)==-1)
    {
   // alert('please enter the details');
    my();
    }
    
    else{
    
  if( account_number.indexOf(useraccount)==password.indexOf(userpassword))
      {
      i=account_number.indexOf(useraccount);
      alert('welcome to your account');  
      atm_ui.style.display='block';
      accPswdLogin.style.display='none';        
      document.querySelector('.money').textContent=accountBalance[i];
      document.querySelector('.acnum').textContent=account_number[i];
      }
      else
       {
       // alert("login credentials doesn't match");
        my();
       }
    }
 
   
      
}



  function Deposit(){
    deposit=parseInt(  document.querySelector('#deposit-ammo').value);
    accountBalance[i]=accountBalance[i]+deposit;
    alert("total balance is:"+accountBalance[i]);
    transactions[i].push({type:"deposit",amount:deposit,balance:accountBalance[i]});
    document.querySelector('.money').textContent=accountBalance[i];
   }


  function Withdraw(){
    withdraw=document.querySelector('#withdraw-ammo').value;
                                if( withdraw>accountBalance[i])
                                {
                                alert("insufficient balance");
                                }else
                                {
                                accountBalance[i]=accountBalance[i]-withdraw;
                                alert("remaining balance :"+accountBalance[i]);
                                document.querySelector('.money').textContent=accountBalance[i];
                                transactions[i].push({type:"withdraw",amount:withdraw,balance:accountBalance[i]});
                               
                        }
                        }
                        
    function withdarwInput(){
    Withdraw();
    atm_ui.style.display='block';
    ui_withdraw.style.display='none';
   }     

function depositInput(){
 Deposit();
  atm_ui.style.display='block';
ui_deposit.style.display='none';
}               
    
  

 function checkTransactions(task)
{ 
        tableTrans.style.display='block';
	ui_deposit.style.display='none';
	atm_ui.style.display='none';
	if(task=="withdraw"){
	TransData.innerHTML="";
for(let j=0;j<transactions[i].length;j++)
	{
	if (transactions[i][j].type=="withdraw"){
	recipt = 
	`<tr class='red'><td>${j+1}</td>
	<td>${transactions[i][j].type}</td>
	<td>${transactions[i][j].amount}</td>
	<td>${transactions[i][j].balance}</td></tr>`;
	TransData.innerHTML+=recipt;
	
	}
	
	}
	
	}
	else if(task=="Deposit"){
		TransData.innerHTML="";
for(let j=0;j<transactions[i].length;j++)
	{
	if (transactions[i][j].type=="deposit"){
	recipt = 
	`<tr class="green"><td>${j+1}</td>
	<td>${transactions[i][j].type}</td>
	<td>${transactions[i][j].amount}</td>
	<td>${transactions[i][j].balance}</td></tr>`;
	
	TransData.innerHTML+=recipt;
	}
	
	}
	
	}
	else{
	for(let j=0;j<transactions[i].length;j++)
	{
	recipt = 
	`<tr><td>${j+1}</td>
	<td>${transactions[i][j].type}</td>
	<td>${transactions[i][j].amount}</td>
	<td>${transactions[i][j].balance}</td></tr>`;
	TransData.innerHTML+=recipt;
	if(transactions[i][j].type=="deposit"){
	tcol[j+1].style.color="green";
	}
	else{
	tcol[j+1].style.color="red";
	}
	}
	
	}
	
	}
	
	
 function withdraw_Transactions(){
 withdraw_Tran.style.display='block';
 tableTrans.style.display='none';
 }
 
 function wBack(){
 withdraw_Tran.style.display='none';
tableTrans.style.display='block';
 }
 
 
 function deposit_Transactions(){
 deposit_Tran.style.display='block';
 tableTrans.style.display='none';
 }
 
 function dBack(){
  
   deposit_Tran.style.display='none';
   tableTrans.style.display='block';
 }

 /*  accPswdLogin_btn.addEventListener("click",function(){
    atm_ui.style.display='block';
    accPswdLogin.style.display='none';
    });*/
    
    login_btn.addEventListener("click",function(){
    accPswdLogin.style.display='block';
    modal.style.display = "none";
    document.querySelector('.contain').style.display='none';
    });


    atm_ui_withdrawBtn.addEventListener("click",function(){
    ui_withdraw.style.display='block';
    atm_ui.style.display='none';
    });
    
    atm_ui_depositBtn.addEventListener("click",function(){
    ui_deposit.style.display='block';
    ui_withdraw.style.display='none';
    atm_ui.style.display='none';
    });
    
    function back(){
     accPswdLogin.style.display='none';
    login_page.style.display='block';
    }
    function backlogin(){
    atm_ui.style.display='none';
    accPswdLogin.style.display='block';
    }
     
    function backDeposit(){
    atm_ui.style.display='block';
    ui_deposit.style.display='none';
    } 
    
    function backWithdraw(){
     atm_ui.style.display='block';
    ui_withdraw.style.display='none';
    }
    
    
    function mainMenu(){
    TransData.innerHTML="";
    tableTrans.style.display='none';
    atm_ui.style.display='block';
    }
    
    
    function logout(){
    
    TransData.innerHTML="";
    tableTrans.style.display='none';
    login_page.style.display='block';
     atm_ui.style.display='none';
    }
    
