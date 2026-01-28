//Modularity :Event Handler Module
//Event Listeners (Event Handlers)
//Expose functions to be used outside of javascript
//Pubilshing functions outside by exports object
exports.payIncomeTax=function(){
    console.log("20% income tax to be applied against account..!");
}

exports.payServiceTax=function(){
    console.log("18% Service tax to be applied against account..!");
}

exports.blockAccount=function(){
    console.log("The account has been blocked Temporarily..!");
}

exports.sendEmail=function(){
    console.log("Email has been sent to customer..!");
}
exports.sendSMS=function(){
    console.log("The SMS is sent on the registered mobile number.!");
}
