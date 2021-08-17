// get input amount
function getInputId(amount){
    const inputField = document.getElementById(amount);
    const inputAmountValue = inputField.value;
    const inputAmount = parseFloat(inputAmountValue);
    // clear deposit input
    inputField.value = '';

    return inputAmount;
}

// get total current amount
function getCurrentAmount(totalAmount, depositAmount){
    const currentTotal = document.getElementById(totalAmount);
    const currentTotalText = currentTotal.innerText;
    const currentTotalAmount = parseFloat(currentTotalText);
    currentTotal.innerText = currentTotalAmount + depositAmount;
}

// getCurrentBalance
function getCurrentBalance(){
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalText);
    return balanceTotalAmount;
}

//update total balance
function updateBalance(depositAmount, isAdd){
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalAmount = getCurrentBalance();
    if(isAdd == true){
        balanceTotal.innerText = balanceTotalAmount + depositAmount;
    }else{
        balanceTotal.innerText = balanceTotalAmount - depositAmount;
    }
}

// handle deposit total amount
document.getElementById('submit-deposit').addEventListener('click', function(){
    const depositAmount = getInputId('deposit-amount');
    if(depositAmount > 0){
        getCurrentAmount('deposit-total', depositAmount);
        updateBalance(depositAmount ,true);
    }
})

// handle withdraw total amount
document.getElementById('submit-withdraw').addEventListener('click', function(){
    const withdrawAmount = getInputId('withdraw-amount');
    const currentBalance = getCurrentBalance();
    if(withdrawAmount > 0 && withdrawAmount < currentBalance){
        getCurrentAmount('withdraw-total', withdrawAmount);
        updateBalance(withdrawAmount, false);
    }
    if(withdrawAmount > currentBalance){
        alert('You can not withdraw more than what you have in your account!!!');
    }
})