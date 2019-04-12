# nn-learn-js

Making a fully connected Neural Network that improves by using genetic algorithm.

This Network is designed for classification problems. So the output neurons make a sigmoid function. If the ouput is more than 0.5 is possitive; if it is less, it is negative.

## How to use it

You should create a new population(). It has the following paramethers: inputs, hidArrLay, out ,size, mutationRate, fitnessFunction, killing. They are all needed for it to work.

## inputs
It accepts the number of inputs that the "brains" are going to work with.

## hiArrlay
This paramether accepts an array of numbers. The numbers represent how many neurons are going to be int each hidden layer. So the length of the array would be the number of hidden layers.

Example:
    For one hidden layer with 5 neurons, the array would be [5] 
