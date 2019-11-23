
    
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
    


window.addEventListener('click', function(e) {

    var selection = document.querySelector(`button[id="${e.target.id}"]`)
    var key = document.querySelector(`.btn[id="${e.target.id}"]`)
    if(!selection) return;
    selection = e.target.id;
    console.log(selection);
    

    if (selection === "rock" && computerPlay() ==="paper") {
        return console.log("pc");
    }
    else if (selection === "rock" && computerPlay() === "rock") {
        return console.log("draw");
    }
    //paper
    else if (selection === "paper" && computerPlay() === "rock") {
        return console.log("pc");
    }
    else if (selection === "paper" && computerPlay() === "paper") {
        return console.log("draw");
    }
    //scissor
    else if (selection === "scissor" && computerPlay() === "paper") {
        return console.log("pc");
    }
    else if (selection === "scissor" && computerPlay() === "scissor") {
        return console.log("draw");
    }
    else {
        return console.log("npc");
    }



    })

 
