import {FormLayoutPage} from "../pom/FormLayoutsPage"
import {StepperPage} from "../pom/StepperPage"

describe('template spec', async() => {


  it.only("Using POM - fillUsingTheGridForm", ()=> {
    FormLayoutPage.navigateTo()
    FormLayoutPage.fillUsingTheGridForm()
  })

  it.only("Using POM - fillBasicForm", ()=> {
    FormLayoutPage.navigateTo()
    FormLayoutPage.fillBasicForm()
  })

  it.only("Using POM - wizardTryAgain", ()=> {
    StepperPage.navigateTo()
    StepperPage.wizardTryAgain()
  
  })

})