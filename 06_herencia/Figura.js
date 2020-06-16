"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Figura = /** @class */ (function () {
    function Figura(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Object.defineProperty(Figura.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (value) {
            this._y = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Figura.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (value) {
            this._x = value;
        },
        enumerable: true,
        configurable: true
    });
    Figura.prototype.getInfo = function () {
        return "x=" + this._x + ",y=" + this._y;
    };
    return Figura;
}());
exports.Figura = Figura;
