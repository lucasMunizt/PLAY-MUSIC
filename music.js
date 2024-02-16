let musicas = [
    {    
        titulo:'Cartão Black',
        src:'music/MC Caverinha, Kayblack - Cartão Black (Clipe Oficial).mp3',
        artista:'Caveirinha',
        img:'img/victor-freitas-nmKhLG_xsuw-unsplash.jpg',
        id:'0'
    },

    {
        titulo:'Sweater Weather',
        src:'music/Sweater Weather.mp3',
        artista:'The Neighbourhood',
        img:'img/janosch-lino-2jo9YbjHF1Y-unsplash.jpg',
        id:'1'
    },

    {
        titulo:'Você Vai Entender',
        src:'music/Você Vai Entender - Pablo Martins, Morgado, NaBrisa, Baviera (Prod. RastaBeats).mp3',
        artista:'1kilo',
        img:'img/ajeet-mestry-UBhpOIHnazM-unsplash.jpg',
        id:"2"
    }

];

let musica = document.querySelector('audio');
let tempomusica = document.querySelector('.fim');
let  imagem = document.querySelector('img');
let nomeMusica = document.querySelector('.descrisao h4')
let nomeArtista= document.querySelector('.descrisao i')
let indexmusica = 0;

renderizarmusica(indexmusica);
tempomusica.innerHTML = Segundosparaminutos(Math.floor(musica.duration));

document.querySelector('.botao-play').addEventListener('click',Tocarmusica);

document.querySelector('.botao-pause').addEventListener('click',Paramusica);

musica.addEventListener('timeupdate',Atualizarbarra); 

document.querySelector('.anterior').addEventListener('click',() => {
    indexmusica--;
    if(indexmusica < 0){
        indexmusica = musicas.length;
    }
    renderizarmusica(indexmusica);

});

document.querySelector('.proxima').addEventListener('click',() => {
    indexmusica++;
    if(indexmusica > musicas.length){
        indexmusica = 0;
    }
    renderizarmusica(indexmusica);
});



document.querySelector('.aleatorio').addEventListener('click', () => {
    let novaMusica;
    novaMusica = musicas[Math.floor(Math.random() * musicas.length)];
        if(novaMusica.src === musica.getAttribute('src')){
            renderizarmusica(indexmusica)
        }else{
            musica.setAttribute('src', novaMusica.src);
            musica.addEventListener('loadeddata', () => {
                nomeMusica.textContent = novaMusica.titulo;
                nomeArtista.textContent = novaMusica.artista;
                imagem.src = novaMusica.img;
                tempomusica.innerHTML = Segundosparaminutos(Math.floor(musica.duration));
            });
        }

    Tocarmusica();
});



function renderizarMusicaAleatoria(index){
        musica.setAttribute('src', )
}

function renderizarmusica(index){
    musica.setAttribute('src', musicas[index].src);
    musica.addEventListener('loadeddata',() =>{
        nomeMusica.textContent = musicas[index].titulo;
        nomeArtista.textContent = musicas[index].artista;
        imagem.src = musicas[index].img;
        tempomusica.innerHTML = Segundosparaminutos(Math.floor(musica.duration));
        //Tocarmusica();
    });  
}


function Tocarmusica(){
    musica.play();
    document.querySelector('.botao-pause').style.display = 'block';
    document.querySelector('.botao-play').style.display = 'none';
}

function Paramusica(){
    musica.pause();
    document.querySelector('.botao-play').style.display = 'block';
    document.querySelector('.botao-pause').style.display = 'none';
}

function Atualizarbarra(){
    let barra = document.querySelector('progress');
    let tempodecorrido = document.querySelector('.inicio');
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
    tempodecorrido.textContent = Segundosparaminutos(Math.floor(musica.currentTime));
    tempomusica
}

function Segundosparaminutos(segundos){
    let campoMinutos = Math.floor(segundos/60);
    let campoSegundos = segundos % 60;
    if(campoSegundos < 10){
        campoSegundos = '0' + campoSegundos;
    }

    return campoMinutos + ':' + campoSegundos;
}