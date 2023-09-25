
//FORM 

var nameArray=[]


function getNames(){

var nameOne = document.getElementById("playerOneName").value;
var nameTwo = document.getElementById("playerTwoName").value;
var nameThree = document.getElementById("playerThreeName").value;
var nameFour = document.getElementById("playerFourName").value;


sessionStorage.setItem('nameOne', nameOne)
sessionStorage.setItem('nameTwo', nameTwo)
sessionStorage.setItem('nameThree', nameThree)
sessionStorage.setItem('nameFour', nameFour)


};

function addNames(){

    if(sessionStorage.getItem('nameOne') != undefined){
        nameArray.push(sessionStorage.getItem('nameOne'))
    }

    if(sessionStorage.getItem('nameTwo') != undefined){
        nameArray.push(sessionStorage.getItem('nameTwo'))
    }

    if(sessionStorage.getItem('nameThree') != undefined){
        nameArray.push(sessionStorage.getItem('nameThree'))
    }

    if(sessionStorage.getItem('nameFour') != undefined){
        nameArray.push(sessionStorage.getItem('nameFour'))
    }

    if(sessionStorage.getItem('nameFive') != undefined){
        nameArray.push(sessionStorage.getItem('nameFive'))
    }

    if(sessionStorage.getItem('nameSix') != undefined){
        nameArray.push(sessionStorage.getItem('nameSix'))
    }

    if(sessionStorage.getItem('nameSeven') != undefined){
        nameArray.push(sessionStorage.getItem('nameSeven'))
    }

    if(sessionStorage.getItem('nameEight') != undefined){
        nameArray.push(sessionStorage.getItem('nameEight'))
    }

    if(sessionStorage.getItem('nameNine') != undefined){
        nameArray.push(sessionStorage.getItem('nameNine'))
    }

    if(sessionStorage.getItem('nameTen') != undefined){
        nameArray.push(sessionStorage.getItem('nameTen'))
    }

 
};

//Question and Answer Functions

//True or False 
var trueA ='True'
var falseA = 'False'

//Question One 
function askQuestionOne (){
    

    var radioBtn = document.getElementById("answerOptionThree");
    radioBtn.style.display = "none";
    var radioBtnA = document.getElementById("answerOptionFour");
    radioBtnA.style.display = "none";



var firstPlayer = nameArray[0];
nameArray.splice(0,1)
var questionOne = firstPlayer + ', there is a gift shop in Guantanamo Bay. True or False?'
var correctAnswerOne = trueA
var incorrectAnswerOne = falseA

document.getElementById('questionNo').innerHTML = ' Question 1'
document.getElementById('question').innerHTML = questionOne

document.getElementById('answerOptionOneLabel').innerHTML = correctAnswerOne
document.getElementById('answerOptionOne').value = correctAnswerOne
sessionStorage.setItem('correctAnswerOne', correctAnswerOne)

document.getElementById('answerOptionTwoLabel').innerHTML = incorrectAnswerOne
document.getElementById('answerOptionTwo').value = incorrectAnswerOne
sessionStorage.setItem('incorrectAnswerOne', incorrectAnswerOne)

};

function getQuestionOneAnswer(){ 

    if(document.getElementById("answerOptionOne").checked){
        var playerChoice =  sessionStorage.getItem('correctAnswerOne')
    } else if(document.getElementById("answerOptionTwo").checked){
        playerChoice = sessionStorage.getItem('incorrectAnswerOne')
    } sessionStorage.setItem('playerChoice', playerChoice)

};

function questionOneResponse() {

    var playerChoiceA = sessionStorage.getItem('playerChoice')
    var correctAnswerOneA = sessionStorage.getItem('correctAnswerOne')
    var incorrectAnswerOneA = sessionStorage.getItem('incorrectAnswerOne')
    
    sessionStorage.setItem('playerChoiceA', playerChoiceA)
    sessionStorage.setItem('correctAnswerOneA', correctAnswerOneA)
    sessionStorage.setItem('incorrectAnswerOneA', incorrectAnswerOneA)
    
   
    document.getElementById('correctAnswer').innerHTML = 'Guantanamo Bay does have gift shop!' 


if(sessionStorage.getItem('playerChoice') == correctAnswerOneA){

    document.getElementById('rightOrWrong').innerHTML = 'Right Answer!'
    document.getElementById('penalityOrReward').innerHTML = massage

}
else if(sessionStorage.getItem('playerChoice')== incorrectAnswerOneA){
    
    document.getElementById('rightOrWrong').innerHTML = 'Wrong Answer!'
    document.getElementById('penalityOrReward').innerHTML = threeShots
}  

};



//Question Two
function askQuestionTwo (){
    
    var radioBtn = document.getElementById("answerOptionThree");
    radioBtn.style.display = "none";
    var radioBtnA = document.getElementById("answerOptionFour");
    radioBtnA.style.display = "none";



var secondPlayer = nameArray[1];
nameArray.splice(1,1)
var questionTwo = secondPlayer + ', there is a town in Canada call "Dildo". True or False?'
var correctAnswerTwo = trueA
var incorrectAnswerTwo= falseA

document.getElementById('questionNo').innerHTML = ' Question 2'
document.getElementById('question').innerHTML = questionTwo

document.getElementById('answerOptionOneLabel').innerHTML = correctAnswerTwo
document.getElementById('answerOptionOne').value = correctAnswerTwo
sessionStorage.setItem('correctAnswerTwo', correctAnswerTwo)

document.getElementById('answerOptionTwoLabel').innerHTML = incorrectAnswerTwo
document.getElementById('answerOptionTwo').value = incorrectAnswerTwo
sessionStorage.setItem('incorrectAnswerTwo', incorrectAnswerTwo)

};

function getQuestionTwoAnswer(){ 

    if(document.getElementById("answerOptionOne").checked){
        var playerChoice =  sessionStorage.getItem('correctAnswerTwo')
    } else if(document.getElementById("answerOptionTwo").checked){
        playerChoice = sessionStorage.getItem('incorrectAnswerTwo')
    } sessionStorage.setItem('playerChoice', playerChoice)

};

function questionTwoResponse() {

    var playerChoiceA = sessionStorage.getItem('playerChoice')
    var correctAnswerTwoA = sessionStorage.getItem('correctAnswerTwo')
    var incorrectAnswerTwoA = sessionStorage.getItem('incorrectAnswerTwo')
    
    sessionStorage.setItem('playerChoiceA', playerChoiceA)
    sessionStorage.setItem('correctAnswerTwoA', correctAnswerTwoA)
    sessionStorage.setItem('incorrectAnswerTwoA', incorrectAnswerTwoA)
    
   
    document.getElementById('correctAnswer').innerHTML = 'True. There is a town in Canada called "Dildo!' 


if(sessionStorage.getItem('playerChoice') == correctAnswerTwoA){

    document.getElementById('rightOrWrongTwo').innerHTML = 'Right Answer'
    document.getElementById('penalityOrRewardTwo').innerHTML = twerk

}
else if(sessionStorage.getItem('playerChoice') == incorrectAnswerTwoA){
    
    document.getElementById('rightOrWrongTwo').innerHTML = 'Wrong Answer'
    document.getElementById('penalityOrRewardTwo').innerHTML = serenade
}  

};


//Question Three


function askQuestionThree (){
    
    var radioBtn = document.getElementById("answerOptionThree");
    radioBtn.style.display = "none";
    var radioBtnA = document.getElementById("answerOptionFour");
    radioBtnA.style.display = "none";


    var thirdPlayer = nameArray[2];
    nameArray.splice(2,1)
    var questionThree = thirdPlayer + ', there is town in Ohio called "herpes", true or false?  '
    var correctAnswerThree = falseA
    var incorrectAnswerThree = trueA
    
    document.getElementById('questionNo').innerHTML = ' Question 3'
    document.getElementById('question').innerHTML = questionThree
    
    document.getElementById('answerOptionOneLabel').innerHTML = trueA
    document.getElementById('answerOptionOne').value = incorrectAnswerThree
    sessionStorage.setItem('incorrectAnswerThree', incorrectAnswerThree)
    
    document.getElementById('answerOptionTwoLabel').innerHTML = falseA
    document.getElementById('answerOptionTwo').value = correctAnswerThree
    sessionStorage.setItem('correctAnswerThree', correctAnswerThree)

    };
    
    function getQuestionThreeAnswer(){ 
    
        if(document.getElementById("answerOptionOne").checked){
            var playerChoice =  sessionStorage.getItem('incorrectAnswerThree')
        } else if(document.getElementById("answerOptionTwo").checked){
            playerChoice = sessionStorage.getItem('correctAnswerThree')
        } sessionStorage.setItem('playerChoice', playerChoice)
    
    };
    
    function questionThreeResponse() {
    
        var playerChoiceA = sessionStorage.getItem('playerChoice')
        var correctAnswerThreeA = sessionStorage.getItem('correctAnswerThree')
        var incorrectAnswerThreeA = sessionStorage.getItem('incorrectAnswerThree')
        
        sessionStorage.setItem('playerChoiceA', playerChoiceA)
        sessionStorage.setItem('correctAnswerThreeA', correctAnswerThreeA)
        sessionStorage.setItem('incorrectAnswerThreeA', incorrectAnswerThreeA)
        
       
        document.getElementById('correctAnswer').innerHTML = 'False, there is NO town in Ohio call "Herpes".' 
    
    
    if(sessionStorage.getItem('playerChoice')== correctAnswerThreeA){
    
        document.getElementById('rightOrWrongThree').innerHTML = 'Right Answer'
        document.getElementById('penalityOrRewardThree').innerHTML = shot
    
    }
    else if(sessionStorage.getItem('playerChoice') == incorrectAnswerThreeA){
        
        document.getElementById('rightOrWrongThree').innerHTML = 'Wrong Answer'
        document.getElementById('penalityOrRewardThree').innerHTML = graveDigger
    }  
    
    };
    
 
