/* JS: Implements the Calculator utility. */

/**
 * Defines essential variables & objects.
 *   display   = Calculator display.
 *   buttons   = Calculator buttons.
 *   operation = Mathematical operation to perform.
 */
let display = document.getElementById("display");
let buttons = document.getElementsByClassName("btn");
let operation = "";


/**
 * Checks for button presses.
 *   Calls doAction() or doOperation() whenever an
 *   ACTION or OPERATOR button is pressed.
 */
for (let i = 0; i < buttons.length; i++) {
    let button = buttons[i];

    button.addEventListener("click", function () {
        switch (button.classList.contains("action")) {
            case true:
                if (button.classList.contains("operator")) {
                    doOperation(button);
                } else {
                    doAction(button);
                }
                break;
            case false:
                    doOperation(button);
                break;
        }
    });
}

/**
 * Calculates and displays the result of an OPERATION.
 */
function doOperation(button) {
    if (button.classList.contains("operator")) {
        if (!operation) {
            return;
        }
    }

    operation += button.dataset.value;

    display.innerHTML = operation;
}

/**
 * Performs the action associated with the button.
 */
function doAction (button) {
    switch (button.dataset.value) {
        case "equals":
            operation = eval(operation).toString();
            display.innerHTML = operation;
            break;
        case "backspace":
            operation = operation.slice(0, -1);
            display.innerHTML = operation;
            break;
        case "clear":
            operation = "";
            display.innerHTML = "";
            break;
    }
}