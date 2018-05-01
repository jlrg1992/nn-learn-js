

// Let's define a neuron first

function ReLuNeuron(numInputs){
    this.weights = function(){
        var array = [];
        for(var i = 0; i < numInputs; i++){
            array[i] = Math.random();
        }
        return array
    }();
    for (x in this.weights){
        x = Math.random();
    }
    this.bias = Math.random();
    this.calc = function(inputs){
        output = 0;
        for (var i = 0; i < inputs.length; i++){
           output = this.weights[i] * inputs[i] + this.bias
        }
        return Math.max(0,output);
    }
}

function SigmoidNeuron(numInputs){
    this.weights = function(){
        var array = [];
        for(var i = 0; i < numInputs; i++){
            array.push(Math.random());
        }
        return array
    }();
    for (x in this.weights){
        x = Math.random();
    }
    this.bias = Math.random();
    this.calc = function(inputs){
        output = 0;
        for (var i = 0; i < inputs.length; i++){
           output = this.weights[i] * inputs[i] + this.bias
        }
        return 1 / ( 1 + (Math.E ** -output));
    }
}

// Now let's continue with a layer

function Layer(structLay){
    this.neurons = function(){
        var arrayn = [];
        for(var k = 0; k < structLay[1]; k++){
            if(structLay[2] == 'sigm'){
                arrayn.push(new SigmoidNeuron(structLay[0]));
            }
            else if(structLay[2] == 'relu'){
                arrayn.push(new ReLuNeuron(structLay[0]));
            }  
        }
        return arrayn;
    }();
    this.runLayer = function(inputs){
        var layerOutput = [];
        for (var j = 0; j < this.neurons.length; j++){
            layerOutput[j] = this.neurons[j].calc(inputs);
         }
         return layerOutput
    }
}

// Define model

function net(structure){
    this.layers = function(){
        arrlay = [];
        for (layer in structure){
            arrlay.push(new Layer(structure[layer]));
        }
        return arrlay;
    }();
    this.run = function(input){
        for(var layer in this.layers){
           input = this.layers[layer].runLayer(input) //Something
        }
        return input
    }
}
