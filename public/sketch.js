let api;

function setup() {
  createCanvas(400, 400);
  api = new API();
  api.getPhrase(() => drawPhrase(api))
}

function drawPhrase(api) {

  if(api.phrase !== '') {
    background('#094600');
    fill('white');
    textSize(24);
    textFont('Georgia');
    textStyle(ITALIC);
    text(`${api.phrase}
  
    -${api.author}`, 12, 30,370);
  }

}