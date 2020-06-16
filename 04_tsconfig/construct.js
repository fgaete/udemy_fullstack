"use strict";
var NCliente = /** @class */ (function () {
    function NCliente(nom, ape) {
        this._nombre = nom;
        this._apellido = ape;
    }
    Object.defineProperty(NCliente.prototype, "nombre", {
        get: function () {
            return this._nombre;
        },
        set: function (value) {
            this._nombre = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NCliente.prototype, "apellido", {
        get: function () {
            return this._apellido;
        },
        set: function (value) {
            this._apellido = value;
        },
        enumerable: true,
        configurable: true
    });
    return NCliente;
}());
var miclient = new NCliente("Felipe", "Gaete");
console.log(miclient.nombre);
console.log(miclient.apellido);
