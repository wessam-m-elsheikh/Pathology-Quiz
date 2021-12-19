# General Pathology Quiz
#### Video Demo:  <https://youtu.be/kxAPeb4OsBg>
#### Description:
**Greetings,**
  I'm Wessam and this is my CS50x final project. It's a simple Quiz website for General Pathology subject for medical students.
  I'm interested in online learning solutions, that's what made me think of building this quiz website.

**A Journey through the website:**
**Homepage:**
  The homepage consists of a big photo that I've designed on [Canva website] (http://www.canva.com) and a single button that the user clicks to continue to take up the quiz.
  Content of this page is in my (index.html) file.

**Rules Page:**
  Second step of the user's journey is the Rules Page. There, I've explained simply and clearly how the mechanisms of answering and score counting is done.
  If the user wishes to continue to start the quiz, then clicks the START QUIZ NOW button. Or else hits BACK to return to Homepage.
  Content of this page is in my (quiz_rules.html) file.

**Quiz page:**
  Content of this page is in my (quiz.html) file.
  This page consists of multiple parts where the questions gets generated from the JavaScript file.
  - The main part is the **wrapper div** that contains all parts of quiz, inside it:
    - The Score part where the score immediately appears and starts to count right answers once the users chooses one.
    - The Question part is included in a separate div that gets filled with a new question every time the user hits the NEXT button.
    - The Choices part is included in a separate div with 4 buttons, one for every choice, that gets filled with a new set of choices
      every time the user hits the NEXT button too.
    - Last is the div containing the buttons. NEXT to go to the next question and BACK to return to the Homepage.

  - When the user chooses an answer a series of events happen:
    - The page stops responding to any further clicks from the user on the answers.
    - The score is updated if it's right and the choice clicked turns green.
    - The score stays the same if it's right and the choice clicked turns red.

    - Then outside the wrapper div there are :
      - Fontawesome Icon of a trophy that appears if the user reaches a certain score.
      - A Phrase that changes according the users score.
      - both parts are hidden and only appear after the user finishes the quiz along with the score part.

**Stylesheet:**
  This is where all my CSS styling code is found. Fount in (styles.css) file.
  Divided to 3 parts:
    - First Part: Styles used in All pages and Google Fonts.
    - Second Part: Styles specific for Homepage.
    - Third Part: Styles specific for Quiz page.

**Script:**
This is where all the JavaScript code is written. Fount in (script.js) file.
That file contains the following:
  - Declarations.
  - Quiz object:
    - That includes the Questions , Choices and the correct Answer.
    - Also the question's index.
    - Score.
    - The loading function.
    - The checking answer function.
    - The final function the generates the final Phrases according to user's score.
  - Assigning the window.load to the quiz.load(), to make sure that when the page load the first question is generated.
  - The rest of the functions:
    - Reload() to regenerate a new question with every Next clicked.
    - Preventclick() that stops The page from responding to any further clicks from the user on the answers.
    - AllowClick() to make the choices clickable once more on new questions.
    - CorrectChoice(choice) that passes an argument recording which choice button is clicked,
      then it calls the quiz.checkAnswer() and the preventclick().

**Responsivity:**
  The website is made responsive to all devices with different sizes through the use of BOOTSTRAP Fluid-Containers.

**Color Pallett:**
I used this color Pallett (https://colorhunt.co/palette/ffe6e6ffabe1a685e26155a6) from the website [colorhunt] (https://colorhunt.co).
Specifically chose this Pallett as it matches the stains used in the Pathology slides under Microscope.