//Question Four

var knees  = 'Knees'
var ankles = 'Ankles'

function askQuestionFour(){
   
    var radioBtn = document.getElementById("answerOptionThree");
    radioBtn.style.display = "none";
    var radioBtnA = document.getElementById("answerOptionFour");
    radioBtnA.style.display = "none";

    var fourthPlayer = nameArray[3];
    nameArray.splice(3,1)
    var questionFour = fourthPlayer + ', where do Flamingos bend their legs, knees or ankles?'
    
    document.getElementById('questionNo').innerHTML = ' Question 4'
    document.getElementById('question').innerHTML = questionFour
    
    document.getElementById('answerOptionOneLabel').innerHTML = knees
    document.getElementById('answerOptionOne').value = knees
    sessionStorage.setItem('knees', knees)
    
    document.getElementById('answerOptionTwoLabel').innerHTML = ankles
    document.getElementById('answerOptionTwo').value = ankles
    sessionStorage.setItem('ankles', ankles)
    
    };
      
    function getQuestionFourAnswer(){ 
    
        if(document.getElementById("answerOptionOne").checked){
            var playerChoice =  sessionStorage.getItem('knees')
        } else if(document.getElementById("answerOptionTwo").checked){
            playerChoice = sessionStorage.getItem('ankles')
        } sessionStorage.setItem('playerChoice', playerChoice)
    
    };
    
    function questionFourResponse() {
    
        var playerChoiceA = sessionStorage.getItem('playerChoice')
        var correctAnswerOneA = sessionStorage.getItem('ankles')
        var incorrectAnswerOneA = sessionStorage.getItem('knees')
        
        sessionStorage.setItem('playerChoiceA', playerChoiceA)
        sessionStorage.setItem('ankles', ankles)
        sessionStorage.setItem('knees', knees)
        
       
        document.getElementById('correctAnswer').innerHTML = 'Flamingos bend at the ankles' 
    
    
    if(sessionStorage.getItem('playerChoice') == correctAnswerOneA) {
    
        document.getElementById('rightOrWrongFour').innerHTML = 'Right Answer'
        document.getElementById('penalityOrRewardFour').innerHTML = compliments
    
    }
    else if(sessionStorage.getItem('playerChoice') == incorrectAnswerOneA){
        
        document.getElementById('rightOrWrongFour').innerHTML = 'Wrong Answer'
        document.getElementById('penalityOrRewardFour').innerHTML = icyUnderwear
    }  
    
    };
    
   
//Question Five 

function askQuestionFive(){
   
    var eleven = '11'
    var sixteen = '16'
    var twenty = '20' 
    var fortyFive = '45'

    var secondPlayer = nameArray[0]
    nameArray.splice(0,1)
    var questionFive = secondPlayer + ', how old was the inventor of Ice pops?'
    
    document.getElementById('questionNo').innerHTML = ' Question 5'
    document.getElementById('question').innerHTML = questionFive
    
    document.getElementById('answerOptionOneLabel').innerHTML = eleven
    document.getElementById('answerOptionOne').value = eleven
    sessionStorage.setItem('eleven', eleven)
    
    document.getElementById('answerOptionTwoLabel').innerHTML = sixteen
    document.getElementById('answerOptionTwo').value = sixteen 
    sessionStorage.setItem('sixteen', sixteen)
    
    document.getElementById('answerOptionThreeLabel').innerHTML = twenty
    document.getElementById('answerOptionThree').value = twenty
    sessionStorage.setItem('twenty', twenty)
    
    document.getElementById('answerOptionFourLabel').innerHTML = fortyFive
    document.getElementById('answerOptionFour').value = fortyFive 
    sessionStorage.setItem('fortyFive', fortyFive)
    

    };
      
    function getQuestionFiveAnswer(){ 
    
        if(document.getElementById("answerOptionOne").checked){
            var playerChoice =  sessionStorage.getItem('eleven')
        } else if(document.getElementById("answerOptionTwo").checked){
            playerChoice = sessionStorage.getItem('sixteen')
        } else if(document.getElementById("answerOptionThree").checked){
            playerChoice = sessionStorage.getItem('twenty')
        } else if(document.getElementById("answerOptionFour").checked){
            playerChoice = sessionStorage.getItem('fortyFive')
        } sessionStorage.setItem('playerChoice', playerChoice)
    };
    
    function questionFiveResponse() {
    
       
        var correctAnswerOneA = sessionStorage.getItem('eleven')
        var incorrectAnswerOneA = sessionStorage.getItem('sixteen')
        var incorrectAnswerOneB = sessionStorage.getItem('twenty')
        var incorrectAnswerOneC = sessionStorage.getItem('fortyFive')
        
        
      
       
        document.getElementById('correctAnswer').innerHTML = 'The invention of ice pops in 1905, also known as popsicles, is credited to Frank Epperson. He was just 11. '
    
    
    if(sessionStorage.getItem('playerChoice') == correctAnswerOneA ) {
    
        document.getElementById('rightOrWrongFive').innerHTML = 'Right Answer'
        document.getElementById('penalityOrRewardFive').innerHTML = monarchy
    
    }
    else if(sessionStorage.getItem('playerChoice') == incorrectAnswerOneA){
        
        document.getElementById('rightOrWrongFive').innerHTML = 'Wrong Answer'
        document.getElementById('penalityOrRewardFive').innerHTML = foodFight
    }  
    else if(sessionStorage.getItem('playerChoice')== incorrectAnswerOneB){
        
        document.getElementById('rightOrWrongFive').innerHTML = 'Wrong Answer'
        document.getElementById('penalityOrRewardFive').innerHTML = foodFight
     } else if(sessionStorage.getItem('playerChoice')== incorrectAnswerOneC){
        
            document.getElementById('rightOrWrongFive').innerHTML = 'Wrong Answer'
            document.getElementById('penalityOrRewardFive').innerHTML = foodFight

    };};



//Question Six

function askQuestionSix(){
   
    var radioBtnA = document.getElementById("answerOptionFour");
    radioBtnA.style.display = "none";


    var insulation = 'Insulation '
    var wallpaper = 'Wallpaper'
    var tolietPaper = 'Toliet Paper'


    var thirdPlayer = nameArray[1]
    nameArray.splice(1,1)
    var questionSix = thirdPlayer + ', what was the original purpose of bubble wrap?'
    
    document.getElementById('questionNo').innerHTML = ' Question 6'
    document.getElementById('question').innerHTML = questionSix
    
    document.getElementById('answerOptionOneLabel').innerHTML = insulation
    document.getElementById('answerOptionOne').value = insulation
    sessionStorage.setItem('insulation', insulation)
    
    document.getElementById('answerOptionTwoLabel').innerHTML = wallpaper
    document.getElementById('answerOptionTwo').value = wallpaper
    sessionStorage.setItem('wallpaper', wallpaper)
    
    document.getElementById('answerOptionThreeLabel').innerHTML = tolietPaper
    document.getElementById('answerOptionThree').value = tolietPaper
    sessionStorage.setItem('tolietPaper', tolietPaper)
    

    };
      
    function getQuestionSixAnswer(){ 
    
        if(document.getElementById("answerOptionOne").checked){
            var playerChoiceSix =  sessionStorage.getItem('insulation')
            sessionStorage.setItem('playerChoiceSix' ,playerChoiceSix)
        } else if(document.getElementById("answerOptionTwo").checked){
            playerChoiceSix = sessionStorage.getItem('wallpaper')
            sessionStorage.setItem('playerChoiceSix' ,playerChoiceSix)
        } else if(document.getElementById("answerOptionThree").checked){
            playerChoiceSix = sessionStorage.getItem('tolietPaper')
            sessionStorage.setItem('playerChoiceSix' ,playerChoiceSix)
        } 
    };
    
    function questionSixResponse() {
    
       
        var correctAnswerSixA = sessionStorage.getItem('wallpaper')
        var incorrectAnswerSixA = sessionStorage.getItem('insulation')
        var incorrectAnswerSixB = sessionStorage.getItem('tolietPaper')
       
        document.getElementById('correctAnswer').innerHTML = 'The original purpose of bubblewrap was to be used as wallpaper. '
    
    
    if(sessionStorage.getItem('playerChoiceSix') == correctAnswerSixA ) {
    
        document.getElementById('rightOrWrongSix').innerHTML = 'Right Answer'
        document.getElementById('penalityOrRewardSix').innerHTML = oneLeg
    
    }
    else if(sessionStorage.getItem('playerChoiceSix') == incorrectAnswerSixA){
        
        document.getElementById('rightOrWrongSix').innerHTML = 'Wrong Answer'
        document.getElementById('penalityOrRewardSix').innerHTML = poser
    }  
    else if(sessionStorage.getItem('playerChoiceSix')== incorrectAnswerSixB){
        
        document.getElementById('rightOrWrongSix').innerHTML = 'Wrong Answer'
        document.getElementById('penalityOrRewardSix').innerHTML = poser
     } 
    };

