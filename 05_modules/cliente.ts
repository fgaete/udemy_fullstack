export class NCliente {
    private _nombre: string;
    private _apellido: string;

    constructor(nom: string, ape: string){
        this._nombre = nom;
        this._apellido = ape;
    }

    public get nombre(): string {
        return this._nombre;
    }

    public set nombre(value: string){
        this._nombre = value;
    }

    public get apellido(): string {
        return this._apellido;
    }

    public set apellido(value: string){
        this._apellido = value;
    }
}