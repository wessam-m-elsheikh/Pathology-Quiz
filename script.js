// DECLARATIONS
var question = document.querySelector("#question");
var choices = Array.from(document.querySelectorAll("#choice"));

//  QUESTIONs OBJECT:
var quiz = {
  questions: [{
      question: "Pus is formed of ............ necrosis of infected tissue.",
      a: "Coagulative",
      b: "Liquifactive.",
      c: "Gangrenous.",
      d: "Caseous.",
      answer: "b",
    },
    {
      question: "Enzymatic fat necrosis can occur in:",
      a: "Acute pancreatitis.",
      b: "Brain infarction.",
      c: "Breast trauma.",
      d: "Vasculitis.",
      answer: "a",
    },
    {
      question: "Ghost cells can be seen in all, except in:",
      a: "Brain infarction.",
      b: "Lung infarction.",
      c: "Renal infarction.",
      d: "Spleen infarction.",
      answer: "a",
    },
    {
      question: "Caseous necrosis can be seen in:",
      a: "Tuberculosis of tonsils.",
      b: "Vasculitis.",
      c: "Lung infarction.",
      d: "Gangrenous toe.",
      answer: "a",
    },
    {
      question: "Ischemia can lead to all except:",
      a: "Atrophy.",
      b: "Infarction.",
      c: "Degenaration.",
      d: "Traumatic necrosis.",
      answer: "d",
    }
  ],
  index: 0,
  load: function() {
    if (this.index < this.questions.length) {
      console.log(this.index);
      question.innerHTML = (this.index + 1) + "- " + this.questions[this.index].question;
      choices[0].innerHTML = this.questions[this.index].a;
      choices[1].innerHTML = this.questions[this.index].b;
      choices[2].innerHTML = this.questions[this.index].c;
      choices[3].innerHTML = this.questions[this.index].d;
      this.index++;
    } else {
      // make all container-x display "none" .. this will leave h1#question and h3#score
      var divs = document.querySelectorAll("div.container-xs");
      for (var i = 0; i < divs.length; i++) {
        divs[i].style.display = "none";
        this.final();
      }
    }
  },

  score: 0,
  checkAnswer: function(choice) {
    var classname = choice.className.split(" ");
    console.log(classname[1]);
    console.log(this.questions[this.index - 1].answer)
    if (classname[1] === this.questions[this.index - 1].answer) {
      this.score++;
      choice.style.backgroundColor = "green"
      var end = document.querySelector("h1#score");
      end.innerHTML = "Your Score";
      var end2 = document.querySelector("h2");
      end2.innerHTML = this.score + " / " + this.questions.length;
    } else {
      score = score;
      choice.style.backgroundColor = "red";
      var end = document.querySelector("h1#score");
      end.innerHTML = "Your Score";
      var end2 = document.querySelector("h2");
      end2.innerHTML = this.score + " / " + "5";
    }

  },
  final: function() {
    var final = document.querySelector("h1#final");
    var backbtn = document.querySelector("button#back");
    var trophy = document.querySelector("i#back");
    backbtn.style.visibility = "visible";
    if (this.score >= 4) {
      final.innerHTML = "EXCELLENT.";
      trophy.style.visibility = "visible";
    } else if (this.score <= 3 && this.score >= 1) {
      final.innerHTML = "WELL DONE."
    } else {
      final.innerHTML = "BETTER LUCK NEXT TIME."
    }

  }
};

// on page loading
window.load = quiz.load();

// to prevent the user from choosing any more answers.
function preventclick() {
  var choices = document.querySelectorAll("button#choice");
  for (var i = 0; i < choices.length; i++) {
    choices[i].style.pointerEvents = "none";
  }
}

// to make the choices clickable once more on new Q's
function allowClick() {
  var choices = document.querySelectorAll("button#choice");
  var i;
  for (i = 0; i < choices.length; i++) {
    choices[i].style.pointerEvents = "auto";
    choices[i].style.backgroundColor = "";
  }
}

// checking answers
function correctChoice(choice) {
  quiz.checkAnswer(choice);
  preventclick();
}

// reloading new Q's
function reload() {
  quiz.load();
  allowClick()
}