//Question Seven

function askQuestionSeven(){
   
var yearOne = '1889'
var yearTwo = '1992'
var yearThree = '1984'
var yearFour = '1952'


    var thirdPlayer = nameArray[2]
    nameArray.splice(2,1)
    var questionSeven = thirdPlayer + ', what year was Nintendo founded?'
    
    document.getElementById('questionNo').innerHTML = ' Question 7'
    document.getElementById('question').innerHTML = questionSeven
    
    document.getElementById('answerOptionOneLabel').innerHTML = yearTwo
    document.getElementById('answerOptionOne').value = yearTwo
    sessionStorage.setItem('yearTwo', yearTwo)
    
    document.getElementById('answerOptionTwoLabel').innerHTML = yearThree
    document.getElementById('answerOptionTwo').value = yearThree
    sessionStorage.setItem('yearThree', yearThree)
    
    document.getElementById('answerOptionThreeLabel').innerHTML = yearFour
    document.getElementById('answerOptionThree').value = yearFour
    sessionStorage.setItem('yearFour', yearFour)
    
    document.getElementById('answerOptionFourLabel').innerHTML = yearOne
    document.getElementById('answerOptionFour').value = yearOne
    sessionStorage.setItem('yearOne', yearOne)

    };
      
    function getQuestionSevenAnswer(){ 
    
        if(document.getElementById("answerOptionOne").checked){
            var playerChoiceSeven =  sessionStorage.getItem('yearOne')
            sessionStorage.setItem('playerChoiceSeven' ,playerChoiceSeven)
        } else if(document.getElementById("answerOptionTwo").checked){
            playerChoiceSeven = sessionStorage.getItem('yearTwo')
            sessionStorage.setItem('playerChoiceSeven' ,playerChoiceSeven)
        } else if(document.getElementById("answerOptionThree").checked){
            playerChoiceSeven = sessionStorage.getItem('yearThree')
            sessionStorage.setItem('playerChoiceSeven' ,playerChoiceSeven)
        } else if(document.getElementById("answerOptionFour").checked){
            playerChoiceSeven = sessionStorage.getItem('yearFour')
            sessionStorage.setItem('playerChoiceSeven' ,playerChoiceSeven)
        } 
    };
    
    function questionSevenResponse() {
    
       
        var correctAnswerSevenA = sessionStorage.getItem('yearFour')
        var incorrectAnswerSevenA = sessionStorage.getItem('yearThree')
        var incorrectAnswerSevenB = sessionStorage.getItem('yearTwo')
        var incorrectAnswerSevenC = sessionStorage.getItem('yearOne')
      
        document.getElementById('correctAnswer').innerHTML = 'Nintendo was founded on the 23rd of September 1889. '
    
    
    if(sessionStorage.getItem('playerChoiceSeven') == correctAnswerSevenA ) {
    
        document.getElementById('rightOrWrongSeven').innerHTML = 'Right Answer'
        document.getElementById('penalityOrRewardSeven').innerHTML = rockPaperScissors
    
    }
    else if(sessionStorage.getItem('playerChoiceSeven') == incorrectAnswerSevenA){
        
        document.getElementById('rightOrWrongSeven').innerHTML = 'Wrong Answer'
        document.getElementById('penalityOrRewardSeven').innerHTML = magicMike
    }  
    else if(sessionStorage.getItem('playerChoiceSeven')== incorrectAnswerSevenB){
        
        document.getElementById('rightOrWrongSeven').innerHTML = 'Wrong Answer'
        document.getElementById('penalityOrRewardSeven').innerHTML = magicMike
     }  else if(sessionStorage.getItem('playerChoiceSeven')== incorrectAnswerSevenC){
        
        document.getElementById('rightOrWrongSeven').innerHTML = 'Wrong Answer'
        document.getElementById('penalityOrRewardSeven').innerHTML = magicMike
     } 
    };

//Question Eight 

function askQuestionEight(){
    

    var radioBtn = document.getElementById("answerOptionThree");
    radioBtn.style.display = "none";
    var radioBtnA = document.getElementById("answerOptionFour");
    radioBtnA.style.display = "none";



var fourthPlayer = nameArray[3];
nameArray.splice(3,1)
var questionEight = fourthPlayer + ', before it was banned in 1921, women’s football drew more crowds than men, true or false?'
var correctAnswerEight = trueA
var incorrectAnswerEight = falseA

document.getElementById('questionNo').innerHTML = ' Question 8'
document.getElementById('question').innerHTML = questionEight

document.getElementById('answerOptionOneLabel').innerHTML = correctAnswerEight
document.getElementById('answerOptionOne').value = correctAnswerEight
sessionStorage.setItem('correctAnswerEight', correctAnswerEight)

document.getElementById('answerOptionTwoLabel').innerHTML = incorrectAnswerEight
document.getElementById('answerOptionTwo').value = incorrectAnswerEight
sessionStorage.setItem('incorrectAnswerEight', incorrectAnswerEight)

};

function getQuestionEightAnswer(){ 

    if(document.getElementById("answerOptionOne").checked){
        var playerChoiceEight =  sessionStorage.getItem('correctAnswerEight')
    } else if(document.getElementById("answerOptionTwo").checked){
        playerChoiceEight = sessionStorage.getItem('incorrectAnswerEight')
    } sessionStorage.setItem('playerChoiceEight', playerChoiceEight)

};

function questionEightResponse() {

    var playerChoiceEightA = sessionStorage.getItem('playerChoiceEight')
    var correctAnswerEightA = sessionStorage.getItem('correctAnswerEight')
    var incorrectAnswerEightA = sessionStorage.getItem('incorrectAnswerEight')
    
    sessionStorage.setItem('playerChoiceEightA', playerChoiceEightA)
    sessionStorage.setItem('correctAnswerEightA', correctAnswerEightA)
    sessionStorage.setItem('incorrectAnswerEightA', incorrectAnswerEightA)
    
   
    document.getElementById('correctAnswer').innerHTML = 'True, women’s football did draw more crowds than men football.' 


if(sessionStorage.getItem('playerChoiceEight') == correctAnswerEightA){

    document.getElementById('rightOrWrongEight').innerHTML = 'Right Answer!'
    document.getElementById('penalityOrRewardEight').innerHTML = hugger

}
else if(sessionStorage.getItem('playerChoiceEight')== incorrectAnswerEightA){
    
    document.getElementById('rightOrWrongEight').innerHTML = 'Wrong Answer!'
    document.getElementById('penalityOrRewardEight').innerHTML = dmSlider
}  

};

//Question Nine

function askQuestionNine(){
    

    var radioBtn = document.getElementById("answerOptionThree");
    radioBtn.style.display = "none";
    var radioBtnA = document.getElementById("answerOptionFour");
    radioBtnA.style.display = "none";



var firstPlayer = nameArray[0];
nameArray.splice(0,1)
var questionNine = firstPlayer + ', pigs don’t sweat. True or False?'
var correctAnswerNine = trueA
var incorrectAnswerNine = falseA

document.getElementById('questionNo').innerHTML = ' Question 9'
document.getElementById('question').innerHTML = questionNine

document.getElementById('answerOptionOneLabel').innerHTML = correctAnswerNine
document.getElementById('answerOptionOne').value = correctAnswerNine
sessionStorage.setItem('correctAnswerNine', correctAnswerNine)

document.getElementById('answerOptionTwoLabel').innerHTML = incorrectAnswerNine
document.getElementById('answerOptionTwo').value = incorrectAnswerNine
sessionStorage.setItem('incorrectAnswerNine', incorrectAnswerNine)

};

