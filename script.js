var exibeValorGorjeta = document.getElementById('tot_Gorjeta');
var exibeValorConta = document.getElementById('tot_Conta');


//Receber valor da conta//
function receberValorConta(){  
    var valorConta = document.getElementById("conta").value;
    return valorConta;
}

//Receber valor do número de pessoas//
function receberValorPessoas(){
    var numPessoas = document.getElementById("pessoas").value;
    return numPessoas;
}

//RECEBER O VALOR DA GORJETA SELECIONADA//

//Recebe o valor do input de 5%//
function receberValorGorjeta5(){
    var valorGorjeta_5 = document.getElementById("gorjeta_5").value;
}

//Recebe o valor do input de 10%//
function receberValorGorjeta10(){
    var valorGorjeta_10 = document.getElementById("gorjeta_10").value;
}

//Recebe o valor do input de 15%//
function receberValorGorjeta15(){
    var valorGorjeta_15 = document.getElementById("gorjeta_15").value;
}

//Recebe o valor do input de 25%//
function receberValorGorjeta25(){
    var valorGorjeta_25 = document.getElementById("gorjeta_25").value;
}

//Recebe o valor do input de 50%//
function receberValorGorjeta50(){
    var valorGorjeta_50 = document.getElementById("gorjeta_50").value;
}

//Recebe o valor do input digitado pelo usuário//
function receberValorGorjeta_Outro(){
    var gorjetaOutro = document.getElementById("gorjeta_outro").value;
}
