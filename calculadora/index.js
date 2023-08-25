const txtop1 = document.getElementById("001")
const txtoperador = document.getElementById("operador")
const txtop2 = document.getElementById("002")
const btnCalcular = document.getElementById("calcular")
const pResultado = document.getElementById("resultado")

//btnCalcular.addEventListener('click',Calcular)

function Calcular()
{
    const op1 = parseFloat(txtop1.value)
    const op2 = parseFloat(txtop2.value)
    const operador=txtoperador.value
    if((operador == "+" || operador == "-" || operador == "*" || operador == "/") && isNaN(op1) == false && isNaN(op2) == false)
    {
        let resultado
        switch(operador)
        {
            case "+":
                resultado= op1+op2
                break
            case "-":
                resultado= op1-op2
                break
            case "*":
                resultado= op1*op2
                break
            case "/":
                resultado= op1/op2
                break
        }
        pResultado.style = "color: black"
        pResultado.innerText = "= " + resultado
    }
    else
    {
        pResultado.style = "color: red"
        pResultado.innerText = "Cálculo imposible"
    }
}