function getQuestionNineAnswer(){ 

    if(document.getElementById("answerOptionOne").checked){
        var playerChoiceNine =  sessionStorage.getItem('correctAnswerNine')
        sessionStorage.setItem('playerNineChoice', playerChoiceNine)
    } else if(document.getElementById("answerOptionTwo").checked){
        playerChoiceNine = sessionStorage.getItem('incorrectAnswerEight')
    } sessionStorage.setItem('playerChoiceNine', playerChoiceNine)

};

function questionNineResponse() {

    var playerChoiceNineA = sessionStorage.getItem('playerChoiceNine')
    var correctAnswerNineA = sessionStorage.getItem('correctAnswerNine')
    var incorrectAnswerNineA = sessionStorage.getItem('incorrectAnswerNine')
    
    sessionStorage.setItem('playerChoiceNineA', playerChoiceNineA)
    sessionStorage.setItem('correctAnswerNineA', correctAnswerNineA)
    sessionStorage.setItem('incorrectAnswerNineA', incorrectAnswerNineA)
    
   
    document.getElementById('correctAnswer').innerHTML = 'True, pigs do not sweat.' 


if(sessionStorage.getItem('playerChoiceNine') == correctAnswerNineA){

    document.getElementById('rightOrWrongNine').innerHTML = 'Right Answer!'
    document.getElementById('penalityOrRewardNine').innerHTML = footInspector

}
else if(sessionStorage.getItem('playerChoiceNine')== incorrectAnswerNineA){
    
    document.getElementById('rightOrWrongNine').innerHTML = 'Wrong Answer!'
    document.getElementById('penalityOrRewardNine').innerHTML = chinesePizza
}  

};

//Question Ten

function askQuestionTen(){
   
    var radioBtnA = document.getElementById("answerOptionFour");
    radioBtnA.style.display = "none";


    var pG = 'Proctor & Gamble'
    var unilever = 'unilever'
    var cocaCola = 'Coca Cola' 


    var secondPlayer = nameArray[1]
    nameArray.splice(1,1)
    var questionTen = secondPlayer + ', the longest commercial in history was produced by what company? '
    
    document.getElementById('questionNo').innerHTML = ' Question 10'
    document.getElementById('question').innerHTML = questionTen
    
    document.getElementById('answerOptionOneLabel').innerHTML = cocaCola
    document.getElementById('answerOptionOne').value = cocaCola
    sessionStorage.setItem('cocaCola', cocaCola)
    
    document.getElementById('answerOptionTwoLabel').innerHTML = unilever
    document.getElementById('answerOptionTwo').value = unilever
    sessionStorage.setItem('unilever', unilever)
    
    document.getElementById('answerOptionThreeLabel').innerHTML = pG
    document.getElementById('answerOptionThree').value = pG
    sessionStorage.setItem('pG', pG)
    

    };
      
    function getQuestionTenAnswer(){ 
    
        if(document.getElementById("answerOptionOne").checked){
            var playerChoiceTen =  sessionStorage.getItem('cocaCola')
            sessionStorage.setItem('playerChoiceTen' ,playerChoiceTen)
        } else if(document.getElementById("answerOptionTwo").checked){
            playerChoiceTen = sessionStorage.getItem('unilever')
            sessionStorage.setItem('playerChoiceTen' ,playerChoiceTen)
        } else if(document.getElementById("answerOptionThree").checked){
            playerChoiceTen = sessionStorage.getItem('pG')
            sessionStorage.setItem('playerChoiceTen' ,playerChoiceTen)
        } 
    };
    
    function questionTenResponse() {
    
       
        var correctAnswerTenA = sessionStorage.getItem('pG')
        var incorrectAnswerTenA = sessionStorage.getItem('cocaCola')
        var incorrectAnswerTenB = sessionStorage.getItem('unilever')
       
        document.getElementById('correctAnswer').innerHTML = 'The longest TV commercial by duration was 14 hours long, and was produced by Procter & Gamble (Brazil), promoting Old Spice Deodorant, and aired in São Paulo, São Paulo, Brazil, on 8 December 2018.'
    
    
    if(sessionStorage.getItem('playerChoiceTen') == correctAnswerTenA ) {
    
        document.getElementById('rightOrWrongTen').innerHTML = 'Right Answer'
        document.getElementById('penalityOrRewardTen').innerHTML = improvTime
    
    }
    else if(sessionStorage.getItem('playerChoiceTen') == incorrectAnswerTenA){
        
        document.getElementById('rightOrWrongTen').innerHTML = 'Wrong Answer'
        document.getElementById('penalityOrRewardTen').innerHTML = aShitDescription
    }  
    else if(sessionStorage.getItem('playerChoiceTen')== incorrectAnswerTenB){
        
        document.getElementById('rightOrWrongTen').innerHTML = 'Wrong Answer'
        document.getElementById('penalityOrRewardTen').innerHTML = aShitDescription
     } 
    };

//Question Eleven 


function askQuestionEleven(){
   
    var radioBtnA = document.getElementById("answerOptionFour");
    radioBtnA.style.display = "none";


   var twoHearts = '2'
   var threeHearts = '3'
   var fourHearts = '4'


    var thirdPlayer = nameArray[2]
    nameArray.splice(2,1)
    var questionEleven = thirdPlayer + ', how many hearts does an octopus have? '
    
    document.getElementById('questionNo').innerHTML = ' Question 11'
    document.getElementById('question').innerHTML = questionEleven
    
    document.getElementById('answerOptionOneLabel').innerHTML = twoHearts
    document.getElementById('answerOptionOne').value = twoHearts
    sessionStorage.setItem('twoHearts', twoHearts)
    
    document.getElementById('answerOptionTwoLabel').innerHTML = threeHearts
    document.getElementById('answerOptionTwo').value = threeHearts
    sessionStorage.setItem('threeHearts', threeHearts)
    
    document.getElementById('answerOptionThreeLabel').innerHTML = fourHearts
    document.getElementById('answerOptionThree').value = fourHearts
    sessionStorage.setItem('fourHearts', fourHearts)
    

    };
      
    function getQuestionElevenAnswer(){ 
    
        if(document.getElementById("answerOptionOne").checked){
            var playerChoiceEleven =  sessionStorage.getItem('twoHearts')
            sessionStorage.setItem('playerChoiceEleven' ,playerChoiceEleven)
        } else if(document.getElementById("answerOptionTwo").checked){
            playerChoiceEleven = sessionStorage.getItem('threeHearts')
            sessionStorage.setItem('playerChoiceEleven' ,playerChoiceEleven)
        } else if(document.getElementById("answerOptionThree").checked){
            playerChoiceEleven = sessionStorage.getItem('fourHearts')
            sessionStorage.setItem('playerChoiceEleven',playerChoiceEleven)
        } 
    };
    
    function questionElevenResponse() {
    
       
        var correctAnswerElevenA = sessionStorage.getItem('threeHearts')
        var incorrectAnswerElevenA = sessionStorage.getItem('twoHearts')
        var incorrectAnswerElevenB = sessionStorage.getItem('fourHearts')
       
        document.getElementById('correctAnswer').innerHTML = 'Octopuses have 3 hearts.'
    
    
    if(sessionStorage.getItem('playerChoiceEleven') == correctAnswerElevenA ) {
    
        document.getElementById('rightOrWrongEleven').innerHTML = 'Right Answer'
        document.getElementById('penalityOrRewardEleven').innerHTML = andTheyStayThere
    
    }
    else if(sessionStorage.getItem('playerChoiceEleven') == incorrectAnswerElevenA){
        
        document.getElementById('rightOrWrongEleven').innerHTML = 'Wrong Answer'
        document.getElementById('penalityOrRewardEleven').innerHTML = groupCat
    }  
    else if(sessionStorage.getItem('playerChoiceEleven')== incorrectAnswerElevenB){
        
        document.getElementById('rightOrWrongEleven').innerHTML = 'Wrong Answer'
        document.getElementById('penalityOrRewardEleven').innerHTML = groupCat
     } 
    };

//Question Twelve 


