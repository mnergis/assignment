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

describe('Visit and Login Test', function() {
	it('Visit Bayzat web site', function() {
		/*cy.visit('www.bayzat.com')
		
		cy.wait(2000)
		cy.contains('Login').click()
		
		cy.url().should('include','profile/login')
		
		cy.readFile('C:/Users/ATIBA/data.json').then((data) => {
		
			cy.get('#ember12-field')
			.type(data.kullanici)
			cy.get('#ember13-field')
			.type(data.sifre)
		}) 
		
		
		cy.get('#ember16').click()
		cy.wait(3000)
		cy.url()
		.should('include','enterprise/dashboard/index')*/
		
		login('C:/Users/ATIBA/data.json')

		

	}) 
})