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
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    document.getElementById("resultado1").innerHTML= parseFloat(num1) + parseFloat(num2);
}
document.getElementById("btn-dividir").addEventListener( "click",dividir);

function dividir()
{
    let num3 = document.getElementById("num3").value;
    let num4 = document.getElementById("num4").value;
    document.getElementById("resultado2").innerHTML= parseFloat(num3) + parseFloat(num4);
}
