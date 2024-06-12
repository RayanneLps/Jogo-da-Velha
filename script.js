let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes = document.querySelectorAll(".box");
let botoes = document.querySelectorAll("#container-button button");
let messageContainer = document.querySelector("#message");
let messageText = document.querySelector("#message p");
let segundoJogador;

//contador de jogadas
let player1 = 0;
let player2 = 0;

//adicionando o evento de click aos boxes
for(let i = 0; i < boxes.length; i++){
    
    //quando alguem clica na caixa
    boxes[i].addEventListener("click", function(){

        let atual = verificarPlayerAtual(player1,player2);

        //verifica se já tem x ou o
        if(this.childNodes.length == 0){ 

            let cloneAtual = atual.cloneNode(true);
            this.appendChild(cloneAtual);

            //computar a jogada
            if(player1 == player2){
                player1++;

                if (segundoJogador == 'ia-player') {
                    
                    //função para executar a jogada da IA
                    IaPlay();

                    player2++;
                }
            } else {
                player2++;
            }

            //checar quem ganhou
            verificarVencedor();

        }
    })
}


//2 jogadores ou IA
for(let i = 0; i < botoes.length; i++){
    
    botoes[i].addEventListener("click", function(){
        
        segundoJogador = this.getAttribute("id");

        for(let j = 0; j < botoes.length; j++){
            //escondendo os botoes depois do click
            botoes[j].style.display = 'none';
        }

        setTimeout(function(){
            
            let container = document.querySelector("#container");
            container.classList.remove("hide");
        }, 500);
    });
}


function verificarPlayerAtual(player1, player2){

    if(player1 == player2){
        //x
        atual = x;
    } else {
        //o
        atual = o;
    }

    return atual;

}

//checar vencedor
function verificarVencedor(){
    
    let b1 = document.getElementById("block1");
    let b2 = document.getElementById("block2");
    let b3 = document.getElementById("block3");
    let b4 = document.getElementById("block4");
    let b5 = document.getElementById("block5");
    let b6 = document.getElementById("block6");
    let b7 = document.getElementById("block7");
    let b8 = document.getElementById("block8");
    let b9 = document.getElementById("block9");

    //primeira linha horizontal
    if(b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0){

        //checar a classe que esta no box
        let b1Child = b1.childNodes[0].className;
        let b2Child = b2.childNodes[0].className;
        let b3Child = b3.childNodes[0].className;

        if (b1Child == 'x' && b2Child == 'x' && b3Child == 'x') {
            //x ganhou
            declararVencedor('x');
        } else if(b1Child == 'o' && b2Child == 'o' && b3Child == 'o'){
            //o venceu
            declararVencedor('o');
        }
    }

    //segunda linha horizontal
    if(b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0){

        //checar a classe que esta no box
        let b4Child = b4.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;

        if (b4Child == 'x' && b5Child == 'x' && b6Child == 'x') {
            //x ganhou
            declararVencedor('x');
        } else if(b4Child == 'o' && b5Child == 'o' && b6Child == 'o'){
            //o venceu
            declararVencedor('o');
        }
    }

    //terceira linha horizontal
    if(b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0){

        //checar a classe que esta no box
        let b7Child = b7.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if (b7Child == 'x' && b8Child == 'x' && b9Child == 'x') {
            //x ganhou
            declararVencedor('x');
        } else if(b7Child == 'o' && b8Child == 'o' && b9Child == 'o'){
            //o venceu
            declararVencedor('o');
        }
    }

    //primeira linha vertical
    if(b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length > 0){

        //checar a classe que esta no box
        let b1Child = b1.childNodes[0].className;
        let b4Child = b4.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;

        if (b1Child == 'x' && b4Child == 'x' && b7Child == 'x') {
            //x ganhou
            declararVencedor('x');
        } else if(b1Child == 'o' && b4Child == 'o' && b7Child == 'o'){
            //o venceu
            declararVencedor('o');
        }
    }

    //segunda linha vertical
    if(b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length > 0){

        //checar a classe que esta no box
        let b2Child = b2.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;

        if (b2Child == 'x' && b5Child == 'x' && b8Child == 'x') {
            //x ganhou
            declararVencedor('x');
        } else if(b2Child == 'o' && b5Child == 'o' && b8Child == 'o'){
            //o venceu
            declararVencedor('o');
        }
    }

    //terceira linha vertical
    if(b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length > 0){

        //checar a classe que esta no box
        let b3Child = b3.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if (b3Child == 'x' && b6Child == 'x' && b9Child == 'x') {
            //x ganhou
            declararVencedor('x');
        } else if(b3Child == 'o' && b6Child == 'o' && b9Child == 'o'){
            //o venceu
            declararVencedor('o');
        }
    }

    //diagonal esquerda-direta
    if(b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length > 0){

        //checar a classe que esta no box
        let b1Child = b1.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if (b1Child == 'x' && b5Child == 'x' && b9Child == 'x') {
            //x ganhou
            declararVencedor('x');
        } else if(b1Child == 'o' && b5Child == 'o' && b9Child == 'o'){
            //o venceu
            declararVencedor('o');
        }
    }

    //diagonal direta-esquerda
    if(b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length > 0){

        //checar a classe que esta no box
        let b3Child = b3.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;

        if (b3Child == 'x' && b5Child == 'x' && b7Child == 'x') {
            //x ganhou
            declararVencedor('x');
        } else if(b3Child == 'o' && b5Child == 'o' && b7Child == 'o'){
            //o venceu
            declararVencedor('o');
        }
    }

    //deu velha
    let contador =0;
    for(let i = 0; i < boxes.length; i++){
        if(boxes[i].childNodes[0] != undefined){
            contador++;
        }

        if(contador == 9){
            declararVencedor('deu velha');
        }
    }

}

//limpa o jogo, declara o vecedor e atualiza o placar do jogo
function declararVencedor(vencedor) {
    
    let score1 = document.querySelector("#score-1");
    let score2 = document.querySelector("#score-2");
    let msg = '';

    if(vencedor == 'x'){
        score1.textContent = parseInt(score1.textContent) + 1; //pega o conteudo do placar, transforma pra int e soma +1
        msg = 'O jogador 1 venceu!';
    } else if(vencedor == 'o'){
        score2.textContent = parseInt(score2.textContent) + 1; //pega o conteudo do placar, transforma pra int e soma +1
        msg = 'O jogador 2 venceu!';
    } else {
        msg = 'Deu velha!';
    }

    //exibir a mensagem
    messageText.innerHTML = msg;
    messageContainer.classList.remove("hide"); //removendo o classe escondida para aparecer a msg

    //esconde a msg
    setTimeout(function(){
        messageContainer.classList.add("hide");
    }, 3000); //depois de 3 seg

    //zerar jogadas
    player1 = 0;
    player2 = 0;

    //remover x e o
    let boxesCheios = document.querySelectorAll(".box div");

    for (let i = 0; i < boxesCheios.length; i++){
        boxesCheios[i].parentNode.removeChild(boxesCheios[i]);
    }
}

function IaPlay() {

    let cloneO = o.cloneNode(true);
    contador = 0;
    preenchidas = 0;

    for (let i = 0; i < boxes.length; i++) {
        
        let NumRandom = Math.floor(Math.random);

        //só preencher se o box estiver vazio
        if (boxes[i].childNodes[0] == undefined) {
            if(NumRandom <= 1) {
                boxes[i].appendChild(cloneO);
                contador++;
                break;
            }
        //verificação de quantas boxes estão preenchidas
        } else {
            preenchidas++;
        }
    
    } 

    if (contador == 0 && preenchidas < 9) {
        IaPlay();
    }
}