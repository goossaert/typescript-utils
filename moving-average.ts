export function movingAverage(array: number[], windowSizeBefore: number, windowSizeAfter: number): number[] {

    let sum = 0;
    let numItems = Math.min(windowSizeAfter, array.length);

    for (let i=0; i < numItems; i++) {
        sum += array[i];
    }
    let indexEdgeLeft = -windowSizeBefore;
    let indexEdgeRight = windowSizeAfter-1;

    let outArray: number[] = [];

    for (let i=0; i < array.length; i++) {
        outArray.push(sum/numItems);
        indexEdgeLeft += 1;
        indexEdgeRight += 1;
        if (indexEdgeLeft < 0) {
            numItems += 1;
        } else {
            sum -= array[indexEdgeLeft];
        }
        if (indexEdgeRight >= array.length) {
            numItems -= 1;
        } else {
            sum += array[indexEdgeRight];
        }
    }

    return outArray;
}
