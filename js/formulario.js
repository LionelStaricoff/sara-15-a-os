
export class Formulario {

    constructor(padre, whatsApp) {
        this._whatsApp = whatsApp ?? '';
        this._padre = (document.querySelector(padre)) ? document.querySelector(padre) : document.querySelector('body');
        this._fondo = document.createElement('div');
        this._fondo.id = 'formulario';
        this._button = document.createElement('button');
        this._button.innerText = 'Enviar'
        this._button.addEventListener('click', ()=> this.enviarMensaje())
        this._x = document.createElement('button');
        this._x.innerText = "X";
        this._x.addEventListener('click', () => this._padre.removeChild(this._fondo));
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


}