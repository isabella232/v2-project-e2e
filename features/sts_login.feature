Feature: As a terminal operator I expect to be able to login via the STS Screen

  @smoke
  Scenario: As an operator I can successfully login to SSC via STS login
    Given I navigate to the STS Login page
      And I am logged in as "operator"
    Then I see the "SSC" page title
