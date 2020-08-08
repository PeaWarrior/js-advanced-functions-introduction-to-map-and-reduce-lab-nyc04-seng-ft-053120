function mapToNegativize(array) {
    let ans = [];
    for (let i = 0; i < array.length; i++) {
        ans.push(array[i] * (-1))
    };
    return ans;
};

function mapToNoChange(array) {
    let ans = [];
    for (let i = 0; i < array.length; i++) {
        ans.push(array[i])
    };
    return ans;
};

function mapToDouble(array) {
    let ans = [];
    for (let i = 0; i < array.length; i++) {
        ans.push(array[i] * 2)
    };
    return ans;
};

function mapToSquare(array) {
    let ans = [];
    for (let i = 0; i < array.length; i++) {
        ans.push(array[i] ** 2)        
    };
    return ans;
};

function reduceToTotal(array, start = 0) {
    let total = start;
    for (let i = 0; i < array.length; i++) {
        total = array[i] + total;
    };
    return total;
};

function reduceToAllTrue(array) {
    for (let i = 0; i < array.length; i++) {
        if (!array[i]) {
            return false
        };
    };
    return true;
};

function reduceToAnyTrue(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i]) {
            return true
        };
    };
    return false;
};