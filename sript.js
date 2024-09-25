let serie = parseInt (prompt ("Insira o número da série escolar"));

if (serie < 1){
    alert ("Entrada inválida")
}
else if (serie <= 5){
    alert ("Você está no Ensino Fundamental I")
}
else if (serie >= 6 && serie <= 9)
{
    alert ("Ensino fundamental II")
}
else if (serie >= 10 && serie <=12)
{
    alert ("Ensino médio")
}
else
{
    alert ("Educação superior")
}