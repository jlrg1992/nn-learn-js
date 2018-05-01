var generalInputs = [0,0,0,0,0,0,0,0,0,0];
var generalOutputs = [];
var model = [
//  Inputs , Outputs, Type
    [ 10 , 14 , 'relu'],
    [ 14 , 25 , 'relu'],
    [ 25 , 9 , 'sigm'],
];
population = [new net(model, generalInputs)];



game1 = new ttt(["1","2","3","4","5","6","7","8","9"]);