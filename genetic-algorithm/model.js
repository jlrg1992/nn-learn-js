var pop = new population(1,[1],1,1000,0.25,checkfitness,140);

function checkfitness(input,output){
    let score = 0;
    if(input[0] > 7){
        if(output>0.5){
            score++;
        }
        else{
            score-= 0.5-output;
        }
    }
    else if(input[0] < 8){
        if(output<0.5){
            score++;
        }
        else{
            score+= 0.5-output;
        }
    }
    return score
}

var testing = [[0],[1],[1],[1],[0],[0],[0],[1],[1],[1],[0],[1],[0],[0]];
function correr(gens){
    pop.autoPlay(testing, gens);
    if(top < 8){
        correr(gens);
    }
}