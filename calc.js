//high-order function exercise


function calc(num1,num2,operation)
{
    return operation(num1,num2);
}

function add(num1,num2)
{
    return num1+num2;
}
function substract(num1,num2)
{
    return num1-num2;
}

function divide(num1,num2)
{
    return num1/num2;
}
function multiply(num1,num2)
{
    return num1*num2;
}