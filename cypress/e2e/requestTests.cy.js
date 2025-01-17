/// <reference types= "cypress" />

describe('Request tests', () => {
    // beforeEach(() => {
    //     cy.visit('https://jsonplaceholder.typicode.com/')
    // })

    it('GET method test', () => {
        cy.request('https://jsonplaceholder.typicode.com/posts').then(res => {
            expect(res.status).to.eq(200)
            expect(res.headers['content-type']).to.include('application/json')
            expect(res.body).to.have.length(100)

            expect(res.body[0]).to.have.property('userId')
            expect(res.body[0]).to.have.property('id')
            expect(res.body[0]).to.have.property('title')
            expect(res.body[0]).to.have.property('body')
        })
    })

    it('POST method test', () => {

        cy.fixture('requestData.json').then(requestData => {
            const requestBody = requestData.requestBody1

            cy.request('POST', 'https://jsonplaceholder.typicode.com/posts', requestBody).then(res => {
                expect(res.status).to.eq(201)
                expect(res.body).to.have.property('id').to.eq(requestBody.id)
                expect(res.body).to.have.property('title').to.eq(requestBody.title)
                expect(res.body).to.have.property('body').to.eq(requestBody.body)
            })
        })
        
    })

    it('PUT method test', () => {
        cy.fixture('requestData.json').then(requestData => {
            const requestBody = requestData.requestBody2

            cy.request('PUT', `https://jsonplaceholder.typicode.com/posts/${requestBody.id}`, requestBody).then(res => {
                expect(res.status).to.eq(200)
                expect(res.body).to.have.property('title').to.eq(requestBody.title)
                expect(res.body).to.have.property('body').to.eq(requestBody.body)
            })
        })
    })

    it('PATCH method test', () => {
        cy.request('PATCH', 'https://jsonplaceholder.typicode.com/posts/99', {title: "title from PATCH"}).then(res => {
            expect(res.status).to.eq(200)
            expect(res.body).to.have.property('title').to.eq("title from PATCH")
        })
    })

    it('DELETE method test', () => {
        cy.request('DELETE', 'https://jsonplaceholder.typicode.com/posts/99').then(res => {
            expect(res.status).to.eq(200)
            expect(res.body).to.be.an('object').that.is.empty
        })
    })
    
})