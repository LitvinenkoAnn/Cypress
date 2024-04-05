import user from '../fixtures/user.json'
import article from '../fixtures/article.json'

describe('template spec', () => {

it("API CALL",()=>{

    cy.request("POST","https://conduit-api.bondaracademy.com/api/users/login",user).then(response =>{

       const token = response.body.user.token

       cy.request({

        url:"https://conduit-api.bondaracademy.com/api/articles/",

        headers: {

          'Authorization': "Token "+token,

          "Content-Type": "application/json"

        },

        body: article,

        method: "POST"

      }).then(response=>{

        expect(response.status).to.equal(201)

      })

    })

})

    it("Mocking tags",()=>{

        const tags = {
    
          "tags": [
    
              "Anna",
              "Test"
    
          ]
    
      }
    
            cy.intercept("GET","https://conduit-api.bondaracademy.com/api/tags",tags)
            cy.visit("https://conduit.bondaracademy.com/login")
            cy.get('[placeholder="Email"]').type("test112345@gmail.com")
            cy.get('[placeholder="Password"]').type("test112345@")
            cy.get('[type="submit"]').click()
    
    })

  })


  it("Mocking Articles Request", () => {
    
    const articles = {
        articles: [
            { title: "Article 1", author: "User 1" },
            { title: "Article 2", author: "User 2" },
            { title: "Article 3", author: "User 3" }
        ]
    }

            cy.intercept("GET", "https://conduit-api.bondaracademy.com/api/articles?limit=10&offset=0", articles)
                .as("articlesRequest")

            cy.visit("https://conduit.bondaracademy.com/login")
            cy.get('[placeholder="Email"]').type("test344512!@gmail.com")
            cy.get('[placeholder="Password"]').type("test123456")
            cy.get('[type="submit"]').click()

    cy.wait("@articlesRequest").then(interception => {
        expect(interception.response.statusCode).to.equal(200)
        expect(interception.response.body.articles).to.have.lengthOf.above(0)
        
    })
})

it.only(" Mocking User Profile Request", () => {
    
    const userProfile = {
            "user": {
                "email": "testuser@gmail.com"
            }
        }

            cy.intercept("POST", "https://conduit-api.bondaracademy.com/api/users/login", userProfile)
                .as("userProfileRequest")

            cy.visit("https://conduit.bondaracademy.com/login")
            cy.get('[placeholder="Email"]').type("test344512!@gmail.com")
            cy.get('[placeholder="Password"]').type("test123456")
            cy.get('[type="submit"]').click()

            cy.wait("@userProfileRequest").then(interception => {
                expect(interception.response.statusCode).to.equal(200)
                expect(interception.response.body.user).to.deep.equal(userProfile.user)
        
    })
})