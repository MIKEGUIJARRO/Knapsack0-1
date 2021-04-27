// Knapsack problem

// INPUT
// 3 - Numero total de objetos n de la instancia
// 50 60 140 - Una serie de n enteros con los beneficios de cada entero
// 5 10 20 - Una serie de n enteros con los pesos de cada objeto
// 30 - Un entero con la capacidad maxima W de la mochila

// OUTPUT
// ? - Maximo beneficio encontrado expresado como un entero
// ? - Lista de objetos que fueron introducidos en la mochila
// ? - La suma del peso de los objetos que fueron introducidos en la mochila

const { readTestCase, writeTestCase } = require("./util/testCaseHandler");
const { knapsackDP } = require("./util/knapsackAlgo");

const runHandler = async () => {
    const testFile = process.argv.slice(2)[0];
    const { nItems, itemsValue, itemsWeight, maxCapacity } = await readTestCase(testFile);
    const dataKS = knapsackDP(maxCapacity, itemsWeight, itemsValue, nItems)
    const dataString = `${dataKS[0]}\n${dataKS[1].join(" ")}\n${dataKS[2]}`;
    console.log(dataString);
    await writeTestCase("lastResult.txt", dataString);
}

runHandler();
