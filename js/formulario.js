
export class Formulario {

    constructor(padre, whatsApp) {
        this._whatsApp = whatsApp ?? '';
        this._padre = (document.querySelector(padre)) ? document.querySelector(padre) : document.querySelector('body');
        this._fondo = document.createElement('div');
        this._fondo.id = 'formulario';
        this._button = document.createElement('button');
        this._button.innerText = 'Enviar'
        this._button.addEventListener('click', () => this.enviarMensaje())
        this._x = document.createElement('button');
        this._x.innerText = "X";
        this._x.addEventListener('click', () => this._padre.removeChild(this._fondo));
        this.crearCss()
    }

    unaPersona() {
        const input = document.createElement('input');
        input.placeholder = 'Nombre completo'
        this._fondo.append(this._x, input, this._button)
        this._padre.appendChild(this._fondo)
    }

    enviarMensaje() {
        const numero = this._whatsApp;
        let mensaje = '';
        const inputs = document.querySelectorAll("input");
        inputs.forEach(f => mensaje += ' ' + f.value);

        const mensajeCodificado = encodeURIComponent(`confirmo invitacion ${mensaje}`);


        const enlaceWhatsApp = `https://wa.me/${numero}?text=${mensajeCodificado}`;


        globalThis.open(enlaceWhatsApp);
    }

    crearCss() {
        const head = document.head;
        const style = document.createElement('style');
        style.innerText = `
        #formulario {
    position: fixed;
    z-index: 2;
    width: min(20em, 100%);
    height: min(30em, 100%);
border-radius: 25px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    background-image: url('../img/1/fondo_formulario.webp');

    display: grid;
    justify-content: space-around;
    text-align: center;
    place-items: center;
    gap: 20px;
    opacity: 0.9;
    border: solid 3px #333;
    

    button:nth-child(1) {
        height: fit-content;
        width: fit-content;
        font-size: 2.2em;
        font-weight: bolder;
        position: relative;
        transform: translate(100px, 0px);
        background-color: inherit;
        color: rgb(211, 21, 21);
        border: none;

        &:hover {
            font-weight: 200;
        }
    }

    input:nth-child(2) {
        text-align: center;
        border-radius: 15px;
        padding: 0.5em;
        font-size: 1.2em;
    }

    button:nth-child(3) {
        height: fit-content;
        width: fit-content;
        background-color: rgb(51, 51, 51, 20%);
        color: whitesmoke;
        padding: 0.5em;
        font-size: 1.5em;
        border-radius: 15px;

    }
}
        `

        head.appendChild(style);
    }


}