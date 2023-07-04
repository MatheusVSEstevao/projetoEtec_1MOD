function calcularMedia() {
    var nota1 = parseFloat(document.getElementById("txtNt1").value);
    var nota2 = parseFloat(document.getElementById("txtNt2").value);
    
    if (nota1 >= 0 && nota1 <= 10 && nota2 >= 0 && nota2 <= 10) {
        var media = (nota1 + nota2) / 2;
        document.getElementById("txtMedia").value = media;
    } else {
        alert("Nota inválida, digite novas notas.");
    }
}

function calcularStatus() {
    var nota1 = parseFloat(document.getElementById("txtNt1").value);
    var nota2 = parseFloat(document.getElementById("txtNt2").value);
    var media = (nota1 + nota2) / 2;
    
    if (media >= 0 && media <= 10) {
       
        
        if (media < 4) {
            alert("REPROVADO!");
        } else if (media >= 4 && media <= 6.9) {
            alert("RECUPERAÇÃO!");
            var notaRecuperacao = parseFloat(prompt("Digite a nota da prova de recuperação."));
            var media2 = (nota1 + nota2 + notaRecuperacao) / 3;
            alert("Sua média é " + media2.toFixed(2));
            
            if (media2 > 5) {
                alert("Aprovado por exame!");
            } else {
                alert("REPROVADO!");
            }
        } else {
            alert("APROVADO!!!");
        }
        
        document.getElementById("txtStatus").value = media2;
    } else {
        alert("Nota inválida, digite uma nova nota para a prova de recuperação.");
    }
}