"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.convertir = convertir;
exports.convertirInverso = convertirInverso;
function convertir(P) {
	var Peso = P;
	var Kg = 2.20462,
	    L = 1,
	    T = 0;
	T = Peso * Kg / L;
	return T;
}

function convertirInverso(P) {
	var Peso = P;
	var Kg = 1,
	    L = 2.20462,
	    T = 0;
	T = Peso * (Kg / L);
	return T;
}