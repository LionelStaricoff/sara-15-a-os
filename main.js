import { Util } from './js/Util.js'
import {Formulario} from './js/formulario.js';



try {
    document.addEventListener("scroll", () => { Util.scrollFx(); });


    Util.crearSectionCuatro();
    // Actualizar contador cada segundo
    setInterval(Util.mostrarContador, 1000);


    Util.crearSectionQuinto();

    Util.crearSectionSeis();

    const cupo = document.querySelector('#cupo');
    cupo.addEventListener('click', () => {
          const f1 = new Formulario(null,'573113840944');
   f1.unaPersona();
    })

} catch (error) {
    console.error(error)
}


