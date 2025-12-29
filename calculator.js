function add(){
    // const num1 =document.getElementById("num1").value;
    // const num2 =document.getElementById("num2").value;
    // console.log(num1+num2)// the num are in string so 

    // we have to this
    const num1 =parseFloat(document.getElementById("num1").value);
    const num2 =parseFloat(document.getElementById("num2").value);
    console.log(num1 + num2)

    // document.getElementById("result").textContent = "Result:"+(num1 + num2);
    document.getElementById("result").textContent = `Result:${(num1 + num2)}`;
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