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
document.getElementById("btn-somar").addEventListener( "click",calc);

function calc()
{
    let numb1= document.getElementById("num1").value;
    let numb2=document.getElementById("num2").value;
    document.getElementById("resultado1").innerHTML= persefloat(num1) + persefloat (num2);
}
