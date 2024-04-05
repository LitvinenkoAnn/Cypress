describe('template spec', () => {

  it('Site theme changing', () => {
    cy.visitHomaPage()
    cy.get('.select-button').click()
    cy.contains("Dark").click()
    cy.get('.logo').should('be.visible').should('have.css', 'color', 'rgb(255, 255, 255)')
    cy.document().then(doc => {
      const bodyClasses = Array.from(doc.body.classList)
      expect(bodyClasses.includes('nb-theme-dark')).to.be.true
    })
  })


  it('Modal & Overlays -> Toastr - Window mode displaying', () => {
    cy.visitHomaPage()
    cy.get('.ng-tns-c7-7 > .menu-title').click()
    cy.get('.ng-tns-c7-11 > .menu-title').click()
    cy.get('.appearance-filled:nth-child(1)').click()
    cy.get('.window-mode').should('exist')
  })

  it('Layout -> Stepper - Wizard try again functionality', () => {
    cy.visitHomaPage()
    cy.get('.menu-item > .ng-tns-c7-1:nth-child(1)').click()
    cy.get('.menu-item > .ng-tns-c7-2').click()
    cy.get('[placeholder="Enter your name"]').click().type('Anna')
    cy.get('.step-container > [nbsteppernext=""]').click()
    cy.get('[placeholder="Enter favorite movie"]').should('be.visible')
    cy.get('[placeholder="Enter favorite movie"]').click().type('Test')
    cy.get('.step-container > [nbsteppernext=""]').click()
    cy.get('[placeholder="Enter something"]').should('be.visible')
    cy.get('[placeholder="Enter something"]').click().type('Test')
    cy.get('.step-container > [nbsteppernext=""]').click()

    cy.contains("Wizard completed!").should('be.visible')
    cy.get('.step-container > .appearance-filled').click()
    cy.get('[placeholder="Enter your name"]').should('exist')

  })

})

