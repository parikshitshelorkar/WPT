//Domain: Banking Application
//operations: Credit, Debit
//Business Entity: Account
//Rules: constrains, policy
//Event against Account

    //Account:
        //state: balance
        //operations: withdraw, deposit
        //Rule: Balance threshold
        //Event: Underbalance, overbalance

//Classical javascript syntax
//SOC: sEPERATION OF Cocern
//Loosely coupled, Highly cohesive using emitter

var handlers=require("./handler");  //custom module
var events=require("events");   //builtin module

var emitter=new events.EventEmitter(); //event emitter object



var Account = function(amount){
    var balance = amount;

    //Inner function
    var getBalance=function(){
        return balance;
    };

    var monitor = function(){
        if(balance < 5000){
        //handlers.blockAccount();
        //emitt (trigger) event underBalance
        emitter.emit("underBalance");
        }
        else if(balance >= 250000){
            //handlers.payIncomeTax();
            //emit (trigger) event overBalance
            emitter.emit("overBalance");

        }
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
//events are associated with instance (object )
//Step 1: Configuration, Initialization
//Register Eventhandlers with event using emitter object
//adding listener

//separate logic for pipelining handlers for events

emitter.on("underBalance", handlers.blockAccount);
emitter.on("underBalance", handlers.sendEmail);
emitter.on("underBalance", handlers.sendSMS);
emitter.on("overBalance", handlers.payIncomeTax);

//Step 2: Create Objects

var acct123 = new Account(55000); 
var data = acct123.receiveBalance();            //creating an instance
console.log("Balance= " + data);                  //invoking member function
// var amount = 50000000;
// acct123.credit(amount);
// console.log("Balance="+data);

//Step 3: Start invoking their operations

acct123.debit(51000);
var data = acct123.receiveBalance();
console.log("Balance="+data);


// var u = Account(60000).receiveBalance();
// console.log(u);