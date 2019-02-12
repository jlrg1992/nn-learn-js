function perceptronRELU(inputs,weights,bias){
    let output = 0;
    for(input in inputs){
        output += inputs[input]*weights[input];
    }
    output += bias;
    return Math.max(0,output)
}

function perceptronSigmoid(inputs, weights,bias){
    output = 0;
        for (var i = 0; i < inputs.length; i++){
           output += weights[i] * inputs[i]
        }
        output += bias;
        return 1 / ( 1 + Math.pow(Math.E ,-output));
}

//  Difining how to get a Layer running

function runLayerRelu(inputs,layer){
    var result=[];
    for(neuron in layer){
        result.push(perceptronRELU(inputs,layer[neuron][1],layer[neuron][0]));
    }
    return result
}

//  Running the output layer

function runLayerSigmoid(inputs,layer){
    var result=[];
    result.push(perceptronSigmoid(inputs,layer[layer.length-1][1],layer[layer.length-1][0]));
    return result
}



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

function population(inputs,hidArrLay,out,size, mutationRate, fitnessFunction, killing){
    this.toKill = killing;
    this.size = size;
    this.generation = 1;
    this.createPopulation = function(){
        var lista = [];
        for(var x=0;x<size;x++){
            lista.push(new brain(inputs, hidArrLay,out, mutationRate, fitnessFunction));
        }
        return lista
    }
    this.run = function(inputs){
        for(var y = 0; y < this.agents.length; y++){
            this.agents[y].run(inputs);
        }
    }
    this.naturalSelection = function(){
        this.agents.sort(function(a, b){return b.fitness-a.fitness});
        var average = 0;
        topAgent = [this.agents[0].fitness, this.agents[0].generation];
        lowestAgent = [this.agents[this.agents.length-1].fitness,this.agents[this.agents.length-1].generation]
        for(var z = 0; z < this.agents.length; z++){
            average += this.agents[z].fitness
        }

        this.agents = this.agents.slice(0, this.toKill);

        for(var z = 0; z < this.agents.length; z++){
            this.agents[z].fitness = 0;
        }

        for(var z = 0; z < this.size; z++){
            this.agents.push(this.agents[z].reproduce())
            this.agents[this.agents.length-1].generation += 1;
        }
        this.generation++;
    }
    this.autoPlay = function(tests, generations){

        for(var a = 0; a < generations; a++){
            for(inputs in tests){
                this.run(tests[inputs]);
            }
            this.naturalSelection();
        }
    }
    this.agents = this.createPopulation();
}



// Good stuff
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
    console.log(JSON.stringify(pop.agents[0].architecture));
}

correr(100);