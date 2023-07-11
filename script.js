//Vão exibir os valores da gorjeta e conta//
var exibeValorGorjeta = document.getElementById('tot_Gorjeta');
var exibeValorConta = document.getElementById('tot_Conta');

//Receber valor da conta//
function receberValorConta(){  
    var valorConta = document.getElementById("conta").value;
    return parseFloat(valorConta);
}

//Receber valor do número de pessoas//
function receberValorPessoas(){
    var numPessoas = document.getElementById("pessoas").value;
    return parseFloat(numPessoas);
}

//RECEBER O VALOR DA GORJETA SELECIONADA//

//Recebe o valor do input de 5%//
function receberValorGorjeta5(conta, pessoas){
    var valorGorjeta_5 = document.getElementById("gorjeta_5").value;
    
    valorTotalporPessoa = (conta * valorGorjeta_5) / pessoas;
    valorGorjetaporPessoa = (conta * valorGorjeta_5 - conta) / pessoas;

    exibeValorConta.innerHTML = valorTotalporPessoa;
    exibeValorGorjeta.innerHTML = valorGorjetaporPessoa;
}

//Recebe o valor do input de 10%//
function receberValorGorjeta10(conta, pessoas){
    var valorGorjeta_10 = document.getElementById("gorjeta_10").value;
    
    valorTotalporPessoa = (conta * valorGorjeta_10) / pessoas;
    valorGorjetaporPessoa = (conta * valorGorjeta_10 - conta) / pessoas;

    exibeValorConta.innerHTML = valorTotalporPessoa;
    exibeValorGorjeta.innerHTML = valorGorjetaporPessoa;
}

//Recebe o valor do input de 15%//
function receberValorGorjeta15(conta, pessoas){
    var valorGorjeta_15 = document.getElementById("gorjeta_15").value;
    
    valorTotalporPessoa = (conta * valorGorjeta_15) / pessoas;
    valorGorjetaporPessoa = (conta * valorGorjeta_15 - conta) / pessoas;

    exibeValorConta.innerHTML = valorTotalporPessoa;
    exibeValorGorjeta.innerHTML = valorGorjetaporPessoa;
}

//Recebe o valor do input de 25%//
function receberValorGorjeta25(conta, pessoas){
    var valorGorjeta_25 = document.getElementById("gorjeta_25").value;
    
    valorTotalporPessoa = (conta * valorGorjeta_25) / pessoas;
    valorGorjetaporPessoa = (conta * valorGorjeta_25 - conta) / pessoas;

    exibeValorConta.innerHTML = valorTotalporPessoa;
    exibeValorGorjeta.innerHTML = valorGorjetaporPessoa;
}

//Recebe o valor do input de 50%//
function receberValorGorjeta50(conta, pessoas){
    var valorGorjeta_50 = document.getElementById("gorjeta_50").value;
    
    valorTotalporPessoa = (conta * valorGorjeta_50) / pessoas;
    valorGorjetaporPessoa = (conta * valorGorjeta_50 - conta) / pessoas;

    exibeValorConta.innerHTML = valorTotalporPessoa;
    exibeValorGorjeta.innerHTML = valorGorjetaporPessoa;
}

//Recebe o valor do input digitado pelo usuário//
function receberValorGorjeta_Outro(conta, pessoas){
    var gorjetaOutro = document.getElementById("gorjeta_outro").value;

    valorTotalporPessoa = (conta * gorjetaOutro) / pessoas;
    valorGorjetaporPessoa = (conta * gorjetaOutro - conta) / pessoas;

    exibeValorConta.innerHTML = valorTotalporPessoa;
    exibeValorGorjeta.innerHTML = valorGorjetaporPessoa;
}
