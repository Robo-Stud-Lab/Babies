
const trainingData =[
  { input: [0,0], output: [1] },
  { input: [0,1], output: [0] },
  { input: [1,0], output: [0] },
  { input: [1,2], output: [0] },
  { input: [2,4], output: [0] },
  { input: [5,1], output: [0] },
  { input: [1,2], output: [0] },
  { input: [1,1], output: [1] },
  { input: [2,2], output: [1] },
  { input: [3,3], output: [1] },
  { input: [4,4], output: [1] },
  { input: [5,5], output: [1] }
];

const Masha = new brain.NeuralNetwork({ hiddenLayers: [3] });

Masha.train(trainingData, {
  log: (error) => console.log(error)
});

const runMasha = Masha.run([200,200]);
document.getElementById("brut").innerHTML = runMasha;
/*
const user = {
  input: [],
  output: []
}

input > >>ß 

output
2+2 
*/