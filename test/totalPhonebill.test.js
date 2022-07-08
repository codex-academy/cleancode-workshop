describe("The totalPhonebill", function() {

	it ("should be return a total of 7.45 for 'call, sms, call, sms, sms'", function(){
		assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));
	})
	it ("should be return a total of 3.40 for 'call, sms'", function(){
		assert.equal('R3.40', totalPhoneBill('call, sms'));
	})
	it ("should be return a total of 1.30 for 'sms, sms'", function(){
		assert.equal('R1.30', totalPhoneBill('sms, sms'));
	})

});