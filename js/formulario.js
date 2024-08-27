
export class Formulario {

    constructor(padre, whatsApp) {
        this._whatsApp = whatsApp ?? '';
        this._padre = (document.querySelector(padre)) ? document.querySelector(padre) : document.querySelector('body');
        this._fondo = document.createElement('div');
        this._fondo.id = 'formulario';
        this._button = document.createElement('button');
        this._x = document.createElement('button');
        this._x.addEventListener('click', ()=> this._padre.removeChild(this._fondo));
    }

    unaPersona() {
        const input = document.createElement('input');
        this._fondo.append(this._x,input,this._button )
        this._padre.appendChild( this._fondo)
    }


}