function askQuestionTwelve(){
   
    var radioBtnA = document.getElementById("answerOptionFour");
    radioBtnA.style.display = "none";

    var schubertDoo = 'Schubert Doo'
    var scoobertDoo = 'Scoobert Doo'
    var scooterDoo = 'Scooter Doo' 

    var fourthPlayer = nameArray[3]
    nameArray.splice(3,1)
    var questionTwelve = fourthPlayer + ', what is the full name of the fictional character Scooby-Doo?'
    
    document.getElementById('questionNo').innerHTML = ' Question 12'
    document.getElementById('question').innerHTML = questionTwelve
    
    document.getElementById('answerOptionOneLabel').innerHTML = schubertDoo
    document.getElementById('answerOptionOne').value = schubertDoo
    sessionStorage.setItem('schubertDoo', schubertDoo)
    
    document.getElementById('answerOptionTwoLabel').innerHTML = scoobertDoo
    document.getElementById('answerOptionTwo').value = scoobertDoo
    sessionStorage.setItem('scoobertDoo', scoobertDoo)
    
    document.getElementById('answerOptionThreeLabel').innerHTML = scooterDoo
    document.getElementById('answerOptionThree').value = scooterDoo
    sessionStorage.setItem('scooterDoo', scooterDoo)
    

    };
      
    function getQuestionTwelveAnswer(){ 
    
        if(document.getElementById("answerOptionOne").checked){
            var playerChoiceTwelve =  sessionStorage.getItem('schubertDoo')
            sessionStorage.setItem('playerChoiceTwelve' ,playerChoiceTwelve)
        } else if(document.getElementById("answerOptionTwo").checked){
            playerChoiceTwelve = sessionStorage.getItem('scoobertDoo')
            sessionStorage.setItem('playerChoiceTwelve' ,playerChoiceTwelve)
        } else if(document.getElementById("answerOptionThree").checked){
            playerChoiceTwelve = sessionStorage.getItem('scooterDoo')
            sessionStorage.setItem('playerChoiceTwelve',playerChoiceTwelve)
        } 
    };
    
    function questionTwelveResponse() {
    
       
        var correctAnswerTwelveA = sessionStorage.getItem('scoobertDoo')
        var incorrectAnswerTwelveA = sessionStorage.getItem('schubertDoo')
        var incorrectAnswerTwelveB = sessionStorage.getItem('scooterDoo')
       
        document.getElementById('correctAnswer').innerHTML = 'The full name of Scooby Doo is Scoobert Doo.'
    
    
    if(sessionStorage.getItem('playerChoiceTwelve') == correctAnswerTwelveA ) {
    
        document.getElementById('rightOrWrongTwelve').innerHTML = 'Right Answer'
        document.getElementById('penalityOrRewardTwelve').innerHTML = feeder
    
    }
    else if(sessionStorage.getItem('playerChoiceTwelve') == incorrectAnswerTwelveA){
        
        document.getElementById('rightOrWrongTwelve').innerHTML = 'Wrong Answer'
        document.getElementById('penalityOrRewardTwelve').innerHTML = improvMonologueOne }
    else if(sessionStorage.getItem('playerChoiceTwelve')== incorrectAnswerTwelveB){
        
        document.getElementById('rightOrWrongTwelve').innerHTML = 'Wrong Answer'
        document.getElementById('penalityOrRewardTwelve').innerHTML = improvMonologueOne 
     } 
    };

//Question Thirteen


function askQuestionThirteen(){
    

    var radioBtn = document.getElementById("answerOptionThree");
    radioBtn.style.display = "none";
    var radioBtnA = document.getElementById("answerOptionFour");
    radioBtnA.style.display = "none";


var firstPlayer = nameArray[0];
nameArray.splice(0,1)
var questionThirteen = firstPlayer + ', it has never snowed in the Sahara desert, true or false? '
var correctAnswerThirteen = falseA
var incorrectAnswerThirteen = trueA

document.getElementById('questionNo').innerHTML = ' Question 13'
document.getElementById('question').innerHTML = questionThirteen

document.getElementById('answerOptionOneLabel').innerHTML = trueA
document.getElementById('answerOptionOne').value = incorrectAnswerThirteen
sessionStorage.setItem('incorrectAnswerThirteen', incorrectAnswerThirteen)

document.getElementById('answerOptionTwoLabel').innerHTML = falseA
document.getElementById('answerOptionTwo').value = correctAnswerThirteen
sessionStorage.setItem('correctAnswerThirteen', correctAnswerThirteen)

};

function getQuestionThirteenAnswer(){ 

    if(document.getElementById("answerOptionOne").checked){
        var playerChoiceThirteen =  sessionStorage.getItem('incorrectAnswerThirteen')
        sessionStorage.setItem('playerThirteenChoice', playerChoiceThirteen)
    } else if(document.getElementById("answerOptionTwo").checked){
        playerChoiceThirteen = sessionStorage.getItem('correctAnswerThirteen')
    } sessionStorage.setItem('playerChoiceThirteen', playerChoiceThirteen)

};

function questionThirteenResponse() {

    var playerChoiceThirteenA = sessionStorage.getItem('playerChoiceThirteen')
    var correctAnswerThirteenA = sessionStorage.getItem('correctAnswerThirteen')
    var incorrectAnswerThirteenA = sessionStorage.getItem('incorrectAnswerThirteen')
    
    sessionStorage.setItem('playerChoiceThirteenA', playerChoiceThirteenA)
    sessionStorage.setItem('correctAnswerThirteenA', correctAnswerThirteenA)
    sessionStorage.setItem('incorrectAnswerThirteenA', incorrectAnswerThirteenA)
    
   
    document.getElementById('correctAnswer').innerHTML = ' False, it snowed in the Sahara for 30 minutes on 18th February 1979' 

if(sessionStorage.getItem('playerChoiceThirteen') == correctAnswerThirteenA){

    document.getElementById('rightOrWrongThirteen').innerHTML = 'Right Answer!'
    document.getElementById('penalityOrRewardThirteen').innerHTML = nipples

}
else if(sessionStorage.getItem('playerChoiceThirteen') == incorrectAnswerThirteenA){
    
    document.getElementById('rightOrWrongThirteen').innerHTML = 'Wrong Answer!'
    document.getElementById('penalityOrRewardThirteen').innerHTML = impressionTimeOne
}  

};

//Question Fourteen


function askQuestionFourteen(){
   
    var radioBtnA = document.getElementById("answerOptionFour");
    radioBtnA.style.display = "none";

    var toiletPaper = 'Toilet Paper'
    var number13 = 'The number 13'
    var letterY = 'The letter Y' 

    var secondPlayer = nameArray[1]
    nameArray.splice(1,1)
    var questionFourteen = secondPlayer + ', if you have triskaidekaphobia, you have a fear for what?'

    
    document.getElementById('questionNo').innerHTML = ' Question 14'
    document.getElementById('question').innerHTML = questionFourteen
    
    document.getElementById('answerOptionOneLabel').innerHTML = toiletPaper
    document.getElementById('answerOptionOne').value = toiletPaper
    sessionStorage.setItem('toiletPaper', toiletPaper)
    
    document.getElementById('answerOptionTwoLabel').innerHTML = number13
    document.getElementById('answerOptionTwo').value = number13
    sessionStorage.setItem('number13', number13)
    
    document.getElementById('answerOptionThreeLabel').innerHTML = letterY
    document.getElementById('answerOptionThree').value = letterY
    sessionStorage.setItem('letterY', letterY)
    

    };
      
    function getQuestionFourteenAnswer(){ 
    
        if(document.getElementById("answerOptionOne").checked){
            var playerChoiceFourteen =  sessionStorage.getItem('toiletPaper')
            sessionStorage.setItem('playerChoiceFourteen' ,playerChoiceFourteen)
        } else if(document.getElementById("answerOptionTwo").checked){
            playerChoiceFourteen = sessionStorage.getItem('number13')
            sessionStorage.setItem('playerChoiceFourteen' ,playerChoiceFourteen)
        } else if(document.getElementById("answerOptionThree").checked){
            playerChoiceFourteen = sessionStorage.getItem('letterY')
            sessionStorage.setItem('playerChoiceFourteen',playerChoiceFourteen)
        } 
    };
    
    function questionFourteenResponse() {
    
       
        var correctAnswerFourteenA = sessionStorage.getItem('number13')
        var incorrectAnswerFourteenA = sessionStorage.getItem('toiletPaper')
        var incorrectAnswerFourteenB = sessionStorage.getItem('letterY')
       
        document.getElementById('correctAnswer').innerHTML = ' Triskaidekaphobia is the fear of the number 13 '
    
    
    if(sessionStorage.getItem('playerChoiceFourteen') == correctAnswerFourteenA ) {
    
        document.getElementById('rightOrWrongFourteen').innerHTML = 'Right Answer'
        document.getElementById('penalityOrRewardFourteen').innerHTML = improvMonologueTwo
    
    }
    else if(sessionStorage.getItem('playerChoiceFourteen') == incorrectAnswerFourteenA){
        
        document.getElementById('rightOrWrongFourteen').innerHTML = 'Wrong Answer'
        document.getElementById('penalityOrRewardFourteen').innerHTML = socialMediaOne }
    else if(sessionStorage.getItem('playerChoiceFourteen')== incorrectAnswerFourteenB){
        
        document.getElementById('rightOrWrongFourteen').innerHTML = 'Wrong Answer'
        document.getElementById('penalityOrRewardFourteen').innerHTML = socialMediaOne
     } 
    };

