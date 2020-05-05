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

function fillEmployeeForm(pName, fName, lName, email){
	cy.contains('Preferred Name').type(pName)
	cy.contains('First Name').type(fName)
	cy.contains('Last Name').type(lName)
	cy.contains('Date of Birth').type('01/01/1990')
	cy.contains('Work Email').type(email)
	cy.readFile('C:/Users/ATIBA/data.json').then((data) => {
		cy.contains('Please select nationality').type(data.nationality1)
		cy.contains('Please select gender').type(data.gender1)
	})		
	
}

describe('Add Search Delete Employee', function() {
	it('Add Employee', function() {	
	
		login('C:/Users/ATIBA/data.json')
		
		cy.get('#ember141 > span').click()
		
		cy.get('#ember143 > span').click()
		
		cy.contains('Add Employee').click()
		
		//add employee 1
		cy.readFile('C:/Users/ATIBA/data.json').then((data) => {
			
			fillEmployeeForm(data.preferredName1, data.firstName1, data.lastName1, data.email1)
			
			cy.contains('Create and add another').click()
		
			cy.wait(3000)
		
			//add employee 2
		
			fillEmployeeForm(data.preferredName2, data.firstName2, data.lastName2, data.email2)
				
			cy.contains('Create').click()
		
			cy.wait(2000)
			
		})
	})
	it('Search and Delete Added Employee 1', function() {
		
		login('C:/Users/ATIBA/data.json')	
		
		cy.contains('View Team').click()
		cy.wait(3000)
		
		cy.readFile('C:/Users/ATIBA/data.json').then((data) => {
			cy.get('.ember-view').find('[placeholder="Search by employee name"]').
			type(data.search1)		
			cy.wait(3000)
		})
		
		cy.get('.js-employee-list td').first().click()		
		cy.get('.text-right').find('.fa-lg').click()		
		cy.wait(3000)		
		cy.get('.modal-content').find('[data-external-id="submit-button"]').click()
		cy.wait(2000)
		
	})	
		it('Search and Delete Added Employee 2', function() {
		
		login('C:/Users/ATIBA/data.json')		
		
		cy.contains('View Team').click()
		cy.wait(3000)
		
		cy.readFile('C:/Users/ATIBA/data.json').then((data) => {
			cy.get('.ember-view').find('[placeholder="Search by employee name"]').
			type(data.search2)		
			cy.wait(3000)
		})
		
		cy.get('.js-employee-list td').first().click()		
		cy.get('.text-right').find('.fa-lg').click()		
		cy.wait(3000)		
		cy.get('.modal-content').find('[data-external-id="submit-button"]').click()
		cy.wait(2000)
		
	})	
	it('Log out', function() {
		
		login('C:/Users/ATIBA/data.json')
		
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