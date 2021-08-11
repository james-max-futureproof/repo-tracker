# repo-tracker

Track information on Github repositories

# Pre-Requisites

- Have node installed (needed to run npm)

# Installation

1. Clone the repository
2. cd into the repo folder
3. Run `npm install` to download dependancies
4. Start the dev server with `npm run dev`
   A terminal message will tell you on which port the server is running

# Usage

Front End

1. Open a web browser
2. Navigate to http://localhost:8080 (by default)
3. You are greeted by the Search Page
   a. Enter in a github username
   b. Click search
   c. A list of matching github users is presented below
   d. Click See Profile to view more information
4. View Profile shows detailed information about a user and their repositories
   a. The list of repositories can be filtered using the search box
   b. Click a repository to see more details about it
5. The Repository Detail page shows more details about a repository including a log of the commit history
6. Navigation
   a. The Back button can be used at any time to return to the previous page you were on
   b. The Home button will return you to the initial search page

######## CHANGELOG ##########

- initial commit
- start environment code
- stub out page and component files
- add react routing
- controlled form and search on submit
- error handling on landing page
- add empty search handling
- add user data and profile redirect button to user info
- add basic global styling
- add Footer
- add Repo Search Bar
- add Repo component
- update index file with Profile Page components
- add initial Landing Page styling
- add initial styling to Landing page search
- add initial styling to User list component
- tweak user list styling
- update profile page styling
- add search api call to repo list
- update form styling to avoid conflicts
- round user images on landing page list
- add repo data fetching to repo page
- wrap profile image in main tag
- stub out and mount Repo component on Repo page
- refactor user list
- style info component
- style repos component
- style repo search bar
- fix profile container sizing
- add commit history to repo page
- fix fetch call for commit history
- add navigation buttons
- update footer text
- style repo page
- update README

########### BUGS / OUTSTANDING DEV ###########

- [] Correct discrepancy between repository and search endpoints
- [] Add tests
