#  web automation example with cypress
The following steps is done with cypress with 3 section.

in visit-login.js
- Visit www.bayzat.com
- Log in via login link reachable from top menu
- Check that user will land on https://www.bayzat.com/enterprise/dashboard

in display-viewteam.js
- Login
- Display "View Team" page 

add-search-delete-employee.js
- Login
- Add two New employees 
- Search newly added employee
- Delete newly added employee
- Log out
- Check User should land on www.bayzat.com again and login link should be available

 
 in data.json file:
 - It includes all data used test.
 
 Cypress video record is available this path (Also, it is added to repo .mp4):

> https://dashboard.cypress.io/projects/rt8af2/runs
