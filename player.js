
//FUNÇÃO DO PERSONAGEM MAIS FODA DO MUNDO,É MAMIFERO MAS NÃO TEM MAMILO
function Ornitorrinco() {
	
	//PROPRIEDADES DO PERSONAGEM
	this.y = height/2 + 50;
	this.x = 64;

	//MECANICA DO JOGO
	this.gravidade = 0.6;
	this.lift = -15;
	this.velocidade = 0;


	//DESENHA O ORNITORRINCO FREVOSO
	this.show = function() { 

	if (isOver === false) {
			//IMAGEM DO ORNITORRINCO
			image(char1, this.x - 50, this.y - 22);
		} else {
			//IMAGEM DO TORRESMO
			image(torresmo, this.x - 50, this.y - 22);
		}
	}

	//BATE A CAUDA, NÃO A DE AÇUCAR
	this.flap = function() {

		this.velocidade += this.lift;
	
	}

	//ATUALIZA CAFUÇU, NA VELOCIDADE DA LUZ
	this.atualiza = function() {
	
		this.velocidade += this.gravidade;
		this.velocidade *= 0.9;
		this.y += this.velocidade;	

		if(this.y > height){
			this.y = height;
			this.velocidade = 0;

		}
		if(this.y < 0){
			this.y = 0;
			this.velocidade = 0;

		}
	}
}
