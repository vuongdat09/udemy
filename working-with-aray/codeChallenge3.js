const calcAverageHumanAge2 =  function (age){
    const hunmanAges = age.map(age=> (age<=2 ? 2*age : 16+age*4));
    const adults = hunmanAges.filter(age =>age >=18); 
    console.log(hunmanAges);
    console.log(adults);

    const average = adults.reduce((acc,age,i,arr)=>acc+age / arr.length,0);

    return average;
};

const calcAverageHumanAge = ages =>
    ages
        .map(age=> (age<=2 ? 2*age : 16+age*4))
        .filter(age =>age >=18)
        .reduce((acc,age,i,arr)=>acc+age / arr.length,0)

const avg1 = calcAverageHumanAge([5,2,4,1,,15,8,3]);
const avg2 = calcAverageHumanAge([16,6,10,5,6,1,4])

console.log(avg1);
console.log(avg2);