export class FormLayoutPage{
    static navigateTo(){
        cy.visitHomaPage()
        cy.contains("Forms").click()
        cy.contains("Form Layouts").click()
    }

    static fillUsingTheGridForm(){
        cy.contains("nb-card","Using the Grid").then(usingTheGrid=>{
            cy.wrap(usingTheGrid).find('[id="inputEmail1"]').type("email@gmal.com")
            cy.wrap(usingTheGrid).find('[id="inputPassword2"]').type("password123")
            cy.wrap(usingTheGrid).find('nb-radio input').eq(0).click({force:true})
        })
    }
    static fillBasicForm(){
        cy.contains("nb-card","Basic form").then(basicForm=>{
            cy.wrap(basicForm).find('#exampleInputEmail1').type("email@gmal.com")
            cy.wrap(basicForm).find('#exampleInputPassword1').type("password123")
            cy.wrap(basicForm).find('nb-checkbox input').click({force:true})
        })
    }


}

