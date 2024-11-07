let campoIdade;
let campoComedia;
let campoAcao;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("12");
  campoComedia = createCheckbox("Gosta de Comedia?");
  campoAcao= createCheckbox("Gosta de acao?");
}

function draw() {
  background("white");
  let idade = campoIdade.value();
  let gostaDeComedia = campoComedia.checked();
  let gostaDeAcao = campoAcao.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeComedia, gostaDeAcao);

  fill(color(76, 0, 115));
  textAlign(CENTER, CENTER);
  textSize(38);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeComedia, gostaDeAcao) {
  if (idade >= 12) {
    if (idade >= 14) {
      return "O menino de pijama listrado";
    } else {
      if (idade >= 12) {
        if(gostaDeComedia || gostaDeAcao) {
          return "Homem aranha: no aranhaverso";          
        } else{
         return "meu malvado favorito";
        }
      } else {
        if (gostaDeComedia) {
          return "As aventuras de pi";
        } else {
          return "divertidamente";
        }
      }
    }
  } else {
    if (gostaDeAcao) {
      return "viva a vida e uma festa";
    } else {
      return "milagres no paraiso";
    }
  }
}

















