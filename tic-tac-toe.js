//Game logic

function ttt(config){
    this.table = config;
    this.players = ['X','Y'];
    this.turn = 0;
    this.state = [0,0,0,0,0,0,0,0,0];
    this.play = function(move){
        if(this.state[move] == 0){
            if(this.turn === 0){
                this.state[move] = 1;
                document.getElementById(this.table[move]).innerText = "X";
                this.turn = 1;
            }
            else if(this.turn === 1){
                this.state[move] = -1;
                document.getElementById(this.table[move]).innerText = "O";
                this.turn = 0;
            }
            return checkWinning(this.state);
        }
        else{
            return -1
        }
    }
    this.reset = function(){
        this.turn = 0;
        this.state = [0,0,0,0,0,0,0,0,0];
        for(check in this.table){
            document.getElementById(this.table[check]).innerText = "";
        }
    }
}


function checkWinning(arr){
    var result = 1;
    for(var i = 0; i<7; i = i+3){
        if(arr[i] === arr[i+1] && arr[i+1] === arr[i+2] && arr[i] !== 0){
            result = 10;
        }
    }
    for(var j = 0; j<4; j++){
        if(arr[j] === arr[j+3] && arr[j+3] === arr[j+6] && arr[j] !== 0){
            result = 10;
        }
    }
    if(arr[0] === arr[4] && arr[4] === arr[8] && arr[4] !== 0){
        result = 10;
    }
    if(arr[2] === arr[4] && arr[4] === arr[6] && arr[4] !== 0){
        result = 10;
    }
    
    return result
}