


var createCounter = function(init) {
    let inits = init; 
    const initial = init; 

    return {
        increment() {
            return ++inits;
        },
        reset() {
            inits = initial; 
            return inits; 
        },
        decrement() {
            return --inits;
        }
    };
};


const counter = createCounter(10);
console.log(counter.increment()); 
console.log(counter.decrement()); 
console.log(counter.reset());     