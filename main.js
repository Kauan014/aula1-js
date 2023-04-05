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
    let numero1= document.getElementById("num1").value;
    let numero2=document.getElementById("num2").value;
    document.getElementById("resultado1").innerHTML= persefloat(numero1) + persefloat (numero2);
}
