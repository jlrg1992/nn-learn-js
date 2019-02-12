var pop = new population(1,[1],1,100,0.05,checkfitness,50);

function checkfitness(input,output){
    let score = 0;
    if((input == 1 && output > 0.5) || (input == 0 && output <= 0.5)){
        score++;
    }
    return score
}

var testing = [0,1,1,1,1,0,0,1,0,1,0,1,0,0];
function correr(){
    pop.autoPlay(testing, 1000);
}