//Question Fifteen 


function askQuestionFifteen(){
    

    var radioBtn = document.getElementById("answerOptionThree");
    radioBtn.style.display = "none";
    var radioBtnA = document.getElementById("answerOptionFour");
    radioBtnA.style.display = "none";


var fourthPlayer = nameArray[2];
nameArray.splice(2,1)
var questionFifteen = fourthPlayer + " , New Zealand's Ninety Mile Beach is 90 miles long?"
 
var correctAnswerFifteen = falseA
var incorrectAnswerFifteen = trueA

document.getElementById('questionNo').innerHTML = ' Question 15'
document.getElementById('question').innerHTML = questionFifteen

document.getElementById('answerOptionOneLabel').innerHTML = incorrectAnswerFifteen
document.getElementById('answerOptionOne').value = incorrectAnswerFifteen
sessionStorage.setItem('incorrectAnswerFifteen', incorrectAnswerFifteen)

document.getElementById('answerOptionTwoLabel').innerHTML = correctAnswerFifteen
document.getElementById('answerOptionTwo').value = correctAnswerFifteen
sessionStorage.setItem('correctAnswerFifteen', correctAnswerFifteen)

};

function getQuestionFifteenAnswer(){ 

    if(document.getElementById("answerOptionOne").checked){
        var playerChoiceFifteen =  sessionStorage.getItem('incorrectAnswerFifteen')
        sessionStorage.setItem('playerFifteenChoice', playerChoiceFifteen)
    } else if(document.getElementById("answerOptionTwo").checked){
        playerChoiceFifteen = sessionStorage.getItem('correctAnswerFifteen')
    } sessionStorage.setItem('playerChoiceFifteen', playerChoiceFifteen)

};

function questionFifteenResponse() {

    var playerChoiceFifteenA = sessionStorage.getItem('playerChoiceFifteen')
    var correctAnswerFifteenA = sessionStorage.getItem('correctAnswerFifteen')
    var incorrectAnswerFifteenA = sessionStorage.getItem('incorrectAnswerFifteen')
    
    sessionStorage.setItem('playerChoiceFifteenA', playerChoiceFifteenA)
    sessionStorage.setItem('correctAnswerFifteenA', correctAnswerFifteenA)
    sessionStorage.setItem('incorrectAnswerFifteenA', incorrectAnswerFifteenA)
    
   
    document.getElementById('correctAnswer').innerHTML = ' False, it is 55 miles long.'

if(sessionStorage.getItem('playerChoiceFifteen') == correctAnswerFifteenA){

    document.getElementById('rightOrWrongFifteen').innerHTML = 'Right Answer!'
    document.getElementById('penalityOrRewardFifteen').innerHTML = blindfold

}
else if(sessionStorage.getItem('playerChoiceFifteen')== incorrectAnswerFifteenA){
    
    document.getElementById('rightOrWrongFifteen').innerHTML = 'Wrong Answer!'
    document.getElementById('penalityOrRewardFifteen').innerHTML = orgasmImpression
}  

};

//Question Sixteen 


function askQuestionSixteen(){
    

    var radioBtn = document.getElementById("answerOptionThree");
    radioBtn.style.display = "none";
    var radioBtnA = document.getElementById("answerOptionFour");
    radioBtnA.style.display = "none";


var firstPlayer = nameArray[3];
nameArray.splice(3,1)
var questionSixteen = firstPlayer + ', adults have more bones than children, true or false?'

var correctAnswerSixteen = falseA
var incorrectAnswerSixteen = trueA

document.getElementById('questionNo').innerHTML = ' Question 16'
document.getElementById('question').innerHTML = questionSixteen

document.getElementById('answerOptionOneLabel').innerHTML = trueA
document.getElementById('answerOptionOne').value = incorrectAnswerSixteen
sessionStorage.setItem('incorrectAnswerSixteen', incorrectAnswerSixteen)

document.getElementById('answerOptionTwoLabel').innerHTML = falseA
document.getElementById('answerOptionTwo').value = correctAnswerSixteen
sessionStorage.setItem('correctAnswerSixteen', correctAnswerSixteen)

};

function getQuestionSixteenAnswer(){ 

    if(document.getElementById("answerOptionOne").checked){
        var playerChoiceSixteen =  sessionStorage.getItem('correctAnswerSixteen')
        sessionStorage.setItem('playerSixteenChoice', playerChoiceSixteen)
    } else if(document.getElementById("answerOptionTwo").checked){
        playerChoiceSixteen = sessionStorage.getItem('incorrectAnswerSixteen')
    } sessionStorage.setItem('playerChoiceSixteen', playerChoiceSixteen)

};

function questionSixteenResponse() {

    var playerChoiceSixteenA = sessionStorage.getItem('playerChoiceSixteen')
    var correctAnswerSixteenA = sessionStorage.getItem('correctAnswerSixteen')
    var incorrectAnswerSixteenA = sessionStorage.getItem('incorrectAnswerSixteen')
    
    sessionStorage.setItem('playerChoiceSixteenA', playerChoiceSixteenA)
    sessionStorage.setItem('correctAnswerSixteenA', correctAnswerSixteenA)
    sessionStorage.setItem('incorrectAnswerSixteenA', incorrectAnswerSixteenA)
    
   
    document.getElementById('correctAnswer').innerHTML = ' False, some our bones fuse together as we grow into adulthood, meaning that adults have fewer bones than children.'

if(sessionStorage.getItem('playerChoiceSixteen') == correctAnswerSixteenA){

    document.getElementById('rightOrWrongSixteen').innerHTML = 'Right Answer!'
    document.getElementById('penalityOrRewardSixteen').innerHTML = noseholder

}
else if(sessionStorage.getItem('playerChoiceSixteen')== incorrectAnswerSixteenA){
    
    document.getElementById('rightOrWrongSixteen').innerHTML = 'Wrong Answer!'
    document.getElementById('penalityOrRewardSixteen').innerHTML = pickUpLine
}  

};


//Question Seventeen

function askQuestionSeventeen(){
   
    var radioBtnA = document.getElementById("answerOptionFour");
    radioBtnA.style.display = "none";

    var anEmbarrasment = 'An embarassament'
    var aShame = 'A shame '
    var aDisgrace = 'A disgrace'  

    var fourthPlayer = nameArray[0]
    nameArray.splice(0,1)
    var questionSeventeen = fourthPlayer + ', what is the collective noun for a group of pandas?'

    
    document.getElementById('questionNo').innerHTML = ' Question 17'
    document.getElementById('question').innerHTML = questionSeventeen
    
    document.getElementById('answerOptionOneLabel').innerHTML = anEmbarrasment
    document.getElementById('answerOptionOne').value = anEmbarrasment
    sessionStorage.setItem('anEmbarrasment', anEmbarrasment)
    
    document.getElementById('answerOptionTwoLabel').innerHTML = aShame
    document.getElementById('answerOptionTwo').value = aShame
    sessionStorage.setItem('aShame', aShame)
    
    document.getElementById('answerOptionThreeLabel').innerHTML = aDisgrace
    document.getElementById('answerOptionThree').value = aDisgrace
    sessionStorage.setItem('aDisgrace', aDisgrace)
    

    };
      
    function getQuestionSeventeenAnswer(){ 
    
        if(document.getElementById("answerOptionOne").checked){
            var playerChoiceSeventeen =  sessionStorage.getItem('anEmbarrasment')
            sessionStorage.setItem('playerChoiceSeventeen' ,playerChoiceSeventeen)
        } else if(document.getElementById("answerOptionTwo").checked){
            playerChoiceSeventeen = sessionStorage.getItem('aShame')
            sessionStorage.setItem('playerChoiceSeventeen' ,playerChoiceSeventeen)
        } else if(document.getElementById("answerOptionThree").checked){
            playerChoiceSeventeen = sessionStorage.getItem('aDisgrace')
            sessionStorage.setItem('playerChoiceSeventeen',playerChoiceSeventeen)
        } 
    };
    
    function questionSeventeenResponse() {
    
       
        var incorrectAnswerSeventeenA = sessionStorage.getItem('aShame')
        var correctAnswerSeventeenA = sessionStorage.getItem('anEmbarrasment')
        var incorrectAnswerSeventeenB = sessionStorage.getItem('aDisgrace')
       
        document.getElementById('correctAnswer').innerHTML = ' The collective noun for a group of pandas is an embarrasment.'
    
    
    if(sessionStorage.getItem('playerChoiceSeventeen') == correctAnswerSeventeenA ) {
    
        document.getElementById('rightOrWrongSeventeen').innerHTML = 'Right Answer'
        document.getElementById('penalityOrRewardSeventeen').innerHTML = bibleBimbo
        document.getElementById('penalityOrRewardSeventeenA').innerHTML = bibleBimboA
    
    }
    else if(sessionStorage.getItem('playerChoiceSeventeen') == incorrectAnswerSeventeenA){
        
        document.getElementById('rightOrWrongSeventeen').innerHTML = 'Wrong Answer'
        document.getElementById('penalityOrRewardSeventeen').innerHTML = onionApple }
    else if(sessionStorage.getItem('playerChoiceSeventeen')== incorrectAnswerSeventeenB){
        
        document.getElementById('rightOrWrongSeventeen').innerHTML = 'Wrong Answer'
        document.getElementById('penalityOrRewardSeventeen').innerHTML = onionApple
     } 
    };

