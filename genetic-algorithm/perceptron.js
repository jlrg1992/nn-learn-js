

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
           output += this.weights[i] * inputs[i]
        }
        output+=this.bias;
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

function perceptronRELU(inputs,weights,constant){
    let output = 0;
    for(input in inputs){
        output += inputs[input]*weights[input];
    }
    output = output + constant;
    return Math.max(0,output)
}