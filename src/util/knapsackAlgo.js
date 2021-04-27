// Input
// W -> Maximum capacity
// wt -> Items weights
// val -> Items values
// n -> Number of values 

const max = (a, b) => {
    return a > b ? a : b;
}

// Returns the maximum value that can
// be put in a knapsack of capacity W
const knapsackDP = (W, wt, val, n) => {
    let i, w;
    let K = new Array(n + 1);
    for (i = 0; i <= n; i++) {
        K[i] = new Array(W + 1);
        for (w = 0; w <= W; w++) {
            if (i === 0 || w === 0) {
                K[i][w] = 0;
            }
            else if (wt[i - 1] <= w) {
                K[i][w] = max(val[i - 1] + K[i - 1][w - wt[i - 1]], K[i - 1][w]);
            } else {
                K[i][w] = K[i - 1][w];
            }
        }
    }
    console.table(K);

    // Search for the items selected
    // stores the result of Knapsack

    let res = K[n][W];
    w = W;

    // data is going to store the next information:
    // [0] - Max benefit found
    // [1] - List of index of items selected
    // [2] - Sum of the weight of the items selected
    const data = [];
    const itemsIndexes = [];
    let weightCounter = 0;
    data.push(res);
    console.log("Items selected");
    for (i = n; i > 0 && res > 0; i--) {

        // either the result comes from the top
        // (K[i-1][w]) or from (val[i-1] + K[i-1]
        // [w-wt[i-1]]) as in Knapsack table. If
        // it comes from the latter one/ it means
        // the item is included.
        if (res == K[i - 1][w])
            continue;
        else {

            // This item is included.
            console.log(wt[i - 1] + " - " + val[i - 1]);
            itemsIndexes.push(i);
            weightCounter += wt[i - 1];
            // Since this weight is included its
            // value is deducted
            res = res - val[i - 1];
            w = w - wt[i - 1];
        }
    }
    data.push(itemsIndexes);
    data.push(weightCounter);
    return data;
};

module.exports = { knapsackDP };