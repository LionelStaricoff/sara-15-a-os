import { Util } from './js/Util.js'


document.addEventListener("scroll", () => { Util.scrollFx(); });


Util.crearSectionCuatro();
// Actualizar contador cada segundo
setInterval(Util.mostrarContador, 1000);


 Util.crearSectionQuinto();

