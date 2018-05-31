describe('Server-side rendered version', function() {
  it('work', function() {
    
    cy.visit('http://51.15.108.163');

    // basic check
    cy.contains("Another post")
    cy.contains("Hello world")
    
    
    // Sample page check
    cy
      .contains("Sample Page")
      .click()
    
    cy.wait(500)
      
    cy.contains("This is an example page.")
    
    
    // Blogging check
    cy
      .contains("Home")
      .click()
      
    cy.wait(500)
    
    cy
      .contains("Hello world!")
      .click()
    
    cy.wait(500)
    
    cy.contains("Hi, this is a comment.")
    
    
  });
});