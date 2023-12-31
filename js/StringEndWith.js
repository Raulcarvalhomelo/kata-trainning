const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    // 2 galao = 25
    // 1 milha = 16009,
    //50km
    return fuelLeft*mpg>=distanceToPump?true:false
    // return 25/0.62
    // return 50*0.62

};

console.log(zeroFuel(50,25,2))
console.log(zeroFuel(100,50,1))