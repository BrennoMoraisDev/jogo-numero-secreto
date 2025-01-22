let listanumerosSorteados =[];
let Limite =10;
let numeroScreto = gerarNumeroAleatorio();
let tentativas = 1;


let titulo = document.querySelector("h1");
titulo.innerHTML = "Jogo do número Secreto";

let paragrafo = document.querySelector("p");
paragrafo.innerHTML = "escolha um numero entre 1 e 10";

// tipo 1 de função



let nome = prompt("Digite seu nome:");



mensagensIniciais();

function verificarChute(){
let chute = document.querySelector("input").value;
let Tentativaplural = tentativas > 1? "tentativas" :"tentativa";

   


    if(chute == numeroScreto){

      exibirMsg("h1", `Parabéns!! ${nome}... acertou porra`);
      exibirMsg("p", `Você acertou com ${tentativas} ${Tentativaplural}`);
      document.getElementById("reiniciar").removeAttribute("disabled");
      document.querySelector(".container__botao").setAttribute("disabled",true);
      
    } else{
      
      if(chute > numeroScreto){
         exibirMsg("h1", "dica:")
         exibirMsg("p",`o numero secreto é menor que ${chute} `);
      }else{
         exibirMsg("h1", "dica:")
         exibirMsg("p",`o numero secreto é maior que ${chute} `);
      }
      tentativas++;
   
   }
   limparCampo();

}


// tipo 2 de função
function exibirMsg(tag, texto){
    let campo = document.querySelector(tag);
     campo.innerHTML = texto;
     
      responsiveVoice.speak(texto, "Brazilian Portuguese Female",
         {rate:1.2});


}
function mensagensIniciais(){
   exibirMsg("h1","Jogo do número Secreto" );

   exibirMsg("p", "escolha um numero entre 1 e 10" );
}


//tipo 03

function gerarNumeroAleatorio(){
   let numEscolhido = parseInt(Math.random() * Limite + 1);
   let quantidadeElementosLista = listanumerosSorteados.length;

   if(quantidadeElementosLista == Limite){
      listanumerosSorteados = [];
   }


   if(listanumerosSorteados.includes(numEscolhido)){
      return gerarNumeroAleatorio();
   } else{
      listanumerosSorteados.push(numEscolhido);
      console.log(listanumerosSorteados);
      return numEscolhido;
   }

}

function limparCampo(){
   let chute = document.querySelector("input");
   chute.value = "";
}

function reiniciarApp(){
   limparCampo();
   tentativas = 1;
   numeroScreto = gerarNumeroAleatorio();
   mensagensIniciais();
   document.getElementById("reiniciar").setAttribute("disabled", true);
   document.querySelector(".container__botao").removeAttribute("disabled");
}

