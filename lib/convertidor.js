export function convertir(P) {
	const Peso = P 
	let Kg = 2.20462, L = 1, T = 0
	T = Peso * Kg / L
	return T
}

export function convertirInverso(P){
	const Peso = P
	let Kg = 1, L = 2.20462, T = 0
	T = Peso * (Kg/L)
	return T
}