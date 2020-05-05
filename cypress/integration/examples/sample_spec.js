
function login(){
	cy.visit('www.bayzat.com')
		
	cy.wait(2000)
	cy.contains('Login').click()
		
	cy.url().should('include','profile/login')
	cy.get('#ember12-field')
	.type(' test+testcompany@bayzat.com')
	cy.get('#ember13-field')
	.type('123456789')
		
	cy.get('#ember16').click()
	cy.wait(3000)
	cy.url()
	.should('include','enterprise/dashboard/index')
}

function fillEmployeeForm(pName, fName, lName, email){
	cy.contains('Preferred Name').type(pName)
	cy.contains('First Name').type(fName)
	cy.contains('Last Name').type(lName)
	cy.contains('Date of Birth').type('01/01/1990')
	cy.contains('Please select nationality').type(' Turkish - Turkey {enter}')
	cy.contains('Please select gender').type(' Female {enter}')		
	cy.contains('Work Email').type(email)
}

describe('My First Test', function() {
	it('Visit Bayzat web site', function() {
		
		cy.visit('www.bayzat.com')
		
		cy.wait(2000)
		
	})
	
	it('Log in', function() {
		
		cy.contains('Login').click()		
		
		cy.url().should('include','profile/login')
		
		cy.get('#ember12-field')
		.type(' test+testcompany@bayzat.com')
		cy.get('#ember13-field')
		.type('123456789')
		
		cy.get('#ember16').click()
		cy.wait(3000)
		cy.url()
		.should('include','enterprise/dashboard/index')
		
	})
	
	it('View Team Page Display', function() {
		
		login()
		
		cy.get('#ember141 > span').click()
		
		cy.get('#ember143 > span').click()
		
	})
	
	it('Add Employee', function() {	
	
		login()
		
		cy.get('#ember141 > span').click()
		
		cy.get('#ember143 > span').click()
		
		cy.contains('Add Employee').click()
		
		//add employee 1
		
		fillEmployeeForm('Test1', 'FirstName1', 'LastName1', 'Test1@mail.com')
			
		cy.contains('Create and add another').click()
		
		cy.wait(3000)
		
		//add employee 2
		
		fillEmployeeForm('Test2', 'FirstName2', 'LastName2', 'Test2@mail.com')
				
		cy.contains('Create').click()
		
		cy.wait(2000)
	})
	
	it('Search and Delete Added Employee 1', function() {
		
		login()		
		cy.contains('View Team').click()
		cy.wait(3000)
		
		cy.get('.ember-view').find('[placeholder="Search by employee name"]').
		type('Lastname1{enter}')		
		cy.wait(3000)
		
		cy.get('.js-employee-list td').first().click()		
		cy.get('.text-right').find('.fa-lg').click()		
		cy.wait(3000)		
		cy.get('.modal-content').find('[data-external-id="submit-button"]').click()
		cy.wait(2000)
		
	})	
		it('Search and Delete Added Employee 2', function() {
		
		login()		
		cy.contains('View Team').click()
		cy.wait(3000)
		
		cy.get('.ember-view').find('[placeholder="Search by employee name"]').
		type('Lastname2{enter}')		
		cy.wait(3000)
		
		cy.get('.js-employee-list td').first().click()		
		cy.get('.text-right').find('.fa-lg').click()		
		cy.wait(3000)		
		cy.get('.modal-content').find('[data-external-id="submit-button"]').click()
		cy.wait(2000)
		
	})	
	it('Log out', function() {
		
		login()
		
		cy.contains('View Team').click()
		cy.wait(3000)
		
						
		cy.contains('Logout').click()
		
		//cy.get('.js-main-menu__title').find('Logout').click()
		
		cy.url().should('eq', 'https://www.bayzat.com/enterprise/dashboard/login')
	})
	
	it('Visit Bayzat web site', function() {
		
		cy.visit('https://www.bayzat.com/')
		
		cy.wait(2000)
		
		cy.get('.bNPaBf').find('[class="style__TextWrap-sc-58yt2r-1 hGkEF"]')
		
	}) 
})