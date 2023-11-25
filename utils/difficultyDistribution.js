const difficultyDistribution = (easy=0,medium=0,hard=0) => {
    
    if(easy === 0 && medium === 0 && hard === 0){
        easy= 20
        medium = 50
        hard = 30
    }
    else if(easy === 0 && medium === 0 ){

        easy = (100 - hard)/2;
        medium = easy;
    }
    else if(medium === 0 && hard === 0){
        medium = (100 - easy)/2
        hard = medium;
    }
    else if(easy === 0 && hard === 0){
        easy = (100 - medium)/2;
        hard = easy;
    }
    else if(easy === 0) easy = 100 - (medium + hard);
    else if(medium === 0) medium = 100 - (easy + hard);
    else if(hard === 0) hard = 100 - (easy + medium);




    return {
        "Easy": easy,
        "Medium": medium,
        "Hard": hard
    }
}


module.exports = difficultyDistribution;