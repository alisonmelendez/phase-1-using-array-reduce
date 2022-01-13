const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
//let totalBatteries = 0; //holds the sum of the batteries

let initialValue = 0;


const reducerCall = (accumulator, battery) => {
    return accumulator + battery;
}


let totalBatteries = batteryBatches.reduce(reducerCall, initialValue);