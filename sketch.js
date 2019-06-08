//VARIAVEIS BOLADONAS
var ornitorrinco;
var score = 0;
var maxScore = 0;
var gameOverFrame = 0;
var isOver = false;
var isStarted = false;
var arveres = [];
var char1, torresmo, back;


function preload(){
	
	char1 = loadImage('grafico/p1.png');
	torresmo = loadImage('grafico/torresmo.png');
	back = loadImage('grafico/back2.jpg');

}

//FUNÇÃO CÊÉTAPADO MEMO EM..
function setup() {

	createCanvas(450,600);
	textStyle(BOLD);
	fill(0);
	frameRate(60);
	ornitorrinco = new Ornitorrinco();
	arveres.push(new Arveres());
	noLoop();

}

//FUNÇAO DESENHO
function draw() {

	background(0);
	fill(255, 110 , 0);
	image(back,0,0);
	
	//TELA INICIAL DO JOGO
	if (isStarted === false) {

		textSize(55);
		textAlign(CENTER,CENTER);
		fill(255, 204, 0);
		text('FLAPPY\nORNITORRINCO',width/2,height/2-40);
		textSize(30);
		text('Aperte\n<spacebar>', width/2, height/2 + 90);
	}
	
	for(var i = arveres.length-1; i >= 0; i--){
	
		arveres[i].atualiza();
		arveres[i].show();
		
		if (arveres[i].passa(ornitorrinco)) {
			score++;
			console.log("PASSOU");
		}
		
		if (arveres[i].colide(ornitorrinco)) {
			gameOver()
			console.log("COLIDIU");
		}

		if (arveres[i].offscreen()) {
			arveres.splice(i, 1);
		}
	}
	
	ornitorrinco.atualiza();
	ornitorrinco.show();
	//PUXA O SCORE PARA A CANVAS 
	showScores();

	if((frameCount - gameOverFrame) % 60 == 0){
		arveres.push(new Arveres());
	}
	//FUNÇÃO QUE IMPRIME SEU RECORD CASO VOCÊ PERCA A PARTIDA
	if(isOver ===true) {
		textSize(30);
		fill(255, 204, 0);
		textAlign(CENTER,CENTER);
		text('Record: ' + maxScore, width/2, height/2 + 150);
	}


} 

//FUNÇÃO QUE MOSTRA A PONTUAÇÃO DO JOGADOR
function showScores() {
  
  textSize(30);
  fill(204, 102, 0);
  textAlign(CENTER,CENTER);
  text(score, width/2 , height/2 - 200);

}

//FUNÇÃO DE FIM DE JOGO
//FAZ COM QUE IMPLIMA NA TELA "GAME OVER"
function gameOver() {

	textSize(50);
	textAlign(CENTER,CENTER);
	fill(255, 204, 0);
	text("FIM DE JOGO", width/2, height/2 - 40);
	textSize(30);
	text("Tente Novamente", width/2, height/2 + 40);
	textAlign(LEFT, BASELINE);
	maxScore = max(score, maxScore);
	isOver = true;
	noLoop();

}
//FUNÇÃO QUE FAZ COM QUE O JOGO REINICIE, REDEFININDO O VALOR DE TODAS AS VARIAVEIS
function reset() {
  
  isOver = false;
  score = 0;
  arveres = [];
  ornitorrinco = new Ornitorrinco();
  arveres.push(new Arveres());
  gameOverFrame = frameCount -1;
  loop();
}

//MOVIMENTA O PERSONAGEM
function keyPressed() {
	
	if (key === ' ' && isOver === false ) {
		if(isStarted === false){
		isStarted = true;
		loop();
	}
	ornitorrinco.flap();
	}
	if (isOver) {
			ornitorrinco.flap();
			reset();
		}
}

