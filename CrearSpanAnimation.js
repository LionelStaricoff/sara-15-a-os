

export class crearSpanAnimation {
    constructor(numberSpan, palabras, padre) {
        this._numberSpan = numberSpan ?? 0;
        this._palabras = palabras ?? '';
        this._padre = document.querySelector(padre ?? 'body');
   

        this.crearSpanAnimation();
    }
    crearSpanAnimation() {
        let arreyPalabras = Array.from(this._palabras);
        const div = document.createElement('div');
        let time = 0.1;
        arreyPalabras.forEach(a => {
            const span = document.createElement('span');
            span.textContent = a;
            span.style.animationDelay = `${time}s`;
            div.appendChild(span);
            time += 0.1;
        })
        this._padre.appendChild(div);
    }
}
