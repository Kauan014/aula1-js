document.addEventListener("click", showcolor);

document.getElementById("botao").addEventListener( "click",exibenome);

function showcolor()
{
    document.body.style.backgroundColor = "red";
}
function exibenome()
{
    let usuario = document.getElementById("nome").value;
    document.getElementById("mensagem").innerText = "meu nome :"+ usuario;
    document.getElementById("nome").value ="";
}
document.getElementById("btn-somar").addEventListener( "click",cal);

function calc()
{
    let calculadora= document.getElementById("numb1").value;
    document. getElementById("numb2").value;
    document.getElementById("resultado1").innerHTML = "resultado :" + parseIn(numb1)
    document.getElementById("resultado1").innerHTML = "resultado :" + parseIn(numb2s)
}
