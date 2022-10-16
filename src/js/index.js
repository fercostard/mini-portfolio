/*
      OBJETIVO - Quando clicarmos na aba, temos que mostrar o 
      conteúdo da aba selecionada pelo usuario e esconder
      a  aba anterior

      passo 1 - dar um jeito de pegar os elementos
      que representam as abas no HTML
      
      passo 2 - identificar os cliques na tela

      passo 3 - quando clicar desmarcar a aba selecionada

      passo 4 - marcar a aba clicada como selecionada

      passo 5 - esconder o conteudo anterior

      passo 6 - mostrar o conteudo da aba selecionada


*/

//PASSO 1

const abas = document.querySelectorAll(".aba");


abas.forEach(aba => {
      //passo 2
      aba.addEventListener("click", function(){

            if(aba.classList.contains("selecionado")){
                  return;
            }
            selecionarAba(aba);

            mostrarInformacaoDaAba(aba);
            
      });
});


function selecionarAba(aba) {
      //passo 3
      const abaSelecionada = document.querySelector(".aba.selecionado");
      abaSelecionada.classList.remove("selecionado");

      //passo 4
      aba.classList.add("selecionado");
      
};

function mostrarInformacaoDaAba(aba) {
      //passo 5
      const informacaoSelecionada = document.querySelector(".informacao.selecionado");

      informacaoSelecionada.classList.remove("selecionado");

      //passo 6
      const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`; 
            
      const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba);

       informacaoASerMostrada.classList.add("selecionado");
    
};





