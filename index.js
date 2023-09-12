const returnFirstTwoDrivers = arr=> arr.slice(0,2)
const returnLastTwoDrivers = arr=> arr.slice(arr.length-2,arr.length)
const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]
function createFareMultiplier (arg){
    return function (price){
        return price*arg
    }
}
const fareDoubler = par => createFareMultiplier(par)(2)
const fareTripler = par => createFareMultiplier(par)(3)
function selectDifferentDrivers(arr,cb){
    return cb(arr)
}