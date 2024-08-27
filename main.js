import { Util } from './js/Util.js'
import {Formulario} from './js/formulario.js';



try {
    document.addEventListener("scroll", () => { Util.scrollFx(); });
    new Formulario('#primero')

    Util.crearSectionCuatro();
    // Actualizar contador cada segundo
    setInterval(Util.mostrarContador, 1000);


    Util.crearSectionQuinto();

    Util.crearSectionSeis();

    const cupo = document.querySelector('#cupo');
    cupo.addEventListener('click', () => {
        alert('cupos')
    })

} catch (error) {
    console.error(error)
}


