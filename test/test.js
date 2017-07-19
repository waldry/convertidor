const expect = require ('chai').expect
const PoundsToKg = require ('..').convertir
const KgToPounds = require ('..').convertirInverso

describe('#convertir', function(){
	it('50 Kg en libras es = 110.23', function () {
		const convertirA = PoundsToKg(50)
		expect(convertirA).to.equal(110.231)
	})
	it('50 libras en kilogramos es = 22.68', function () {
		const convertirB = KgToPounds(50)
		expect(convertirB).to.equal(22.67964547178199)
	})
})