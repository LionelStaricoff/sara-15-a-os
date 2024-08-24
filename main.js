import {Util} from './js/Util.js'
import {crearSpanAnimation} from './CrearSpanAnimation.js'

document.addEventListener("scroll", () => { Util.scrollFx(); });

let texto = ['Yazmin Díaz  &',' Rodrigo Rodriguez',
    'invitam a celebrar los quinceaños de','Sara Elena']
    texto.forEach(t => new crearSpanAnimation( t, '#cuarto') )


