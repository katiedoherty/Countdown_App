# Countdown_App
## Quick Intro to what the App deos.
This is a mobile friendly application that imitates the show Countdown. You are given nine letters and must submit a word within the amount of time given.


## How do I open the app
To view app in gitpod type 'npm start' into the terminal window and press the open in browser button that pops up in the left hand corner.

# Team Shannon - Katie Doherty, James Greer & Emma Martin


# Section 1: Why did we develop this app?
We were interested in developing a gaming app because we thought it would be a challenging yet rewarding project. There were plenty of aspects of this project not covered in lectures, such as using a timer and generating random words and some familiar topics including API calls, JSON arrays and using search forms. This balance of known and unknown subject matter made the topic appealing. Most people are familiar with countdown, and we wanted to see how this television game show could be adapted and played on an app. 

# Section 2: How did you design the app?
The first step was to create wireframes in order to have a blueprint to follow for the layout of the screens. Katie had experience in this area, so she designed 4 screens using Adobe XD and we were able to write code to match the layout and start working on the functionality. The original design can be found here.
When the app runs, the homepage appears on the screen. This is a simple 3-button screen from which the user must select a difficulty. App.js controls all of the conditional rendering and once the user selects a difficulty, the variable “choice” saves their response and the next screen is rendered. The three difficulty settings are easy, medium, and hard. The difficulty relates to how much time is available to think of a word, ranging from 30 seconds for hard and 60 seconds for easy.To improve the user’s experience, we added a “play” button after the homepage so the user can control when the game actually starts. Once the play button has been pressed, the timer starts and they have one objective - make a word. 

The game works by giving the user a set of random letters and the user must create a word from these letters. The longer the word is, the more points the user gets. The first question we asked ourselves was: how could we guarantee that a word could be found amongst the random letters? The most practical solution was to create an array of compound words, which would guarantee that smaller words were able to be formed. For example, the compound word “seventeen” contains 45 possible answers. We decided to use 9 letter compound words and create a function that would scramble the letters and present them to the user.

# Section 3: How did you implement the functionality in the app?
The timer component is written using hooks and we found this code on StackOverflow. We had to modify it slightly as the original minutes variable was not needed in the game . This is the only component in our app that uses hooks and it was necessary to learn how to safely declare and set a boolean’s value without using the set state method. To further complicate things, the parent app.js is a class component and communicating with a child that uses hooks required another solution. To overcome this, we made a method in app.js that could be called in timer.js when the timer reached 0 and it would update the boolean value in app.js, which would then be used in a conditional rendering statement. 
The definition component works by using an API call. We found a free API which is available here. The definition.js component uses props to communicate to the main App.js whether or not a definition has been found, this affects the final screen rendering.
Searchform includes two separate character checking methods, within onSearchFormChange and onSubmitButtonPress. These both check whether the user input is acceptable, if any special characters are entered (&,^,/,etc) the regex check will not allow them, after the submit button has been pressed the second character check will make sure the user has created there answer from available characters in the scrambled string.

# Section 4: Overall evaluation
The app functions as it should, and we were able to overcome major obstacles such as the timer pausing when a user is typing or the constant rerendering of the page when a user was typing. The rerendering led to a new word being taken from the RandomWords JSON file after a user typed a character and as a result, the random letters on the screen were constantly changing. If we had not solved this issue, the game would have been unplayable. Our app performs basic tasks, such as reading an external JSON file, parent-child communication, the use of an input box and 6 buttons. We were also able to implement some more complicated functionalities studied in class, namely, conditional rendering within multiple components and using an API call to give the user a definition of the word they found.

If we had more time to work on it, we would have implemented a round-based system which would keep track of the user’s total points and allow them to play for longer.This would have been complicated since the total points variable would reset to 0 when the user starts a new round. We also wanted to create a component which would generate 9 random characters as opposed to hard coding an array of 9 letter words. In its current state, the game becomes very boring after 50 attempts because the same letters will appear again.
If we were to start this project again from scratch, we would start by creating empty components and linking them to app.js first to make sure we did not create a complicated grandparent – parent – child schema. This is what happened when we did not carefully plan where components would be called from. The complicated schema was the original solution to the timer pausing when the user typed. We made an additional component called “Game.js” that was called from “App.js” and in turn, called other components such as “Timer.js” and “Definition.js”. It was only when we tried passing variables up to App.js that we realised how complicated communication would be. We found a better solution by calling multiple components from app.js within the same conditional rendering statement and this did not cause any unnecessary rerendering. 


