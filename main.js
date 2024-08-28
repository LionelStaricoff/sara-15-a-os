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
        const f1 = new Formulario(null, '573113840944');
        f1.unaPersona();
    })


    /**
        * efecto agrandar imagenes de la galeria
        */
    Util.agrandarImagen();


    /**
     * audio
     */


    document.querySelector('body').addEventListener('click', function () {
        if (!globalThis.inicioAudio) globalThis.inicioAudio = true;
        if (globalThis.inicioAudio) {
            const img = document.querySelector('.audio');
            img.src = './img/1/pause-compress.webp';
            const audio = document.querySelector('audio');
            audio.play();

            audio.volume = 0.15;
            globalThis.inicioAudio = false;
        }

    });

    document.querySelector('#play').addEventListener('click', () => {

        if (!globalThis.inicioAudioPause == undefined) globalThis.inicioAudioPause = true;



        if (globalThis.inicioAudioPause) {

            const img = document.querySelector('.audio');
            const audio = document.querySelector('audio');
            img.src = './img/1/play-compress.webp';
            console.log(img.src)
            audio.pause();
            globalThis.inicioAudioPause = false;
        } else {
            const img = document.querySelector('.audio');
            const audio = document.querySelector('audio');

            img.src = './img/1/pause-compress.webp'
            console.log(img.src)
            audio.play();
            globalThis.inicioAudioPause = true;
        }
    })

} catch (error) {
    console.error(error)
}

