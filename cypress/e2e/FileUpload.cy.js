import 'cypress-file-upload';

describe('FileUpload', ()=> {

    // First we are needs to paste uploaded file into the fixture folder

    it('SingleFile', ()=> {

        cy.visit('https://the-internet.herokuapp.com/upload')

        cy.get('#file-upload').attachFile('test01.png')

        cy.get('#file-submit').click()

        cy.get('h3').should('have.text', 'File Uploaded!')


    })

    it('Upload - Rename', ()=> {

        // Rename File During Uploading 

        cy.visit('https://the-internet.herokuapp.com/upload')

        cy.get('#file-upload').attachFile({filePath:"test01.png", fileName: "new.png "})

        cy.get('#file-submit').click()

        cy.get('h3').should('have.text', 'File Uploaded!')

    })

    it.only('Upload - Drag & Drop', ()=> {

        cy.visit('https://the-internet.herokuapp.com/upload')

        cy.get('#drag-drop-upload').attachFile('test01.png', {subjectType: 'drag-n-drop'})

        cy.wait(3000)

        cy.get('#file-submit').click()
        
    })

    it('Multiple Upload', ()=> {

        

    })

    it('Upload - Shadow Dom', ()=> {

        

    })


})