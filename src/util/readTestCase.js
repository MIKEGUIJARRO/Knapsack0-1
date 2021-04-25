const path = require("path");
const { readFile } = require("./readFile");

const readTestCase = async (fileName) => {
    const appDir = path.dirname(require.main.filename);
    const data = await readFile(path.join(appDir, "testCases", fileName), (data) => {
        const lines = data.split("\n");
        const benefits = lines[1].split(" ");
        const weights = lines[2].split(" ");

        if (benefits.length !== weights.length) {
            // We need the same amount of benefits and
            // weights in the data files
            return;
        }

        const items = [];
        for (let i = 0; i < benefits.length; i++) {
            const item = {
                "benefit": benefits[i],
                "weight": weights[i],
            }
            items.push(item);
        }

        const newData = {
            "n": lines[0],
            "items": items,
            "weightBackpack": lines[3],
        }
        return newData;
    });
    return data;
};

module.exports = { readTestCase }
