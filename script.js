var rounds = prompt("first to?");

function computerPlay() {

    function random() {

         return Math.floor(Math.random() * 3);
          }
          switch(random()) {
              case 0:
              return "rock"
              break;
    
              case 1:
              return "paper"
              break;
    
              case 2:
              return "scissor"
              break;
          }
    
      }
    
    var playerScore = 0;
    var npcScore = 0;
    var btn = document.querySelectorAll(".btn");

    function playerLog(score) {

        return console.log("Player Score is " + score)

    }

    function pcWinCondition (score) {
        if(score >= rounds) {
            pcwinner.textContent = "WINNER";
            playerScore = 0;
            npcScore = 0;
            pcresults.textContent = playerScore;
            npcresults.textContent = npcScore;
    }
        else if(score < rounds) {
            pcwinner.textContent = "";
        }
    }

    function npcWinCondition (score) {
        if(score >= rounds) {
            npcwinner.textContent = "WINNER";
            npcScore = 0;
            playerScore = 0;
            pcresults.textContent = playerScore;
            npcresults.textContent = npcScore;
    
            
        }
        else if(score < rounds) {
            npcwinner.textContent = "";
        }
    }

    btn.forEach((button) => {
        button.addEventListener('click', (e) => {

            if (e.target.id === "rock" && computerPlay() ==="paper") {
                ++playerScore
                pcresults.textContent = playerScore;
                pcWinCondition(playerScore);
                npcWinCondition(npcScore);
                return (playerLog(playerScore)); 
             }
             else if (e.target.id === "rock" && computerPlay() === "rock") {
                pcWinCondition(playerScore);
                npcWinCondition(npcScore);
                return console.log("draw");
         }
           
             else if (e.target.id === "paper" && computerPlay() === "rock") {
                ++playerScore;
                pcresults.textContent = playerScore;
                pcWinCondition(playerScore);
                npcWinCondition(npcScore);
                return (playerLog(playerScore)); 
             }
             else if (e.target.id === "paper" && computerPlay() === "paper") {
                pcWinCondition(playerScore);
                npcWinCondition(npcScore);
                 return console.log("draw");
             }
           
            else if (e.target.id === "scissor" && computerPlay() === "paper") {
                ++playerScore;
                pcresults.textContent = playerScore;
                pcWinCondition(playerScore);
                npcWinCondition(npcScore);
                return (playerLog(playerScore)); 
            }
             else if (e.target.id === "scissor" && computerPlay() === "scissor") {
                pcWinCondition(playerScore);
                npcWinCondition(npcScore);
                return console.log("draw");
            }
            else {
                ++npcScore;
                npcresults.textContent = npcScore;
                npcWinCondition(npcScore);

               return console.log("CPU score " + npcScore);
            }


        })});

        const pcresults = document.querySelector('.pcresults');
        const npcresults = document.querySelector('.npcresults');
        const pcwinner = document.querySelector('.pcwinner');
        const npcwinner = document.querySelector('.npcwinner');

        
    
        pcresults.textContent = playerScore;
        npcresults.textContent = npcScore;





    

 
