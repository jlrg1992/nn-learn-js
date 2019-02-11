function brain(inputs, hidArrLay,outputs){
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
    this.createLayers = function(inputs,out){
        let prelayers = [];
        for(hidLay in hidArrLay){
            if(hidLay == 0){
                prelayers[hidLay] = [];
                for(var neuron = 0; neuron < hidArrLay[hidLay]; neuron++){
                    prelayers[hidLay][neuron] = [Math.random(),[]]; 
                    for(var weightNum = 0; weightNum < inputs; weightNum++){
                        prelayers[hidLay][neuron][1].push(Math.random());
                    }                
                }
            }
            else{
                prelayers[hidLay] = [];
                for(var neuron = 0; neuron < hidArrLay[hidLay]; neuron++){
                    prelayers[hidLay][neuron] = [Math.random(),[]]; 
                    for(var weightNum = 0; weightNum < prelayers[hidLay-1].length; weightNum++){
                        prelayers[hidLay][neuron][1].push(Math.random());
                    }                
                }
            }
        }
        prelayers.push([]);
        for(var neuron = 0; neuron < out; neuron++){
            prelayers[prelayers.length-1][neuron] = [Math.random(),[]]; 
            for(var weightNum = 0; weightNum < prelayers[prelayers.length-2].length; weightNum++){
                prelayers[prelayers.length-1][neuron][1].push(Math.random());
            }
        }   
        return prelayers
    }
    this.createConn = function(){

    }
    this.architecture = this.createLayers(inputs,outputs);
}
