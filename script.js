

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
   


    function pcWinCondition (score) {
        if(score === rounds) {
            
            pcwinner.textContent = "YOU WIN";
            npcScore = 0;
            playerScore = 0; 
            pcresults.textContent = playerScore;
            npcresults.textContent = npcScore;
           
    
    }
        else if(score < rounds) {
            pcwinner.textContent = "";
        }
    }

    function drawFlash() {


        draw.textContent = "Draw, pick again!";


    }
    function npcWinCondition (score) {
        if(score === rounds) {
            npcwinner.textContent = "CPU WINS";
            npcScore = 0;
            playerScore = 0;
            pcresults.textContent = playerScore;
            npcresults.textContent = npcScore;
            robochoice.textContent = "YESSSSS!"

    
            
        }
        else if(score < rounds) {
            npcwinner.textContent = "";
        }
    }

    btn.forEach((button) => {
        button.addEventListener('click', (e) => {



            if(draw.textContent === "Draw, pick again!") {
                draw.textContent = "";
            }



            if (e.target.id === "rock" && computerPlay() ==="scissor") {
                ++playerScore
                pcresults.textContent = playerScore;
                pcWinCondition(playerScore);
                npcWinCondition(npcScore);
                robochoice.textContent = "scissor!"
                
                
               
             }
             else if (e.target.id === "rock" && computerPlay() === "rock") {
                pcWinCondition(playerScore);
                npcWinCondition(npcScore);
                robochoice.textContent = "rock!"              
                drawFlash()
                
         }

         
           
             else if (e.target.id === "paper" && computerPlay() === "rock") {
                ++playerScore;
                pcresults.textContent = playerScore;
                pcWinCondition(playerScore);
                npcWinCondition(npcScore);
                robochoice.textContent = "rock!"
                
                
             }
             else if (e.target.id === "paper" && computerPlay() === "paper") {
                pcWinCondition(playerScore);
                npcWinCondition(npcScore);
                robochoice.textContent = "paper!"
                drawFlash()
                
                
             }
           
            else if (e.target.id === "scissor" && computerPlay() === "paper") {
                ++playerScore;
                pcresults.textContent = playerScore;
                pcWinCondition(playerScore);
                npcWinCondition(npcScore);
                robochoice.textContent = "paper!"
                
                
            }
             else if (e.target.id === "scissor" && computerPlay() === "scissor") {
                pcWinCondition(playerScore);
                npcWinCondition(npcScore);
                drawFlash()
                robochoice.textContent = "scissor!"
                
                
            }

            else {
                ++npcScore;
                npcresults.textContent = npcScore;
                pcWinCondition(playerScore);
                npcWinCondition(npcScore);
                if(e.target.id === "rock") {
                    robochoice.textContent = "paper!";
                }
                else if(e.target.id === "paper") {
                    robochoice.textContent = "scissor!";
                }
                else if(e.target.id === "scissor") {
                    robochoice.textContent = "rock!";
                }
                
                

              
            }


        })});

        const pcresults = document.querySelector('.pcresults');
        const npcresults = document.querySelector('.npcresults');
        const draw = document.querySelector('.draw');
        const pcwinner = document.querySelector('.pcwinner');
        const npcwinner = document.querySelector('.npcwinner');
        const robochoice = document.querySelector('.robochoice');
        



  




        
    
        pcresults.textContent = playerScore;
        npcresults.textContent = npcScore;
        
        
        

        var rounds = 5;



    

 
