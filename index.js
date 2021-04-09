function mapToNegativize(sourceArray) {
    let negative = []
    for (let i = 0; i < sourceArray.length; i++ ){
        negative.push(sourceArray[i] * -1)
    }
    return negative
}

function mapToNoChange(sourceArray) {
    let copy = []
    for (let i = 0; i < sourceArray.length; i++){
        copy.push(sourceArray[i])
    }
    return copy
}

function mapToDouble(sourceArray) {
    let double = []
    for (let i = 0; i < sourceArray.length; i++){
        double.push(sourceArray[i] * 2)
    }
    return double
}

function mapToSquare(sourceArray) {
    let square = []
    for (let i = 0; i < sourceArray.length; i++){
        square.push(sourceArray[i] * sourceArray[i])
    }
    return square
}

function reduceToTotal(sourceArray, startingPoint=0) {
    let total = startingPoint
    for (let i = 0; i < sourceArray.length; i++){
        total += sourceArray[i] 
    }
    return total
}

function reduceToAllTrue(sourceArray) {
    for (let i = 0; i < sourceArray.length; i++) {
        if (!sourceArray[i]) return false
    }
    return true
}

function reduceToAnyTrue(sourceArray) {
    for (let i = 0; i < sourceArray.length; i++){
        if (sourceArray[i]) return true
    }
    return false
}