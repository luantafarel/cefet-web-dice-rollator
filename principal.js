// Faça seu exercício neste arquivo
// Alguns elementos importantes na página (index.html):
// #rolar: Botão rolar
//	 - você deve atribuir um handler de evento a ele para fazer o cálculo da rolagem dos dados
// #resultado: Elemento cujo conteúdo deve ser uma string com os resultados
//	 - você deve definir seu conteúdo (.innerHTML) com a string de resultados
// #recipienteResultados: "Container" do elemento dos resultados:
//	 - você deve torná-lo visível removendo a classe "oculto" dele
// .quantidade: todos os input[type=number] com a quantidade de dados a serem rolados
// #quantidadeD{4,6,8,10,12,20}: um ID para cada input[type=number] com a quantidade


var botao = document.getElementById('rolar');
var resultados = document.getElementById('resultado');
var dado = document.getElementsByClassName('dado');
var valores=[];
valores[0]=document.getElementById('quantidadeD4');
valores[1]=document.getElementById('quantidadeD6');
valores[2]=document.getElementById('quantidadeD8');
valores[3]=document.getElementById('quantidadeD10');
valores[4]=document.getElementById('quantidadeD12');
valores[5]=document.getElementById('quantidadeD20');
var StringValores='';
var numeroDeFaces = [4, 6, 8, 10, 12, 20];
var resultadosDado = [];
var resultado = 0;
var x = 0;
resultados.innerHTML='';
botao.addEventListener('click', function(e) {
  for (var i = 0; i < 6; i++) {
    for(var j = 0; j< valores[i].value; j++){
      	resultadosDado[x]=Math.ceil(Math.random() * numeroDeFaces[i]);
      	resultado=resultado + resultadosDado[x];
        if(StringValores == ''){
        	StringValores =	StringValores + resultadosDado[x];
          x++;
        } else{
        	StringValores = StringValores + '+' + resultadosDado[x];
      		x++;
        }

  }

  }
   if(StringValores!=''){
     resultados.parentNode.className = '';
     resultados.innerHTML =StringValores + ' = ' + resultado;
     resultado = 0;
     x = 0;
     StringValores='';
   }
   else{
     result.parentNode.className = 'oculto';
   }
});
