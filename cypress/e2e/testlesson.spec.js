describe('template spec', () => {
    it('passes', () => {
      cy.visitHomaPage()
      // cy.contains("Layout").parent()
      // cy.get("[title='Layout']")
      // cy.get(".menu-item.ng-tns-c7-0.menu-group.ng-star-inserted")
      // cy.get("[href='#'][title='Layout'], .ng-tns-c7-1.ng-star-inserted.active")
      // cy.contains("Forms").click()
      // cy.contains("Form Layouts").click()
      // cy.get('[placeholder="Email"][type="email"][fullwidth]#inputEmail1')
      // cy.xpath('(//span[contains(text(),"Layout")])[1]').click()
    })
  })

describe('template spec', () => {
    it('Saving subject of elements', () => {
    cy.visitHomaPage()
    cy.contains("Forms").click()
    cy.contains("Form Layouts").click()

    cy.contains("nb-card","Using the Grid").find('[for="inputEmail1"]').should('contain',"Email")
    cy.contains("nb-card","Using the Grid").find('[data-cy="imputEmail1"]')

    cy.contains("nb-card","Using the Grid").find('[for="inputPassword2"]').should('contain',"Password")
    cy.contains("nb-card","Using the Grid").find('[id="inputPassword2"]')

// 1 Using aliases

    cy.contains("nb-card","Using the Grid").as("usingTheGrid")
    cy.get("@usingTheGrid").find('[for="inputEmail1"]')
    cy.get("@usingTheGrid").find('[for="inputPassword2"]')
    

// 2 Using then() method

    cy.contains("nb-card","Using the Grid").then(usingTheGrid=>{
      cy.wrap(usingTheGrid).find('[for="inputPassword2"]').should('contain',"Password")
      cy.wrap(usingTheGrid).find('[for="inputEmail1"]')
      cy.wrap(usingTheGrid).find('[for="inputPassword2"]')

    })
 })

  it.only('Extracting  text from elements', () => {
    cy.visitHomaPage()
    cy.contains("Forms").click()
    cy.contains("Form Layouts").click()


    //1 using assertions
    cy.contains("nb-card","Using the Grid").find('[for="inputEmail1"]').should('contain',"Email")

    //2 Using then() method using JQuery
    cy.get('[for="inputEmail1"]').then(Label=>{
      let text = Label.text()
      expect(text).to.equal("Email")

    })

    //3 Using invoke()
    cy.get('[for="inputEmail1"]').invoke("text").then(Label=> {
      expect(Label).to.equal("Email")
    })


    //4 Using then() 
    cy.get('[for="inputEmail1"]').then(Label=> {
      cy.wrap(Label).should('contain',"Email")
    }) 


    //5 getting attributes using invoke
    cy.get('[for="exampleInputEmail1"]').invoke('attr','class').then(classVal => {
        expect(classVal).to.equal("label")
    })

    cy.get('#exampleInputEmail1').invoke('attr','placeholder').then(placeholder => {
      expect(placeholder).to.equal("Email")
    })


    //6 Getting values from props

    cy.get('#exampleInputEmail1').type("anna")

    cy.get('#exampleInputEmail1').invoke('prop','value').then(text => {
        expect(text).to.equal("anna")
    })
  })
})