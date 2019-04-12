# nn-learn-js

Making a fully connected Neural Network that improves by using genetic algorithm.

This Network is designed for classification problems. So the output neurons make a sigmoid function. If the ouput is more than 0.5 is possitive; if it is less, it is negative.

## Create a population of "brains"

You should create a new population(). It has the following paramethers: inputs, hidArrLay, out ,size, mutationRate, fitnessFunction, killing. They are all needed for it to work.

### inputs
It accepts the number of inputs that the "brains" are going to work with.

### hidArrLay
This paramether accepts an array of integers. The numbers represent how many neurons are going to be int each hidden layer. So the length of the array would be the number of hidden layers. The neurons in the hidden layers have RELU as activation function.

Example:
    For one hidden layer with 5 neurons, the array would be: [5]
    For two hidden layers where the first one has 20 neurons and the second has 3 neurons, the array would be: [20,3]
    
### out
This is an integer that represents the number of outputs. All the neurons in this layer have as activation function a sigmoid function. So there can be more than one giving an output > 0.5. To I recommend to take the index with the bigger value, but if your problem accepts multiple results at the same time, you can take all the ones above 0.5.

### size
This is the population size. How many "brains" do you want.

### mutationRate
The mutation rate is the that is going to added or substracted to the weights and the bias. It's important to take this into acount so you don't want to have a too big mutation rate. If it is too small, the training will take longer. But if it is too big... I haven't tried that, but I imagine it's not pretty. I recommend using a number between 0.001 and 0.01. But you'll have to test it for your problem.

### fitnessFunction
This argument receives a function that receives the inputs and the outputs that the neural network has just generated and returns a score. This score gets "saved" into the brain class. So that so it takes it into acount when it's time to have a new generation.

### killing
The number of brains that will be taken down for not doing such a great job.

## Training
For training there is the .autoPlay() method. This receives to arguments. The first one is an array of arrays with the tests, values. So, for example, if you're going to feed with two inputs it should look like: [[0,1], [1,0], [1,1], ... , [1,1]]
The second argument is the generations you want to train it on.


Hope you find this interesting. I know there are a lot of room for improvement.


Vitam Impendere Vero




