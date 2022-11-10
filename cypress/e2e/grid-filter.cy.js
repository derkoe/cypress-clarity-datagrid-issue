describe('Clarity filter', () => {
  it('can be opened and closed', () => {
    cy.visit('https://clarity.design/documentation/datagrid/built-in-filters')
    cy.get(".datagrid-filter-toggle").first().scrollIntoView();
    cy.get(".datagrid-filter-toggle").first().click();
    cy.get(".datagrid-filter-close-wrapper > .clr-smart-close-button").click();
  })
});