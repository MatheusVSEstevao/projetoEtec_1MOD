function calcularEQ() {
    var a = parseFloat(document.getElementById('idA').value);
    var b = parseFloat(document.getElementById('idB').value);
    var c = parseFloat(document.getElementById('idC').value);
    var r1 = document.getElementById('idr1');
    var r2 = document.getElementById('idr2');
    var delta;
    
    
    r2.innerHTML = "Equação com 1 resultado";

    if (b != 0 && c != 0 && a != 0) {
        delta = b * b - 4 * a * c;
        r1.value = (-b + Math.sqrt(delta)) / (2 * a);
        r2.value = (-b - Math.sqrt(delta)) / (2 * a);
    } else if(c==0 && a!= 0 && b!= 0){
        delta = b * b - 4 * a * c;
        r1.value = (-b + Math.sqrt(delta)) / (2 * a);
        r2.value = (-b - Math.sqrt(delta)) / (2 * a);

    } else if (b == 0 && c != 0 && a != 0) {
        if (c < 0) {
            c = c*-1;
 
        } else {
            c = c*-1;
        }
        r1.value = Math.sqrt(c / a);
        r2.value = r1.value*-1;
    } else if (b == 0 && c == 0) {
        r1.value = 0;
        r2.innerHTML= "resposta com apenas 1 resultado";
    } else if (a == 0) {  
        r1.value = c / b;
        r2.innerHTML= "resposta com apenas 1 resultado";
    }
    else if(a<0 && c<0){
        a= a+ a*2;
        if (b<a && c<0){
        r2.innerHTML= "resposta com numero complexo ";
        r1.innerHTML= "resposta com numero complexo ";
        }
    }

}
