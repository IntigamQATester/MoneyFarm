@WIP
Feature: User onboarding

    @smoke @no-fix
    Scenario: Onboard a new user
        Given a valid email "email.user@example.com"
        And the user is not already onboarded
        When I create the User
        And create a new portfolio
        Then I should have only 1 new user
        And I should have 1 new portfolio for this User

    @fixme
    Scenario: Onboard a new portfolio
        Given a valid portfolio id
        When I create the new portfolio with name 12345
        Then I should have only 1 new user

    @add-me
    Scenario: Add funds in an existing portfolio
        Given [...]

    @add-me
    Scenario: [...]
