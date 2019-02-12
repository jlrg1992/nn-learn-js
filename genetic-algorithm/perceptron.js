//   Functions to compute, recieving inputs, weights and bias and returning the output

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
        return 1 / ( 1 + (Math.E ** -output));
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