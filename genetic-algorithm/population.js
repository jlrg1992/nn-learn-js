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
        console.log(topAgent);
        console.log(lowestAgent);
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
        console.log("Corriendo");

        for(var a = 0; a < generations; a++){
            for(inputs in tests){
                this.run(tests[inputs]);
            }
            this.naturalSelection();
        }
    }
    this.agents = this.createPopulation();
}