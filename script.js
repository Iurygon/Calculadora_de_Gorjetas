//Funções para receber valores digitados pelo usuário//
function receberValorConta(){  
    var valorConta = document.getElementById("conta").value;
}

function receberValorGorjeta_Outro(){
    var gorjetaOutro = document.getElementById("gorjeta_outro").value;
}

function receberValorPessoas(){
    var numPessoas = document.getElementById("pessoas").value;
}

//Função para receber valor da gorjeta selecionado//
function receberValorGorjeta(){
    var valorGorjeta = document.forms['gorjeta'];
    document.getElementById('tot_Gorjeta').innerHTML = valorGorjeta;
}
