var altura = 0
var largura = 0
var vidas = 1
var tempo = 10
var nivelMosquitoJogo = 1500

//Pega os parâmetros vindos da url e removendo o ?, com replace
var nivelJogo = window.location.search
nivelJogo = nivelJogo.replace('?', '')


if(nivelJogo === 'easy'){
   nivelMosquitoJogo = 1500
}else if(nivelJogo === 'medium'){
    nivelMosquitoJogo = 1000
}else if(nivelJogo === 'hard'){
    nivelJogo = 750
}

function ajustaTamanhoPalcoJogo(){

    altura = window.innerHeight
    largura = window.innerWidth

   // console.log('Largura: ' + largura + ' -  Altura: ' +  altura) 
    

}

ajustaTamanhoPalcoJogo()

var cronometro = setInterval(() => {
    tempo -= 1 
    

    if(tempo < 0){

        //Jogador venceu
        clearInterval(cronometro)
        clearInterval(criaMosquito)
        
        window.location.href = 'vitoria.html'
       

    } else {
    document.getElementById('tempoRestante').innerHTML =  tempo
    }


}, 1000);


function posicaoRandomica(){



    /*VERIFICAR PRIMEIRO SE JÁ EXISTE UM MOSQUITO CRIADO COM O ID MOSQUITO (NA PRIMEIRA EXECUÇÃO DA FUNÇÃO, O ELEMENTO AINDA NÃO EXISTE)
    CASO JÁ EXISTA, DEVERPÁ REMOVÊ-LO ANTES DE CRIAR O PRÓXIMO*/
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()



        //Controlando o jogo após o término das 3 vidas
        if(vidas > 3){
            //Irá para a página de fim de jogo
            window.location.href = 'fim_de_jogo.html'

        } else { //o jogo continua

        //Removendo vidas, caso o elemento mosquito não seja clicado no tempo certo
        document.getElementById('v' +  vidas).src = 'imagens/coracao_vazio.png'

        vidas ++

               }
    }
   


    /*O - 90 é para a imagem de 50px não ultrapassar o limite da tela*/
    var posicaoX = Math.floor(Math.random() * largura)  - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90

    //Se a posição for menor que zero, receberá o valor 0, senão receberá ela mesma.
    posicaoX = posicaoX < 0 ? 0  : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY
    
    /*console.log('X: ' + posicaoX)
    console.log('Y: ' + posicaoY)*/
    
    /*Criando o elemento mosquito*/
    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosca.png'
    mosquito.style.position = 'absolute'
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.id = 'mosquito'

    //Atribuindo o nome da classe vindo da função que gera classes randomicamente
    //Concatenando os nomes das classes
    mosquito.className = geraTamanhosAleatorios() + ' ' + ladosAleatorios()

    //Removendo mosquitos através do click do mouse
    mosquito.onclick = function () {
        this.remove()
        //console.log('Removido')
    }

    
    document.body.appendChild(mosquito)

   

}


/*Criando tamanhos aleatórios para os mosquitos através de classes CSS*/
function geraTamanhosAleatorios(){
    var classe = Math.floor(Math.random()  * 3) //De 0 até muito próximo a 3
   //console.log(classe)

    //Ao utilizar o return não é preciso  uso do break
    switch(classe) {
        case 0:
            return 'mosquito1'
            
            case 1:
                return 'mosquito2'
                
                case 2:
                    return 'mosquito3'
                    

    }

}



/*Altera o lado dos mosquitos*/
function ladosAleatorios(){

var lado = Math.floor(Math.random() * 2)

switch(lado){

    case 0:
    return 'ladoA'

    case 1:
       return 'ladoB'

}


}




