ALGORITHM
```
function rockPaperScissors(input) {
  const random = Math.floor(Math.random() * 100);
  let opponentChoice;
  let outcome;

  for (let i = 0; i <= random; i++) {
    if (i % 3 == 0) {
      opponentChoice = "rock";
    } else if (i % 2 == 0) {
      opponentChoice = "paper";
    } else {
      opponentChoice = "scissors";
    }
  }

  if (opponentChoice == "rock") {<!-- selection -->
    if (input == 1) {            <!-- selection -->
      outcome = "win";
    } else if (input == 2) {     <!-- selection -->
      outcome = "lose";
    } else {                     <!-- selection -->
      outcome = "draw";
    }
  } else if (opponentChoice == "paper") {<!-- selection -->
    if (input == 2) {                    <!-- selection -->
      outcome = "win";
    } else if (input == 0) {             <!-- selection -->
      outcome = "lose";
    } else {                             <!-- selection -->
      outcome = "draw";
    }
  } else {                               <!-- selection -->
    if (input == 0) {                    <!-- selection -->
      outcome = "win";
    } else if (input == 1) {             <!-- selection -->
      outcome = "lose";
    } else {                             <!-- selection -->
      outcome = "draw";
    }
  }
  history.push(outcome);

  DOMSelectors.history.innerHTML = "";
  DOMSelectors.content.insertAdjacentHTML(
    "afterbegin",
    `<div class="card" id="${outcome}">
    <p>Your choice: ${returnInput(input).toUpperCase()}</p>
    <p>Opponent choice: ${opponentChoice.toUpperCase()}</p>
    <h4>${outcome.toUpperCase()}</h4>
    </div>
    `
  );
}
```

SNIPPET OF ALGORITHM
```
  for (let i = 0; i <= random; i++) {       <!-- iteration:for loop -->
    if (i % 3 == 0) {               <!-- selection -->
      opponentChoice = "rock";
    } else if (i % 2 == 0) {        <!-- selection -->
      opponentChoice = "paper";
    } else {                        <!-- selection -->
      opponentChoice = "scissors";
    }
  }
```

ALGORITHM
```
function getHistory() {
  DOMSelectors.content.innerHTML = "";
  DOMSelectors.history.innerHTML = "";
  let win = 0;
  let lose = 0;
  let draw = 0;

  for (let i = 0; i < history.length; i++) {
    if (history[i] == "win") {
      win++;
    } else if (history[i] == "lose") {
      lose++;
    } else {
      draw++;
    }

    DOMSelectors.history.insertAdjacentHTML(
      "afterbegin",
      `<div class="historyCard" id="${history[i]}">
        <h4>Game ${i + 1}: ${history[i].toUpperCase()}</h4>
        </div>`
    );
  }}
```

SNIPPET OF ALGORITHM
```
  for (let i = 0; i < history.length; i++) {            <!-- iteration:for loop -->
    if (history[i] == "win") {                          <!-- selection -->
      win++;
    } else if (history[i] == "lose") {                  <!-- selection -->
      lose++;
    } else {                                            <!-- selection -->
      draw++;
    }
  }
```