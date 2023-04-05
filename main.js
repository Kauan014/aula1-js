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
    let numb1= document.getElementById("numb1").value;
    let numb2=document.getElementById("numb2").value;
    document.getElementById("resultado1").innerText = "resultado:" +numb1 + numb2;
}
