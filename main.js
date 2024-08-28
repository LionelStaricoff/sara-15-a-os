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
   

    document.querySelector('body').addEventListener('click', function() {
        globalThis.inicioAudio = true;
        if( globalThis.inicioAudio){
            const audio = document.querySelector('audio');
            audio.play();
            globalThis.inicioAudio = false;
        }
       
    });

} catch (error) {
    console.error(error)
}

