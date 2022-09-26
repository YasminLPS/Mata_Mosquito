var altura = 0;
var largura= 0;
var vidas = 1;
var tempo = 60;
var qtd_mosquitos_mortos = 0;

var criarmosquitoTempo = 1500;

var nivel = window.location.search;
nivel = nivel.replace('?', '')

if(nivel === 'facil'){
    criarmosquitoTempo = 1500;
}else if(nivel === 'normal'){
    criarmosquitoTempo = 1000;
}else if(nivel === 'dificil'){
    criarmosquitoTempo = 750
}

function ajustaTamanho(){
    altura  = window.innerHeight;
    largura = window.innerWidth;
    console.log(largura, altura);
}

ajustaTamanho();

var cronometro = setInterval(function(){
    tempo -= 1;

    if(tempo < 0){
        clearInterval(cronometro);
        clearInterval(criarmosquito);
        window.location.href='winner.html'
    }else{
    document.getElementById('cronometro').innerHTML = tempo;
    }
},1000);

function posicaoAleatoria(){

    //remover o mosquito anterior (caso exista)
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove();
        if(vidas >= 3){
            window.location.href='game_over.html'
        }else{
            document.getElementById('v' + vidas).src='imagens/coracao_vazio.png';
            vidas++;
        }
    }

    var posicaoX = Math.floor(Math.random() * largura) - 90;
    var posicaoY = Math.floor(Math.random() * altura) - 90;

    if(posicaoX < 0 ){
        posicaoX = 0;
    }

    if(posicaoY < 0 ){
        posicaoY = 0;
    }
    console.log(posicaoX, posicaoY)

    //criar elemento HTML
    var mosquito = document.createElement('img');
    mosquito.src = 'imagens/mosca.png';
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio();
    mosquito.style.left = posicaoX + 'px';
    mosquito.style.top = posicaoY + 'px';
    mosquito.style.position = 'absolute';
    mosquito.id = 'mosquito';
    mosquito.onclick = function(){
        this.remove();
        qtd_mosquitos_mortos++ //Adicionamos mais um valor na quantidade de mosquitos mortos.
        document.getElementById('pontos').innerHTML = qtd_mosquitos_mortos;
    }

    document.body.appendChild(mosquito);
}





function tamanhoAleatorio(){
    var classe = Math.floor(Math.random() * 3);

    switch(classe){
        case 0:
            return 'mosquito1'

        case 1:
            return 'mosquito2'

        case 2:
            return 'mosquito3'
    }
}

function ladoAleatorio(){
    var classe = Math.floor(Math.random() * 2);

    switch(classe){
        case 0:
            return 'ladoA'

        case 1:
            return 'ladoB'

    }
    
}
