//Modularity :Event Handler Module

//Event Handler logic
//Expose functions to be used outside of javascript
exports.payIncomeTax=function(){
    console.log("20% income tax to be applied against account..!");
}

exports.payServiceTax=function(){
    console.log("18% Service tax to be applied against account..!");
}

exports.blockAccount=function(){
    console.log("The account has been blocked Temporarily");
}

