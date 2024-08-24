import { crearSpanAnimation } from './CrearSpanAnimation.js'

export class Util {

    static calcularTiempoRestante() {
        const fechaObjetivo = new Date('2024-09-28T00:00:00');
        const fechaActual = new Date();
    
        const diferencia = fechaObjetivo - fechaActual;
        const segundosRestantes = Math.floor(diferencia / 1000);
    
        const segundos = segundosRestantes % 60;
        const minutos = Math.floor(segundosRestantes / 60) % 60;
        const horas = Math.floor(segundosRestantes / 3600) % 24;
        const dias = Math.floor(segundosRestantes / 86400);
    
        return { dias, horas, minutos, segundos };
    }
    
    static mostrarContador() {
        const tiempoRestante = Util.calcularTiempoRestante();
        const spans = document.querySelectorAll('.counter')
        spans[0].innerText = tiempoRestante.dias;
        spans[1].innerText = tiempoRestante.horas;
        spans[2].innerText = tiempoRestante.minutos;
        spans[3].innerText = tiempoRestante.segundos;
        //console.log(`Faltan ${tiempoRestante.dias} días, ${tiempoRestante.horas} horas, ${tiempoRestante.minutos} minutos y ${tiempoRestante.segundos} segundos para el 28 de septiembre de 2024.`);
    }
    

    

    static crearSectionCuatro() {
        let texto = ['Yazmin Díaz  &', ' Rodrigo Rodriguez',
            'invitam a celebrar los quinceaños de', 'Sara Elena']
        texto.forEach(t => new crearSpanAnimation(t, '#cuarto'));


        (() => {
            const section_cuarto = document.querySelector('#cuarto');
            const fotos = document.createElement('div')
            fotos.innerHTML = `
                <img src="./img/1/sara_bb-compress.webp" >
                    <img src="./img/1/sara_jr-compress.webp" >
                    <img src="./img/1/sara_coqueta-compress.webp" >
        `
            section_cuarto.appendChild(fotos)
        })();

        texto = ['28-Septiembre-2024', '7:00 p.m.']

        texto.forEach(t => new crearSpanAnimation(t, '#cuarto'));
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