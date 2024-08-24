import {crearSpanAnimation} from './CrearSpanAnimation.js'

export class Util {

    static crearSectionCuatro(){
        let texto = ['Yazmin Díaz  &',' Rodrigo Rodriguez',
            'invitam a celebrar los quinceaños de','Sara Elena']
            texto.forEach(t => new crearSpanAnimation( t, '#cuarto') );
        
        
        (()=>{
        const section_cuarto = document.querySelector('#cuarto');
        const fotos = document.createElement('div')
        fotos.innerHTML = `
                <img src="./img/1/sara_bb-compress.webp" >
                    <img src="./img/1/sara_jr-compress.webp" >
                    <img src="./img/1/sara_coqueta-compress.webp" >
        `
        section_cuarto.appendChild(fotos)
        })()
        }

    static scrollFx() {
        const divs = document.querySelectorAll(".desaparecer");
        divs.forEach(div => {
            const rect = div.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
            if (rect.top < windowHeight && rect.bottom >= 0) {
                div.classList.add("aparecer");
            } else {
                div.classList.remove("aparecer");
            }
        });

        /**
         * recorrido para feliz 15 años sara
         */
        const span = document.querySelectorAll('span')
        span.forEach(div => {
            const rect = div.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
            if (rect.top < windowHeight && rect.bottom >= 0) {
                div.classList.add("animated-title");
            } else {
                div.classList.remove("animated-title");
            }
        });

        /**
           * transicion para el tercer section
           */
        const parrafos = document.querySelectorAll(".parrafos");
        parrafos.forEach(div => {
            const rect = div.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
            if (rect.top < windowHeight && rect.bottom >= 0) {
                div.classList.add("parrafo_animado");
            } else {
                div.classList.remove("parrafo_animado");
            }
        });

    }



}