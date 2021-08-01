function RomanoParaArabico(numero){
    const valoresRomanos = {
        M:1000,
        D:500,
        C:100,
        L:50,
        X:10,
        V:5,
        I:1
    };
    var numeroValor = numero.value;
    numeroValor = numeroValor.toUpperCase();
    repeticao = 1
    for(var i = 0;i < numeroValor.length;i++) {
        for(var j = i+1;j < numeroValor.length;j++) {
            if(numeroValor[i] == numeroValor[j]) {
                repeticao++;
                if(numeroValor[i] == "V" || numeroValor[i] == "L" || numeroValor[i] == "D") {
                    alert("Os números romanos V, L e D não podem ser repetidos")
                    return false
                }
            }
        }
    }
    if(repeticao > 4) {
        alert("Não pode repetir o algarismo mais de 3 vezes")
    }
    var conversaoDeNumeros = []
    for (var i = 0;i < numeroValor.length;i++) {
        if(numeroValor[i] != "M" && numeroValor[i] != "D" && numeroValor[i] != "C" && numeroValor[i] != "L" && numeroValor[i] != "X" && numeroValor[i] != "V" && numeroValor[i] != "I")   {
            alert("Você passou um algarismo não romano")
            return false
        }     
    }
    for(var i = 0;i < numeroValor.length;i++) {
        for(var key in valoresRomanos) {
            if(key == numeroValor.charAt(i)) {
                conversaoDeNumeros.push(valoresRomanos[key])
            }
        }
    }
    var total = 0
    for(var i = 0;i < conversaoDeNumeros.length;i++) {
        var valor1 = conversaoDeNumeros[i]
        if(i+1 < conversaoDeNumeros.length) {
            var valor2 = conversaoDeNumeros[i+1]

            if(valor1 >= valor2) {
                total = total + valor1;
            }
            else {
                total = total + valor2 - valor1;
                i++
            }    
        }
        else {
            total = total + valor1;
        }
    }
    var maiorNumero = Math.max(...conversaoDeNumeros)
    posicaoMaiorNumero = conversaoDeNumeros.indexOf(maiorNumero)
    alert("O numero é: " + total)
}
function arabicoParaRomano(numero) {
    let numeros = [1,4,5,9,10,40,50,90,100,400,500,900,1000]
    let caracteres = ["I","IV","V","IX","X","XL","L","XC","C","CD","D","CM","M"]
    let i = 12;
    if(isNaN(numero.value)) {
        alert("Você não passou um número")
        return false
    }
    if(numero.value > 3999 || numero.value < 1) {
        alert("Número muito alto ou muito baixo, aceitamos números entre 1-3999")
        return false
    }
    var numeroValor = numero.value;
    var resultado = ''
    while(numeroValor > 0) {
        quociente = Math.floor(numeroValor / numeros[i]);
        numeroValor = numeroValor % numeros[i];
        console.log("here")
        while(quociente--) {
                resultado += caracteres[i]
        }
   i--;
}
alert("O resultado é: " + resultado)
}