const game = ()=>{
    let pscore = 0;
    let cscore = 0;

    const inputform = document.querySelector(".input")
   
    const formbutton = document.querySelector("#enter")
    const user_name = document.querySelector("#user-name")

    

    formbutton.addEventListener("click",function(){
         user_name.innerHTML = inputform.value
    //user_name.textContent = inputform.value
     
    })



      // start the game
    const startgame = ()=>{
        const playbutton = document.querySelector(".intro button");
        const introscreen = document.querySelector(".intro");
        const match = document.querySelector(".match");

        playbutton.addEventListener("click",()=>{
            introscreen.classList.add("fadeout");
            match.classList.add("fadein");
        });
    };

    //play match
    const playmatch = ()=>{
        const options = document.querySelectorAll(".options button");
        const playerhand = document.querySelector(".player-hand");
        const computerhand = document.querySelector(".computer-hand");
        // computer options
        const computeroptions = ["rock","paper","scissors"];

        options.forEach(option =>{
            option.addEventListener("click", function(){
                //computer choice
                const computernumber = Math.floor(Math.random()*3);
                const computerchoice = computeroptions[computernumber];
                //here is where we call compare hands
              comparehands(this.textContent,computerchoice);



                //update images

                playerhand.src = `${this.textContent}.png`;
                computerhand.src = `${computerchoice}.png`

                
               
            })
        })
    };

    const wintalk = ()=>{
        const talk = document.querySelector(".winss");
        if (pscore > cscore ){
            talk.textContent = `${inputform.value} is winning`
        }else if(pscore === cscore){
            talk.textContent = "draw"
        }else{
            talk.textContent = "computer winning"
        }
        
        
        
    }


    const updatescore = ()=>{
        const playerscore = document.querySelector(".player-score p");
        const computerscore = document.querySelector(".computer-score p");
        playerscore.textContent = pscore;
        computerscore.textContent = cscore;
    }

    const comparehands = (playerchoise, computerchoise)=>{
        //update text
        const winner = document.querySelector(".winner")
        //checking for a tie
        if(playerchoise === computerchoise){
            winner.textContent = "it is a tie"
            updatescore()
            wintalk()
            return;

        }

        //check for rock
        if(playerchoise === "rock"){
            if(computerchoise === "scissors"){
                winner.textContent = `${inputform.value} wins`;
                pscore++
                updatescore()
                wintalk()
                return;
            }else{
                winner.textContent = "Computer wins";
                cscore++
                updatescore()
                wintalk()
                return;
            }
        }

        //checking for paper
        if(playerchoise === "paper"){
            if(computerchoise === "scissors"){
                winner.textContent = "Computer wins"
                cscore++
                updatescore()
                wintalk()
                return;
            }else{
                winner.textContent = `${inputform.value} wins`
                pscore++
                updatescore()
                wintalk()
                return;
            }
        }
        // checking for scissors
        if(playerchoise === "scissors"){
            if(computerchoise === "rock"){
                winner.textContent = "computer wins"
                cscore++
                updatescore()
                wintalk()
                return;
            }else{
                winner.textContent = `${inputform.value} wins`
                pscore++
                updatescore()
                wintalk()
                return;
            }
        }
        


    }

    //is call all the inner function
    startgame();
    playmatch();
};


//start the game function
game();