 function getValues(){
    const number1 =parseFloat(document.getElementById("num1").value);
    const number2 =parseFloat(document.getElementById("num2").value);

    const object={
        num1: number1,// object
        num: number2,
    };
    return object;


 }
function add(){
    const values = getValues();
    // const num1 =document.getElementById("num1").value;
    // const num2 =document.getElementById("num2").value;
    // console.log(num1+num2)// the num are in string so 

    // we have to this
    // const num1 =parseFloat(document.getElementById("num1").value);
    // const num2 =parseFloat(document.getElementById("num2").value);
    // console.log(num1 + num2)
    const result = values.num1 + values.num2

    // document.getElementById("result").textContent = "Result:"+(num1 + num2);
    document.getElementById("result").textContent = `Result:${(result)}`;
}
function subtract(){
    const num1 =parseFloat(document.getElementById("num1").value);
    const num2 =parseFloat(document.getElementById("num2").value);
    console.log(num1 - num2)

    const result =num1 - num2
    document.getElementById("result").textContent = `Result:${result}`;

}
function multiply(){
     const num1 =parseFloat(document.getElementById("num1").value);
    const num2 =parseFloat(document.getElementById("num2").value);
    console.log(num1 * num2)

    const result =num1 *num2
    document.getElementById("result").textContent = `Result:${result}`;
}
function divide(){
     const num1 =parseFloat(document.getElementById("num1").value);
    const num2 =parseFloat(document.getElementById("num2").value);
    console.log(num1 / num2)

    const result =num1 / num2
    document.getElementById("result").textContent = `Result:${result}`;

}
// we can also do like this (this is short version then upper one)
function getValues(){
    const number1 =parseFloat(document.getElementById("num1").value);
    const number2 =parseFloat(document.getElementById("num2").value);

    const object={
        num1: number1,// object
        num: number2,
    };
    return object;
 }

function add(){
    const values = getValues();
    const result = values.num1 + values.num2
    document.getElementById("result").textContent = `Result:${(result)}`;
}
// like this we can do for sub,mul,div