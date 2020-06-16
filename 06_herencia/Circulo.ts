import { Figura } from './Figura';

export class Circulo extends Figura {

    constructor(laX: number, laY: number, private _radio: number){
        super(laX,laY);
    }

    public get radio(): number {
        return this._radio;
    }
    public set radio(value: number) {
        this._radio = value;
    }

    getInfo(): string {
        return super.getInfo() + `,radio=${this.radio}`; 
    }
}