"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Figura_1 = require("./Figura");
var Circulo = /** @class */ (function (_super) {
    __extends(Circulo, _super);
    function Circulo(laX, laY, _radio) {
        var _this = _super.call(this, laX, laY) || this;
        _this._radio = _radio;
        return _this;
    }
    Object.defineProperty(Circulo.prototype, "radio", {
        get: function () {
            return this._radio;
        },
        set: function (value) {
            this._radio = value;
        },
        enumerable: true,
        configurable: true
    });
    Circulo.prototype.getInfo = function () {
        return _super.prototype.getInfo.call(this) + (",radio=" + this.radio);
    };
    return Circulo;
}(Figura_1.Figura));
exports.Circulo = Circulo;
