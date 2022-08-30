let vetorCarrosel = new Array("img1.webp", "img2.jpg", "img3.jpg");

carregaCarrosel(vetorCarrosel, "carrosel");

let proxima = document.getElementById("proxima");
proxima.addEventListener("click", function (event) {
    proximaImagem(vetorCarrosel, "carrosel");
})

let anterior = document.getElementById("anterior");
anterior.addEventListener("click", function (event) {
    imagemAnterior(vetorCarrosel, "carrosel");
})

function carregaCarrosel(vetor, alvo) {
    let carrosel = document.getElementById(alvo);
    carrosel.className = "0";
    carrosel.style.backgroundImage = 'url("' + vetor[0] + '")';
}

function proximaImagem(vetor, alvo) {
    let carregaCarrosel = document.getElementById(alvo);
    let imgAtual = parseInt(carrosel.className);
    imgAtual++;
    if (imgAtual == vetor.length) imgAtual = 0;
    carrosel.style.backgroundImage = 'url("' + vetor[imgAtual] + '")';
    carrosel.className = imgAtual;
}

function imagemAnterior(vetor, alvo) {
    let carregaCarrosel = document.getElementById(alvo);
    let imgAtual = parseInt(carrosel.className);
    imgAtual--;
    if (imgAtual < 0) imgAtual = vetor.length - 1;
    carrosel.style.backgroundImage = 'url("' + vetor[imgAtual] + '")';
    carrosel.className = imgAtual;
}
