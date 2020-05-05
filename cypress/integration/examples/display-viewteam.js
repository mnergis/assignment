function login(datapath){
	
		cy.visit('www.bayzat.com')		
		cy.wait(2000)
		cy.contains('Login').click()		
		cy.url().should('include','profile/login')
		cy.readFile(datapath).then((data) => {
		
			cy.get('#ember12-field')
			.type(data.kullanici)
			cy.get('#ember13-field')
			.type(data.sifre)
		}) 
		
		cy.get('#ember16').click()
		cy.wait(3000)
		cy.url()
		.should('include','enterprise/dashboard/index')
	
}
describe('Display View Team', function() {
	it('Login and display view team', function() {
		
		login('C:/Users/ATIBA/data.json') 
		
		
		cy.get('#ember141 > span').click()
		
		cy.get('#ember143 > span').click()
		
	})
})