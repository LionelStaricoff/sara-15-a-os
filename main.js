import { Util } from './js/Util.js'
import { Formulario } from './js/formulario.js';



try {
    document.addEventListener("scroll", () => { Util.scrollFx(); });
    // const f1 = new Formulario(null, '573113840944');
    // f1.unaPersona();

    Util.crearSectionCuatro();
    // Actualizar contador cada segundo
    setInterval(Util.mostrarContador, 1000);


    Util.crearSectionQuinto();

    Util.crearSectionSeis();

    const cupo = document.querySelector('#cupo');
    cupo.addEventListener('click', () => {
        const f1 = new Formulario(null, '571234567');
        f1.dosPersonas();
    })


    


    /**
     * audio
     */


    const section_musica = document.querySelector('#section_musica') ;
    section_musica.addEventListener('click', ()=>{
        Util.play();
        section_musica.style.display = 'none';
    } );

    document.querySelector('#play').addEventListener('click', () => {

      

        const controlButton = document.querySelector('.audio');
        const audio = document.querySelector('audio');

        if (audio.paused) {
            audio.volume = 0.5;
            audio.play();
            controlButton.src =  './img/1/pause-compress.webp';
            controlButton.alt = 'Pause';
        } else {
            audio.pause();
            controlButton.src = './img/1/play-compress.webp';
            controlButton.alt = 'Play';
        }
    })


    Util.septimo();
    /**
        * efecto agrandar imagenes de la galeria
        */
    Util.agrandarImagen();

} catch (error) {
    console.error(error)
}

