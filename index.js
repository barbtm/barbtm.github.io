//Aula Prática - Calcular valor média de dois números

function calcularMedia(prova1,prova2){
    var mediaTotal = (prova1 + prova2) / 2
    if (mediaTotal >= 6){
        return "Aprovado";
    }
    else {
        return "Reprovado";
    }
}

console.log(calcularMedia (6,6));