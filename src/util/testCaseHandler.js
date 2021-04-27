const { Console } = require("console");
const path = require("path");
const { readFile } = require("./readFile");
const { writeFile } = require("./writeFile");

const appDir = path.dirname(require.main.filename);

const readTestCase = async (fileName) => {
    const data = await readFile(path.join(appDir, "testCases", fileName), (data) => {
        const lines = data.split("\n");
        const n = parseInt(lines[0].split(" "));
        const benefits = lines[1].split(" ");
        const weights = lines[2].split(" ");
        const maxCapacity = parseInt(lines[3].split(" "));

        if (benefits.length !== weights.length) {
            // We need the same amount of benefits and
            // weights in the data files
            return;
        }

        for (let i = 0; i < benefits.length; i++) {
            benefits[i] = parseInt(benefits[i]);
            weights[i] = parseInt(weights[i]);
        }

        const newData = {
            "nItems": n,
            "itemsValue": benefits,
            "itemsWeight": weights,
            "maxCapacity": maxCapacity,
        }
        return newData;
    });
    return data;
};

const writeTestCase = async (fileName, data) => {
    try {
        await writeFile(path.join(appDir, "result", fileName), data);
    } catch (e) {
        console.log(e);
    }
    return;
}

module.exports = { readTestCase, writeTestCase }
