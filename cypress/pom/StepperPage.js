export class StepperPage{
    static navigateTo(){
        cy.visitHomaPage()
        cy.contains("Layout").click()
        cy.contains("Stepper").click()
    }

    static wizardTryAgain(){
        cy.contains(":nth-child(1) > nb-card > nb-card-body","Lorizzle ipsum dolizzle stuff fizzle, consectetuer adipiscing break it down. Nullizzle sapien velizzle, my shizz pimpin', shizzle my nizzle crocodizzle shut the shizzle up, gravida vizzle, dang.").then(wizard=>{
            cy.wrap(wizard).find('[placeholder="Enter your name"]').click().type('Anna')
            cy.wrap(wizard).find('.step-container > [nbsteppernext=""]').click()
            cy.wrap(wizard).find('[placeholder="Enter favorite movie"]').should('be.visible')
            cy.wrap(wizard).find('[placeholder="Enter favorite movie"]').click().type('Test')
            cy.wrap(wizard).find('.step-container > [nbsteppernext=""]').click()
            cy.wrap(wizard).find('[placeholder="Enter something"]').should('be.visible')
            cy.wrap(wizard).find('[placeholder="Enter something"]').click().type('Test')
            cy.wrap(wizard).find('.step-container > [nbsteppernext=""]').click()
            cy.wrap(wizard).contains("Wizard completed!").should('be.visible')
            cy.wrap(wizard).find('.step-container > .appearance-filled').click()
            cy.wrap(wizard).find('[placeholder="Enter your name"]').should('exist')
        })
    }
}
