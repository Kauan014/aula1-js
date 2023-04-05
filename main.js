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
document.getElementById("btn-soma").addEventListener( "click",calculo);

function calculo()
{
    let num1= document.getElementById("num1").value;
    let num2=document.getElementById("num2").value;
    document.getElementById("resultado1").innerHTML= perseFloat(num1) + perseFloat(num2);
}
