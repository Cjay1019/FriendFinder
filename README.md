# Meme Match

### Overview

Meme Match is a full stack web applicaton using node and express to handle server and routing functionality. The app is meant to demonstrate how express can be used to easily create routes, and send data back and forth between the front end.

## User Experience

When the user visits this site, they are greeted with a silly launch page, that contains no functionality other than a button that links to a second page. This second page contains a survey. The survey prompts the user to enter a name, a link to an image of their favorite meme, and to rate a series of memes displayed on the page. Once the user has completed the survey and presses submit, a modal is printed to the screen, displaying the name and image corresponding to the user that rated the memes most similarly. If the user enters a name that has already been used by another user, the modal displays a message prompting the user to choose a different name.

## How It Works

This app runs on a node server that uses express to route both data and html to the front end for the user to interact with the front end. There are 2 html routes: "/" and "/survey" which simply send the respective html files to the user. When the launch page button is clicked, it reroutes the user to "/survey". When the user clicks the submit button, the front end javascript uses jquery to parse the data they entered and post it to the backend on the route "/newmemer". Within that post route, there is javascript that takes this data, and determines which of the previous entries is the match, then returns the data to the front end. The front end js, then uses jquery to print the data to the screen for the user to view. Finally, if user clicks the link at the bottom of the screen, the backend sends the raw json data to the user.
