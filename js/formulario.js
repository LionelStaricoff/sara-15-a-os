
export class Formulario {

    constructor(padre, whatsApp) {
        this._whatsApp = whatsApp ?? '';
        this._padre = (document.querySelector(padre)) ? document.querySelector(padre) : document.querySelector('body');
        this._fondo = document.createElement('div');
        this._fondo.id = 'formulario';
        this._button = document.createElement('button');
        this._button.innerText = 'Enviar'
        this._x = document.createElement('button');
        this._x.innerText = "X";
        this._x.addEventListener('click', ()=> this._padre.removeChild(this._fondo));
    }

    unaPersona() {
        const input = document.createElement('input');
        input.placeholder = 'Nombre completo'
        this._fondo.append(this._x,input,this._button )
        this._padre.appendChild( this._fondo)
    }

    enviarMensaje(){
        const numero = this._whatsApp;
        const nombre = document.getElementById("nombre").value;
        const mensaje = document.getElementById("mensaje").value;

        // Codifica el mensaje para la URL
        const mensajeCodificado = encodeURIComponent(`confirmo invitacion ${mensaje}`);

        // Crea el enlace de WhatsApp
        const enlaceWhatsApp = `https://wa.me/${numero}?text=${mensajeCodificado}`;

        // Abre WhatsApp en una nueva ventana
        window.open(enlaceWhatsApp);
    }


}