function brain(hidArrLay,outputs){
    this.run = function(){

    }
    this.reproduce = function(){

    }
    this.getWeights = function(){

    }
    this.setWeights = function(){

    }
    this.setRandomWeights = function(){

    }
    this.createLayers = function(){
        let prelayers = [];
        prelayers.push(Array(inputs));
        for(hid in hidArrLay){
            prelayers.push(Array(hidArrLay[hid]));
        }
        prelayers.push(Array(outputs));
        return prelayers
    }
    this.createConn = function(){

    }
    this.architecture = this.createLayers();
    this.connection = this.createConn();
}

function createArchitecture(){
    
}