//Question Eighteen


function askQuestionEighteen(){
   
    var radioBtnA = document.getElementById("answerOptionFour");
    radioBtnA.style.display = "none";

    var penis = 'Penis'
    var asshole = 'Asshole '
    var tongue = 'Tongue' 

    var secondPlayer = nameArray[1]
    nameArray.splice(1,1)
    var questionEighteen = secondPlayer + ', what body part did Gene Simmons insure for $1million?'

    
    document.getElementById('questionNo').innerHTML = ' Question 18'
    document.getElementById('question').innerHTML = questionEighteen
    
    document.getElementById('answerOptionOneLabel').innerHTML = penis
    document.getElementById('answerOptionOne').value = penis
    sessionStorage.setItem('penis', penis)
    
    document.getElementById('answerOptionTwoLabel').innerHTML = asshole
    document.getElementById('answerOptionTwo').value = asshole
    sessionStorage.setItem('asshole', asshole)
    
    document.getElementById('answerOptionThreeLabel').innerHTML = tongue
    document.getElementById('answerOptionThree').value = tongue
    sessionStorage.setItem('tongue', tongue)
    

    };
      
    function getQuestionEighteenAnswer(){ 
    
        if(document.getElementById("answerOptionOne").checked){
            var playerChoiceEighteen =  sessionStorage.getItem('penis')
            sessionStorage.setItem('playerChoiceEighteen' ,playerChoiceEighteen)
        } else if(document.getElementById("answerOptionTwo").checked){
            playerChoiceEighteen = sessionStorage.getItem('asshole')
            sessionStorage.setItem('playerChoiceEighteen' ,playerChoiceEighteen)
        } else if(document.getElementById("answerOptionThree").checked){
            playerChoiceEighteen = sessionStorage.getItem('tongue')
            sessionStorage.setItem('playerChoiceEighteen',playerChoiceEighteen)
        } 
    };
    
    function questionEighteenResponse() {
    
       
        var correctAnswerEighteenA = sessionStorage.getItem('tongue')
        var incorrectAnswerEighteenA = sessionStorage.getItem('penis')
        var incorrectAnswerEighteenB = sessionStorage.getItem('asshole')
       
        document.getElementById('correctAnswer').innerHTML = 'It was that tongue.'
    
    
    if(sessionStorage.getItem('playerChoiceEighteen') == correctAnswerEighteenA ) {
    
        document.getElementById('rightOrWrongEighteen').innerHTML = 'Right Answer'
        document.getElementById('penalityOrRewardEighteen').innerHTML = highFive
    
    }
    else if(sessionStorage.getItem('playerChoiceEighteen') == incorrectAnswerEighteenA){
        
        document.getElementById('rightOrWrongEighteen').innerHTML = 'Wrong Answer'
        document.getElementById('penalityOrRewardEighteen').innerHTML = gonorrhoeaGorilla }
    else if(sessionStorage.getItem('playerChoiceEighteen')== incorrectAnswerEighteenB){
        
        document.getElementById('rightOrWrongEighteen').innerHTML = 'Wrong Answer'
        document.getElementById('penalityOrRewardEighteen').innerHTML = gonorrhoeaGorilla
     } 
    };

//Question Nineteen


function askQuestionNineteen(){
    

    var radioBtn = document.getElementById("answerOptionThree");
    radioBtn.style.display = "none";
    var radioBtnA = document.getElementById("answerOptionFour");
    radioBtnA.style.display = "none";


var thirdPlayer = nameArray[2];
nameArray.splice(2,1)
var questionNineteen = thirdPlayer + ', you can sneeze in your sleep. True or false?'
var correctAnswerNineteen = falseA
var incorrectAnswerNineteen = trueA

document.getElementById('questionNo').innerHTML = ' Question 19'
document.getElementById('question').innerHTML = questionNineteen

document.getElementById('answerOptionOneLabel').innerHTML = incorrectAnswerNineteen
document.getElementById('answerOptionOne').value = incorrectAnswerNineteen
sessionStorage.setItem('incorrectAnswerNineteen', incorrectAnswerNineteen)

document.getElementById('answerOptionTwoLabel').innerHTML = correctAnswerNineteen
document.getElementById('answerOptionTwo').value = correctAnswerNineteen
sessionStorage.setItem('correctAnswerNineteen', correctAnswerNineteen)

};

function getQuestionNineteenAnswer(){ 

    if(document.getElementById("answerOptionOne").checked){
        var playerChoiceNineteen =  sessionStorage.getItem('incorrectAnswerNineteen')
        sessionStorage.setItem('playerNineteenChoice', playerChoiceNineteen)
    } else if(document.getElementById("answerOptionTwo").checked){
        playerChoiceNineteen = sessionStorage.getItem('correctAnswerNineteen')
    } sessionStorage.setItem('playerChoiceNineteen', playerChoiceNineteen)

};

function questionNineteenResponse() {

    var playerChoiceNineteenA = sessionStorage.getItem('playerChoiceNineteen')
    var correctAnswerNineteenA = sessionStorage.getItem('correctAnswerNineteen')
    var incorrectAnswerNineteenA = sessionStorage.getItem('incorrectAnswerNineteen')
    
    sessionStorage.setItem('playerChoiceNineteenA', playerChoiceNineteenA)
    sessionStorage.setItem('correctAnswerNineteenA', correctAnswerNineteenA)
    sessionStorage.setItem('incorrectAnswerNineteenA', incorrectAnswerNineteenA)
    
   
    document.getElementById('correctAnswer').innerHTML = " False, you can't sneeze in your sleep."

if(sessionStorage.getItem('playerChoiceNineteen') == correctAnswerNineteenA){

    document.getElementById('rightOrWrongNineteen').innerHTML = 'Right Answer!'
    document.getElementById('penalityOrRewardNineteen').innerHTML = spitBars

}
else if(sessionStorage.getItem('playerChoiceNineteen')== incorrectAnswerNineteenA){
    
    document.getElementById('rightOrWrongNineteen').innerHTML = 'Wrong Answer!'
    document.getElementById('penalityOrRewardNineteen').innerHTML = sexTutorial

};};


//Question Twenty


function askQuestionTwenty(){
   
    var radioBtnA = document.getElementById("answerOptionFour");
    radioBtnA.style.display = "none";

    var james = 'James'
    var jack = 'Jack '
    var julien = 'Julien '

    var fourthPlayer = nameArray[3]
    nameArray.splice(3,1)
    var questionTwenty = fourthPlayer + ", in Monsters Inc. what is Sulley's real name?"


    
    document.getElementById('questionNo').innerHTML = ' Question 20'
    document.getElementById('question').innerHTML = questionTwenty
    
    document.getElementById('answerOptionOneLabel').innerHTML = james
    document.getElementById('answerOptionOne').value = james
    sessionStorage.setItem('james', james)
    
    document.getElementById('answerOptionTwoLabel').innerHTML = jack
    document.getElementById('answerOptionTwo').value = jack
    sessionStorage.setItem('jack', jack)
    
    document.getElementById('answerOptionThreeLabel').innerHTML = julien 
    document.getElementById('answerOptionThree').value = julien 
    sessionStorage.setItem('julien ', julien )
    

    };
      
    function getQuestionTwentyAnswer(){ 
    
        if(document.getElementById("answerOptionOne").checked){
            var playerChoiceTwenty =  sessionStorage.getItem('james')
            sessionStorage.setItem('playerChoiceTwenty' ,playerChoiceTwenty)
        } else if(document.getElementById("answerOptionTwo").checked){
            playerChoiceTwenty = sessionStorage.getItem('jack')
            sessionStorage.setItem('playerChoiceTwenty' ,playerChoiceTwenty)
        } else if(document.getElementById("answerOptionThree").checked){
            playerChoiceTwenty = sessionStorage.getItem('julien ')
            sessionStorage.setItem('playerChoiceTwenty',playerChoiceTwenty)
        } 
    };
    
    function questionTwentyResponse() {
    
       
        var correctAnswerTwentyA = sessionStorage.getItem('james')
        var incorrectAnswerTwentyA = sessionStorage.getItem('jack')
        var incorrectAnswerTwentyB = sessionStorage.getItem('julien ')
       
        document.getElementById('correctAnswer').innerHTML = "Sulley's full name is James P Sullivan"
    
    
    if(sessionStorage.getItem('playerChoiceTwenty') == correctAnswerTwentyA ) {
    
        document.getElementById('rightOrWrongTwenty').innerHTML = 'Right Answer'
        document.getElementById('penalityOrRewardTwenty').innerHTML = donation
    
    }
    else if(sessionStorage.getItem('playerChoiceTwenty') == incorrectAnswerTwentyA){
        
        document.getElementById('rightOrWrongTwenty').innerHTML = 'Wrong Answer'
        document.getElementById('penalityOrRewardTwenty').innerHTML = interpretiveDance}
    else if(sessionStorage.getItem('playerChoiceTwenty')== incorrectAnswerTwentyB){
        
        document.getElementById('rightOrWrongTwenty').innerHTML = 'Wrong Answer'
        document.getElementById('penalityOrRewardTwenty').innerHTML = interpretiveDance
     } 
    };

