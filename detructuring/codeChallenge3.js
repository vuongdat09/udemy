  const gameEvents  = new Map([
    [17,'GOAL'],
    [36,'Substitution'],
    [47,'GOAL'],
    [61,'Substitution'],
    [64,'Yeallow card'],
    [69,'red card'],
    [70,'Substitution'],
    [72,'Substitution'],
    [76,'GOAL'],
    [80,'GOAL'],
    [92,'Yeallow card']
  ]);


// 1 
const events = [...new Set(gameEvents.values())];
console.log(events);

// // 2
// gameEvents.delete(64)
// // 3
// console.log(`an event happen, on average, everry ${90 / gameEvents.size} minutes`); 
// const time = [...gameEvents.keys()];
// console.log(time);
// console.log(`an event happen, on average, everry ${time / gameEvents.size} minutes`); 

// // 4
// for(const [min,event] of gameEvents){
//     const half = min <=45 ?'FIRST': 'SECOND';
//     console.log(`[${haft}HAFT] ${min}: ${event}`);
// }