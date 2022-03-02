// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {

    return drivers.slice(0,2);
  }

const returnLastTwoDrivers = function(drivers) {

    return drivers.slice(-2);
  }

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(fares) {
    return function(cost) {
        return fares * cost;
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(arrayOfDrivers, func) {
    return func(arrayOfDrivers);
  } 