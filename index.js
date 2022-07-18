// Code your solution in this file!
function distanceFromHqInBlocks(pickup){
    if (pickup < 42){
        return 42 - pickup;
    }
    else if (pickup > 42){
        return pickup - 42;
    }
}
function distanceFromHqInFeet(distance){
    return distanceFromHqInBlocks(distance) * 264
}
function distanceTravelledInFeet(start, end){
    if (start > end){
        return (start-end)*264
    }
    else if (end > start){
        return (end-start)*264
    }
}
function calculatesFarePrice(start, end){
    let distance = distanceTravelledInFeet(start,end)
    if (distance <= 400){
        return 0 
    }
    if (distance >= 400 && distance <=2000){
        return (distance-400)*.02
    }
    if (distance > 2000 && distance <= 2500){
        return 25
    }
    if (distance > 2500){
        return 'cannot travel that far'
    }
}
    // console.log(distanceTravelledInFeet(start, end))
//     if (distanceTravelledInFeet(start, end) <= 400){
//         return 0
//     }
//     if (distanceTravelledInFeet(start, end) >= 400 && distanceTravelledInFeet(start, end) <=2000 ){
//         return (distanceTravelledInFeet(start, end) - 400)*.02
//     }
//     if (distanceTravelledInFeet(start, end) > 2000 && distanceTravelledInFeet(start, end) <= 2500){
//         return 25
//     }
//     if (distanceTravelledInFeet(start, end) > 2500){
//         return 'cannot travel that far'
//     }
