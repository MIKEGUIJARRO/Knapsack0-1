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

const { readTestCase } = require("./util/readTestCase");


const runHandler = async () => {
    const testFile = process.argv.slice(2)[0];
    const data = await readTestCase(testFile);
    console.log(data);
}

runHandler();