function brain(inputs, hidArrLay,out, MutationRate, fitnessFunction){
    this.run = function(inputs){
        out = JSON.parse(JSON.stringify(inputs));
        for(var x = 0; x < (this.architecture.length - 1); x++){
            out = runLayerRelu(out, this.architecture[x]);
        }
        this.fitFunction = fitnessFunction;
        out = runLayerSigmoid(out,this.architecture[this.architecture.length - 1]);
        this.fitness = this.fitness + this.fitFunction(inputs, out);
        return out;
    }
    this.reproduce = function(){
        let preBrain = new brain(1,[1],1,this.mutationRate, this.fitFunction);
        preBrain.setArchitecture(this.architecture);
        preBrain.mutationRate = this.mutationRate;
        preBrain.fitFunction = this.fitFunction;
        preBrain.mutateArch();
        return preBrain
    }
    this.createLayers = function(){
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
    this.setArchitecture = function(arch){
        this.architecture = JSON.parse(JSON.stringify(arch));
    }
    this.mutateArch = function(){
        var workingArch = this.architecture;
        for(layer in workingArch){
            for(var neuron = 0; neuron < workingArch[layer].length; neuron++){
                if(Math.random() < this.mutationRate){
                    workingArch[layer][neuron][0] += Math.random()*2 - 1; 
                }
                for(var weightNum = 0; weightNum < workingArch[layer][neuron][1].length; weightNum++){
                    if(Math.random() < this.mutationRate){
                        workingArch[layer][neuron][1][weightNum] += Math.random()*2 - 1;
                    }
                }
            
            } 
        }
    }
    this.architecture = this.createLayers();
    this.fitness = 0;
    this.mutationRate = MutationRate;
    this.generation = 1;
}

