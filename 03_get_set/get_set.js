var Cliente = /** @class */ (function () {
    function Cliente() {
    }
    Object.defineProperty(Cliente.prototype, "nombre", {
        //Generar getter y setter
        get: function () {
            return this._nombre;
        },
        set: function (value) {
            this._nombre = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "apellido", {
        get: function () {
            return this._apellido;
        },
        set: function (value) {
            this._apellido = value;
        },
        enumerable: true,
        configurable: true
    });
    return Cliente;
}());
var micliente = new Cliente();
micliente.nombre = "Felipe";
micliente.apellido = "Gaete";
console.log(micliente.nombre + ' ' + micliente.apellido);
