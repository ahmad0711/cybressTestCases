describe('CheckTable', () => {

    beforeEach('Login', () => {  //Before Each is Used to Execute First Of Every It Blcok

        cy.visit('https://demo.opencart.com/admin/')

        cy.get('#input-username').type('demo')

        cy.get('#input-password').type('demo')

        cy.get("button[type='submit']").click()

        cy.get('.btn-close').click()

        cy.get('li#menu-customer').click()

        cy.get('#menu-customer>ul>li:first-child').click()


    })

    it('Check No Rows & Columns', () => {

        cy.get("table[class='table table-bordered table-hover']>tbody>tr").should("have.length", "10")

        cy.get("table[class='table table-bordered table-hover']>thead>tr>td").should("have.length", "7")

    })

    it('Verify Specific Data', () => {

        cy.get("table[class='table table-bordered table-hover']>tbody>tr:nth-child(4)>td:nth-child(3)").contains("gorankrezic90@gmail.com")

    })

    it('Read all the Row & Column', () => {

        cy.get("table[class='table table-bordered table-hover']>tbody>tr")
            .each(($row, index, $rows) => {  // by Using Each and Every Func of CY (this is use for capture all the Rows)

                cy.wrap($row).within(() => {

                    cy.get("td").each(($col, index, $cols) => {
                        cy.log($col.text())



                    })


                })

            })

    })



    it('Pagination No', () => { // Capture the Total No. Of Pages

        let totalPages;

        cy.get(".col-sm-6.text-end").then((e) => {

            let mytext = e.text()

            totalPages = mytext.substring(mytext.indexOf("(") + 1, mytext.indexOf("Pages") - 1)

            cy.log('Total Numbers of Pages Is ====>' + totalPages)
        })

    })

    it.only('Pagination', () => {

        let totalPages = 5;

        for (let p = 1; p <= totalPages; p++) {

            if (totalPages > 1) {
                cy.log('Active Page Is == ' + p)

                cy.get("ul[class='pagination']>li:nth-child(" + p + ")").click()
                cy.wait(3000)


                cy.get("table[class='table table-bordered table-hover']>tbody>tr")
                    .each(($row, index, $rows) => {
                        cy.wrap($row).within(() => {
                            cy.get('td:nth-child(3)').then((e) => {
                                cy.log(e.text())
                            })
                        })
                    })

            }

        }


    })




})