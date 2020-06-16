class Cliente {
    private _nombre: string;
    private _apellido: string;
    //Generar getter y setter
    get nombre(): string {
        return this._nombre;
    }

    set nombre(value: string) {
        this._nombre = value;
    }

    get apellido(): string {
        return this._apellido;
    }

    set apellido(value: string){
        this._apellido = value;
    }
}

let micliente = new Cliente();

micliente.nombre = "Felipe";
micliente.apellido = "Gaete";

console.log(micliente.nombre+' '+micliente.apellido);