//Penalities 

var penalitiesArray = [
    threeShots, 
    serenade, 
    graveDigger, 
    icyUnderwear,
    foodFight,
    poser,
    magicMike,
    servant,
    dmSlider,
    chinesePizza,
    aShitDescription,
    groupCat,
    improvMonologueOne,
    impressionTimeOne,
    socialMediaOne,
    orgasmImpression,
    pickUpLine,
    onionApple,
    gonorrhoeaGorilla,
    sexTutorial,
    interpretiveDance,
    edwardSockHands,
    shoeBalancer,
    clownArousal,
    cannibal,
    eatOutToHelpOut,
    eater,
    aggressivelyHappy,
    socialMediaTwo,
    impressionTimeTwo
];

var threeShots = 'Drink 3 shots of the strongest alcohol available.'
var serenade = 'Serenade a player of your choice with a song of their choice.'
var graveDigger = 'Call someone in your contact list and tell them you need help to bury a body.'
var icyUnderwear = 'Put a handful of ice in your underwear and leave it there.'
var foodFight = 'Let every player throw a piece of food at you.'
var poser = 'Let another player place you in a pose. You have to hold that position until another player gets an answer right. If you move from the pose before this happens you must drink 2 shots.'
var magicMike = 'Do a sexy Magic Mike Style dance. if the other players are not sufficently aroused you must do it again.'
var servant = 'You are the group servant for the next 10 minutes.'
var dmSlider = 'DM Slider - another player picks a someone in their contact list. You have to slide into their DMs.'
var chinesePizza = 'Call a chinese restraurant and try to order pizza.'
var aShitDescription = 'Describe in detail the last poo you had.'
var groupCat = 'You are the group cat until you get an answer right or the game ends. You must say "meow meow" after each time you speak.'
var improvMonologueOne = 'Two minute improv monologue - you have arrived at the gates of heaven, make your case to god.'
var impressionTimeOne = 'Two minute impression time - You are a constipated T rex that has just noticed the asteroid. '
var socialMediaOne = 'Pick a social media of your choice and put "aspiring butt plug tester" in your bio. Leave it there for 2 hours.'
var orgasmImpression = 'Do an impression of yourself having an orgasm.'
var pickUpLine = 'Give a player in the group your best pick up line.'
var onionApple = 'Eat an onion like an apple.' 
var gonorrhoeaGorilla = 'One minute impression: You are a gorilla with gonerrhoea.' 
var sexTutorial = 'Give the group a two minute sex tutorial.'
var interpretiveDance = 'Perfom a two minute interpretive dance using the hair of Boris Johnson as inspiration. '
var edwardSockHands = 'You are now Edward Sock Hands, wear your socks on your hands for the rest of the game.'
var shoeBalancer = 'Balance your shoes on your shoulders until you get an answer right or the game ends.'
var clownArousal = 'Give a passionate speech on why clowns give you boners or get you wet.'
var cannibal = 'Answer the following question: if you had to eat another player, who would it be and why?'
var eatOutToHelpOut = 'Eat out to help out - demonstrate for the group how you eat pussy or ass.'
var eater = 'The group chooses a food for you to eat. You eat it.'
var aggressivelyHappy = 'Sing "Happy" by Pharrell Williams but in an aggressive tone.'
var socialMediaTwo = 'Pick a social media of your choice, type "I need to be licked" in your bio. Leave it there for 2 hours.'
var impressionTimeTwo = 'Two minute impression - The year is 1995. Your name is Monica. The stress of being President of the United States is getting to Bill. Show the group your skills.'


//Rewards 

var rewards = [
    massage,
    twerk,
    shot,
    compliments,
    monarchy,
    oneLeg,
    rockPaperScissors,
    pumPumMaster,
    hugger,
    footInspector,
    improvTime,
    andTheyStayThere,
    feeder,
    nipples,
    improvMonologueTwo,
    blindfold,
    noseholder,
    bibleBimbo,
    highFive,
    spitBars,
    donation,
    sexyCrawl,
    tolietRoll,
    cameraShy,
    impressionTimeThree,
    clothesOnBackwards,
    breakdance,
    leash,
    drink, 
    youOweMe
];

var massage = 'Choose a player to give you a three minute massage.'
var twerk = 'Choose a player to twerk to WAP by Cardi B.'
var shot = 'Choose a player to drink a shot of your choosing.'
var compliments = 'Everyone has to say something nice about you.'
var monarchy = 'You are a monarch for the next 5 minutes, everyone else is your subject.'
var oneLeg = 'Pick a player to stand on one leg until you get an answer wrong or the game ends. If their second leg touches the floor they drink three shots of the strongest alcohol available.'
var rockPaperScissors = 'Choose a player to play Rock, Paper, Scissors with you, the loser drinks a shot.'
var pumPumMaster = 'A player of your choosing shall now be known as the "Pum Pum Master" they must put this new honorary title in one their social media bios.'
var hugger = 'Pick a player to give you a hug.'
var footInspector = 'Each Player must take their shoes and socks off. You get to choose who has the nicest feet.'
var improvTime = 'Choose two players to perform a three minute improv scene. You get to make the suggestions.'
var andTheyStayThere = '"Everytime you step up in the building everybody hands go up!... and they stay there!" - Every player but you must keep their hands in the air until you say they can put them down. Anyone who puts them down before you say has to take a shot.'
var feeder = 'A player of your choice must eat a food of your choice.'
var nipples = 'Until someone gets an answer wrong a player of your choice must say "I need my nipples licked in a high pitched voice" everytime they speak.'
var improvMonologueTwo = 'Two minute monologue, a player of your choice is giving a witness statement to the police. The horrifc scene they witnessed? Andrew Tate being pegged by a Greta Thunberg.'
var blindfold = 'A player of your choice must be blindfolded for the rest of the game.'
var noseholder = 'A player of your choice must hold their nose while they speak for the rest of the game.'
var bibleBimbo = "Bible Bimbo, a player of your choice must read the first five verses of the Bible like an American Bimbo pornstar getting her back blown out:  " 
var bibleBimboA = '"In the beginning God created the heavens and the earth. Now the earth was formless and empty, darkness was over the surface of the deep and the Spirit of God was hovering over the waters and God said, Let there be light, and there was light. God saw the light was good, and he separated the light from the darkness. God called the light day, and the darkness he called night. And there was evening, and there was morning - the first day. "'
var highFive = 'You get a high five from everyone.'
var spitBars = 'A player of your choice has to spit some bars for the group.'
var donation = 'A player of your choice must donate £5 to a charity of your choice.'
var sexyCrawl = 'A player of your choice must do a sexy crawl.'
var tolietRoll = 'A player of your choice must get toilet roll and rip the average amount they use.'
var cameraShy = 'You get to take an unflattering picture of a player of your choice.'
var impressionTimeThree = 'A player of your choice must do an impression of a crab on cocaine.'
var clothesOnBackwards = 'A player of your choice must go to the bathroom, remove all their clothes and put them on backwards. They must remain like this until the end of the game.'
var breakdance = 'A player of your choice must attempt to breakdance.'
var leash = 'You get to put a leash on a player of your choice for the rest of the game (a belt should suffice).'
var drink = 'A player of your choice must drink a drink of your choice.'
var youOweMe = 'A player of you choice owes you a drink.'