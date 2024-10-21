```
  for (let i = 0; i <= random; i++) {       <!-- iteration -->
    if (i % 3 == 0) {               <!-- selection -->
      opponentChoice = "rock";
    } else if (i % 2 == 0) {        <!-- selection -->
      opponentChoice = "paper";
    } else {                        <!-- selection -->
      opponentChoice = "scissors";
    }
  }
```

```
  for (let i = 0; i < history.length; i++) {            <!-- iteration -->
    if (history[i] == "win") {                  <!-- selection -->
      win++;
    } else if (history[i] == "lose") {              <!-- selection -->
      lose++;
    } else {                                    <!-- selection -->
      draw++;
    }
  }
```