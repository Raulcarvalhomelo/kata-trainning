function hitOrStay(hole, next) {
    const newArray = hole.reduce((e,i) => typeof e === 'number' ? i+e:i!== 'A' ? 10: 11);
    const numNext = typeof next==="number" ?next : next!=="A"?10:11

    if(newArray>17||newArray===17&&!hole.includes('A'))return ['stay',newArray]
    if([next,...hole].includes('A')){
        for (let i in [next,...hole].filter(e=>e==='A')){ 
            if(newArray+numNext>21)return newArray=newArray-10
        }
        return ['hit',newArray+numNext]
    }
    if (newArray<17&&![...hole,next].includes('A')) return ['hit',newArray+numNext]
}



console.log(hitOrStay([7, 6], 8));
console.log(hitOrStay(['K', 'Q'], 5));
console.log(hitOrStay(['A', 6], 8));
console.log(hitOrStay(['K', 9], 8));
console.log(hitOrStay(['A', 5], 4));


// console.log(hitOrStay(['A', 9, 9]));  // Resultado: 19
// console.log(hitOrStay([7, 9]));       // Resultado: 16
// console.log(hitOrStay(['A', 'T']));   // Resultado: 21
// console.log(hitOrStay(['A', 7]));      // Resultado: 18