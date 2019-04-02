const trainingData = [
  { input: [0, 0], output: [0] },

  { input: [0.1, 0], output: [0.1] },

  { input: [0.1, 0.1], output: [0.2] },
  { input: [0, 0.2], output: [0.2] },

  { input: [0.1, 0.2], output: [0.3] },
  { input: [0, 0.3], output: [0.3] },

  { input: [0.3, 0.2], output: [0.5] },
  { input: [0.1, 0.4], output: [0.5] },
  { input: [0, 0.5], output: [0.5] },
  { input: [0.2, 0,3], output: [0.5] },

  { input: [0.1, 0.5], output: [0.6] },
  { input: [0, 0.6], output: [0.6] },
  { input: [0.2, 0.4], output: [0.6] },
  { input: [0.3, 0.3], output: [0.6] },

  { input: [0, 0.7], output: [0.7] },
  { input: [0.1, 0.6], output: [0.7] },
  { input: [0.2, 0.5], output: [0.7] },
  { input: [0.3, 0.4], output: [0.7] },


  { input: [0, 1], output: [1] },
  { input: [0.1, 0.9], output: [1] },
  { input: [0.2, 0.8], output: [1] },
  { input: [0.3, 0.7], output: [1] },
  { input: [0.4, 0.6], output: [1] },
  { input: [0.5, 0.5], output: [1] },
];

const jumble = new brain.NeuralNetwork({ hiddenLayers: [3] });
jumble.train(trainingData);

const runJumble = jumble.run([0.3,0.1]);

document.getElementById("brut").innerHTML = runJumble;