// rawData = [{ open: number, high: number, low: number, close: number }]

function scaleDown(step) { // normalize
    return {
        open: step.open / 95,
        high: step.high / 147,
        low: step.low / 22,
        close: step.close / 139
    };
}

function scaleUp(step) { // denormalize
    return {
        open: step.open * 95,
        high: step.high * 147,
        low: step.low * 22,
        close: step.close * 139
    };
}

const scaledData = rawData.map(scaleDown);

const trainingData = [
    scaledData.slice(0, 5),
    scaledData.slice(5, 10),
    scaledData.slice(10, 15),
    scaledData.slice(15,20),
];

const net = new brain.recurrent.LSTMTimeStep({
    inputSize: 4,
    hiddenLayers: [8, 8],
    outputSize: 4
});

net.train(trainingData, {
    learningRate: 0.005,
    errorThresh: 0.02,
    // log: (stats) => console.log(stats)
});

console.log(scaleUp(net.run(trainingData[0])));