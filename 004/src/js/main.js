/* JS: Implements the Quiz utility with questions imported from a JSON file. */


/**
 * Defines essential variables & objects.
 *   questions       = Questions parsed from JSON file.
 *   questions_count = Number of questions in JSON file.
 *   question_index  = Index of current question.
 *   question_title  = The actual question.
 *   answers         = Possible answer(s).
 *   score           = Score obtained by user.
 *   btn_submit      = Triggered when an answer is submitted    .
 */
let options = document.getElementsByClassName("option");
// let choices = ["rock", "paper", "scissors"];
// let winState = {
//     rock: "scissors",
//     paper: "rock",
//     scissors: "rock"
// };
// let battle = document.getElementById("battle");
// let reset = document.getElementById("reset");
// let score_user = 0, score_ai = 0;
// let storage = window.localStorage;


for(let i=0; i < options.length; i++){
    let option = options[i];

    option.addEventListener("click", function(){
        this.classList.add("selected");
        disableOptions();
        // battle(this);
    });


function disabledOptions(){
    for(let i=0; i < options.length; i++){
        let option = options[i];

        if (!options.classList.contains("selected"))
            option.classList.add("disabled");
        }
    }
}