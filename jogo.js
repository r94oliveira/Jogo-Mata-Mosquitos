

var altura = 0
var largura = 0
var vidas = 1
var tempo = 10

var criaMosquitoTempo = 1500


//com esse aqui que é possivel de recuperar o dado da página index.html ao selecionar o nivel
//window.location.href recupera tudo window.location.search recupera a interrogação e o que vem depois apenas 
var nivel = window.location.search
nivel = nivel.replace('?', '')

if (nivel === 'normal') {

criaMosquitoTempo  = 1500

} else if (nivel === 'dificil') {

criaMosquitoTempo = 1000

} else if (nivel === 'impossivel'){

criaMosquitoTempo = 750

}

function ajustaTamanhoPalcoJogo(){

	altura = window.innerHeight
	largura = window.innerWidth

}

ajustaTamanhoPalcoJogo()

var cronometro = setInterval( function() {

tempo -=1

if (tempo < 0) {
	clearInterval(cronometro)
	clearInterval(criaMosquito)
	window.location.href = 'vitoria.html'

	
} else {

document.getElementById('cronometro').innerHTML = tempo //para inserir um texto dentro do span, usamos inner html pois é o que está dentro do espaço, dai aqui colocamos o tempo

}}, 1000)

function posicaoRandomica() {

	//remover o 'mosquito' anterior caso exista. Se não existir, então vai dar um erro. Então vamos usar o if para ver se tem o elemento primeiro e dai eliminar se tiver.
	//Dai aqui pega o mosquito pelo id e se tiver já exclui, dai exclui o anterior e roda a função criando um novo. E assim fica o ciclo.
	if(document.getElementById('mosquito')) {
	document.getElementById('mosquito').remove()

	if (vidas > 3) {
		window.location.href = 'fim_de_jogo.html'
	} else {

	document.getElementById('v' + vidas).src="imagens/coracao_vazio.png"

	vidas++

	}
}

var posicaoX = Math.floor(Math.random() * largura) - 90
var posicaoY = Math.floor(Math.random() * altura) - 90

posicaoX = posicaoX < 0 ? 0 : posicaoX
posicaoY = posicaoY < 0 ? 0 : posicaoY

//criar o elemento html a partir do DOM e atribuir o elemento a uma variável para permitir manipulação

var mosquito = document.createElement('img') // Cria uma imagem

//Associa o elemento a uma imagem a partir do source, assim como pode fazer no HTML. Mas aqui é feito para lidar com a dinamicidade do javascript.

mosquito.src = 'imagens/mosca.png' //De onde vem a imagem
mosquito.className = tamanhoAleatorio () + ' ' + ladoAleatorio()


//É necessário colocar uma string no meio '' pois ao chamar o tamanho e o lado, ficaria assim: "mosquito1ladoA" e isso não é nenhuma classe. No momento que tem um espaço, ele entende que são coisas diferentes.
//O CSS aplicado a imagem, controlando tamanho, etc. Aqui foi colocado uma função no que chama o CSS. Dentro da função estão os nomes que se relacionam com as classes que estão definidas no css.
mosquito.style.left = posicaoX + 'px'
mosquito.style.top = posicaoY + 'px'
mosquito.style.position = 'absolute'
mosquito.id='mosquito'
mosquito.onclick = function () {
	this.remove()
}
//this faz referencia ao próprio elemento html que executou a função

//Aqui colocamos um id 'mosquito' no elemento chamado mosquito


//Dai associa o elemento ao corpo (body) do texto html, ao criar um novo apendice filho no DOM (appendChild), como se fosse uma div nova no body

document.body.appendChild(mosquito)

// No entanto se cria tudo assim, no html ele vai ler primeiro o script js acima  dps a imagem no body pela questão da precedencia. Por isso é importante fazer uma função pra ler esse js depois que o body for aberto.

console.log(ladoAleatorio ())


}


function tamanhoAleatorio () {

	var classe = Math.floor(Math.random() * 3)

	switch(classe) {

			case 0:
				return 'mosquito1'
			
			case 1:
				return 'mosquito2'
			
			case 2:
				return 'mosquito3'	

//Quando tem o return, ele interrompe o processamento da função, não necessitando assim do break			

		}
	}


function ladoAleatorio() {

	var classe = Math.floor(Math.random() * 2)

	switch(classe) {

			case 0:
				return 'ladoA'
			
			case 1:
				return 'ladoB'
			
			
		}
	}