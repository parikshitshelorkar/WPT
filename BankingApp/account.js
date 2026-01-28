//Classical javascript syntax
//SOC: sEPERATION OF Cocern

//Loosely coupled
var handlers=require("./handler");


var Account = function(amount){
    var balance = amount;

    //Inner function
    var getBalance=function(){
        return balance;
    };

    var monitor = function(){
        // if(balance < 5000){
        //     console.log("Insufficent funds..!")
        // }
        // else if(balance >= 250000){
        //     console.log("Crossing the Income Tax limit, Taxation will be applied..!")
        // }
    };

    var withdraw=function(amount){
        balance=balance-amount;
        monitor();
    }
    var deposit=function(amount){
        balance=balance+amount;
        monitor();
    }
    //publish inner functions to outside world
    return{
        receiveBalance:getBalance,
        debit:withdraw,
        credit:deposit
    }
}


var acct123 = new Account(450000);          //creating an instance
var data = acct123.receiveBalance();            //creating an instance
console.log("Balance= "+data);                  //invoking member function

var amount = 50000000;
acct123.credit(amount);
console.log("Balance="+data);

// var u = Account(60000).receiveBalance();
// console.log(u);