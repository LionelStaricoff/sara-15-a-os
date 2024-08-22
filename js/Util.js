

export class Util{

    static scrollFx ()  {
        const divs = document.querySelectorAll(".desaparecer");
        divs.forEach( div => {
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
        span.forEach( div => {
            const rect = div.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
            if (rect.top < windowHeight && rect.bottom >= 0) {
                div.classList.add("animated-title");
            } else {
                div.classList.remove("animated-title");
            }
        });
    }
}